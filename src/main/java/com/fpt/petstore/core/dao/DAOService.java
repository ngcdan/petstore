package com.fpt.petstore.core.dao;

import com.fpt.petstore.core.dao.query.SqlQueryTemplate;
import com.fpt.petstore.core.dao.repository.JDBCDAOSupport;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Table;
import java.util.List;

/**
 * @author linuss
 */

public class DAOService {
	@Autowired
	protected JDBCDAOSupport daoSupport;

	public DAOService() {}

	public SqlSelectView query(SqlQueryTemplate query) {
		return daoSupport.query(query);
	}

	public <T> List<T> query( SqlQueryTemplate query, Class<T> type) {
		return daoSupport.query(query, type);
	}

	public void update( SqlUpdate<?> sqlUpdate) {
		daoSupport.update(sqlUpdate);
	}

	public int count(String table) { return daoSupport.count(table); }

	public int count(Class<?> entity) {
		Table table = entity.getAnnotation(Table.class);
		String tableName = table.name();
		return daoSupport.count(tableName);
	}

	public int count(String tenantId, Class<?> entity) {
		Table table = entity.getAnnotation(Table.class);
		String tableName = table.name();
		return daoSupport.count(tenantId, tableName);
	}
}