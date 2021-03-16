package com.openfreightone.module.core.dao.query;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.Setter;
import com.openfreightone.util.text.StringUtil;

@JsonInclude(Include.NON_NULL)
public class RangeFilter extends Filter {
  @Getter @Setter
  private String     fromValue;
  
  @Getter @Setter
  private String     toValue;
  
  public RangeFilter() {}
  
  public RangeFilter(String name, FilterType type) {
    super(name, type);
  }

  public RangeFilter(String tableAlias, String name, FilterType type) {
    super(tableAlias, name, type);
  }
  
  public RangeFilter(String name, FilterType type,  boolean required) {
    super(name, type, required);
  }

  public RangeFilter(String tableAlias, String name, FilterType type,  boolean required) {
    super(tableAlias, name, type, required);
  }
  
  public RangeFilter withFrom(String from) {
    this.fromValue = from;
    return this;
  }

  public RangeFilter withTo(String to) {
    this.toValue = to;
    return this;
  }
  
  public RangeFilter within(String from, String to) {
    this.fromValue = from;
    this.toValue = to;
    return this;
  }
  
  public Object toSqlFromFilterClause() { return this.toSqlFilterClause(fromValue) ;}
  
  
  public Object toSqlToFilterClause() { return toSqlFilterClause(toValue) ;}
  
  public String fromTemplate() { 
    String field = tableAlias == null ? getName() : tableAlias + "." + getName();
    return field + " >= " + ":from_" +  getName(); 
  }
  
  public String toTemplate() { 
    String field = tableAlias == null ? getName() : tableAlias + "." + getName();
    return field + " <= " + ":to_" +  getName(); 
  }
  
  @JsonIgnore
  public boolean isApplied() { return !StringUtil.isEmpty(fromValue) || !StringUtil.isEmpty(toValue); }
  
  public void mergeValue(RangeFilter other) {
    assertSameFilter(other);
    fromValue = other.getFromValue();
    toValue   = other.getToValue();
  }
}