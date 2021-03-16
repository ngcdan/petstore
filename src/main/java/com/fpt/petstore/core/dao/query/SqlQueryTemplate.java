package com.fpt.petstore.core.dao.query;

import java.beans.PropertyDescriptor;
import java.beans.Transient;
import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fpt.petstore.util.BeanInspector;
import com.fpt.petstore.util.StringUtil;
import lombok.Getter;
import lombok.Setter;

@JsonInclude(Include.NON_NULL)
public class SqlQueryTemplate extends SqlQueryParams {
  @JsonInclude(Include.NON_NULL)
  static public class EntityTable {
    
    @Getter @Setter
    String table;
   
    @Getter @Setter
    Class<?> entity ;
    
    @Getter @Setter
    String alias;
 
    public <T>  EntityTable(Class<T> entity, String alias) {
      this.entity = entity;
      this.table = entity.getDeclaredAnnotation(Table.class).name();
      this.alias = alias;
    }
    
    public EntityTable(String tableName, String alias) {
      this.table = tableName;
      this.alias = alias;
    }
    
    public Field[] createSelectFields() {
      List<Field> fields = new ArrayList<>();
      BeanInspector<?> inspector = BeanInspector.get(entity);
      for(PropertyDescriptor sel : inspector.getPropertyDescriptors()) {
        Annotation transientAnnotation = sel.getReadMethod().getDeclaredAnnotation(Transient.class);
        if(transientAnnotation != null) continue;
        if(!inspector.isSqlType(sel)) continue;
        Field field = new Field(alias + "." + sel.getName(), sel.getName());
        fields.add(field);
      }
      return fields.toArray(new Field[fields.size()]);
    }
  }

  @JsonInclude(Include.NON_NULL)
  static public class Field {
    @Getter @Setter
    String field;
    
    @Getter @Setter
    String alias;
 
    public Field() {}
    
    public Field(String name) {
      this.field = name;
      this.alias = name;
    }

    public Field(String name, String alias) {
      this.field = name;
      this.alias = alias;
    }
  }

  @JsonInclude(Include.NON_NULL)
  static public class CustomField {
    @Getter @Setter
    String custom;
    
    public CustomField() { }
    
    public CustomField(String custom) {
      this.custom = custom;
    }
  }

  static public class Join {
    String type;
    String table;
    String alias;
    String condition;
    
    public <T>  Join(String type, Class<T> entity, String alias) {
      this.type = type;
      this.table = entity.getDeclaredAnnotation(Table.class).name();
      this.alias = alias;
    }

    public <T>  Join(String type, String table, String alias) {
      this.type  = type;
      this.table = table;
      this.alias = alias;
    }

    public <T>  Join(String type, String table) {
      this.type  = type;
      this.table = table;
    }
    
    public Join ON(String condition) {
      this.condition = condition ;
      return this;
    }
    
    public String toString() {
      if(alias == null) {
        return type + " " + table + " ON " + condition ;
      }
      return type + " " + table + " AS " + alias + " ON " + condition ;
    }
  }
  
  static public class InFilter {
    @Getter @Setter
    private String       name;
    
    @Getter @Setter
    private List<String> values;

    public InFilter() {}
    
    public InFilter(String name, List<String> values) { 
      this.name = name; 
      this.values = values;
    }
    
    public InFilter withValues(List<String> values) {
      this.values = values;
      return this;
    }
  }
  
  
  @Getter @Setter
  private String                    module = "default";
  
  @Getter @Setter
  private String                    name;
  
  @Getter @Setter
  private String                    description ;
  
  @Getter @Setter
  private Field[]                   selectFields;

  @Getter @Setter
  private CustomField[]             customSelectFields;
  
  @Getter @Setter
  private List<EntityTable>         from;
  
  @Getter @Setter
  private List<Join>           outerJoin;
  
  @Getter @Setter
  private InFilter                  inFilter;
  
  @Getter @Setter
  private List<String>              joins;
  
  @Getter @Setter
  private String[]                  groupBy;
  
  public SqlQueryTemplate() { }
  
  public SqlQueryTemplate(String name) { 
    this.name        = name; 
  }
  
  public SqlQueryTemplate(String module, String name, String desc) { 
    this.module      = module;
    this.name        = name; 
    this.description = desc;
  }
  
  public SqlQueryParams getSqlQueryParams() {
    return new SqlQueryParams(optionalParams, filters, optionFilters, rangeFilters, orderBy, maxReturn);
  }
  
  public SimpleFilter filter(String name) { return filters.get(name); }
  
  public RangeFilter range(String name) { return rangeFilters.get(name); }
  
  public OptionFilter option(String name) { return optionFilters.get(name); }
  
