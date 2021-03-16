package com.fpt.petstore.core.dao.query;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Getter;
import lombok.Setter;

@JsonInclude(Include.NON_NULL)
public class SqlQueryParams {
 
  @Getter @Setter
  Map<String, OptionalParam> optionalParams;
  
  Map<String, SimpleFilter>  filters;
  Map<String, OptionFilter>  optionFilters;
  Map<String, RangeFilter>   rangeFilters;

  @Getter @Setter
  OrderBy           orderBy;
  
  @Getter @Setter
  int               maxReturn = 10000;
  
  public SqlQueryParams() { }
  
  public SqlQueryParams(Map<String, OptionalParam> optionalParams, Map<String, SimpleFilter> filters, 
                        Map<String, OptionFilter> optionFilters,  Map<String, RangeFilter>  rangeFilters, 
                        OrderBy orderBy, int maxReturn) {
    this.optionalParams = optionalParams;
    if(filters != null) {
      for(SimpleFilter sel : filters.values()) {
        add(sel.paramClone());
      }
    }
    if(optionFilters != null) {
      for(OptionFilter sel : optionFilters.values()) {
        add(sel);
      }
    }
    
    if(rangeFilters != null) {
      for(RangeFilter sel : rangeFilters.values()) {
        add(sel);
      }
    }
    this.orderBy   = orderBy;
    this.maxReturn = maxReturn;
  }
  
  public SqlQueryParams addParam(String name, String value) {
    if(optionalParams == null) optionalParams = new HashMap<>();
    optionalParams.put(name, new OptionalParam(name, value));
    return this;
  }
  
  public OptionalParam getParam(String name) {
    if(optionalParams == null) return null;
    return optionalParams.get(name);
  }
  
  public boolean hasParamValue(String name) {
    if(optionalParams == null) return false;
    OptionalParam param = optionalParams.get(name);
    if(param == null) return false;
    return param.hasValue();
  }

  public SqlQueryParams FILTER(Filter ... filter) {
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
  
  
  public SqlQueryParams ORDERBY(String selectedField, String order) {
    this.orderBy = new OrderBy(null, selectedField, order);
    return this;
  }
  
  public SqlQueryParams ORDERBY(String[] fields, String selectedField, String order) {
    this.orderBy = new OrderBy(fields, selectedField, order);
    return this;
  }
  
  public List<SimpleFilter> getFilters() { 
    if(filters == null) return null;
    return new ArrayList<>(filters.values()); 
  }

  public void setFilters(List<SimpleFilter> filters) { 
    if(filters == null) {
      this.filters = null;
    } else {
      this.filters = new LinkedHashMap<>();
      for(SimpleFilter sel : filters) {
        this.filters.put(sel.getName(), sel);
      }
    }
  }

  public List<OptionFilter> getOptionFilters() {
    if(optionFilters == null) return null;
    return new ArrayList<>(optionFilters.values()); 
  }

  public void setOptionFilters(List<OptionFilter> filters) {
    if(filters == null) {
      this.optionFilters = null;
    } else {
      this.optionFilters = new LinkedHashMap<>();
      for(OptionFilter sel : filters) {
        this.optionFilters.put(sel.getName(), sel);
      }
    }
  }
  
  public List<RangeFilter> getRangeFilters() {
    if(rangeFilters == null) return null;
    return new ArrayList<>(rangeFilters.values()); 
  }

  public void setRangeFilters(List<RangeFilter> filters) {
    if(filters == null) {
      this.rangeFilters = null;
    } else {
      this.rangeFilters = new LinkedHashMap<>();
      for(RangeFilter sel : filters) {
        this.rangeFilters.put(sel.getName(), sel);
      }
    }
  }
  
  public SqlQueryParams add(SimpleFilter filter) {
    if(filters == null) filters = new LinkedHashMap<>();
    filters.put(filter.getName(), filter);
    return this;
  }
  
  public SqlQueryParams add(OptionFilter filter) {
    if(optionFilters == null) optionFilters = new LinkedHashMap<>();
    optionFilters.put(filter.getName(), filter);
    return this;
  }
  
  public SqlQueryParams add(RangeFilter filter) {
    if(rangeFilters == null) rangeFilters = new LinkedHashMap<>();
    rangeFilters.put(filter.getName(), filter);
    return this;
  }
}
