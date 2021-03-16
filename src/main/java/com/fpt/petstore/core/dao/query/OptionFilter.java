package com.fpt.petstore.core.dao.query;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.fpt.petstore.util.StringUtil;
import lombok.Getter;
import lombok.Setter;

@JsonInclude(Include.NON_NULL)
public class OptionFilter extends Filter {
  @Getter @Setter
  private String[] options;

  @Getter 
  private String   optionTemplate;
  
  @Getter 
  private String   selectOption;
  
  public OptionFilter() {}
  
  public OptionFilter(String name, FilterType type) {
    super(name, type);
  }
  
  public OptionFilter(String name, FilterType type, String[] option) {
    super(name, type);
    this.options = option;
  }
  
  public OptionFilter(String name, FilterType type, String[] option, boolean required) {
    super(name, type, required);
    this.options = option;
  }
  
  public <T> OptionFilter(String name, FilterType type, T[] option, boolean required) {
    super(name, type, required);
    this.options = new String[option.length];
    for(int i = 0; i < option.length; i++) {
      this.options[i] = option[i].toString();
    }
  }

  @Deprecated
  public <T> OptionFilter(String name, FilterType type, String template, T[] option, boolean required) {
    super(name, type, required);
    this.optionTemplate = template;
    this.options = new String[option.length];
    for(int i = 0; i < option.length; i++) {
      this.options[i] = option[i].toString();
    }
  }

  public <T> OptionFilter(String tableAlias, String name, FilterType type, T[] option, boolean required) {
    super(tableAlias, name, type, required);
    this.options = new String[option.length];
    for(int i = 0; i < option.length; i++) {
      this.options[i] = option[i].toString();
    }
  }

  public void setSelectOption(String opt) { 
    if(StringUtil.isEmpty(opt) || "none".equals(opt)) selectOption = null;
    else this.selectOption = opt;
  }
  
  public Object toSqlFilterClause() { return toSqlFilterClause(selectOption); }
  
  public String optionTemplate() { 
    if(optionTemplate != null) return optionTemplate;
    String field = tableAlias == null ? getName() : tableAlias + "." + getName();
    return field + " = " + ":" +  getName(); 
  }
  
  public <T> OptionFilter withOption(T option) {
    this.selectOption = option.toString();
    return this;
  }
  
  public void mergeValue(OptionFilter other) {
    assertSameFilter(other);
    selectOption = other.getSelectOption();
  }
}