  public Filter findFilter(String name) {
    Filter filter = filters.get(name);
    if(filter != null) return filter;
    filter = rangeFilters.get(name);
    if(filter != null) return filter;
    filter = optionFilters.get(name);
    return filter;
  }
  
  public String[] selectFields() {
    List<String> columns = new ArrayList<>();
    if(selectFields != null) {
      for(int i = 0; i < selectFields.length; i++) {
        String alias = selectFields[i].getAlias();
        if(alias == null) alias = selectFields[i].getField();
        columns.add(alias);
      }
    }
    if(customSelectFields != null) {
      for(int i = 0; i < customSelectFields.length; i++) {
        String custom = customSelectFields[i].getCustom();
        columns.add(custom);
      }
    }
    return columns.toArray(new String[columns.size()]);
  }
  
  public SqlQueryTemplate ADD_PARAM(String name, String value) {
    addParam(name, value);
    return this;
  }

  public SqlQueryTemplate SELECT() {
    this.selectFields = null;
    return this;
  }

  public SqlQueryTemplate SELECT_FROM(EntityTable table) {
    if(from == null) from = new ArrayList<>();
    from.add(table);
    selectFields = table.createSelectFields();
    return this;
  }
  
  public SqlQueryTemplate SELECT(Field ... fields) {
    if(selectFields == null) {
      selectFields = fields;
    } else {
      List<Field> holder = new ArrayList<>();
      for(Field sel : selectFields) holder.add(sel);
      for(Field sel : fields) holder.add(sel);
      selectFields = holder.toArray(new Field[holder.size()]);
    }
    return this;
  }

  public SqlQueryTemplate SELECT(CustomField ... fields) {
    this.customSelectFields = fields;
    return this;
  }
  
  public SqlQueryTemplate SELECT(String ... fields) {
    this.selectFields = new Field[fields.length];
    for(int i = 0; i < selectFields.length; i++) {
      selectFields[i] = new Field(fields[i]);
    }
    return this;
  }

  public SqlQueryTemplate FROM(EntityTable ... tables) {
    if(from == null) from = new ArrayList<>();
    for(EntityTable sel : tables) from.add(sel);
    return this;
  }

  public SqlQueryTemplate JOIN(Join join) {
    if(this.outerJoin == null) this.outerJoin = new ArrayList<>();
    this.outerJoin.add(join);
    return this;
  }
  
  public SqlQueryTemplate FILTER(String ... join) {
    if(joins == null) joins = new ArrayList<>();
    for(String sel : join) {
      if(sel == null) continue;
      joins.add(sel);
    }
    return this;
  }
  
  public SqlQueryTemplate IN(InFilter filter) {
    inFilter = filter;
    return this;
  }
  
  public SqlQueryTemplate FILTER(Filter ... filter) {
    for(Filter sel : filter) {
      if(sel instanceof RangeFilter) {
        add((RangeFilter)sel);
      } else if(sel instanceof OptionFilter) {
        add((OptionFilter)sel);
      } else {
        add((SimpleFilter)sel);
      }
    }
    return this;
  }
  
  public SqlQueryTemplate GROUPBY(String ... field) {
    this.groupBy = field;
    return this;
  }

  public SqlQueryTemplate ORDERBY(String ... field) {
    this.orderBy = new OrderBy(field, field);
    return this;
  }
  
  public SqlQueryTemplate ORDERBY(String[] fields, String selectedField, String order) {
    this.orderBy = new OrderBy(fields, selectedField, order);
    return this;
  }
  
  public SqlQueryTemplate mergeValue(SqlQueryParams params) {
    if(params.getFilters() != null) {
      for(SimpleFilter sel : params.getFilters()) {
        filters.get(sel.getName()).mergeValue(sel);
      }
    }
    
    if(params.getRangeFilters() != null) {
      for(RangeFilter sel : params.getRangeFilters()) {
        rangeFilters.get(sel.getName()).mergeValue(sel);
      }
    }
    
    if(params.getOptionFilters() != null) {
      for(OptionFilter sel : params.getOptionFilters()) {
        optionFilters.get(sel.getName()).mergeValue(sel);
      }
    }
    if(params.getOrderBy() != null) {
      orderBy.mergeValue(params.getOrderBy());
    }
    maxReturn = params.getMaxReturn();
    return this;
  }

