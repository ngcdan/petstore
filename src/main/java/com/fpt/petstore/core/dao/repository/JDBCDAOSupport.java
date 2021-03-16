package com.fpt.petstore.core.dao.repository;


import com.fpt.petstore.core.dao.SqlResultSetExtractor;
import com.fpt.petstore.core.dao.SqlSelectView;
import com.fpt.petstore.core.dao.SqlUpdate;
import com.fpt.petstore.core.dao.query.OptionFilter;
import com.fpt.petstore.core.dao.query.RangeFilter;
import com.fpt.petstore.core.dao.query.SimpleFilter;
import com.fpt.petstore.core.dao.query.SqlQueryTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import javax.persistence.Table;
import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class JDBCDAOSupport extends org.springframework.jdbc.core.support.JdbcDaoSupport {
  static final Logger logger = LoggerFactory.getLogger(JDBCDAOSupport.class);
  
  @Qualifier("transactionManager")
  @Autowired 
  private PlatformTransactionManager platformTransactionManager;

  private NamedParameterJdbcTemplate namedJdbcTemplate;
  
  public JDBCDAOSupport(@Qualifier("datasource") DataSource dataSource) {
    setDataSource(dataSource);
    namedJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
  }
  
  private Map<String, Object> createParameters(SqlQueryTemplate query) {
    Map<String, Object> parameters = new HashMap<String, Object>();

    SqlQueryTemplate.InFilter inFilter = query.getInFilter();
    if(inFilter != null && inFilter.getValues() != null) {
      parameters.put(inFilter.getName(), inFilter.getValues());
    }
    
    List<RangeFilter> rangeFilters = query.getRangeFilters();
    if(rangeFilters != null) {
      for(RangeFilter sel : query.getRangeFilters()) {
        if(!sel.isApplied()) continue;
        Object fromObj = sel.toSqlFromFilterClause();
        Object toObj = sel.toSqlToFilterClause();
        if(fromObj != null) parameters.put("from_" + sel.getName(), fromObj);
        if(toObj != null)   parameters.put("to_" + sel.getName(), toObj);
      }
    }
    
    List<OptionFilter> optionFilters = query.getOptionFilters();
    if(optionFilters != null) {
      for(OptionFilter sel : query.getOptionFilters()) {
        Object value = sel.toSqlFilterClause();
        if(value == null) continue;
        parameters.put(sel.getName(), value);
      }
    }
    
    List<SimpleFilter> filters = query.getFilters();
    if(filters != null) {
      for(SimpleFilter sel : filters) {
        Object filterValue = sel.toSqlFilterClause();
        if(filterValue == null) continue;
        parameters.put(sel.getName(), filterValue);
      }
    }
    return parameters ;
  }
  
  public SqlSelectView query(SqlQueryTemplate query) {
    Map<String, Object> parameters = createParameters(query);
    String sql = query.toSql();
    return namedJdbcTemplate.query(sql, parameters, new SqlResultSetExtractor(query.selectFields()));
  }
  
  public <T> List<T> query(SqlQueryTemplate query, Class<T> type) {
    Map<String, Object> parameters = createParameters(query);
    String sql = query.toSql();
    return namedJdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper<>(type));
  }

  public <T> List<T> query(SqlQueryTemplate query, RowMapper<T> mapper) {
    Map<String, Object> parameters = createParameters(query);
    String sql = query.toSql();
    return namedJdbcTemplate.query(sql, parameters, mapper);
  }

  public void update(SqlUpdate<?> sqlUpdate) {
    if(sqlUpdate.getEntities().size() == 0) return;
    String sql = sqlUpdate.toUpdateSql();
    List<SqlUpdate.UpdateEntity> updateEntities = sqlUpdate.getEntities();
    Map<String, Object>[] batchParams = new Map[sqlUpdate.getEntities().size()];
    for(int i = 0; i < updateEntities.size(); i++) {
      SqlUpdate.UpdateEntity sel = updateEntities.get(i);
      batchParams[i] = new HashMap<>();
      for(SqlUpdate.Field field : sel.getFields()) {
        batchParams[i].put(field.getName(), field.getValue());
      }
      batchParams[i].put("id", sel.getId());
    }
    DefaultTransactionDefinition paramTransactionDefinition = new DefaultTransactionDefinition();
    TransactionStatus status = platformTransactionManager.getTransaction(paramTransactionDefinition );
    try {
      int[] ret = namedJdbcTemplate.batchUpdate(sql, batchParams);
      platformTransactionManager.commit(status);
    } catch (Exception e) {
      platformTransactionManager.rollback(status);
      e.printStackTrace();
    }
  }
  
  public SqlSelectView sqlSelect(String query) {
    JdbcTemplate jdbcTmpl = getJdbcTemplate();
    return jdbcTmpl.query(query, new SqlResultSetExtractor());
  }
  
  public SqlSelectView sqlSelect(String query, int maxReturn) {
    JdbcTemplate jdbcTmpl = getJdbcTemplate();
    return jdbcTmpl.query(query, new SqlResultSetExtractor());
  }
  
  public SqlSelectView queryTables() {
    String query = "SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_type = 'TABLE'";
    JdbcTemplate jdbcTmpl = getJdbcTemplate();
    return jdbcTmpl.query(query, new SqlResultSetExtractor());
  }
  
  public int count(Class<?> entity) { 
    Table table = entity.getAnnotation(Table.class);
    String tableName = table.name();
    return count(tableName); 
  }
  
  public int count(String tenantId, Class<?> entity) { 
    Table table = entity.getAnnotation(Table.class);
    String tableName = table.name();
    return count(tenantId, tableName); 
  }
  
  public int count(String table) {
    JdbcTemplate tmpl = getJdbcTemplate();
    int count = tmpl.queryForObject("SELECT count(*) FROM " + table, Integer.class);
    return count;
  }
  
  public int deleteAll(String table) {
    JdbcTemplate tmpl = getJdbcTemplate();
    int count = tmpl.update("DELETE FROM " + table);
    return count;
  }
  
  public int deleteAll(Class<?> entity) {
    JdbcTemplate tmpl = getJdbcTemplate();
    Table table = entity.getAnnotation(Table.class);
    String tableName = table.name();
    int count = tmpl.update("DELETE FROM " + tableName);
    return count;
  }
  
  public int count(String tenantId, String table) {
    JdbcTemplate tmpl = getJdbcTemplate();
    String sql  = "SELECT count(*) FROM " + table + " WHERE tenantId = '" + tenantId + "'";
    int count = tmpl.queryForObject(sql, Integer.class);
    return count;
  }
}