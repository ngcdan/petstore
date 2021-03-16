package com.openfreightone.module.core.dao.query;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.Setter;

@JsonInclude(Include.NON_NULL)
public class SimpleFilter extends Filter {
  @Getter @Setter
  private String template;
  
  @Getter @Setter
  private String filterValue;
  
  @Getter @Setter
  private boolean caseSensitive = true;
  
  public SimpleFilter() {}
  
  public SimpleFilter(String name, FilterType type) {
    super(name, type);
  }
  
  public SimpleFilter(String name, FilterType type, String template) {
    super(name, type);
    this.template = template;
  }

  public SimpleFilter(String name, FilterType type, String[] field) {
    super(name, type);
    StringBuilder b = new StringBuilder();
    boolean first = true;
    for(String selField : field) {
      if(!first) b.append(" OR ");
      b.append(selField).append(" LIKE ").append(":").append(name);
      first = false;
    }
    template = b.toString();
  }
  
  public SimpleFilter(String name, FilterType type, String template, boolean required) {
    super(name, type, required);
    this.template = template;
  }
  
  public SimpleFilter with(String template) { 
    this.template = template;
    return this;
  }
  
  public SimpleFilter withCaseSensitive(boolean b) { 
    this.caseSensitive = b;
    return this;
  }
  
  public SimpleFilter withValue(String value) { 
    this.filterValue = value;
    return this;
  }

  public Object toSqlFilterClause() { 
    String value = filterValue;
    if(!caseSensitive) {
      value = value.toLowerCase();
    }
    return toSqlFilterClause(value); 
  }
  
  public SimpleFilter paramClone() {
    SimpleFilter clone = new SimpleFilter(getName(), getType(),(String)null);
    clone.filterValue = filterValue;
    return clone; 
  }
  
  public void mergeValue(SimpleFilter other) {
    assertSameFilter(other);
    filterValue = other.getFilterValue();
  }
}