  public String toSql() {
    StringBuilder b = new StringBuilder();
    b.append("SELECT ");
    b.append("\n");
    if((selectFields == null || selectFields.length == 0) && (customSelectFields == null || customSelectFields.length == 0)) {
      b.append(" * ");
    } else {
      boolean firstField = true;
      if(customSelectFields != null) {
        for(int i = 0; i < customSelectFields.length; i++) {
          if(!firstField) b.append(",\n");
          b.append("  ").append(customSelectFields[i].custom);
          firstField = false;
        }
      }
      if(selectFields != null) {
        for(int i = 0; i < selectFields.length; i++) {
          if(!firstField) b.append(",\n");
          String alias = selectFields[i].getAlias();
          if(alias == null) alias = selectFields[i].getField();
          b.append("  ").append(selectFields[i].field).append(" AS ").append(alias);
          firstField = false;
        }
      }
    }

    if(from != null) {
      b.append("\n");
      b.append("FROM");
      for(int i = 0; i < from.size(); i++) {
        if(i > 0) b.append(", ");
        else b.append(" ");
        EntityTable table = from.get(i);
        b.append(table.table);
        if(table.alias != null) {
          b.append(" as ").append(table.alias);
        }
      }
    }
    if(outerJoin != null) {
      for(Join selOuterJoin : this.outerJoin) {
        b.append("\n");
        b.append(selOuterJoin);
      }
    }
    String filterClauses = buildClauses();
    if(filterClauses != null) {
      b.append("\n");
      b.append("WHERE\n").
        append(filterClauses);
    }

    if(orderBy != null && orderBy.selectFields != null && orderBy.selectFields.length > 0) {
      b.append("\n");
      b.append("ORDER BY ");
      String[] orderByField = orderBy.selectFields;
      for(int i = 0; i < orderByField.length; i++) {
        if(i > 0) b.append(", ");
        else b.append(" ");
        b.append(orderByField[i]);
      }
      String order = orderBy.getSort();
      if(order != null) b.append(" ").append(orderBy.getSort());
    }

    if(groupBy != null) {
      b.append("\n");
      b.append("GROUP BY ");
      for(int i = 0; i < groupBy.length; i++) {
        if(i > 0) b.append(", ");
        else b.append(" ");
        b.append(groupBy[i]);
      }
    }

    if(maxReturn > 0) {
      b.append(" LIMIT ").append(maxReturn);
    }
    return  b.toString(); 
  }

  String buildClauses() {
    StringBuilder b = new StringBuilder();
    
    if(joins != null && joins.size() > 0) {
      for(String selJoin : joins) {
        if(b.length() > 0 ) b.append(" AND \n");
        b.append("  (").append(selJoin).append(")");
      }
    }
    if(inFilter != null && inFilter.getValues() != null) {
      if(b.length() > 0 ) b.append(" AND \n");
      b.append(inFilter.getName()).append( " IN (").append(":").append(inFilter.getName()).append(")");
    }
    String filterClauses = buildFilterClauses();
    if(filterClauses != null) {
      if(b.length() > 0 ) b.append(" AND \n");
      b.append("  (").append(filterClauses).append(")");
    }
    if(b.length() == 0) return null;
    return b.toString();
  }
  
  String buildFilterClauses() {
    StringBuilder b = new StringBuilder();
    if(rangeFilters != null && rangeFilters.size() > 0) {
      for(RangeFilter sel : rangeFilters.values()) {
        String fromValue = sel.getFromValue();
        String toValue = sel.getToValue();
        if(StringUtil.isEmpty(fromValue) && StringUtil.isEmpty(toValue)) continue;
        if(b.length() > 0 ) {
          if(sel.isRequired()) b.append(" AND \n");
          else b.append(" OR \n");
        }
        b.append("(");
        if(!StringUtil.isEmpty(fromValue)) {
          b.append(sel.fromTemplate());
        }
        
        if(!StringUtil.isEmpty(toValue)) {
          if(!StringUtil.isEmpty(fromValue)) b.append(" AND ");
          b.append(sel.toTemplate());
        }
        b.append(")");
      }
    }
    
    if(optionFilters != null && optionFilters.size() > 0) {
      for(OptionFilter sel : optionFilters.values()) {
        String selOpt = sel.getSelectOption();
        if(StringUtil.isEmpty(selOpt)) continue;
        if(b.length() > 0 ) {
          if(sel.isRequired()) b.append(" AND \n");
          else b.append(" OR \n");
        }
        b.append("  (").append(sel.optionTemplate()).append(")");
      }
    }
    
    if(filters != null && filters.size() > 0) {
      for(SimpleFilter sel : filters.values()) {
        if(StringUtil.isEmpty(sel.getFilterValue())) continue;
        if(b.length() > 0 ) {
          if(sel.isRequired()) b.append(" AND \n");
          else b.append(" OR \n");
        }
        b.append("  (").append(sel.getTemplate()).append(")");
      }
    }
    if(b.length() == 0) return null;
    return b.toString();
  }
  
}