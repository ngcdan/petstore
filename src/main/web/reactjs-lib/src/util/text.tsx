import moment from 'moment';

const COMPACT_DATETIME_FORMAT       = "DD/MM/YYYY@HH:mm:ssZ";
const LOCAL_COMPACT_DATETIME_FORMAT = "DD/MM/YYYY@HH:mm:ss";
const LOCAL_COMPACT_DATE_FORMAT     = "DD/MM/YYYY";

export function ftDate(val: Date) : string {
  if(val === undefined || val == null) return "";
  return moment(val).format('dd/mm/yyyy');
}

function formatNumber(val: number, precision: number) {
  var token = val.toFixed(precision).split('.');
  token[0] = token[0].replace(/\d(?=(\d{3})+$)/g, '$&,');
  return token.join('.');
}

export const util= {
  isIn: function(val: string, array: Array<string>) {
    if(!val) return false;
    if(!array) return false;
    for(let i = 0; i < array.length; i++) {
      if(val == array[i]) return true;
    }
    return false;
  },
}

export const formater = {
  text: {
    arrayToString(array: Array<any>) {
      let s: string = '';
      if(array) {
        for(let i = 0; i < array.length; i++) {
          if(i > 0) s += ", ";
          s += array[i];
        }
      }
      return s;
    }
  },

  compactDateTime: function(val: string) {
    if(!val) return "";
    return moment(val, COMPACT_DATETIME_FORMAT).format(LOCAL_COMPACT_DATETIME_FORMAT);
  },

  compactDate: function(val: string) {
    if(!val) return "";
    return moment(val, COMPACT_DATETIME_FORMAT).format(LOCAL_COMPACT_DATE_FORMAT);
  },

  date: function(val: Date) {
    if(val === undefined || val == null) return "";
    return moment(val).format('DD/MM/YYYY');
  },

  dateTime: function(val: Date) {
    if(val === undefined || val == null) return "";
    return moment(val).format('DD/MM/YYYY HH:mm:ss');
  },

  shortDateTime: function(val: Date) {
    if(val === undefined || val == null) return "";
    return moment(val).format('DD/MM/YY HH:mm');
  },

  yyyymmddTime: function(val: Date) {
    if(val === undefined || val == null) return "";
    return moment(val).format('DD/MM/YYYY HH:mm:ss');
  },

  yyyymmddHHmmss: function(val: Date) {
    if(val === undefined || val == null) return "";
    return moment(val).format('YYYYMMDDHHmmss');
  },

  number: function(val: number) {
    if(Number.isInteger(val)) return formatNumber(val, 0);
    return formatNumber(val, 2);
  },

  idNumber: function(val: number) { return val.toFixed(0); },

  integer: function(val: number) { return formatNumber(val, 0); },

  currency: function(val: number) {
    if(Number.isInteger(val)) return formatNumber(val, 0) + ".00VND";
    return formatNumber(val, 2) + 'VND';
  },

  percent: function(val: number) {
    if(val * 100 % 100 > 0) {
      return Number(val).toLocaleString(undefined,{ style: 'percent', minimumFractionDigits: 2});
    }
    return Number(val).toLocaleString(undefined,{style: 'percent', minimumFractionDigits: 0});
  }
}
