package com.fpt.petstore.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


public class DateUtil {
  final static public String LOCAL_DATETIME_FORMAT   = "dd/MM/yyyy@HH:mm:ss";  // sample 31/07/2020@11:26:07
  final static public String COMPACT_DATETIME_FORMAT = "dd/MM/yyyy@HH:mm:ssZ";
  final static public String COMPACT_DATE_FORMAT = "dd/MM/yyyy";// sample 31/07/2020

  private static final ThreadLocal<SimpleDateFormat> COMPACT_DATETIME = new ThreadLocal<SimpleDateFormat>() {
    @Override
    protected SimpleDateFormat initialValue() {
      return new SimpleDateFormat(LOCAL_DATETIME_FORMAT);
    }
  };
  
  final static public SimpleDateFormat TIME_WITHOUT_SECOND        = new SimpleDateFormat("HH:mm");
  final static public SimpleDateFormat TIME                       = new SimpleDateFormat("HH:mm:ss");
  final static public SimpleDateFormat COMPACT_DATE               = new SimpleDateFormat("dd/MM/yyyy");
  final static public SimpleDateFormat COMPACT_DATE_ID            = new SimpleDateFormat("yyyyMMdd");

  final static public SimpleDateFormat COMPACT_DATETIME_ID       = new SimpleDateFormat("yyyyMMddHHmmss");
  final static public SimpleDateFormat COMPACT_MICRO_DATETIME_ID = new SimpleDateFormat("yyyyMMddHHmmssSSS");
  final static public SimpleDateFormat COMPACT_MICRO_TIME_ID = new SimpleDateFormat("HHmmssSSS");

  static public String asCompactDate(long time) { return COMPACT_DATE.format(new Date(time)) ; }
  static public String asCompactDateTimeId(Date time) { return COMPACT_MICRO_TIME_ID.format(time) ; }

  static public String asCompactDate(Date time) {
    if(time == null) return null;
    return COMPACT_DATE.format(time) ;
  }
  
  static public Date parseCompactDate(String exp) {
    try {
      return COMPACT_DATE.parse(exp) ;
    } catch (ParseException e) {
      throw new RuntimeException(exp);
    }
  }

  static public Date parseCompactDateTime(String exp) {
    try {
      if(StringUtil.isEmpty(exp)) return null;
      return COMPACT_DATETIME.get().parse(exp) ;
    } catch (ParseException e) {
      throw new RuntimeException(exp);
    }
  }

  static public String asCompactDateTime(Date date) {
    if(date == null) return null;
    return COMPACT_DATETIME.get().format(date) ;
  }

  public static boolean isCompactDateFormat(String exp) {
    if(StringUtil.isEmpty(exp)) return false;
    try {
      COMPACT_DATE.parse(exp);
      return true;
    } catch (ParseException e) {
      return false;
    } 
  }
}
