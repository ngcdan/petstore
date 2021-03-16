package com.openfreightone.module.core.dao.query;

import org.hsqldb.lib.StringUtil;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Tuan Nguyen
 *         tuan.nguyen@ahaysoft.com
 *
 */
@NoArgsConstructor
@Getter @Setter
public class OptionalParam {
  String name;
  String value;
  
  public OptionalParam(String name, String value) {
    this.name = name;
    this.value = value;
  }
  
  @JsonIgnore
  public boolean hasValue() { return !StringUtil.isEmpty(value); }
  
  public String format(String template) {
    if(value == null) return null;
    return String.format(template, value);
  }
}
