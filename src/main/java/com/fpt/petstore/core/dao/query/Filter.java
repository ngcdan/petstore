package com.fpt.petstore.core.dao.query;

import com.fpt.petstore.util.DateUtil;
import com.fpt.petstore.util.StringUtil;
import lombok.Getter;
import lombok.Setter;

abstract public class Filter {
  static public enum FilterType {STRING, STRING_LIKE, DATE, INTEGER, LONG, DOUBLE }

  @Getter @Setter
  protected String     tableAlias;

  @Getter @Setter
  private String     name;

  @Getter @Setter
  private FilterType type;

  @Getter @Setter
  private boolean    required = true;


  public Filter() {}

  public Filter(String name, FilterType type) {
    this.name = name;
    this.type = type;
  }

  public Filter(String tableAlias, String name, FilterType type) {
    this.tableAlias = tableAlias;
    this.name = name;
    this.type = type;
  }

  public Filter(String name, FilterType type, boolean required) {
    this(name, type);
    this.required = required;
  }

  public Filter(String tableAlias, String name, FilterType type, boolean required) {
    this(tableAlias, name, type);
    this.required = required;
  }

  protected Object toSqlFilterClause(String value) {
    if(StringUtil.isEmpty(value)) return null;
    if(FilterType.STRING_LIKE == type) {
      if(value.indexOf('*') >= 0) {
        return value.replace('*', '%');
      } else {
        return value + '%';
      }
    } else if(FilterType.DATE == type) {
      return DateUtil.parseCompactDateTime(value);
    }
    return value;
  }

  protected void assertSameFilter(Filter other) {
    if(!name.equals(other.getName())) {
      throw new IllegalArgumentException(name + " is not the same with " + other.getName());
    }
  }
}