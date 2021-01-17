import moment from 'moment';
import React__default, { Component, createElement } from 'react';
import ReactDOM from 'react-dom';
import * as reactstrap from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Dropdown, UncontrolledPopover, Popover, PopoverHeader, PopoverBody, Navbar, Nav, InputGroup, InputGroupAddon, InputGroupText, Spinner, Badge, NavbarBrand, NavItem, NavLink } from 'reactstrap';
export { reactstrap };
import 'bootstrap/dist/css/bootstrap.css';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { List, AutoSizer, Column, Table, Grid, ScrollSync } from 'react-virtualized';
import 'react-virtualized/styles.css';
import * as reactBeautifulDnd from 'react-beautiful-dnd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
export { reactBeautifulDnd as dnd };

var COMPACT_DATETIME_FORMAT = "DD/MM/YYYY@HH:mm:ssZ";
var TIME_ID_FORMAT = "DDMMYYYYHHmmss";
var DATE_ID_FORMAT = "DDMMYYYY";
var IDTracker = /** @class */ (function () {
    function IDTracker() {
    }
    IDTracker.next = function () { return ++this.idTracker; };
    IDTracker.idTracker = 0;
    return IDTracker;
}());
var TimeUtil = /** @class */ (function () {
    function TimeUtil() {
    }
    //TODO: rename getCompactDateTimeFormat()
    TimeUtil.getCompactDateTimeFormat = function () { return COMPACT_DATETIME_FORMAT; };
    TimeUtil.javaCompactDateTimeFormat = function (d) {
        var currDateTime = moment(d).format(COMPACT_DATETIME_FORMAT);
        //remove timezone colon
        currDateTime = currDateTime.slice(0, currDateTime.length - 3) + currDateTime.slice(currDateTime.length - 2);
        return currDateTime;
    };
    TimeUtil.createToday = function (time, roll) {
        if (roll === void 0) { roll = 0; }
        var today = new Date();
        if (time === 'begin') {
            today.setHours(0, 0, 0, 0);
            today.setDate(today.getDate() + roll);
        }
        else if (time === 'end') {
            today.setHours(23, 59, 59, 999);
            today.setDate(today.getDate() + roll);
        }
        return today;
    };
    TimeUtil.toDateIdFormat = function (date) {
        var dateTime = moment(date).format(DATE_ID_FORMAT);
        //dateTime = dateTime.slice(0, dateTime.length - 3) + dateTime.slice(dateTime.length - 2);
        return dateTime;
    };
    TimeUtil.toDateTimeIdFormat = function (date) {
        var dateTime = moment(date).format(TIME_ID_FORMAT);
        //dateTime = dateTime.slice(0, dateTime.length - 3) + dateTime.slice(dateTime.length - 2);
        return dateTime;
    };
    TimeUtil.toCompactDateTimeFormat = function (date) {
        var dateTime = moment(date).format(COMPACT_DATETIME_FORMAT);
        //remove timezone colon
        dateTime = dateTime.slice(0, dateTime.length - 3) + dateTime.slice(dateTime.length - 2);
        return dateTime;
    };
    TimeUtil.compareDate = function (datetime1, datetime2, _format) {
        if (!datetime1 || !datetime1)
            return false;
        var m1 = moment(datetime1, COMPACT_DATETIME_FORMAT);
        var m2 = moment(datetime2, COMPACT_DATETIME_FORMAT);
        return m1.diff(m2, 'days') > 0;
    };
    return TimeUtil;
}());
var ObjUtil = /** @class */ (function () {
    function ObjUtil() {
    }
    ObjUtil.isPrimitive = function (obj) {
        if (typeof obj === 'string' || obj instanceof String)
            return true;
        else if (typeof obj === 'number')
            return true;
        //todo: boolean ,date object type
        return false;
    };
    ObjUtil.isArray = function (obj) {
        if (obj.constructor === Array)
            return true;
        return false;
    };
    ObjUtil.recordHasExpression = function (record, exp) {
        if (!record)
            return false;
        if (this.isPrimitive(record)) {
            var string = record + '';
            return string.indexOf(exp) >= 0;
        }
        else if (this.isArray(record)) {
            var array = record;
            for (var i = 0; i < array.length; i++) {
                var value = array[i];
                if (this.recordHasExpression(value, exp))
                    return true;
            }
        }
        else {
            for (var prop in record) {
                var val = record[prop];
                if (!val)
                    continue;
                if (this.recordHasExpression(val, exp))
                    return true;
            }
        }
        return false;
    };
    ObjUtil.copyFields = function (dest, src) {
        for (var prop in dest)
            delete dest[prop];
        for (var prop in src)
            dest[prop] = src[prop];
    };
    ObjUtil.replaceProperties = function (dest, src) {
        for (var prop in dest)
            delete dest[prop];
        for (var prop in src)
            dest[prop] = src[prop];
    };
    ObjUtil.hasRecordWith = function (records, field, value) {
        for (var i = 0; i < records.length; i++) {
            var record = records[i];
            if (!record[field])
                continue;
            if (value == record[field])
                return true;
        }
        return false;
    };
    return ObjUtil;
}());
var KeyCode = {
    ADD: 187, SUB_ADD: 107,
    SUBTRACT: 189, SUB_SUBTRACT: 109,
    DELETE: 46, SUB_DELETE: 110,
    F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118,
    C: 67, V: 86,
    ARROW_UP: 38, ARROW_DOWN: 40, ESC: 27, ENTER: 13
};
var system = {};

var common = /*#__PURE__*/Object.freeze({
  IDTracker: IDTracker,
  TimeUtil: TimeUtil,
  ObjUtil: ObjUtil,
  KeyCode: KeyCode,
  system: system
});

var COMPACT_DATETIME_FORMAT$1 = "DD/MM/YYYY@HH:mm:ssZ";
var LOCAL_COMPACT_DATETIME_FORMAT = "DD/MM/YYYY@HH:mm:ss";
var LOCAL_COMPACT_DATE_FORMAT = "DD/MM/YYYY";
function ftDate(val) {
    if (val === undefined || val == null)
        return "";
    return moment(val).format('dd/mm/yyyy');
}
function formatNumber(val, precision) {
    var token = val.toFixed(precision).split('.');
    token[0] = token[0].replace(/\d(?=(\d{3})+$)/g, '$&,');
    return token.join('.');
}
var util = {
    isIn: function (val, array) {
        if (!val)
            return false;
        if (!array)
            return false;
        for (var i = 0; i < array.length; i++) {
            if (val == array[i])
                return true;
        }
        return false;
    },
};
var formater = {
    text: {
        arrayToString: function (array) {
            var s = '';
            if (array) {
                for (var i = 0; i < array.length; i++) {
                    if (i > 0)
                        s += ", ";
                    s += array[i];
                }
            }
            return s;
        }
    },
    compactDateTime: function (val) {
        if (!val)
            return "";
        return moment(val, COMPACT_DATETIME_FORMAT$1).format(LOCAL_COMPACT_DATETIME_FORMAT);
    },
    compactDate: function (val) {
        if (!val)
            return "";
        return moment(val, COMPACT_DATETIME_FORMAT$1).format(LOCAL_COMPACT_DATE_FORMAT);
    },
    date: function (val) {
        if (val === undefined || val == null)
            return "";
        return moment(val).format('DD/MM/YYYY');
    },
    dateTime: function (val) {
        if (val === undefined || val == null)
            return "";
        return moment(val).format('DD/MM/YYYY HH:mm:ss');
    },
    shortDateTime: function (val) {
        if (val === undefined || val == null)
            return "";
        return moment(val).format('DD/MM/YY HH:mm');
    },
    yyyymmddTime: function (val) {
        if (val === undefined || val == null)
            return "";
        return moment(val).format('DD/MM/YYYY HH:mm:ss');
    },
    yyyymmddHHmmss: function (val) {
        if (val === undefined || val == null)
            return "";
        return moment(val).format('YYYYMMDDHHmmss');
    },
    number: function (val) {
        if (Number.isInteger(val))
            return formatNumber(val, 0);
        return formatNumber(val, 2);
    },
    idNumber: function (val) { return val.toFixed(0); },
    integer: function (val) { return formatNumber(val, 0); },
    currency: function (val) {
        if (Number.isInteger(val))
            return formatNumber(val, 0) + ".00VND";
        return formatNumber(val, 2) + 'VND';
    },
    percent: function (val) {
        if (val * 100 % 100 > 0) {
            return Number(val).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
        }
        return Number(val).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 });
    }
};

var text = /*#__PURE__*/Object.freeze({
  ftDate: ftDate,
  util: util,
  formater: formater
});

var EMAIL_PATTERN = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/i;
var EmptyValidator = /** @class */ (function () {
    function EmptyValidator(message, allowEmpty) {
        if (allowEmpty === void 0) { allowEmpty = false; }
        this.message = message;
        this.allowEmpty = allowEmpty;
    }
    EmptyValidator.prototype.validate = function (val) {
        if (val === undefined || val === null || val === '') {
            if (this.allowEmpty)
                return;
            throw new Error(this.message);
        }
    };
    return EmptyValidator;
}());
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.validate = function (val) {
        if (!val)
            return;
        if (!EMAIL_PATTERN.test(val)) {
            throw new Error(val + " 'Is Not A Valid Email Format')");
        }
    };
    return EmailValidator;
}());
var NAME_PATH_PATTERN = /^([a-zA-Z0-9_.-])+$/i;
var NamePathValidator = /** @class */ (function () {
    function NamePathValidator() {
    }
    NamePathValidator.prototype.validate = function (val) {
        if (!NAME_PATH_PATTERN.test(val)) {
            throw new Error(val + " 'Is Not A Valid Name Path Format')");
        }
    };
    return NamePathValidator;
}());
var PatternValidator = /** @class */ (function () {
    function PatternValidator(pattern, allowEmpty, message) {
        if (allowEmpty === void 0) { allowEmpty = false; }
        this.pattern = pattern;
        this.allowEmpty = allowEmpty;
        this.message = message;
    }
    PatternValidator.prototype.validate = function (val) {
        if (!val && !this.allowEmpty) {
            throw new Error('Field cannot be empty!');
        }
        if (!this.pattern.test(val)) {
            var mesg = this.message;
            if (!mesg)
                mesg = val + " 'Is Not A Valid Format')";
            throw new Error(mesg);
        }
    };
    return PatternValidator;
}());
var PositiveNumberValidator = /** @class */ (function () {
    function PositiveNumberValidator() {
    }
    PositiveNumberValidator.prototype.validate = function (val) {
        if (val <= 0) {
            throw new Error('Expect A Number Greater Than 0');
        }
    };
    return PositiveNumberValidator;
}());
var ZeroAndGreaterValidator = /** @class */ (function () {
    function ZeroAndGreaterValidator() {
    }
    ZeroAndGreaterValidator.prototype.validate = function (val) {
        if (val < 0) {
            throw new Error('Expect A Number Equals Or Greater Than 0');
        }
    };
    return ZeroAndGreaterValidator;
}());
var NumberRangeValidator = /** @class */ (function () {
    function NumberRangeValidator(min, max) {
        this.min = min;
        this.max = max;
    }
    NumberRangeValidator.prototype.validate = function (val) {
        if (val < this.min || val > this.max) {
            throw new Error(val + " is not in the range " + this.min + " - " + this.max);
        }
    };
    return NumberRangeValidator;
}());
var EMPTY_VALIDATOR = new EmptyValidator('Field Cannot Be Empty');
var EMAIL_VALIDATOR = new EmailValidator();
var NAME_VALIDATOR = new NamePathValidator();
var POSITIVE_NUMBER_VALIDATOR = new PositiveNumberValidator();
var ZERO_AND_GREATER_VALIDATOR = new ZeroAndGreaterValidator();

var validator = /*#__PURE__*/Object.freeze({
  EmptyValidator: EmptyValidator,
  PatternValidator: PatternValidator,
  NumberRangeValidator: NumberRangeValidator,
  EMPTY_VALIDATOR: EMPTY_VALIDATOR,
  EMAIL_VALIDATOR: EMAIL_VALIDATOR,
  NAME_VALIDATOR: NAME_VALIDATOR,
  POSITIVE_NUMBER_VALIDATOR: POSITIVE_NUMBER_VALIDATOR,
  ZERO_AND_GREATER_VALIDATOR: ZERO_AND_GREATER_VALIDATOR
});

var PageList = /** @class */ (function () {
    function PageList(pageSize, list) {
        this.available = -1;
        this.availablePage = -1;
        this.currentPage = 1;
        this.list = [];
        this.currentListPage = null;
        this.pageSize = pageSize;
        this.setList(list);
    }
    PageList.prototype.setList = function (list) {
        this.list = list;
        this.available = list.length;
        var selCurrentPage = this.currentPage;
        this.setAvailablePage(list.length);
        if (selCurrentPage > this.availablePage)
            selCurrentPage = 1;
        this.getPage(selCurrentPage);
    };
    PageList.prototype.getPageSize = function () { return this.pageSize; };
    PageList.prototype.setPageSize = function (pageSize) {
        this.pageSize = pageSize;
        this.setAvailablePage(this.available);
    };
    PageList.prototype.getCurrentPage = function () { return this.currentPage; };
    PageList.prototype.getAvailable = function () { return this.available; };
    PageList.prototype.getAvailablePage = function () { return this.availablePage; };
    PageList.prototype.getDataList = function () { return this.list; };
    PageList.prototype.getPrevPage = function () {
        if (this.currentPage === 1)
            return 1;
        return this.currentPage - 1;
    };
    PageList.prototype.getNextPage = function () {
        if (this.currentPage === this.availablePage)
            return this.currentPage;
        return this.currentPage + 1;
    };
    PageList.prototype.getItemInPage = function (idx) {
        var items = this.currentPageItems();
        return items[idx];
    };
    PageList.prototype.currentPageItems = function () {
        if (this.currentListPage == null) {
            this.populateCurrentPage();
        }
        if (!this.currentListPage) {
            throw new Error('There is an error, the page items should not be null');
        }
        return this.currentListPage;
    };
    PageList.prototype.getPage = function (page) {
        this.checkAndSetPage(page);
        this.populateCurrentPage();
        return this.currentListPage;
    };
    PageList.prototype.checkAndSetPage = function (page) {
        if (page < 1 || page > this.availablePage) {
            throw new Error("Page is out of range " + page);
        }
        this.currentPage = page;
    };
    PageList.prototype.setAvailablePage = function (available) {
        this.available = available;
        if (available === 0) {
            this.availablePage = 1;
            this.currentPage = 1;
        }
        else {
            var pages = Math.ceil(available / this.pageSize);
            this.availablePage = pages;
            this.currentPage = 1;
        }
        this.currentListPage = null;
    };
    PageList.prototype.getFrom = function () {
        return (this.currentPage - 1) * this.pageSize;
    };
    PageList.prototype.getTo = function () {
        var to = this.currentPage * this.pageSize;
        if (to > this.available)
            to = this.available;
        return to;
    };
    PageList.prototype.computeRowIndexOf = function (page, rowInPage) {
        return (page - 1) * this.pageSize + rowInPage;
    };
    PageList.prototype.getItemOnCurrentPage = function (idx) {
        if (!this.currentListPage) {
            throw new Error('There is no item in the current page');
        }
        return this.currentListPage[idx];
    };
    PageList.prototype.removeItemOnCurrentPage = function (idx) {
        var from = this.getFrom();
        var realIdx = from + idx;
        var cpage = this.getCurrentPage();
        this.list.splice(realIdx, 1);
        this.setAvailablePage(this.list.length);
        if (this.getAvailablePage() < cpage)
            cpage = this.getAvailablePage();
        this.getPage(cpage);
    };
    PageList.prototype.getSubRange = function (page, rangeSize) {
        if (page < 1 || page > this.availablePage) {
            throw new Error("page " + page + " is out of range");
        }
        var range = [];
        if (rangeSize >= this.availablePage) {
            range[0] = 1;
            range[1] = this.availablePage;
            return range;
        }
        var half = rangeSize / 2;
        if (page - half < 1) {
            range[0] = 1;
            range[1] = rangeSize;
        }
        else if (page + (rangeSize - half) > this.availablePage) {
            range[0] = this.availablePage - rangeSize;
            range[1] = this.availablePage;
        }
        else {
            range[0] = page - half;
            range[1] = page + (rangeSize - half);
        }
        return range;
    };
    PageList.prototype.populateCurrentPage = function () {
        this.currentListPage = this.list.slice(this.getFrom(), this.getTo());
    };
    return PageList;
}());



var index = /*#__PURE__*/Object.freeze({
  common: common,
  text: text,
  validator: validator,
  PageList: PageList,
  ObjUtil: ObjUtil,
  TimeUtil: TimeUtil,
  IDTracker: IDTracker
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function createFetchConfig(method, params) {
    var body = null;
    if (params) {
        body = JSON.stringify(params);
    }
    var config = {
        method: method,
        headers: {
            'Content-Type': "application/json;charset=UTF-8"
        },
        cache: 'no-cache',
        mode: 'cors',
        credentials: 'include',
        body: body
    };
    return config;
}
var Rest = /** @class */ (function () {
    function Rest(serverUrl, restBaseURL) {
        this.serverURL = serverUrl;
        this.restBaseURL = restBaseURL;
    }
    Rest.prototype.getBaseUrl = function () { return this.restBaseURL; };
    Rest.prototype.createRestUrl = function (path, params) {
        if (params) {
            path = path + '?' + Object.keys(params).map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
            }).join('&');
        }
        if (path.startsWith('/'))
            return this.restBaseURL + path;
        return this.restBaseURL + '/' + path;
    };
    Rest.prototype.createUrl = function (path, params) {
        if (params) {
            path = path + '?' + Object.keys(params).map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
            }).join('&');
        }
        if (path.startsWith('/'))
            return this.serverURL + path;
        return this.serverURL + '/' + path;
    };
    Rest.prototype.get = function (path, params, cb, failCb) {
        var config = createFetchConfig('GET', null);
        var url = this.createRestUrl(path);
        if (params) {
            url = url + '?' + Object.keys(params).map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
            }).join('&');
        }
        this.doFetch(url, config, cb, failCb);
    };
    Rest.prototype.post = function (path, params, cb, failCb) {
        var config = createFetchConfig('POST', params);
        var url = this.createRestUrl(path);
        this.doFetch(url, config, cb, failCb);
    };
    Rest.prototype.put = function (path, params, cb, failCb) {
        var config = createFetchConfig('PUT', params);
        var url = this.createRestUrl(path);
        this.doFetch(url, config, cb, failCb);
    };
    Rest.prototype.delete = function (path, params, cb, failCb) {
        var config = createFetchConfig('DELETE', params);
        var url = this.createRestUrl(path);
        this.doFetch(url, config, cb, failCb);
    };
    Rest.prototype.formSubmit = function (path, formData, cb) {
        var config = {
            method: "POST",
            mode: 'cors',
            credentials: 'include',
            body: formData
        };
        var url = this.createRestUrl(path);
        this.doFetch(url, config, cb);
    };
    Rest.prototype.doFetch = function (url, config, successCallback, failCb) {
        fetch(url, config).then(function (response) {
            return response.json();
        }).then(function (restResponse) {
            if (!restResponse || restResponse.error) {
                if (failCb) {
                    failCb(restResponse.error);
                }
                else {
                    console.log('Error:');
                    console.log(restResponse);
                }
            }
            else {
                restResponse.data = JSON.parse(restResponse.data);
                successCallback(restResponse);
            }
        });
    };
    return Rest;
}());

var UIRestPing = /** @class */ (function (_super) {
    __extends(UIRestPing, _super);
    function UIRestPing(props) {
        var _this = _super.call(this, props) || this;
        _this.screen = '';
        var _a = _this.props, serverUrl = _a.serverUrl, restPath = _a.restPath;
        _this.restContext = {
            serverUrl: serverUrl,
            restPath: restPath
        };
        return _this;
    }
    UIRestPing.prototype.ping = function () {
        var _this = this;
        var rest = new Rest(this.restContext.serverUrl, this.restContext.serverUrl);
        var successCB = function (result) {
            _this.screen += "RESPONSE: " + JSON.stringify(result) + "\n";
            _this.forceUpdate();
        };
        this.screen += 'SENT:     Hello!!!\n';
        rest.post(this.restContext.restPath, { 'param': 'value' }, successCB);
        this.forceUpdate();
    };
    UIRestPing.prototype.clear = function () {
        this.screen = '';
        this.forceUpdate();
    };
    UIRestPing.prototype.render = function () {
        var _this = this;
        return (createElement("div", { className: 'my-2 py-2' },
            createElement("div", null,
                " Rest Base URL: ",
                this.restContext.serverUrl,
                " "),
            createElement("div", null,
                " Rest Path: ",
                this.restContext.restPath,
                " "),
            createElement("pre", { className: 'border', style: { minHeight: '50px' } }, this.screen),
            createElement("button", { onClick: function () { return _this.ping(); } }, "Ping"),
            createElement("button", { onClick: function () { return _this.clear(); } }, "Clear")));
    };
    return UIRestPing;
}(Component));

var index$1 = /*#__PURE__*/Object.freeze({
  UIRestPing: UIRestPing,
  Rest: Rest
});

var WebsocketClient = /** @class */ (function () {
    function WebsocketClient(wsUri, open) {
        this.websocket = null;
        this.wsUri = wsUri;
        if (open)
            this.open();
    }
    WebsocketClient.prototype.open = function () {
        this.close();
        var thisClient = this;
        var websocket = new WebSocket(this.wsUri);
        websocket.onopen = function (evt) { thisClient.onOpen(evt); };
        websocket.onclose = function (evt) { thisClient.onClose(evt); };
        websocket.onmessage = function (evt) { thisClient.onMessage(evt); };
        websocket.onerror = function (evt) { thisClient.onError(evt); };
        this.websocket = websocket;
    };
    WebsocketClient.prototype.onOpen = function (_evt) { };
    WebsocketClient.prototype.onClose = function (_evt) { };
    WebsocketClient.prototype.onError = function (_evt) { };
    WebsocketClient.prototype.onMessage = function (_evt) { };
    WebsocketClient.prototype.send = function (message) {
        if (this.websocket) {
            this.websocket.send(message);
        }
        else {
            throw 'Websocket is disconneced';
        }
    };
    WebsocketClient.prototype.sendObject = function (object) {
        if (this.websocket) {
            var json = JSON.stringify(object);
            this.websocket.send(json);
        }
        else {
            throw 'Websocket is disconneced';
        }
    };
    WebsocketClient.prototype.close = function () {
        if (this.websocket) {
            this.websocket.close();
            this.websocket = null;
        }
    };
    return WebsocketClient;
}());
var UIWebsocketEcho = /** @class */ (function (_super) {
    __extends(UIWebsocketEcho, _super);
    function UIWebsocketEcho() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.screen = '';
        _this.wsClient = null;
        return _this;
    }
    UIWebsocketEcho.prototype.componentWillReceiveProps = function (_nextProps) {
        console.log('[Websocket] componentWillReceiveProps(nexpProps)');
    };
    UIWebsocketEcho.prototype.initWebsocket = function () {
        this.closeWebsocket();
        var _a = this.props, serverUrl = _a.serverUrl, wsPath = _a.wsPath;
        var wsUri = serverUrl + wsPath;
        this.screen = '';
        var thisUI = this;
        console.log('wsUri = ' + wsUri);
        var wsClient = new WebsocketClient(wsUri, true /*open*/);
        wsClient.onOpen = function (_evt) {
            thisUI.writeToScreen("CONNECTED");
            thisUI.writeToScreen("SENT: Hello");
            var data = {
                "from": "Tuan", "text": "hello"
            };
            wsClient.send(JSON.stringify(data));
        };
        wsClient.onClose = function (_evt) {
            thisUI.writeToScreen("DISCONNECTED");
        };
        wsClient.onMessage = function (evt) {
            thisUI.writeToScreen('ECHO: ' + evt.data);
        };
        wsClient.onError = function (evt) {
            thisUI.writeToScreen(evt.data);
        };
        this.wsClient = wsClient;
    };
    UIWebsocketEcho.prototype.closeWebsocket = function () {
        if (this.wsClient) {
            this.wsClient.close();
            this.wsClient = null;
        }
    };
    UIWebsocketEcho.prototype.pingWebsocket = function () {
        if (this.wsClient) {
            var message = 'hello';
            this.writeToScreen("SENT: " + message);
            this.wsClient.send(message);
        }
    };
    UIWebsocketEcho.prototype.writeToScreen = function (message) {
        this.screen += message + '\n';
        this.forceUpdate();
    };
    UIWebsocketEcho.prototype.render = function () {
        var _this = this;
        var _a = this.props, serverUrl = _a.serverUrl, wsPath = _a.wsPath;
        return (React__default.createElement("div", null,
            React__default.createElement("h3", null, "Websocket"),
            React__default.createElement("div", null,
                " Server URL: ",
                serverUrl,
                " "),
            React__default.createElement("div", null,
                " Websocket Path: ",
                wsPath,
                " "),
            React__default.createElement("pre", { style: { border: '1px dashed gray', minHeight: '50px' } }, this.screen),
            React__default.createElement("button", { onClick: function () { return _this.initWebsocket(); } }, "Init Websocket"),
            React__default.createElement("button", { onClick: function () { return _this.pingWebsocket(); } }, "Ping Websocket"),
            React__default.createElement("button", { onClick: function () { return _this.closeWebsocket(); } }, "Close Websocket")));
    };
    return UIWebsocketEcho;
}(Component));

var index$2 = /*#__PURE__*/Object.freeze({
  WebsocketClient: WebsocketClient,
  UIWebsocketEcho: UIWebsocketEcho
});



var index$3 = /*#__PURE__*/Object.freeze({
  rest: index$1,
  websocket: index$2
});

var SVG = {
    ADD: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",
    PERSON: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    PERSON_PIN: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
    INSERT_CHART: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
    RESTAURANT_MENU: "M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z",
    PRODUCT: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z",
    DNS: "M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
    SETTING: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z",
    PLAY_ARROW: "M8 5v14l11-7z",
    CLOSE: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    KEYBOARD_RETURN: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z",
    LOGOUT: "m 18,24 0,4 -14,0 0,-24 14,0 0,4 4,0 0,-8 -22,0 0,32 22,0 0,-8 z m -6,-4.003 0,-8 12,0 0,-4 8,8 -8,8 0,-4 z",
    ICON: "M7 10l5 5 5-5z"
};
var SvgIcon = /** @class */ (function (_super) {
    __extends(SvgIcon, _super);
    function SvgIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SvgIcon.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, fill = _a.fill;
        return (React__default.createElement("svg", { style: style, className: className },
            React__default.createElement("path", { d: this.props.d, fill: fill })));
    };
    return SvgIcon;
}(React__default.Component));
var ICONS = {
    nav: {
        archive: 'fa fa-archive icon',
        areaChart: 'fa fa fa-area-chart icon',
        addressBook: 'fa fa-address-book icon',
        barChart: 'fa fa-bar-chart icon',
        book: 'fa fa-book icon',
        calculator: 'fa fa-calculator icon',
        calendar: 'fa fa-calendar icon',
        cart: 'fa fa-cart-plus icon',
        commenting: 'fa fa-commenting icon',
        comments: 'fa fa-comments icon',
        cube: 'fa fa-cube icon',
        cubes: 'fa fa-cubes icon',
        cutlery: 'fa fa-cutlery icon',
        database: 'fa fa-database icon',
        dashboard: 'fa fa-dashboard icon',
        desktop: 'fa fa-desktop icon',
        dollar: 'fa fa-dollar icon',
        edit: 'fa fa-edit',
        exchange: 'fa fa-exchange icon',
        facebook: 'fa fa-facebook-official icon',
        faNavicon: 'fa fa-navicon icon',
        fileText: 'fa fa-file-text icon',
        gear: 'fa fa-gear icon',
        group: 'fa fa-group icon',
        handshakeO: 'fa fa-handshake-o icon',
        headphones: 'fa fa-headphones icon',
        home: 'fa fa-home icon',
        idCard: 'fa fa-id-card icon',
        lineChart: 'fa fa-line-chart icon',
        listAlt: 'fa fa-list-alt icon',
        map: 'fa fa-map icon',
        marker: 'fa fa-map-marker icon',
        pencilSquare: 'fa fa-pencil-square-o icon',
        percent: 'fa fa-percent icon',
        piece: 'fa fa-puzzle-piece icon',
        pieChart: 'fa fa-pie-chart',
        phone: 'fa fa-phone icon',
        plus: 'fa fa-plus icon',
        remove: 'fa fa-remove icon',
        reply: 'fa fa-reply icon',
        replyAll: 'fa fa-reply-all icon',
        sitemap: 'fa fa-sitemap icon',
        shield: 'fa fa-shield icon',
        sort: 'fa fa-sort  icon',
        suitcase: 'fa fa-suitcase icon',
        tasks: 'fa fa-tasks icon',
        truck: 'fa fa-truck icon',
        twitter: 'fa fa-twitter icon',
        user: 'fa fa-user icon',
        userCircleO: 'fa fa-user-circle-o icon',
        wrench: 'fa fa-wrench icon',
    },
    editor: {
        angleLeft: 'fa fa-angle-left icon',
        angleRight: 'fa fa-angle-right icon',
        angleDoubleLeft: 'fa fa-angle-double-left icon',
        angleDoubleRight: 'fa fa-angle-double-right icon',
        checkCircle: 'fa fa-check-circle icon',
        creditCard: 'fa fa-credit-card icon',
        dollar: 'fa fa-dollar icon',
        down: 'fa fa-angle-down icon',
        edit: 'fa fa-edit icon',
        forward: 'fa fa-mail-forward icon',
        group: 'fa fa-group icon',
        idCard: 'fa fa-id-card icon',
        info: 'fa fa-info icon',
        list: 'fa fa-list',
        plus: 'fa fa-plus icon',
        minus: 'fa fa-minus icon',
        print: 'fa fa-print icon',
        reply: 'fa fa-mail-reply icon',
        refresh: 'fa fa-refresh icon',
        remove: 'fa fa-remove icon',
        reorder: 'fa fa-reorder icon',
        save: 'fa fa-save icon',
        search: 'fa fa-search icon',
        filter: 'fa fa-filter icon',
        sitemap: 'fa fa-sitemap icon',
        timesCircle: 'fa fa-times-circle icon',
        trash: 'fa fa-trash  icon',
        trashO: 'fa fa-trash-o icon',
        up: 'fa fa-angle-up icon',
        user: 'fa fa-user icon',
        sort: 'fa fa-sort  icon',
        table: 'fa fa-table icon',
        th: 'fa fa-th icon',
        tasks: 'fa fa-tasks icon',
        tree: 'fa fa-tree icon',
        database: 'fa fa-database icon',
    },
    webapp: {
        arrowUp: 'fa fa-arrow-circle-up icon',
        arrowDown: 'fa fa-arrow-circle-down icon',
        caretDown: 'fa fa-caret-down icon',
        caretRight: 'fa fa-caret-right icon',
        add: 'fa fa-plus icon',
        remove: 'fa fa-remove icon',
    }
};

var icons = /*#__PURE__*/Object.freeze({
  SVG: SVG,
  SvgIcon: SvgIcon,
  ICONS: ICONS
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "form, .form {\n  /*WDateTime widget*/ }\n  form .form-group-inline, .form .form-group-inline {\n    display: flex; }\n  form label, .form label {\n    margin: 0px; }\n  form select.form-control:not([size]):not([multiple]), .form select.form-control:not([size]):not([multiple]) {\n    height: 2rem; }\n  form .form-control, .form .form-control {\n    padding: 2px 2px; }\n  form .form-control:disabled, form .form-control[readonly], .form .form-control:disabled, .form .form-control[readonly] {\n    outline: none;\n    background: #f5f4f4; }\n  form .form-control:disabled:focus, form .form-control[readonly]:focus, .form .form-control:disabled:focus, .form .form-control[readonly]:focus {\n    background: lightgray; }\n  form .form-control-error, .form .form-control-error {\n    border: 1px solid #e7c0c0; }\n  form .form-group, .form .form-group {\n    margin-bottom: 0.25rem;\n    padding: 2px 0px; }\n  form .btn-link,\n  form .btn-outline-secondary, .form .btn-link,\n  .form .btn-outline-secondary {\n    padding: 2px 5px; }\n  form .btn-link,\n  form .btn-link:hover, .form .btn-link,\n  .form .btn-link:hover {\n    text-decoration: none; }\n  form .rdt input, .form .rdt input {\n    text-align: right;\n    width: 250px; }\n  form .rdt .rdtPicker, .form .rdt .rdtPicker {\n    right: 0px; }\n  form .input-number, .form .input-number {\n    text-align: right; }\n  form .input-field, .form .input-field {\n    padding: 5px 0px; }\n\n.w-autocomplete input {\n  width: 100%; }\n\n.w-autocomplete .dropdown {\n  display: block; }\n  .w-autocomplete .dropdown .dropdown-item.active {\n    background-color: lightgray; }\n  .w-autocomplete .dropdown .more {\n    text-align: right; }\n  .w-autocomplete .dropdown .create-new {\n    font-weight: bold; }\n\n.w-upload-resource > .control {\n  display: flex;\n  align-items: center; }\n  .w-upload-resource > .control .btn {\n    padding: 2px 5px; }\n\n.w-upload-resource > .resource {\n  display: flex;\n  align-items: center; }\n  .w-upload-resource > .resource span {\n    width: 135px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .w-upload-resource > .resource .btn {\n    padding: 0px 3px; }\n\n.input-group-autocomplete .input-group-prepend {\n  display: inline-block;\n  padding: 0px;\n  margin: 0px; }\n\n.workspace {\n  display: flex;\n  flex-direction: column !important;\n  flex-grow: 1 !important;\n  background-color: #ffffff;\n  box-shadow: 0 3px 23px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  height: 100%; }\n  .workspace > .header {\n    display: flex;\n    align-items: center;\n    border-radius: 5px 5px 0px 0px;\n    border-bottom: 1px solid whitesmoke;\n    align-items: center;\n    background: #cdd3db; }\n    .workspace > .header > h4 {\n      padding: 5px;\n      display: flex;\n      flex-grow: 1;\n      font-size: 1rem;\n      color: #488bb5;\n      font-weight: bold; }\n    .workspace > .header > .breadcumbs {\n      display: flex;\n      padding: 5px 0px 2px 5px; }\n    .workspace > .header > .breadcumbs .btn {\n      padding: 0px 5px; }\n    .workspace > .header > .breadcumbs span {\n      display: inline-block;\n      width: 15px;\n      height: 20px;\n      transform: scale(1.2);\n      padding: 4px 0px 0px 5px; }\n  .workspace > .footer {\n    padding: 0px 5px;\n    border-radius: 0px 0px 5px 5px;\n    background: #f8f8f8; }\n  .workspace > .body {\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important;\n    padding: 5px; }\n    .workspace > .body .content {\n      display: flex;\n      flex-direction: column !important;\n      flex-grow: 1 !important;\n      min-height: 300px;\n      overflow-x: auto;\n      overflow-y: auto; }\n\n.ui-panel {\n  display: flex;\n  flex-direction: column !important;\n  flex-grow: 1 !important;\n  background-color: #ffffff; }\n  .ui-panel > .header {\n    display: flex;\n    align-items: center;\n    padding: 5px 5px;\n    background: #cde0f0; }\n    .ui-panel > .header > h4 {\n      display: flex;\n      flex-grow: 1;\n      font-size: 1rem;\n      color: #488bb5;\n      font-weight: bold; }\n  .ui-panel > .body {\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important;\n    height: 300px;\n    padding: 5px;\n    overflow-x: auto;\n    overflow-y: auto;\n    scrollbar-width: thin; }\n  .ui-panel > .footer {\n    padding: 5px 2px;\n    background: #f0f4f7;\n    vertical-align: baseline; }\n\n.ui-flex-box {\n  padding: 5px;\n  display: flex;\n  flex-direction: column !important;\n  flex-grow: 1 !important;\n  min-height: 300px;\n  overflow-x: visible;\n  overflow-y: auto;\n  scrollbar-width: thin; }\n\n.column-layout {\n  display: flex;\n  flex: 1 0 auto;\n  flex-flow: row; }\n  .column-layout > .column {\n    margin: 0px 0px; }\n\n.ui-section {\n  display: flex;\n  flex-direction: column;\n  margin: 5px 0px; }\n  .ui-section > .navbar {\n    margin: 0px;\n    padding: 5px 0px; }\n    .ui-section > .navbar .btn {\n      padding: 0px 5px; }\n    .ui-section > .navbar .btn-link,\n    .ui-section > .navbar .btn-link:hover {\n      text-decoration: none; }\n    .ui-section > .navbar .btn-info {\n      text-decoration: none;\n      font-weight: bold;\n      background: transparent;\n      border: none;\n      color: black;\n      background: transparent; }\n  .ui-section > .body {\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important;\n    margin-left: 5px; }\n\n.ui-tabpane {\n  display: flex;\n  flex-direction: column !important;\n  flex-grow: 1 !important;\n  padding: 0px; }\n  .ui-tabpane > .header {\n    display: flex;\n    justify-content: space-between;\n    background: #e6e3e3;\n    width: 100%; }\n    .ui-tabpane > .header > .tabs {\n      display: flex;\n      background: transparent; }\n      .ui-tabpane > .header > .tabs > .tab {\n        display: flex;\n        padding: 5px 10px; }\n      .ui-tabpane > .header > .tabs > .tab:hover {\n        opacity: 0.7; }\n      .ui-tabpane > .header > .tabs > .tab > .btn,\n      .ui-tabpane > .header > .tabs > .tab-active > .btn {\n        padding: 0px;\n        color: black;\n        font-weight: bold;\n        text-decoration: none; }\n      .ui-tabpane > .header > .tabs > .tab-active {\n        display: flex;\n        background-color: white;\n        padding: 5px 10px; }\n    .ui-tabpane > .header > .actions {\n      display: flex;\n      background: transparent;\n      padding: 5px; }\n  .ui-tabpane > .content {\n    padding: 5px 0px;\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important; }\n    .ui-tabpane > .content > .tab {\n      display: flex;\n      flex-direction: column !important;\n      flex-grow: 1 !important;\n      overflow-x: hidden;\n      overflow-y: auto;\n      scrollbar-width: thin; }\n\n.ui-tabpane-outline > .header {\n  border-bottom: 2px solid lightgray;\n  background: transparent; }\n  .ui-tabpane-outline > .header > .tabs > .tab {\n    padding: 2px; }\n    .ui-tabpane-outline > .header > .tabs > .tab > .btn {\n      padding: 2px 10px; }\n  .ui-tabpane-outline > .header > .tabs > .tab-active {\n    padding: 2px; }\n    .ui-tabpane-outline > .header > .tabs > .tab-active > .btn {\n      background: lightgray;\n      padding: 2px 10px;\n      border-radius: 0rem; }\n";
styleInject(css);

function mergeCssClass(c1, c2) {
    if (!c1)
        return c2;
    if (!c2)
        return c1;
    return c1 + ' ' + c2;
}
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Container.prototype.render = function () {
        var _a = this.props, className = _a.className, fluid = _a.fluid, children = _a.children;
        var classes = mergeCssClass('container', className);
        if (fluid)
            classes = mergeCssClass('container-fluid', className);
        var html = (React__default.createElement("div", { className: classes, style: this.props.style },
            " ",
            children,
            " "));
        return html;
    };
    return Container;
}(Component));
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Row.prototype.render = function () {
        var cssClass = mergeCssClass('row', this.props.className);
        var html = (React__default.createElement("div", { className: cssClass, style: this.props.style }, this.props.children));
        return html;
    };
    return Row;
}(Component));
var Col = /** @class */ (function (_super) {
    __extends(Col, _super);
    function Col() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Col.prototype.render = function () {
        var _a = this.props, style = _a.style, type = _a.type, span = _a.span;
        if (!type)
            type = 'md';
        var cssClass = mergeCssClass('col-' + type + '-' + span, this.props.className);
        return (React__default.createElement("div", { className: cssClass, style: style },
            " ",
            this.props.children,
            " "));
    };
    return Col;
}(Component));
/*Form Layout*/
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Form.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style;
        var classes = 'form';
        if (className)
            classes = "form " + className;
        return (React__default.createElement("div", { className: classes, style: style },
            this.props.children,
            " "));
    };
    return Form;
}(Component));
var FormContainer = /** @class */ (function (_super) {
    __extends(FormContainer, _super);
    function FormContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormContainer.prototype.render = function () {
        var _a = this.props, children = _a.children, fluid = _a.fluid, className = _a.className;
        var html = (React__default.createElement(Form, null,
            React__default.createElement(Container, { fluid: fluid, className: className }, children)));
        return html;
    };
    return FormContainer;
}(Component));
var FormGroup = /** @class */ (function (_super) {
    __extends(FormGroup, _super);
    function FormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormGroup.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, className = _a.className, inline = _a.inline;
        var classes = mergeCssClass('form-group', className);
        if (inline)
            classes = mergeCssClass(classes, ' form-group-inline');
        return (React__default.createElement("div", { className: classes, style: style },
            " ",
            children,
            " "));
    };
    return FormGroup;
}(Component));
var FormGroupCol = /** @class */ (function (_super) {
    __extends(FormGroupCol, _super);
    function FormGroupCol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormGroupCol.prototype.render = function () {
        var _a = this.props, children = _a.children, type = _a.type, span = _a.span, inline = _a.inline, className = _a.className;
        var html = (React__default.createElement(Col, { type: type, span: span },
            React__default.createElement(FormGroup, { className: className, inline: inline }, children)));
        return html;
    };
    return FormGroupCol;
}(Component));
var WS = /** @class */ (function (_super) {
    __extends(WS, _super);
    function WS(props) {
        var _this = _super.call(this, props) || this;
        _this.key = "ws-" + IDTracker.next();
        return _this;
    }
    WS.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children, mobile = _a.mobile;
        var wsClassName = 'workspace';
        if (mobile)
            wsClassName = 'workspace m-workspace';
        return (React__default.createElement("div", { key: this.key, className: mergeCssClass(wsClassName, className), style: style }, children));
    };
    return WS;
}(Component));
var WSHeader = /** @class */ (function (_super) {
    __extends(WSHeader, _super);
    function WSHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WSHeader.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children;
        return (React__default.createElement("div", { className: mergeCssClass('header', className), style: style }, children));
    };
    return WSHeader;
}(Component));
var WSBody = /** @class */ (function (_super) {
    __extends(WSBody, _super);
    function WSBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WSBody.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children;
        return (React__default.createElement("div", { className: mergeCssClass('body', className), style: style }, children));
    };
    return WSBody;
}(Component));
var WSFooter = /** @class */ (function (_super) {
    __extends(WSFooter, _super);
    function WSFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WSFooter.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children;
        return (React__default.createElement("div", { className: mergeCssClass('footer', className), style: style }, children));
    };
    return WSFooter;
}(Component));
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children;
        return (React__default.createElement("div", { className: mergeCssClass('ui-panel', className), style: style }, children));
    };
    return Panel;
}(Component));
var PanelHeader = /** @class */ (function (_super) {
    __extends(PanelHeader, _super);
    function PanelHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelHeader.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children;
        return (React__default.createElement("div", { className: mergeCssClass('header', className), style: style }, children));
    };
    return PanelHeader;
}(Component));
var PanelBody = /** @class */ (function (_super) {
    __extends(PanelBody, _super);
    function PanelBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelBody.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children;
        return (React__default.createElement("div", { className: mergeCssClass('body', className), style: style }, children));
    };
    return PanelBody;
}(Component));
var PanelFooter = /** @class */ (function (_super) {
    __extends(PanelFooter, _super);
    function PanelFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelFooter.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children;
        if (!children || !children.length)
            return null;
        return (React__default.createElement("div", { className: mergeCssClass('footer', className), style: style }, children));
    };
    return PanelFooter;
}(Component));
var FlexBox = /** @class */ (function (_super) {
    __extends(FlexBox, _super);
    function FlexBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlexBox.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children;
        return (React__default.createElement("div", { className: mergeCssClass('ui-flex-box', className), style: style }, children));
    };
    return FlexBox;
}(Component));
var BreadcumbsPage = /** @class */ (function (_super) {
    __extends(BreadcumbsPage, _super);
    function BreadcumbsPage(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelectPath.bind(_this);
        _this.state = { path: [] };
        return _this;
    }
    BreadcumbsPage.prototype.clear = function () { this.state.path.splice(0, this.state.path.length); };
    BreadcumbsPage.prototype.isScrollable = function () { return false; };
    BreadcumbsPage.prototype.push = function (name, label, ui) {
        var path = this.state.path;
        path.push({ name: name, label: label, element: ui });
        this.forceUpdate();
    };
    BreadcumbsPage.prototype.add = function (name, label, ui) { this.push(name, label, ui); };
    BreadcumbsPage.prototype.onSelectPath = function (name) {
        var path = this.state.path;
        var newPath = [];
        for (var i = 0; i < path.length; i++) {
            newPath.push(path[i]);
            if (path[i].name === name)
                break;
        }
        this.setState({ path: newPath });
    };
    BreadcumbsPage.prototype.onBack = function () {
        var path = this.state.path;
        if (path.length === 1)
            return;
        path.pop();
        this.setState({ path: path });
    };
    BreadcumbsPage.prototype.renderActions = function () {
        if (!this.actions)
            return null;
        var actions = this.actions;
        var actionBtns = [];
        var _loop_1 = function (i) {
            var action = actions[i];
            if (!action)
                return "continue";
            actionBtns.push(React__default.createElement(Button, { key: i, className: 'mx-1', outline: true, size: "sm", onClick: function () { return action.onSelect(action); } }, action.label));
        };
        for (var i = 0; i < actions.length; i++) {
            _loop_1(i);
        }
        return actionBtns;
    };
    BreadcumbsPage.prototype.renderDropdownActions = function () {
        if (!this.dropdownActions)
            return null;
        var dropdowns = this.dropdownActions;
        var dropdownEles = [];
        for (var i = 0; i < dropdowns.length; i++) {
            var dropdown = dropdowns[i];
            var actions = dropdown.actions;
            var itemEles = [];
            var _loop_2 = function (j) {
                var action = actions[j];
                itemEles.push(React__default.createElement(DropdownItem, { key: j, onClick: function () { return action.onSelect(action); } }, action.label));
            };
            for (var j = 0; j < actions.length; j++) {
                _loop_2(j);
            }
            dropdownEles.push(React__default.createElement(UncontrolledDropdown, { key: i },
                React__default.createElement(DropdownToggle, { nav: true, caret: true, className: 'px-2' }, dropdown.label),
                React__default.createElement(DropdownMenu, { right: true }, itemEles)));
        }
        return dropdownEles;
    };
    BreadcumbsPage.prototype.createBreadcumbPaths = function () {
        var _this = this;
        var path = this.state.path;
        var breadcumbPaths = [];
        var _loop_3 = function (i) {
            var selPath = path[i];
            if (i > 0) {
                breadcumbPaths.push(React__default.createElement("span", { key: "icon-" + i, className: "" + ICONS.webapp.caretRight }));
            }
            if (i === path.length - 1) {
                breadcumbPaths.push((React__default.createElement(Button, { color: 'info', key: i, disabled: true }, selPath.label)));
            }
            else {
                var link = (React__default.createElement(Button, { key: i, color: 'info', onClick: function () { return _this.onSelectPath(selPath.name); } }, selPath.label));
                breadcumbPaths.push(link);
            }
        };
        for (var i = 0; i < path.length; i++) {
            _loop_3(i);
        }
        return breadcumbPaths;
    };
    BreadcumbsPage.prototype.createBreadcumbContents = function () {
        var path = this.state.path;
        var breadcumContents = [];
        for (var i = 0; i < path.length; i++) {
            var selPath = path[i];
            if (i === path.length - 1) {
                breadcumContents.push(React__default.createElement("div", { key: i, className: 'content' }, selPath.element));
            }
            else {
                breadcumContents.push(React__default.createElement("div", { key: i, style: { display: 'none' }, className: 'content' }, selPath.element));
            }
        }
        return breadcumContents;
    };
    BreadcumbsPage.prototype.render = function () {
        var mobile = this.props.mobile;
        var html = (React__default.createElement(WS, { mobile: mobile },
            React__default.createElement(WSHeader, { className: 'd-flex justify-content-between' },
                React__default.createElement("div", { className: 'breadcumbs' },
                    " ",
                    this.createBreadcumbPaths(),
                    " "),
                React__default.createElement("div", { className: 'd-flex' },
                    React__default.createElement("div", { className: 'px-2' }, this.renderActions()),
                    React__default.createElement("div", { className: 'px-2 d-flex' }, this.renderDropdownActions()))),
            React__default.createElement(WSBody, null,
                " ",
                this.createBreadcumbContents(),
                " ")));
        return html;
    };
    return BreadcumbsPage;
}(Component));
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab.prototype.render = function () {
        var html = (React__default.createElement("div", { className: 'tab', style: this.props.style }, this.props.children));
        return html;
    };
    return Tab;
}(Component));
var TabPane = /** @class */ (function (_super) {
    __extends(TabPane, _super);
    function TabPane(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { selectTab: '' };
        _this.dynamicTabs = [];
        return _this;
    }
    TabPane.prototype.onSelectTab = function (tabName) {
        this.setState({ selectTab: tabName });
    };
    TabPane.prototype.onClose = function (tabName) {
        var tabs = this.dynamicTabs;
        for (var i = 0; i < tabs.length; i++) {
            var tab = tabs[i];
            if (tabName === tab.name) {
                tabs.splice(i, 1);
                var children = this.props.children;
                if (children) {
                    var selChild = children;
                    if (children.length)
                        selChild = children[0];
                    this.setState({ selectTab: selChild.props.name });
                }
                else if (tabs.length > 0) {
                    this.setState({ selectTab: tabs[0].name });
                }
                break;
            }
        }
    };
    TabPane.prototype.onAdd = function () {
        var onCreateTab = this.props.onCreateTab;
        if (!onCreateTab)
            return;
        this.addTab(onCreateTab());
    };
    TabPane.prototype.addTab = function (tab) {
        this.dynamicTabs.push(tab);
        this.setState({ selectTab: tab.name });
    };
    TabPane.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, style = _a.style, lookAndFeel = _a.lookAndFeel, className = _a.className, onCreateTab = _a.onCreateTab, customActions = _a.customActions;
        var selectTabName = this.state.selectTab;
        var SelectedTab = null;
        var tabHeaders = [];
        if (children) {
            React__default.Children.map(children, function (tab, i) {
                var _a = tab.props, name = _a.name, label = _a.label, active = _a.active;
                var tabStyle = 'tab';
                if ((!selectTabName && active) || name == selectTabName) {
                    SelectedTab = tab;
                    tabStyle = 'tab-active';
                }
                var tabHeader = (React__default.createElement("div", { key: "stab-" + i, className: tabStyle },
                    React__default.createElement(Button, { color: 'link', onClick: _this.onSelectTab.bind(_this, name) }, label)));
                tabHeaders.push(tabHeader);
            });
        }
        var _loop_4 = function (i) {
            var tab = this_1.dynamicTabs[i];
            var tabStyle = 'tab';
            if (tab.name === selectTabName) {
                SelectedTab = tab.ui;
                tabStyle = 'tab-active';
            }
            var closeBtn = null;
            if (tab.closable) {
                closeBtn = (React__default.createElement(Button, { className: 'ml-2', color: 'link', onClick: function () { return _this.onClose(tab.name); } }, "x"));
            }
            var tabHeader = (React__default.createElement("div", { key: "dtab-" + i, className: tabStyle },
                React__default.createElement(Button, { color: 'link', onClick: this_1.onSelectTab.bind(this_1, tab.name) }, tab.label),
                closeBtn));
            tabHeaders.push(tabHeader);
        };
        var this_1 = this;
        for (var i = 0; i < this.dynamicTabs.length; i++) {
            _loop_4(i);
        }
        var addTab = null;
        if (onCreateTab) {
            addTab = (React__default.createElement("div", { key: 'add', className: 'tab' },
                React__default.createElement(Button, { color: 'link', onClick: function () { return _this.onAdd(); } }, "+")));
        }
        var actionHtml = null;
        if (customActions) {
            var buttons = [];
            var _loop_5 = function (i) {
                var action = customActions[i];
                var color = action.color ? action.color : 'primary';
                var iconEle = action.icon ? React__default.createElement("span", { className: action.icon }) : null;
                buttons.push(React__default.createElement(Button, { key: i, className: 'd-block my-1', color: color, outline: action.outline, size: action.size, onClick: function () { return action.onSelect(action, _this); } },
                    iconEle,
                    action.label));
            };
            for (var i = 0; i < customActions.length; i++) {
                _loop_5(i);
            }
            actionHtml = (React__default.createElement("div", { className: 'd-flex' }, buttons));
        }
        var cssClass = 'ui-tabpane';
        if (lookAndFeel)
            cssClass = cssClass + " ui-tabpane-" + lookAndFeel + " ";
        if (className)
            cssClass = cssClass + " " + className + " ";
        var html = (React__default.createElement("div", { style: style, className: cssClass },
            React__default.createElement("div", { className: 'header' },
                React__default.createElement("div", { className: 'tabs' },
                    " ",
                    tabHeaders,
                    " ",
                    addTab,
                    " "),
                actionHtml),
            React__default.createElement("div", { className: 'content' },
                " ",
                SelectedTab,
                " ")));
        return html;
    };
    return TabPane;
}(Component));
var Column$1 = /** @class */ (function (_super) {
    __extends(Column$$1, _super);
    function Column$$1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column$$1.prototype.render = function () {
        var _a = this.props, children = _a.children, width = _a.width, height = _a.height, growth = _a.growth, style = _a.style, className = _a.className;
        var computedStyle = __assign({ width: width ? width : 'auto', height: height ? height : 'auto', flexGrow: growth ? growth : 'initial' }, style);
        var cssClasses = mergeCssClass('column', className);
        cssClasses = mergeCssClass('full-height-box', className);
        var html = (React__default.createElement("div", { className: cssClasses, style: computedStyle },
            " ",
            children,
            " "));
        return html;
    };
    return Column$$1;
}(Component));
var ColumnLayout = /** @class */ (function (_super) {
    __extends(ColumnLayout, _super);
    function ColumnLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnLayout.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, children = _a.children;
        var html = (React__default.createElement("div", { style: style, className: mergeCssClass('column-layout', className) }, children));
        return html;
    };
    return ColumnLayout;
}(Component));
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Section.prototype.componentWillMount = function () {
        this.setState({ collapse: this.props.collapse });
    };
    Section.prototype.onToggle = function () {
        this.setState({ collapse: !this.state.collapse });
    };
    Section.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, title = _a.title, actions = _a.actions, children = _a.children;
        var contentStyle = {};
        if (this.state.collapse)
            contentStyle.display = 'none';
        var rightNav = null;
        if (actions) {
            var buttons = [];
            var _loop_6 = function (i) {
                var action = actions[i];
                buttons.push((React__default.createElement("li", { key: i, className: "nav-item mr-1" },
                    React__default.createElement(Button, { color: 'link', key: i, onClick: function (_evt) { return action.onClick(); } }, action.label))));
            };
            for (var i = 0; i < actions.length; i++) {
                _loop_6(i);
            }
            rightNav = (React__default.createElement("ul", { className: "nav justify-content-end" },
                " ",
                buttons,
                " "));
        }
        var html = (React__default.createElement("div", { className: mergeCssClass('ui-section', className), style: style },
            React__default.createElement("div", { className: "navbar" },
                React__default.createElement("div", null,
                    React__default.createElement(Button, { color: 'info', onClick: function () { return _this.onToggle(); } },
                        React__default.createElement("span", { className: ((this.state.collapse) ? "" + ICONS.webapp.caretRight : "" + ICONS.webapp.caretDown) + " mr-1" }),
                        title)),
                rightNav),
            React__default.createElement("div", { className: 'body', style: contentStyle },
                " ",
                children,
                " ")));
        return html;
    };
    return Section;
}(React__default.Component));
var UINotificationMessage = /** @class */ (function (_super) {
    __extends(UINotificationMessage, _super);
    function UINotificationMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UINotificationMessage.prototype.render = function () {
        var _a = this.props, msg = _a.msg, className = _a.className, style = _a.style;
        var html = (React__default.createElement("div", { className: className, style: style },
            React__default.createElement("h3", { className: 'border-bottom' }, msg.label),
            React__default.createElement("div", null, msg.detail)));
        return html;
    };
    return UINotificationMessage;
}(React__default.Component));
var DialogContext = /** @class */ (function () {
    function DialogContext() {
    }
    DialogContext.prototype.getDialog = function () {
        if (!this.dialog) {
            throw new Error("No dialog is set");
        }
        return this.dialog;
    };
    DialogContext.prototype.setDialog = function (dialog) { this.dialog = dialog; };
    return DialogContext;
}());
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this, props) || this;
        var context = props.context;
        if (context)
            context.setDialog(_this);
        _this.state = { show: true };
        return _this;
    }
    Dialog.prototype.hide = function () {
        var parentDomId = this.props.parentDomId;
        var parentDomEle = document.getElementById(parentDomId);
        if (parentDomEle) {
            ReactDOM.unmountComponentAtNode(parentDomEle);
            parentDomEle.remove();
        }
    };
    Dialog.prototype.doClose = function () {
        var onClose = this.props.onClose;
        if (onClose)
            onClose(this);
        this.hide();
    };
    Dialog.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, content = _a.content, size = _a.size, actions = _a.actions, onClose = _a.onClose;
        if (!size)
            size = 'md';
        var actionEles = [];
        if (actions) {
            actionEles = [];
            var _loop_7 = function (i) {
                var action = actions[i];
                var color = 'primary';
                if (action.color)
                    color = action.color;
                actionEles.push(React__default.createElement(Button, { key: i, className: 'mx-1', color: color, outline: action.outline, onClick: function () { return action.onSelect(action, { uiDialog: _this }); } }, action.label));
            };
            for (var i = 0; i < actions.length; i++) {
                _loop_7(i);
            }
        }
        if (onClose) {
            actionEles.push(React__default.createElement(Button, { key: 'close', className: 'mx-1', onClick: function () { return _this.doClose(); } }, 'Close'));
        }
        var Footer = null;
        if (actionEles.length > 0) {
            Footer = (React__default.createElement(ModalFooter, null,
                React__default.createElement("div", { className: 'd-flex flex-row-reverse' },
                    " ",
                    actionEles,
                    " ")));
        }
        var html = (React__default.createElement(Modal, { className: 'ui-dialog', backdrop: true, backdropTransition: { timeout: 50, appear: false, exit: false }, modalTransition: { timeout: 50, appear: false, exit: false }, isOpen: this.state.show, size: size, toggle: function () { return _this.hide(); } },
            React__default.createElement(ModalHeader, { toggle: function () { return _this.hide(); } },
                " ",
                title,
                " "),
            React__default.createElement(ModalBody, null,
                " ",
                content,
                " "),
            Footer));
        return html;
    };
    return Dialog;
}(React__default.Component));
function showDialog(title, size, content, ctx) {
    var parentDomId = "uidialog_" + IDTracker.next();
    var uiDialog = (React__default.createElement(Dialog, { parentDomId: parentDomId, title: title, size: size, content: content, context: ctx }));
    var dialogDiv = document.createElement("div");
    dialogDiv.setAttribute("id", parentDomId);
    var appDialogDiv = document.getElementById('app-dialog');
    if (appDialogDiv) {
        appDialogDiv.appendChild(dialogDiv);
        ReactDOM.render(uiDialog, dialogDiv);
    }
}
function showNotification(type, label, detail, cause) {
    var stacktrace = '';
    if (cause)
        stacktrace = JSON.stringify(cause, null, 2);
    var msg = { type: type, label: label, detail: detail, stacktrace: stacktrace };
    var ui = (React__default.createElement(UINotificationMessage, { msg: msg }));
    var size = 'sm';
    if (cause)
        size = 'md';
    showDialog(label, size, ui);
}

var layout = /*#__PURE__*/Object.freeze({
  Container: Container,
  Row: Row,
  Col: Col,
  Form: Form,
  FormContainer: FormContainer,
  FormGroup: FormGroup,
  FormGroupCol: FormGroupCol,
  WS: WS,
  WSHeader: WSHeader,
  WSBody: WSBody,
  WSFooter: WSFooter,
  Panel: Panel,
  PanelHeader: PanelHeader,
  PanelBody: PanelBody,
  PanelFooter: PanelFooter,
  FlexBox: FlexBox,
  BreadcumbsPage: BreadcumbsPage,
  Tab: Tab,
  TabPane: TabPane,
  Column: Column$1,
  ColumnLayout: ColumnLayout,
  Section: Section,
  UINotificationMessage: UINotificationMessage,
  DialogContext: DialogContext,
  Dialog: Dialog,
  showDialog: showDialog,
  showNotification: showNotification
});

var AppCapability = /** @class */ (function () {
    function AppCapability(cap) {
        this.capability = 'Read';
        this.capability = cap;
        if (cap === 'None')
            this.order = 0;
        else if (cap === 'Read')
            this.order = 1;
        else if (cap === 'Write')
            this.order = 2;
        else
            this.order = 3;
    }
    AppCapability.prototype.hasCapability = function (other) {
        return this.order >= other.order;
    };
    return AppCapability;
}());
var NONE = new AppCapability('None');
var READ = new AppCapability('Read');
var WRITE = new AppCapability('Write');
var ADMIN = new AppCapability('Admin');
var AppRegistryGroup = /** @class */ (function () {
    function AppRegistryGroup(name, label) {
        this.visible = false;
        this.registries = {};
        this.name = name;
        this.label = label;
    }
    AppRegistryGroup.prototype.get = function (name) {
        if (this.registries[name])
            return this.registries[name];
        else
            return null;
    };
    AppRegistryGroup.prototype.add = function (registry) {
        this.registries[registry.name] = registry;
    };
    return AppRegistryGroup;
}());
var AppRegistryManager = /** @class */ (function () {
    function AppRegistryManager() {
        this.appRegistryNav = {};
        this.appRegistries = {};
        this.defaultAppRegistry = null;
    }
    AppRegistryManager.prototype.get = function (name, retDefault) {
        if (this.appRegistries[name])
            return this.appRegistries[name];
        else if (retDefault)
            return this.defaultAppRegistry;
        else
            return null;
    };
    AppRegistryManager.prototype.add = function (registry) {
        this.appRegistryNav[registry.name] = registry;
        this.appRegistries[registry.name] = registry;
        if (!this.defaultAppRegistry)
            this.defaultAppRegistry = registry;
    };
    AppRegistryManager.prototype.addGroup = function (group) {
        this.appRegistryNav[group.name] = group;
        for (var name_1 in group.registries) {
            var registry = group.registries[name_1];
            this.appRegistries[registry.name] = registry;
        }
    };
    AppRegistryManager.prototype.wirePlugins = function () {
        var exportPlugins = [];
        for (var key in this.appRegistries) {
            var app_1 = this.appRegistries[key];
            if (!app_1.getExportPlugins)
                continue;
            exportPlugins.push.apply(exportPlugins, app_1.getExportPlugins());
        }
        for (var i = 0; i < exportPlugins.length; i++) {
            var plugin = exportPlugins[i];
            var targetApp = this.get(plugin.targetAppName, false);
            if (targetApp == null) {
                console.error("Cannot find the app " + plugin.targetAppName);
                continue;
            }
            if (!targetApp.addPlugin) {
                console.error("App " + plugin.targetAppName + " does not implement addPlugin method");
                continue;
            }
            targetApp.addPlugin(plugin);
        }
    };
    return AppRegistryManager;
}());

var ServerContext = /** @class */ (function () {
    function ServerContext(hostname, serverUrl, restUrl) {
        this.hostname = hostname;
        this.rest = new Rest(serverUrl, restUrl);
    }
    ServerContext.prototype.getRestClient = function () { return this.rest; };
    return ServerContext;
}());
var OSEvent = /** @class */ (function () {
    function OSEvent(source, name, data, osContext) {
        this.source = source;
        this.name = name;
        this.data = data;
        this.osContext = osContext;
    }
    OSEvent.prototype.isTarget = function (pattern) {
        var regrex = new RegExp(pattern);
        return regrex.test(this.name);
    };
    return OSEvent;
}());
var OSContext = /** @class */ (function () {
    function OSContext(uiOS, ctx) {
        this.appName = 'webos';
        this.appLabel = 'WebOS';
        this.servers = {};
        this.event = null;
        this.uiOS = uiOS;
        this.serverCtx = ctx;
    }
    OSContext.prototype.getServerContext = function () { return this.serverCtx; };
    OSContext.prototype.getEvent = function () { return this.event; };
    OSContext.prototype.consumeEvent = function () {
        var event = this.event;
        this.event = null;
        return event;
    };
    OSContext.prototype.setEvent = function (event) { this.event = event; };
    OSContext.prototype.broadcast = function (event) {
        this.event = event;
        this.uiOS.forceUpdate();
    };
    return OSContext;
}());
var AppEvent = /** @class */ (function () {
    function AppEvent(source, name, data, appContext) {
        this.source = source;
        this.name = name;
        this.data = data;
        this.appContext = appContext;
    }
    return AppEvent;
}());
var AppContext = /** @class */ (function () {
    function AppContext(uiApp, osContext, serverCtx) {
        if (serverCtx === void 0) { serverCtx = null; }
        this.appRegistry = null;
        this.event = null;
        this.osContext = osContext;
        if (serverCtx) {
            this.serverContext = serverCtx;
        }
        else {
            this.serverContext = osContext.getServerContext();
        }
        this.uiApplication = uiApp;
    }
    AppContext.prototype.getAppRegistry = function () {
        return this.appRegistry;
    };
    AppContext.prototype.setAppRegistry = function (registry) { this.appRegistry = registry; };
    AppContext.prototype.getOSContext = function () { return this.osContext; };
    AppContext.prototype.getServerContext = function () { return this.serverContext; };
    AppContext.prototype.getEvent = function () { return this.event; };
    AppContext.prototype.consumeEvent = function () {
        var event = this.event;
        this.event = null;
        return event;
    };
    AppContext.prototype.setEvent = function (event) { this.event = event; };
    AppContext.prototype.broadcast = function (event) {
        this.event = event;
        this.uiApplication.forceUpdate();
    };
    AppContext.prototype.hasUserReadCapability = function () {
        if (!this.appRegistry)
            return false;
        var cap = this.appRegistry.getUserAppCapability();
        return cap.hasCapability(READ);
    };
    AppContext.prototype.hasUserWriteCapability = function () {
        if (!this.appRegistry)
            return false;
        var cap = this.appRegistry.getUserAppCapability();
        return cap.hasCapability(WRITE);
    };
    AppContext.prototype.hasUserAdminCapability = function () {
        if (!this.appRegistry)
            return false;
        var cap = this.appRegistry.getUserAppCapability();
        return cap.hasCapability(ADMIN);
    };
    AppContext.prototype.addOSNotification = function (type, label, detail, cause) {
        var stacktrace = '';
        if (cause)
            stacktrace = JSON.stringify(cause, null, 2);
        var data = { type: type, label: label, detail: detail, stacktrace: stacktrace };
        this.osContext.broadcast(new OSEvent('Application', 'os:notification:message', data, this.osContext));
    };
    return AppContext;
}());
var PageContext = /** @class */ (function () {
    function PageContext(env) {
        this.dialogContext = null;
        this.breadcumbs = null;
        if (env) {
            if (env instanceof DialogContext) {
                this.dialogContext = env;
            }
            else {
                this.breadcumbs = env;
            }
        }
    }
    PageContext.prototype.setBreadcumbs = function (breadcumbs) {
        this.breadcumbs = breadcumbs;
    };
    PageContext.prototype.getDialogContext = function () { return this.dialogContext; };
    /**@deprecated */
    PageContext.prototype.setDialogContext = function (ctx) {
        this.dialogContext = ctx;
    };
    /**@deprecated */
    PageContext.prototype.closeDialogContext = function () {
        if (this.dialogContext) {
            this.dialogContext.getDialog().hide();
        }
    };
    PageContext.prototype.onBack = function () {
        if (this.dialogContext) {
            this.dialogContext.getDialog().hide();
        }
        else if (this.breadcumbs) {
            this.breadcumbs.onBack();
        }
    };
    PageContext.prototype.onAdd = function (name, label, ui) {
        if (this.breadcumbs) {
            this.breadcumbs.push(name, label, ui);
        }
        else {
            showDialog(label, "md", ui);
        }
    };
    return PageContext;
}());
var UIBaseApplication = /** @class */ (function (_super) {
    __extends(UIBaseApplication, _super);
    function UIBaseApplication(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { osEvent: null };
        return _this;
    }
    return UIBaseApplication;
}(Component));

var css$1 = ".ui-nav-application {\n  display: flex;\n  width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  padding: 0.25em;\n  padding: 0em !important;\n  margin: 0em !important; }\n  .ui-nav-application > .ui-navigation {\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important;\n    overflow: auto; }\n    .ui-nav-application > .ui-navigation .banner {\n      background: #a6c0c9; }\n    .ui-nav-application > .ui-navigation .w-controls {\n      padding: 5px 5px; }\n      .ui-nav-application > .ui-navigation .w-controls .btn-link {\n        display: block;\n        padding: 0px 5px; }\n\n.ui-menu-application {\n  display: flex;\n  flex-direction: column !important;\n  flex-grow: 1 !important; }\n  .ui-menu-application > .ui-menu {\n    height: 30px; }\n  .ui-menu-application > .ui-body {\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important; }\n";
styleInject(css$1);

function changeScreen(appContext, screen) {
    var data = { screen: screen };
    appContext.broadcast(new AppEvent('UINavigation', 'app:change:screen', data, appContext));
}
function findScreenModel(navigation, id) {
    if (navigation.screens) {
        var screens = navigation.screens;
        for (var j = 0; j < screens.length; j++) {
            if (screens[j].id == id)
                return screens[j];
        }
    }
    if (navigation.sections) {
        var sections = navigation.sections;
        for (var i = 0; i < sections.length; i++) {
            var screens = sections[i].screens;
            for (var j = 0; j < screens.length; j++) {
                if (screens[j].id == id)
                    return screens[j];
            }
        }
    }
    return null;
}
var UIApplication = /** @class */ (function (_super) {
    __extends(UIApplication, _super);
    function UIApplication(props) {
        var _this = _super.call(this, props) || this;
        var osContext = props.osContext, appRegistry = props.appRegistry;
        _this.appContext = new AppContext(_this, osContext);
        _this.appContext.setAppRegistry(appRegistry);
        _this.pageContext = new PageContext(null);
        _this.navigation = _this.createAllowedNavigation(_this.appContext, _this.pageContext);
        return _this;
    }
    UIApplication.prototype.createAllowedNavigation = function (appContext, pageContext) {
        var navigation = this.createNavigation(appContext, pageContext);
        var userCap = null;
        var app = appContext.getAppRegistry();
        if (app.getUserAppCapability) {
            userCap = app.getUserAppCapability();
        }
        if (userCap == null)
            userCap = ADMIN;
        var navRequiredCap = navigation.requiredCapability;
        if (!navRequiredCap)
            navRequiredCap = NONE;
        var sections = navigation.sections;
        if (sections) {
            var allowedSections = [];
            for (var i = 0; i < sections.length; i++) {
                var section = sections[i];
                var sectionRequiredCap = section.requiredCapability;
                if (!sectionRequiredCap)
                    sectionRequiredCap = navRequiredCap;
                var allowedScreens = [];
                for (var j = 0; j < section.screens.length; j++) {
                    var screen_1 = section.screens[j];
                    var screenRequiredCap = screen_1.requiredCapability;
                    if (!screenRequiredCap)
                        screenRequiredCap = sectionRequiredCap;
                    if (userCap.hasCapability(screenRequiredCap)) {
                        allowedScreens.push(screen_1);
                    }
                }
                if (allowedScreens.length > 0) {
                    section.screens = allowedScreens;
                    allowedSections.push(section);
                }
            }
            navigation.sections = allowedSections;
        }
        return navigation;
    };
    UIApplication.prototype.createNavigation = function (_appContext, _pageContext) {
        throw Error('This method need to override');
    };
    return UIApplication;
}(Component));
var UINavigation = /** @class */ (function (_super) {
    __extends(UINavigation, _super);
    function UINavigation(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { collapse: false };
        return _this;
    }
    UINavigation.prototype.toggleNav = function () {
        var navigation = this.props.navigation;
        navigation.collapse = !navigation.collapse;
        var appContext = this.props.appContext;
        appContext.broadcast(new AppEvent('UINavigation', 'app:update', {}, appContext));
    };
    UINavigation.prototype.renderSectionScreens = function (section) {
        var appContext = this.props.appContext;
        var screenModels = section.screens;
        var screenLinks = [];
        var _loop_1 = function (i) {
            var screen_2 = screenModels[i];
            screenLinks.push(React__default.createElement(Button, { key: i, color: 'link', onClick: function () { return changeScreen(appContext, screen_2.id); } }, screen_2.label));
        };
        for (var i = 0; i < screenModels.length; i++) {
            _loop_1(i);
        }
        return screenLinks;
    };
    UINavigation.prototype.renderSections = function (nav) {
        if (nav.collapse)
            return null;
        var sectionUIs = [];
        if (nav.sections) {
            var sections = nav.sections;
            for (var i = 0; i < sections.length; i++) {
                var section = sections[i];
                if (section.indentLevel == 1) {
                    sectionUIs.push(React__default.createElement("div", { key: i, className: "w-controls" },
                        React__default.createElement("h5", { className: 'border-bottom mb-1' }, section.label),
                        this.renderSectionScreens(section)));
                }
                else if (section.indentLevel == 2) {
                    sectionUIs.push(React__default.createElement("div", { key: i, className: "w-controls pl-3" },
                        React__default.createElement("h6", { className: 'mb-1' }, section.label),
                        this.renderSectionScreens(section)));
                }
            }
        }
        return sectionUIs;
    };
    UINavigation.prototype.renderBanner = function (nav) {
        var _this = this;
        var appContext = this.props.appContext;
        if (nav.collapse) {
            return (React__default.createElement(Button, { style: { padding: '0px 2px' }, outline: true, onClick: function () { return _this.toggleNav(); } },
                React__default.createElement("span", { className: "" + ICONS.nav.plus })));
        }
        var html = (React__default.createElement("div", { className: 'banner d-flex justify-content-between p-1' },
            React__default.createElement("strong", null, appContext.getAppRegistry().label),
            React__default.createElement(Button, { style: { padding: '0px 2px' }, outline: true, onClick: function () { return _this.toggleNav(); } },
                React__default.createElement("span", { className: "" + ICONS.nav.remove }))));
        return html;
    };
    UINavigation.prototype.render = function () {
        var navigation = this.props.navigation;
        var html = (React__default.createElement("div", null,
            this.renderBanner(navigation),
            this.renderSections(navigation)));
        return html;
    };
    return UINavigation;
}(Component));
var UIApplicationBody = /** @class */ (function (_super) {
    __extends(UIApplicationBody, _super);
    function UIApplicationBody(props) {
        var _this = _super.call(this, props) || this;
        var pageContext = props.pageContext;
        pageContext.setBreadcumbs(_this);
        return _this;
    }
    UIApplicationBody.prototype.selectUIScreen = function (event) {
        var navigation = this.props.navigation;
        var uiScreen = null;
        if (event && event.data && event.name == 'app:change:screen') {
            var data = event.data;
            uiScreen = findScreenModel(navigation, data.screen);
        }
        if (!uiScreen) {
            uiScreen = findScreenModel(navigation, navigation.defaultScreen);
        }
        if (!uiScreen) {
            throw new Error("Cannot find the screen");
        }
        return uiScreen;
    };
    UIApplicationBody.prototype.componentWillMount = function () {
        this.clear();
        var appContext = this.props.appContext;
        var uiScreen = this.selectUIScreen(appContext.getEvent());
        this.push('root', uiScreen.label, uiScreen.ui);
    };
    return UIApplicationBody;
}(BreadcumbsPage));
var UINavApplication = /** @class */ (function (_super) {
    __extends(UINavApplication, _super);
    function UINavApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UINavApplication.prototype.render = function () {
        var appContext = this.appContext;
        var renderId = IDTracker.next();
        var navigation = this.navigation;
        var navWidth = navigation.navWidth ? navigation.navWidth : 200;
        if (this.navigation.collapse)
            navWidth = 20;
        var html = (React__default.createElement("div", { className: 'ui-nav-application' },
            React__default.createElement("div", { className: 'ui-navigation', style: { maxWidth: navWidth } },
                React__default.createElement(UINavigation, { appContext: appContext, navigation: this.navigation })),
            React__default.createElement("div", { className: 'full-height-box flex-grow-1 ml-1 p-1' },
                React__default.createElement(UIApplicationBody, { key: renderId, appContext: appContext, pageContext: this.pageContext, navigation: this.navigation }))));
        return html;
    };
    return UINavApplication;
}(UIApplication));
var UIMenuApplicationBody = /** @class */ (function (_super) {
    __extends(UIMenuApplicationBody, _super);
    function UIMenuApplicationBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIMenuApplicationBody.prototype.renderMenuSections = function (appContext, navigation) {
        if (!navigation.sections)
            return null;
        var sectionUIs = [];
        for (var i = 0; i < navigation.sections.length; i++) {
            var section = navigation.sections[i];
            var screens = section.screens;
            var screenButtons = [];
            var _loop_2 = function (j) {
                var screen_3 = section.screens[j];
                screenButtons.push(React__default.createElement("div", { className: 'border m-1', style: { width: 120 } },
                    React__default.createElement(Button, { key: j, color: 'link', onClick: function () { return changeScreen(appContext, screen_3.id); } }, screen_3.label)));
            };
            for (var j = 0; j < screens.length; j++) {
                _loop_2(j);
            }
            sectionUIs.push(React__default.createElement("div", { key: i },
                React__default.createElement("strong", { className: 'px-2' }, section.label),
                React__default.createElement("div", { className: 'd-flex flex-row flex-wrap' }, screenButtons)));
        }
        return sectionUIs;
    };
    UIMenuApplicationBody.prototype.renderNavigationMenu = function () {
        var _a = this.props, appContext = _a.appContext, navigation = _a.navigation;
        if (!navigation.sections)
            return null;
        var html = (React__default.createElement(UncontrolledDropdown, null,
            React__default.createElement(DropdownToggle, { nav: true, caret: true, className: 'px-2' },
                React__default.createElement("span", { className: ICONS.editor.th, title: 'Menu' }),
                " Menu"),
            React__default.createElement(DropdownMenu, { right: true },
                React__default.createElement("div", { className: 'p-1', style: { width: 390 } }, this.renderMenuSections(appContext, navigation)))));
        return html;
    };
    UIMenuApplicationBody.prototype.renderScreens = function () {
        var _a = this.props, appContext = _a.appContext, navigation = _a.navigation;
        if (!navigation.screens)
            return null;
        var screenModels = navigation.screens;
        var screenBtns = [];
        var _loop_3 = function (i) {
            var screen_4 = screenModels[i];
            var iconEle = null;
            if (screen_4.icon) {
                iconEle = (React__default.createElement("span", { className: "" + screen_4.icon, title: "" + screen_4.hint }));
            }
            screenBtns.push(React__default.createElement(Button, { key: i, color: 'link', onClick: function () { return changeScreen(appContext, screen_4.id); } },
                iconEle,
                " ",
                screen_4.label));
        };
        for (var i = 0; i < screenModels.length; i++) {
            _loop_3(i);
        }
        return (React__default.createElement("div", { className: 'd-flex' }, screenBtns));
    };
    UIMenuApplicationBody.prototype.render = function () {
        var mobile = this.props.mobile;
        var html = (React__default.createElement(WS, { mobile: mobile },
            React__default.createElement(WSHeader, { className: 'd-flex justify-content-between' },
                React__default.createElement("div", { className: 'breadcumbs' },
                    " ",
                    this.createBreadcumbPaths(),
                    " "),
                React__default.createElement("div", { className: 'd-flex' },
                    this.renderScreens(),
                    this.renderNavigationMenu())),
            React__default.createElement(WSBody, null,
                " ",
                this.createBreadcumbContents(),
                " ")));
        return html;
    };
    return UIMenuApplicationBody;
}(UIApplicationBody));
var UIMenuApplication = /** @class */ (function (_super) {
    __extends(UIMenuApplication, _super);
    function UIMenuApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIMenuApplication.prototype.render = function () {
        var appContext = this.appContext;
        var renderId = IDTracker.next();
        var html = (React__default.createElement("div", { className: 'ui-menu-application' },
            React__default.createElement("div", { className: 'ui-body p-1' },
                React__default.createElement(UIMenuApplicationBody, { key: renderId, appContext: appContext, pageContext: this.pageContext, navigation: this.navigation }))));
        return html;
    };
    return UIMenuApplication;
}(UIApplication));



var index$4 = /*#__PURE__*/Object.freeze({
  ServerContext: ServerContext,
  OSEvent: OSEvent,
  OSContext: OSContext,
  AppEvent: AppEvent,
  AppContext: AppContext,
  PageContext: PageContext,
  UIBaseApplication: UIBaseApplication,
  AppCapability: AppCapability,
  NONE: NONE,
  READ: READ,
  WRITE: WRITE,
  ADMIN: ADMIN,
  AppRegistryGroup: AppRegistryGroup,
  AppRegistryManager: AppRegistryManager,
  changeScreen: changeScreen,
  findScreenModel: findScreenModel,
  UIApplication: UIApplication,
  UINavigation: UINavigation,
  UIApplicationBody: UIApplicationBody,
  UINavApplication: UINavApplication,
  UIMenuApplicationBody: UIMenuApplicationBody,
  UIMenuApplication: UIMenuApplication
});

var WButton = /** @class */ (function (_super) {
    __extends(WButton, _super);
    function WButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WButton.prototype.render = function () {
        var remove = this.props.remove;
        if (remove == true || remove == 'true')
            return null;
        return React__default.createElement(Button, __assign({}, this.props));
    };
    return WButton;
}(Component));
var PopoverButton = /** @class */ (function (_super) {
    __extends(PopoverButton, _super);
    function PopoverButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopoverButton.prototype.toggle = function () {
        var popover = this.props.popover;
        popover.open = !popover.open;
        this.forceUpdate();
    };
    PopoverButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, className = _a.className, label = _a.label, icon = _a.icon, outline = _a.outline, color = _a.color, popover = _a.popover, children = _a.children, style = _a.style;
        var popupTitleEle = null;
        if (popover.title) {
            popupTitleEle = (React__default.createElement(PopoverHeader, null, popover.title));
        }
        var iconEle = null;
        if (icon)
            iconEle = (React__default.createElement("span", { className: icon }));
        var placement = 'bottom';
        if (popover.placement)
            placement = popover.placement;
        var html = (React__default.createElement(ButtonGroup, { className: className },
            React__default.createElement(Button, { id: id, outline: outline, color: color, onClick: function () { return _this.toggle(); } },
                iconEle,
                " ",
                label ? label : null),
            React__default.createElement(UncontrolledPopover, { placement: placement, trigger: "legacy", target: id, isOpen: popover.open, toggle: function () { return _this.toggle(); } },
                popupTitleEle,
                React__default.createElement(PopoverBody, { style: style, className: 'd-flex' }, children))));
        return html;
    };
    return PopoverButton;
}(Component));
var ButtonWithDropdown = /** @class */ (function (_super) {
    __extends(ButtonWithDropdown, _super);
    function ButtonWithDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = { popoverOpen: false };
        return _this;
    }
    ButtonWithDropdown.prototype.componentWillReceiveProps = function (_nextProps) {
        this.setState({ popoverOpen: false });
    };
    ButtonWithDropdown.prototype.toggle = function () {
        this.setState({ popoverOpen: !this.state.popoverOpen });
    };
    ButtonWithDropdown.prototype.render = function () {
        var _a = this.props, id = _a.id, icon = _a.icon, label = _a.label, popover = _a.popover, onClick = _a.onClick, children = _a.children, color = _a.color;
        var popupTitleEle = null;
        if (popover.title) {
            popupTitleEle = (React__default.createElement(PopoverHeader, null, popover.title));
        }
        var uiLabel = label ? React__default.createElement(Button, { color: color, onClick: onClick, style: { whiteSpace: 'nowrap' } }, label) : null;
        var html = (React__default.createElement(ButtonGroup, null,
            uiLabel,
            React__default.createElement(Button, { color: color, id: id, onClick: this.toggle }, icon ? (React__default.createElement("span", { className: icon })) : '▼'),
            React__default.createElement(Popover, { placement: "bottom", isOpen: this.state.popoverOpen, target: id, toggle: popover.onClose ? popover.onClose : this.toggle },
                popupTitleEle,
                React__default.createElement(PopoverBody, { className: 'd-flex' }, children))));
        return html;
    };
    return ButtonWithDropdown;
}(Component));
var AutoRefreshButton = /** @class */ (function (_super) {
    __extends(AutoRefreshButton, _super);
    function AutoRefreshButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { selectPeriod: props.defaultPeriod };
        _this.timerId = null;
        return _this;
    }
    AutoRefreshButton.prototype.componentDidMount = function () {
        var selectPeriod = this.state.selectPeriod;
        this.autoRefresh(selectPeriod);
    };
    AutoRefreshButton.prototype.onSelectPeriod = function (period) {
        this.setState({ selectPeriod: period });
        this.autoRefresh(period);
    };
    AutoRefreshButton.prototype.onRefresh = function () {
        var onRefresh = this.props.onRefresh;
        if (onRefresh)
            onRefresh();
    };
    AutoRefreshButton.prototype.autoRefresh = function (period) {
        var onRefresh = this.props.onRefresh;
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
        if (onRefresh && period > 0) {
            this.timerId = setInterval(onRefresh, period * 1000);
        }
    };
    AutoRefreshButton.prototype.componentWillUnmount = function () {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    };
    AutoRefreshButton.prototype.render = function () {
        var _this = this;
        var id = this.props.id;
        var options = [
            { label: "None", period: -1 },
            { label: "5s", period: 5 },
            { label: "10s", period: 10 },
            { label: "30s", period: 30 },
            { label: "1min", period: 60 },
            { label: "5min", period: 300 },
        ];
        var selectPeriod = this.state.selectPeriod;
        var optionEles = [];
        var _loop_1 = function (i) {
            var opt = options[i];
            optionEles.push((React__default.createElement("div", { key: i, className: 'mx-1' },
                React__default.createElement("input", { type: 'radio', name: 'opt' + i, checked: opt.period === selectPeriod, onChange: function () { return _this.onSelectPeriod(opt.period); } }),
                React__default.createElement("label", { className: 'ml-1' }, opt.label))));
        };
        for (var i = 0; i < options.length; i++) {
            _loop_1(i);
        }
        var label = 'Refresh';
        if (selectPeriod > 0)
            label = label + (" [" + selectPeriod + "s]");
        var html = (React__default.createElement(ButtonWithDropdown, { id: id + "-" + IDTracker.next(), label: label, popover: { title: 'Select Refresh Period' }, onClick: function () { return _this.onRefresh(); } }, optionEles));
        return html;
    };
    return AutoRefreshButton;
}(Component));
var DropdownActionButton = /** @class */ (function (_super) {
    __extends(DropdownActionButton, _super);
    function DropdownActionButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { open: false };
        return _this;
    }
    DropdownActionButton.prototype.toggle = function () {
        this.setState(function (prevState) { return ({ open: !prevState.open }); });
    };
    DropdownActionButton.prototype.onSelectItem = function (item) {
        if (item.onSelect)
            item.onSelect(item);
    };
    DropdownActionButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, icon = _a.icon, hint = _a.hint, items = _a.items, align = _a.align, color = _a.color;
        var right = align === 'right';
        var itemEles = [];
        var _loop_2 = function (i) {
            var item = items[i];
            if (item.divider) {
                itemEles.push((React__default.createElement(DropdownItem, { key: i, divider: true })));
            }
            else {
                itemEles.push((React__default.createElement(DropdownItem, { key: i, onClick: function () { return _this.onSelectItem(item); } }, item.label)));
            }
        };
        for (var i = 0; i < items.length; i++) {
            _loop_2(i);
        }
        var iconUI = null;
        if (icon) {
            iconUI = (React__default.createElement("span", { className: icon, title: hint }));
        }
        var html = (React__default.createElement(Dropdown, { isOpen: this.state.open, toggle: function () { return _this.toggle(); } },
            React__default.createElement(DropdownToggle, { caret: true, color: color },
                iconUI,
                label),
            React__default.createElement(DropdownMenu, { right: right }, itemEles)));
        return html;
    };
    return DropdownActionButton;
}(Component));
var DropdownSelectItemButton = /** @class */ (function (_super) {
    __extends(DropdownSelectItemButton, _super);
    function DropdownSelectItemButton(props) {
        var _this = _super.call(this, props) || this;
        var items = props.items, selectItem = props.selectItem;
        if (!selectItem)
            selectItem = items[0];
        _this.state = { open: false, selectItem: selectItem };
        return _this;
    }
    DropdownSelectItemButton.prototype.toggle = function () { this.setState(function (prevState) { return ({ open: !prevState.open }); }); };
    DropdownSelectItemButton.prototype.onSelectItem = function (item) {
        this.setState({ selectItem: item });
        var onSelect = this.props.onSelect;
        if (onSelect)
            onSelect(item);
    };
    DropdownSelectItemButton.prototype.render = function () {
        var _this = this;
        var items = this.props.items;
        var selectItem = this.state.selectItem;
        var itemEles = [];
        var _loop_3 = function (i) {
            var item = items[i];
            itemEles.push((React__default.createElement(DropdownItem, { key: i, onClick: function () { return _this.onSelectItem(item); } },
                React__default.createElement("input", { type: "checkbox", checked: item === selectItem, readOnly: true }),
                " ",
                item)));
        };
        for (var i = 0; i < items.length; i++) {
            _loop_3(i);
        }
        var html = (React__default.createElement(Dropdown, { isOpen: this.state.open, toggle: function () { return _this.toggle(); } },
            React__default.createElement(DropdownToggle, { caret: true }, selectItem),
            React__default.createElement(DropdownMenu, null, itemEles)));
        return html;
    };
    return DropdownSelectItemButton;
}(Component));
var DropdownSelectComplexItemButton = /** @class */ (function (_super) {
    __extends(DropdownSelectComplexItemButton, _super);
    function DropdownSelectComplexItemButton(props) {
        var _this = _super.call(this, props) || this;
        _this.keepOpen = false;
        _this.state = { open: false };
        return _this;
    }
    DropdownSelectComplexItemButton.prototype.toggle = function () {
        if (this.keepOpen) {
            this.keepOpen = false;
            this.forceUpdate();
        }
        else {
            this.setState(function (prevState) { return ({ open: !prevState.open }); });
        }
    };
    DropdownSelectComplexItemButton.prototype.onSelect = function (item) {
        var _a = this.props, onSelect = _a.onSelect, fieldCheck = _a.fieldCheck;
        item[fieldCheck] = !item[fieldCheck];
        if (onSelect)
            onSelect(item);
        this.keepOpen = true;
    };
    DropdownSelectComplexItemButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, items = _a.items, fieldLabel = _a.fieldLabel, fieldCheck = _a.fieldCheck;
        var itemEles = [];
        var _loop_4 = function (i) {
            var item = items[i];
            var checkedVal = item[fieldCheck] ? item[fieldCheck] : false;
            itemEles.push((React__default.createElement(DropdownItem, { key: i, onClick: function () { return _this.onSelect(item); } },
                React__default.createElement("input", { type: "checkbox", name: fieldCheck, value: checkedVal, checked: checkedVal, readOnly: true }),
                " ",
                item[fieldLabel])));
        };
        for (var i = 0; i < items.length; i++) {
            _loop_4(i);
        }
        var html = (React__default.createElement(Dropdown, { isOpen: this.state.open, toggle: function () { return _this.toggle(); } },
            React__default.createElement(DropdownToggle, { caret: true }, label),
            React__default.createElement(DropdownMenu, null, itemEles)));
        return html;
    };
    return DropdownSelectComplexItemButton;
}(Component));
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { progress: 1 };
        _this.state = _this.initState(props);
        return _this;
    }
    ProgressBar.prototype.componentWillReceiveProps = function (nextProps) {
        var state = this.initState(nextProps);
        this.setState(state);
    };
    ProgressBar.prototype.componentWillMount = function () { };
    ProgressBar.prototype.initState = function (props) {
        var progress = props.progress, duration = props.duration;
        var state = { progress: progress ? progress : 1 };
        if (!duration)
            duration = 1000;
        var period = duration / 100;
        var ProgressBar = this;
        var frame = function () {
            if (progress >= 100) {
                clearInterval(id);
            }
            else {
                progress += period;
                var state_1 = { progress: progress };
                ProgressBar.setState(state_1);
            }
        };
        var id = setInterval(frame, period);
        return state;
    };
    ProgressBar.prototype.render = function () {
        var progress = this.state.progress;
        var html = (React__default.createElement("div", { className: "progress", style: { height: 20 } },
            React__default.createElement("div", { className: "progress-bar bg-info", role: "progressbar", style: { width: progress + '%' }, "aria-valuenow": progress, "aria-valuemin": 0, "aria-valuemax": 100 })));
        return html;
    };
    return ProgressBar;
}(Component));

var element = /*#__PURE__*/Object.freeze({
  WButton: WButton,
  PopoverButton: PopoverButton,
  ButtonWithDropdown: ButtonWithDropdown,
  AutoRefreshButton: AutoRefreshButton,
  DropdownActionButton: DropdownActionButton,
  DropdownSelectItemButton: DropdownSelectItemButton,
  DropdownSelectComplexItemButton: DropdownSelectComplexItemButton,
  ProgressBar: ProgressBar
});

var COMPACT_DATETIME_FORMAT$2 = "DD/MM/YYYY@HH:mm:ssZ";
function isNormalInteger(value) {
    var x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
}
function isDecimal(str) {
    return str.match(/^[-+]?[0-9]+(\.[0-9]+)?$/) != null;
}
var ErrorCollector = /** @class */ (function () {
    function ErrorCollector() {
        this.errors = {};
        this.count = 0;
    }
    ErrorCollector.prototype.getCount = function () { return this.count; };
    ErrorCollector.prototype.getErrors = function () { return this.errors; };
    ErrorCollector.prototype.collect = function (name, error) {
        if (!this.errors[name]) {
            this.errors[name] = error;
            this.count++;
        }
    };
    ErrorCollector.prototype.remove = function (name) {
        if (this.errors[name]) {
            this.errors[name] = null;
            this.count--;
        }
    };
    ErrorCollector.prototype.dump = function () {
        console.log('ErrorCollector:');
        console.log('  count = ' + this.count);
        for (var name_1 in this.errors) {
            console.log("  " + name_1 + " = " + this.errors[name_1]);
        }
    };
    return ErrorCollector;
}());
var WInput = /** @class */ (function (_super) {
    __extends(WInput, _super);
    function WInput(props) {
        var _this = _super.call(this, props) || this;
        _this.customClass = null;
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onFocusLost = _this.onFocusLost.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.message = null;
        _this.state = _this.createInitState(_this.props);
        return _this;
    }
    WInput.prototype.componentWillMount = function () {
        this.onPostReceiveProps(this.props, this.state);
    };
    WInput.prototype.componentWillUnmount = function () {
    };
    WInput.prototype.componentWillReceiveProps = function (props) {
        var state = this.createInitState(props);
        this.onPostReceiveProps(props, state);
        this.setState(state);
    };
    WInput.prototype.createInitState = function (props) {
        var name = props.name, value = props.value, errorCollector = props.errorCollector, validators = props.validators, disable = props.disable;
        var inputValue = value ? value : '';
        var state = { message: null, value: value, inputValue: inputValue };
        if (!disable && validators) {
            try {
                this.runValidation(value, value);
            }
            catch (err) {
                if (errorCollector)
                    errorCollector.collect(name, err.message);
                state.message = err.message;
            }
        }
        return state;
    };
    WInput.prototype.getMessage = function () { return this.message; };
    WInput.prototype.onPostReceiveProps = function (_props, _state) { };
    WInput.prototype.onFocus = function (evt) {
        if (this.props.disable)
            return;
        evt.target.select();
        if (this.state.message)
            this.setState({ message: null });
    };
    WInput.prototype.onFocusLost = function (evt) {
        if (this.props.disable)
            return;
        this.updateValue(evt.target.value);
    };
    WInput.prototype.updateValue = function (newVal) {
        var _a = this.props, name = _a.name, errorCollector = _a.errorCollector, onInputChange = _a.onInputChange;
        var oldVal = this.state.value;
        try {
            if (newVal && newVal.trim)
                newVal = newVal.trim();
            var val = this.convert(newVal);
            this.message = null;
            this.setState({ message: null, value: val, inputValue: val });
            this.runValidation(oldVal, val);
            if (onInputChange)
                onInputChange(oldVal, val);
            this.runBGValidation(oldVal, newVal);
        }
        catch (err) {
            var errMsg = err.message;
            if (errorCollector)
                errorCollector.collect(name, errMsg);
            this.setState({ message: errMsg, inputValue: oldVal });
            this.message = errMsg;
        }
    };
    WInput.prototype.runValidation = function (_oldVal, newVal) {
        var _a = this.props, name = _a.name, validators = _a.validators, errorCollector = _a.errorCollector;
        if (errorCollector)
            errorCollector.remove(name);
        if (validators != null) {
            for (var i = 0; i < validators.length; i++) {
                validators[i].validate(newVal);
            }
        }
    };
    WInput.prototype.runBGValidation = function (oldVal, newVal) {
        if (newVal === oldVal)
            return;
        var _a = this.props, name = _a.name, bgValidator = _a.bgValidator, errorCollector = _a.errorCollector;
        if (!bgValidator)
            return;
        var WInput = this;
        var validateCB = function (validate, mesg) {
            if (!validate) {
                if (errorCollector)
                    errorCollector.collect(name, mesg);
                WInput.setState({ message: mesg, value: oldVal, inputValue: oldVal });
            }
        };
        bgValidator.validate(oldVal, newVal, validateCB);
    };
    WInput.prototype.convert = function (_newVal) { throw new Error('this method need to be implemented'); };
    WInput.prototype.onChange = function (e) {
        var oldVal = this.state.inputValue;
        var onChange = this.props.onChange;
        this.setState({ inputValue: e.target.value });
        if (onChange)
            onChange(oldVal, e.target.value);
    };
    WInput.prototype.onKeyDown = function (e) {
        var onKeyDown = this.props.onKeyDown;
        if (onKeyDown) {
            var currInput = this.state.inputValue;
            onKeyDown(this, e, e.keyCode, currInput);
        }
    };
    WInput.prototype.toDisplayValue = function (value) {
        if (!value)
            return '';
        return value;
    };
    WInput.prototype._getInputType = function () { return 'text'; };
    WInput.prototype._getCustomClass = function () { return null; };
    WInput.prototype.render = function () {
        var _this = this;
        var _a = this.props, style = _a.style, className = _a.className, name = _a.name, placeholder = _a.placeholder, disable = _a.disable, focus = _a.focus;
        var inputValue = this.state.inputValue;
        var displayValue = this.toDisplayValue(inputValue);
        var classes = className ? "form-control " + className : 'form-control';
        if (this.state.message) {
            displayValue = this.state.message;
            classes = classes + ' form-control-error';
        }
        if (this.customClass)
            classes = classes + ' ' + this.customClass;
        var type = this._getInputType();
        return (React__default.createElement("input", { style: style, className: classes, autoFocus: focus ? true : false, type: type, name: name, value: displayValue, placeholder: placeholder, readOnly: disable, autoComplete: "off", onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onFocusLost, onKeyDown: function (e) { return _this.onKeyDown(e); } }));
    };
    return WInput;
}(Component));
var WStringInput = /** @class */ (function (_super) {
    __extends(WStringInput, _super);
    function WStringInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WStringInput.prototype.convert = function (newVal) { return newVal; };
    return WStringInput;
}(WInput));
var WPasswordInput = /** @class */ (function (_super) {
    __extends(WPasswordInput, _super);
    function WPasswordInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WPasswordInput.prototype._getInputType = function () { return 'password'; };
    return WPasswordInput;
}(WStringInput));
var WTextInput = /** @class */ (function (_super) {
    __extends(WTextInput, _super);
    function WTextInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WTextInput.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, name = _a.name, placeholder = _a.placeholder, disable = _a.disable;
        var inputValue = this.state.inputValue;
        var displayValue = this.toDisplayValue(inputValue);
        if (this.state.message)
            displayValue = this.state.message;
        className = className ? className + " form-control" : 'form-control';
        var html = (React__default.createElement("textarea", { style: style, className: className, name: name, placeholder: placeholder, readOnly: disable, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onFocusLost, value: displayValue }));
        return html;
    };
    return WTextInput;
}(WStringInput));
var WIntInput = /** @class */ (function (_super) {
    __extends(WIntInput, _super);
    function WIntInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WIntInput.prototype.onPostReceiveProps = function (_props, _state) { this.customClass = 'input-number'; };
    WIntInput.prototype.convert = function (newVal) {
        if (isNormalInteger(newVal))
            return parseInt(newVal, 10);
        throw new Error(newVal + ' is not a number');
    };
    return WIntInput;
}(WInput));
var WLongInput = /** @class */ (function (_super) {
    __extends(WLongInput, _super);
    function WLongInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WLongInput.prototype.onPostReceiveProps = function (_props, _state) { this.customClass = 'input-number'; };
    WLongInput.prototype.convert = function (value) {
        if (isNormalInteger(value))
            return parseInt(value, 10);
        throw new Error(value + ' is not a long number');
    };
    return WLongInput;
}(WInput));
var WFloatInput = /** @class */ (function (_super) {
    __extends(WFloatInput, _super);
    function WFloatInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WFloatInput.prototype.onPostReceiveProps = function (_props, _state) { this.customClass = 'input-number'; };
    WFloatInput.prototype.convert = function (value) {
        if (!value)
            return '';
        if (isDecimal(value))
            return parseFloat(value);
        throw new Error(value + ' is not a float number');
    };
    return WFloatInput;
}(WInput));
var WDoubleInput = /** @class */ (function (_super) {
    __extends(WDoubleInput, _super);
    function WDoubleInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WDoubleInput.prototype.onPostReceiveProps = function (_props, _state) { this.customClass = 'input-number'; };
    WDoubleInput.prototype.convert = function (value) {
        value = value.replace(/,/g, '');
        if (isDecimal(value))
            return parseFloat(value);
        throw new Error(value + " is not a double number");
    };
    WDoubleInput.prototype.toDisplayValue = function (value) {
        if (!value)
            return '0';
        if (!value || typeof value === 'string' || value instanceof String)
            return value;
        return formater.number(value);
    };
    return WDoubleInput;
}(WInput));
var WNumberInput = /** @class */ (function (_super) {
    __extends(WNumberInput, _super);
    function WNumberInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WNumberInput.prototype.toDisplayValue = function (value) {
        if (!value)
            return '0';
        if (!value || typeof value === 'string' || value instanceof String)
            return value;
        return formater.number(value);
    };
    return WNumberInput;
}(WDoubleInput));
var WPercentInput = /** @class */ (function (_super) {
    __extends(WPercentInput, _super);
    function WPercentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WPercentInput.prototype.onPostReceiveProps = function (_props, _state) { this.customClass = 'input-number'; };
    WPercentInput.prototype.convert = function (value) {
        value = value.replace(/%/g, '');
        value = value.replace(/,/g, '');
        if (isDecimal(value))
            return parseFloat(value) / 100;
        throw new Error(value + ' is not a double number');
    };
    WPercentInput.prototype.toDisplayValue = function (value) {
        if (!value)
            return '0';
        if (!value || typeof value === 'string' || value instanceof String)
            return value;
        return formater.percent(value);
    };
    return WPercentInput;
}(WInput));
var WArrayInput = /** @class */ (function (_super) {
    __extends(WArrayInput, _super);
    function WArrayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WArrayInput.prototype.componentWillMount = function () {
        this.componentWillReceiveProps(this.props);
    };
    WArrayInput.prototype.componentWillReceiveProps = function (nextProps) {
        var values = nextProps.value;
        var inputValues = [];
        if (values != null && values.length > 0) {
            for (var i = 0; i < values.length; i++) {
                inputValues.push({ message: null, value: values[i], inputValue: values[i] });
            }
        }
        var newState = { inputValues: inputValues, oldValues: values };
        this.setState(newState);
    };
    WArrayInput.prototype.onFocus = function (idx, _evt) {
        var inputValues = this.state.inputValues;
        inputValues[idx].message = null;
        this.setState({ inputValues: inputValues });
        this.forceUpdate();
    };
    WArrayInput.prototype.onFocusLost = function (idx, evt) {
        var _a = this.props, name = _a.name, validators = _a.validators, errorCollector = _a.errorCollector, onInputChange = _a.onInputChange;
        var inputValues = this.state.inputValues;
        var newVal = this.convert(evt.target.value.trim());
        try {
            if (validators != null) {
                for (var i = 0; i < validators.length; i++) {
                    validators[i].validate(newVal);
                }
            }
            if (errorCollector)
                errorCollector.remove(name);
            inputValues[idx].value = newVal;
            if (onInputChange) {
                var values = [];
                for (var i = 0; i < inputValues.length; i++) {
                    values.push(inputValues[i].value);
                }
                onInputChange(this.state.oldValues, values);
                this.setState({ oldValues: values });
            }
        }
        catch (err) {
            var inputValues_1 = this.state.inputValues;
            inputValues_1[idx].message = err.toString();
            this.setState({ inputValues: inputValues_1 });
        }
    };
    WArrayInput.prototype.convert = function (newVal) { return newVal; };
    WArrayInput.prototype.onChange = function (idx, e) {
        var inputValues = this.state.inputValues;
        inputValues[idx].inputValue = e.target.value;
        this.setState({ inputValues: inputValues });
    };
    WArrayInput.prototype.onRemove = function (idx) {
        var inputValues = this.state.inputValues;
        inputValues.splice(idx, 1);
        var onInputChange = this.props.onInputChange;
        if (onInputChange) {
            var values = [];
            for (var i = 0; i < inputValues.length; i++) {
                values.push(inputValues[i].value);
            }
            onInputChange(this.state.oldValues, values);
        }
        this.setState({ inputValues: inputValues });
    };
    WArrayInput.prototype.onAddNew = function () {
        var inputValues = this.state.inputValues;
        inputValues.push({ message: null, value: '', inputValue: '' });
        this.setState({ inputValues: inputValues });
    };
    WArrayInput.prototype.isFieldEditable = function () { return true; };
    WArrayInput.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, disable = _a.disable, onKeyDown = _a.onKeyDown;
        var readOnly = !this.isFieldEditable() || disable ? true : false;
        var inputValues = this.state.inputValues;
        var inputs = [];
        var renderDelete = null;
        var _loop_1 = function (i) {
            var ivalue = inputValues[i];
            var inputValue = ivalue.inputValue;
            if (ivalue.message)
                inputValue = ivalue.message;
            if (!readOnly) {
                renderDelete = (React__default.createElement("div", { className: "input-group-prepend" },
                    React__default.createElement(Button, { color: 'link', onClick: function (_evt) { return _this.onRemove(i); } },
                        React__default.createElement("span", { className: ICONS.editor.minus }))));
            }
            inputs.push((React__default.createElement("div", { key: i, className: 'input-group mb-1' },
                React__default.createElement("input", { className: 'form-control', type: 'text', name: "name" + i, value: inputValue, placeholder: placeholder, readOnly: readOnly, onChange: function (e) { return _this.onChange(i, e); }, onFocus: function (e) { return _this.onFocus(i, e); }, onBlur: function (e) { return _this.onFocusLost(i, e); }, onKeyDown: onKeyDown, autoComplete: 'off' }),
                renderDelete)));
        };
        for (var i = 0; i < inputValues.length; i++) {
            _loop_1(i);
        }
        var html = (React__default.createElement("div", { style: { display: 'flex', flexDirection: 'column', width: '100%' } },
            inputs,
            this.renderAdd(readOnly)));
        return html;
    };
    WArrayInput.prototype.renderAdd = function (readOnly) {
        var _this = this;
        if (readOnly)
            return null;
        var disableAdd = this.props.disableAdd;
        if (disableAdd)
            return null;
        var html = (React__default.createElement("div", null,
            React__default.createElement(Button, { color: 'link', onClick: function (_evt) { return _this.onAddNew(); } },
                React__default.createElement("span", { className: ICONS.editor.plus }))));
        return html;
    };
    return WArrayInput;
}(Component));
var WStringArrayInput = /** @class */ (function (_super) {
    __extends(WStringArrayInput, _super);
    function WStringArrayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WStringArrayInput.prototype.convert = function (newVal) { return newVal; };
    return WStringArrayInput;
}(WArrayInput));
var WIntArrayInput = /** @class */ (function (_super) {
    __extends(WIntArrayInput, _super);
    function WIntArrayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WIntArrayInput.prototype.convert = function (newVal) {
        if (isNormalInteger(newVal))
            return parseInt(newVal, 10);
        throw new Error(newVal + ' is not a number');
    };
    return WIntArrayInput;
}(WArrayInput));
var WLongArrayInput = /** @class */ (function (_super) {
    __extends(WLongArrayInput, _super);
    function WLongArrayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WLongArrayInput.prototype.convert = function (value) {
        if (isNormalInteger(value))
            return parseInt(value, 10);
        throw new Error(value + ' is not a long number');
    };
    return WLongArrayInput;
}(WArrayInput));
var WFloatArrayInput = /** @class */ (function (_super) {
    __extends(WFloatArrayInput, _super);
    function WFloatArrayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WFloatArrayInput.prototype.convert = function (value) {
        if (isDecimal(value))
            return parseFloat(value);
        throw new Error(value + ' is not a float number');
    };
    return WFloatArrayInput;
}(WArrayInput));
var WDoubleArrayInput = /** @class */ (function (_super) {
    __extends(WDoubleArrayInput, _super);
    function WDoubleArrayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WDoubleArrayInput.prototype.convert = function (value) {
        if (isDecimal(value))
            return parseFloat(value);
        throw new Error(value + ' is not a double number');
    };
    return WDoubleArrayInput;
}(WArrayInput));
var WRadioInput = /** @class */ (function (_super) {
    __extends(WRadioInput, _super);
    function WRadioInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WRadioInput.prototype.componentWillMount = function () {
        this.componentWillReceiveProps(this.props);
    };
    WRadioInput.prototype.componentWillReceiveProps = function (nextProps) {
        var select = nextProps.select;
        this.setState({ select: select });
    };
    WRadioInput.prototype.onSelect = function (idx) {
        var _a = this.props, onInputChange = _a.onInputChange, options = _a.options;
        var oldVal = this.state.select;
        var newVal = options[idx];
        if (onInputChange)
            onInputChange(oldVal, newVal);
        this.setState({ select: newVal });
    };
    WRadioInput.prototype.render = function () {
        var _this = this;
        var _a = this.props, name = _a.name, options = _a.options, optionLabels = _a.optionLabels, disable = _a.disable, style = _a.style;
        var select = this.state.select;
        if (!optionLabels)
            optionLabels = options;
        var inputBlocks = [];
        var _loop_2 = function (i) {
            var option = options[i];
            inputBlocks.push(React__default.createElement("div", { key: i, style: { display: 'flex', flexFlow: 'row nowrap' } },
                React__default.createElement("input", { type: 'radio', name: name, value: option, disabled: disable, checked: option === select, onChange: function () { return _this.onSelect(i); } }),
                React__default.createElement("span", { className: 'ml-1 mr-2', style: { display: 'inline-block' } }, optionLabels[i])));
        };
        for (var i = 0; i < options.length; i++) {
            _loop_2(i);
        }
        if (!style)
            style = { display: 'flex', flexFlow: 'row wrap', width: '100%' };
        var html = (React__default.createElement("div", { style: style },
            " ",
            inputBlocks,
            " "));
        return html;
    };
    return WRadioInput;
}(Component));
var WCheckboxInput = /** @class */ (function (_super) {
    __extends(WCheckboxInput, _super);
    function WCheckboxInput(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { checked: props.checked };
        return _this;
    }
    WCheckboxInput.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ checked: nextProps.checked });
    };
    WCheckboxInput.prototype.onSelect = function () {
        var onInputChange = this.props.onInputChange;
        var checked = !this.state.checked;
        if (onInputChange)
            onInputChange(checked);
        this.setState({ checked: checked });
    };
    WCheckboxInput.prototype.render = function () {
        var _this = this;
        var _a = this.props, name = _a.name, label = _a.label, disable = _a.disable;
        var checked = this.state.checked;
        if (!label) {
            return (React__default.createElement("input", { type: 'checkbox', name: name, value: name, disabled: disable, checked: checked, onChange: function () { return _this.onSelect(); } }));
        }
        var html = (React__default.createElement("div", { style: { display: 'flex', flexFlow: 'row wrap', width: '100%' } },
            React__default.createElement("input", { type: 'checkbox', name: name, value: name, disabled: disable, checked: checked, onChange: function () { return _this.onSelect(); } }),
            React__default.createElement("span", { className: 'ml-1 mr-2', style: { display: 'inline-block' } }, label)));
        return html;
    };
    return WCheckboxInput;
}(Component));
var WMultiCheckboxInput = /** @class */ (function (_super) {
    __extends(WMultiCheckboxInput, _super);
    function WMultiCheckboxInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WMultiCheckboxInput.prototype.componentWillMount = function () {
        this.componentWillReceiveProps(this.props);
    };
    WMultiCheckboxInput.prototype.componentWillReceiveProps = function (nextProps) {
        var select = nextProps.select, options = nextProps.options;
        var checked = [];
        for (var i = 0; i < options.length; i++) {
            checked[i] = false;
            if (select) {
                for (var j = 0; j < select.length; j++) {
                    if (options[i] == select[j]) {
                        checked[i] = true;
                        break;
                    }
                }
            }
        }
        this.setState({ select: select, checked: checked });
    };
    WMultiCheckboxInput.prototype.onSelect = function (idx) {
        var _a = this.props, onInputChange = _a.onInputChange, options = _a.options;
        var oldVal = this.state.select;
        this.state.checked[idx] = !this.state.checked[idx];
        var newVal = [];
        for (var i = 0; i < options.length; i++) {
            if (this.state.checked[i]) {
                newVal.push(options[i]);
            }
        }
        if (onInputChange)
            onInputChange(oldVal, newVal);
        this.setState({ select: newVal });
    };
    WMultiCheckboxInput.prototype.render = function () {
        var _this = this;
        var _a = this.props, name = _a.name, options = _a.options, optionLabels = _a.optionLabels, disable = _a.disable;
        var checked = this.state.checked;
        if (!optionLabels)
            optionLabels = options;
        var inputBlocks = [];
        var _loop_3 = function (i) {
            var option = options[i];
            inputBlocks.push(React__default.createElement("div", { key: i, style: { display: 'flex', flexFlow: 'row nowrap' } },
                React__default.createElement("input", { type: 'checkbox', name: name, value: option, disabled: disable, checked: checked[i], onChange: function () { return _this.onSelect(i); } }),
                React__default.createElement("span", { className: 'ml-1 mr-2', style: { display: 'inline-block' } }, optionLabels[i])));
        };
        for (var i = 0; i < options.length; i++) {
            _loop_3(i);
        }
        var html = (React__default.createElement("div", { style: { display: 'flex', flexFlow: 'row wrap', width: '100%' } }, inputBlocks));
        return html;
    };
    return WMultiCheckboxInput;
}(Component));
var WSelect = /** @class */ (function (_super) {
    __extends(WSelect, _super);
    function WSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { select: props.select };
        return _this;
    }
    WSelect.prototype.componentWillReceiveProps = function (nextProps) {
        var select = nextProps.select;
        this.setState({ select: select });
    };
    WSelect.prototype.onChange = function (event) {
        var options = this.props.options;
        var value = event.target.value;
        for (var i = 0; i < options.length; i++) {
            if (options[i] == value) {
                if (this.props.onSelect)
                    this.props.onSelect(options[i]);
                break;
            }
        }
        this.setState({ select: value });
    };
    WSelect.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, style = _a.style, disable = _a.disable, optionLabels = _a.optionLabels;
        var select = this.state.select;
        var optionHtml = [];
        for (var i = 0; i < options.length; i++) {
            var label = options[i];
            if (optionLabels) {
                label = optionLabels[i];
            }
            optionHtml.push((React__default.createElement("option", { key: i, value: options[i] }, label)));
        }
        var html = (React__default.createElement("select", { className: 'form-control', style: style, disabled: disable, onChange: function (evt) { return _this.onChange(evt); }, value: select }, optionHtml));
        return html;
    };
    return WSelect;
}(Component));
var WBeanSelect = /** @class */ (function (_super) {
    __extends(WBeanSelect, _super);
    function WBeanSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.open = false;
        _this.state = { select: _this.props.select };
        return _this;
    }
    WBeanSelect.prototype.onSelect = function (idx) {
        var _a = this.props, options = _a.options, fieldCheck = _a.fieldCheck, onSelect = _a.onSelect;
        var newOpt = options[idx];
        if (onSelect)
            onSelect(newOpt);
        this.setState({ select: newOpt[fieldCheck] });
    };
    WBeanSelect.prototype.toggle = function () {
        this.open = !this.open;
        this.forceUpdate();
    };
    WBeanSelect.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, fieldLabel = _a.fieldLabel, fieldCheck = _a.fieldCheck;
        var select = this.state.select;
        var optHtml = [];
        var selectLabel = select;
        var _loop_4 = function (i) {
            var opt = options[i];
            var checked = opt[fieldCheck] === select;
            if (checked)
                selectLabel = opt[fieldLabel];
            optHtml.push((React__default.createElement(DropdownItem, { key: i, onClick: function () { return _this.onSelect(i); } },
                React__default.createElement("input", { type: "checkbox", defaultChecked: checked }),
                React__default.createElement("label", { className: 'pl-2' }, opt[fieldLabel]))));
        };
        for (var i = 0; i < options.length; i++) {
            _loop_4(i);
        }
        var htmlTemplate = (React__default.createElement(Dropdown, { isOpen: this.open, toggle: function () { return _this.toggle(); } },
            React__default.createElement(DropdownToggle, { caret: true }, selectLabel),
            React__default.createElement(DropdownMenu, null, optHtml)));
        return htmlTemplate;
    };
    return WBeanSelect;
}(Component));
var WDateTime = /** @class */ (function (_super) {
    __extends(WDateTime, _super);
    function WDateTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WDateTime.prototype.componentWillMount = function () {
        this.componentWillReceiveProps(this.props);
    };
    WDateTime.prototype.componentWillReceiveProps = function (nextProps) {
        var value = nextProps.value;
        this.setState({ value: value });
    };
    WDateTime.prototype.onChange = function (value) {
        this.setState({ value: value });
        if (value === '') {
            var onCommitChange = this.props.onCommitChange;
            if (onCommitChange)
                onCommitChange(null);
        }
    };
    WDateTime.prototype.onBlur = function (datetime) {
        if (typeof datetime === 'string' || datetime instanceof String) {
            if (!datetime)
                datetime = '';
            else
                datetime = this.props.value;
        }
        this.setState({ value: datetime });
        var onCommitChange = this.props.onCommitChange;
        if (onCommitChange)
            onCommitChange(datetime);
    };
    WDateTime.prototype.render = function () {
        var _this = this;
        var _a = this.props, dateFormat = _a.dateFormat, timeFormat = _a.timeFormat, disable = _a.disable;
        var value = this.state.value;
        if (!dateFormat)
            dateFormat = 'DD-MM-YYYY';
        if (!timeFormat)
            timeFormat = false;
        return (React__default.createElement("div", { className: 'd-flex justify-content-end bg-light' },
            React__default.createElement(DateTime, { value: value, dateFormat: dateFormat, timeFormat: timeFormat, inputProps: { disabled: disable }, closeOnSelect: true, onChange: function (value) { return _this.onChange(value); }, onBlur: function (moment$$1) { return _this.onBlur(moment$$1); } })));
    };
    return WDateTime;
}(Component));
var WAutoComplete = /** @class */ (function (_super) {
    __extends(WAutoComplete, _super);
    function WAutoComplete(props) {
        var _this = _super.call(this, props) || this;
        _this.inputWidth = 200;
        _this.errorMessage = null;
        var value = props.value;
        _this.autoCompleteInput = React__default.createRef();
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onFocusLost = _this.onFocusLost.bind(_this);
        _this.onChange = _this.onChange.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        var validated = value ? true : false;
        _this.state = {
            input: value ? value : '', dropdown: false, options: [], currSelect: -1,
            focus: false, validated: validated
        };
        if (!validated)
            _this.runInitValidation(null, value, value);
        return _this;
    }
    WAutoComplete.prototype.componentWillReceiveProps = function (nextProps) {
        this.autofocus(nextProps);
        var value = nextProps.value;
        if (value === undefined)
            value = '';
        var validated = value ? true : false;
        this.setState({ input: value, dropdown: false, options: [], currSelect: -1, validated: validated });
        if (!validated)
            this.runValidation(null, value, value);
    };
    WAutoComplete.prototype.componentDidMount = function () {
        this.inputWidth = this.autoCompleteInput.current.offsetWidth;
    };
    WAutoComplete.prototype.autofocus = function (props) {
        if (props.autofocus) {
            this.inputWidth = this.autoCompleteInput.current.offsetWidth;
            this.autoCompleteInput.current.focus();
        }
    };
    WAutoComplete.prototype.onFocus = function (evt) {
        if (this.props.disable)
            return;
        evt.target.select();
        this.setState({ focus: true });
    };
    WAutoComplete.prototype.onFocusLost = function (_evt) {
        var thisUI = this;
        setTimeout(function () {
            if (!thisUI.state.validated) {
                thisUI.updateValue(null, '');
                thisUI.setState({ focus: false });
            }
            else {
                thisUI.setState({ focus: false, dropdown: false, currSelect: -1 });
            }
        }, 200);
    };
    WAutoComplete.prototype.runInitValidation = function (_bean, _oldVal, newVal) {
        var validators = this.props.validators;
        if (!validators)
            return;
        try {
            for (var i = 0; i < validators.length; i++) {
                validators[i].validate(newVal);
            }
        }
        catch (err) {
            this.errorMessage = err.message;
        }
    };
    WAutoComplete.prototype.runValidation = function (_bean, _oldVal, newVal) {
        var validators = this.props.validators;
        if (!validators)
            return true;
        try {
            for (var i = 0; i < validators.length; i++) {
                validators[i].validate(newVal);
            }
        }
        catch (err) {
            this.errorMessage = err.message;
            this.setState({ dropdown: false, input: '', currSelect: -1, validated: false });
            return false;
        }
        this.errorMessage = null;
        this.setState({ validated: true });
        return true;
    };
    WAutoComplete.prototype.updateValue = function (bean, newVal) {
        var onInputChange = this.props.onInputChange;
        var oldVal = this.state.input;
        if (newVal && newVal.trim)
            newVal = newVal.trim();
        var validate = this.runValidation(bean, oldVal, newVal);
        if (validate) {
            this.setState({ dropdown: false, input: newVal, currSelect: -1 });
            if (onInputChange)
                onInputChange(bean, oldVal, newVal);
        }
    };
    /**
     * 1. onKeyDown is called before onChange
     * 2. onChange won't be called for certain key such ENTER, ESC...
     */
    WAutoComplete.prototype.onKeyDown = function (e) {
        var onCreateNew = this.props.onCreateNew;
        var keyCode = e.keyCode;
        var _a = this.state, options = _a.options, currSelect = _a.currSelect;
        var WAutoComplete = this;
        setTimeout(function () {
            if (keyCode === KeyCode.ENTER) {
                WAutoComplete.onSelectOption(WAutoComplete.state.currSelect);
            }
        }, 200);
        if (keyCode === KeyCode.ARROW_UP) {
            if (currSelect - 1 >= 0) {
                this.setState({ currSelect: currSelect - 1 });
            }
        }
        else if (keyCode === KeyCode.ARROW_DOWN) {
            if (currSelect + 1 < options.length) {
                this.setState({ currSelect: currSelect + 1 });
            }
            else if (currSelect + 1 == options.length && onCreateNew) {
                this.setState({ currSelect: currSelect + 1 });
            }
        }
        else if (keyCode === KeyCode.ESC) {
            this.setState({ dropdown: false, input: '', currSelect: -1, validated: false });
        }
    };
    WAutoComplete.prototype.onChange = function (e) {
        var _this = this;
        var value = e.target.value;
        var filter = this.props.filter;
        this.setState({ input: value, validated: false });
        if (filter) {
            var onChangeCallback = function (options) {
                var currSelect = options.length > 0 ? 0 : -1;
                var state = { options: options, dropdown: true, currSelect: currSelect };
                _this.setState(state);
            };
            filter(value, onChangeCallback);
        }
    };
    WAutoComplete.prototype.onSelectOption = function (idx) {
        var options = this.state.options;
        var _a = this.props, onCreateNew = _a.onCreateNew, inputField = _a.inputField;
        if (idx == options.length && onCreateNew) {
            onCreateNew(this);
            this.setState({ input: '', options: [], dropdown: false });
            return;
        }
        var selectOpt = options[idx];
        var newVal = null;
        if (inputField) {
            newVal = selectOpt[inputField];
        }
        else {
            newVal = selectOpt;
        }
        this.updateValue(selectOpt, newVal);
    };
    WAutoComplete.prototype.primitiveOptionRender = function (options, _selIndex) {
        var _this = this;
        var optionHtml = [];
        var max = options.length;
        if (max > 15)
            max = 15;
        var _loop_5 = function (i) {
            var className = i === this_1.state.currSelect ? 'option-selected' : 'option';
            var active = false;
            var currSelect = this_1.state.currSelect;
            if (currSelect === i)
                active = true;
            optionHtml.push((React__default.createElement(DropdownItem, { key: i, active: active, style: { width: '99%' } },
                React__default.createElement("div", { key: i, className: className, onClick: function () { return _this.onSelectOption(i); } }, options[i]))));
        };
        var this_1 = this;
        for (var i = 0; i < max; i++) {
            _loop_5(i);
        }
        if (options.length > max) {
            optionHtml.push((React__default.createElement("div", { key: 'more', className: 'more' }, "...")));
        }
        return optionHtml;
    };
    WAutoComplete.prototype.optionRender = function (options, inputField, descriptionField, _selIndex) {
        var _this = this;
        var optionHtml = [];
        var max = options.length;
        var currSelect = this.state.currSelect;
        if (max > 15)
            max = 15;
        var _loop_6 = function (i) {
            var opt = options[i];
            var active = false;
            if (currSelect === i)
                active = true;
            optionHtml.push((React__default.createElement(DropdownItem, { key: i, active: active, style: { width: 'calc(100% - 5px)' } },
                React__default.createElement("div", { className: 'd-flex justify-content-between', key: i, onClick: function () { return _this.onSelectOption(i); } },
                    React__default.createElement("div", null, opt[inputField]),
                    React__default.createElement("div", null, opt[descriptionField])))));
        };
        for (var i = 0; i < max; i++) {
            _loop_6(i);
        }
        if (options.length > max) {
            optionHtml.push((React__default.createElement("div", { key: 'more', className: 'more' }, "...")));
        }
        var onCreateNew = this.props.onCreateNew;
        if (onCreateNew) {
            optionHtml.push(React__default.createElement(DropdownItem, { key: 'new', active: currSelect == options.length, style: { width: 'calc(100% - 5px)' } },
                React__default.createElement("div", { className: 'btn-link', onClick: function (_evt) { return _this.onSelectOption(options.length); } }, "Create New")));
        }
        return optionHtml;
    };
    WAutoComplete.prototype.toggle = function () { };
    WAutoComplete.prototype.render = function () {
        var _a = this.state, dropdown = _a.dropdown, options = _a.options, focus = _a.focus;
        var _b = this.props, inputField = _b.inputField, descriptionField = _b.descriptionField, disable = _b.disable, autofocus = _b.autofocus;
        var dropdownContent = null;
        if (dropdown) {
            var optionHtml = null;
            if (inputField && descriptionField) {
                optionHtml = this.optionRender(options, inputField, descriptionField, 0);
            }
            else {
                optionHtml = this.primitiveOptionRender(options, 0);
            }
            dropdownContent = (React__default.createElement(DropdownMenu, { style: { width: '100%', minHeight: '20px' } }, optionHtml));
        }
        var displayValue = this.state.input;
        var classes = 'form-control';
        if (this.errorMessage && !focus) {
            displayValue = this.errorMessage;
            classes = classes + ' form-control-error';
        }
        var html = (React__default.createElement("div", { className: 'w-autocomplete', style: { flex: '1 0 auto' } },
            React__default.createElement(Dropdown, { isOpen: this.state.dropdown, toggle: this.toggle },
                React__default.createElement(DropdownToggle, { style: { background: 'none', border: 'none', padding: '0px', width: '100%' } },
                    React__default.createElement("input", { className: classes, ref: this.autoCompleteInput, value: displayValue, readOnly: disable, autoComplete: "off", type: 'text', autoFocus: autofocus, onKeyDown: this.onKeyDown, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onFocusLost })),
                dropdownContent)));
        return html;
    };
    return WAutoComplete;
}(Component));
var BBField = /** @class */ (function (_super) {
    __extends(BBField, _super);
    function BBField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBField.prototype.getWInput = function () { return null; };
    BBField.prototype.onWInputChange = function (oldVal, newVal) {
        var _a = this.props, bean = _a.bean, field = _a.field, onInputChange = _a.onInputChange;
        bean[field] = newVal;
        if (onInputChange)
            onInputChange(bean, field, oldVal, newVal);
    };
    BBField.prototype.createWInput = function () {
        var _this = this;
        var _a = this.props, bean = _a.bean, field = _a.field, validators = _a.validators, bgValidator = _a.bgValidator, errorCollector = _a.errorCollector, focus = _a.focus, placeholder = _a.placeholder, style = _a.style, className = _a.className, disable = _a.disable, onKeyDown = _a.onKeyDown;
        var WInput = this.getWInput();
        var html = (React__default.createElement(WInput, { style: style, className: className, name: field, value: bean[field], placeholder: placeholder, disable: disable, focus: focus, onKeyDown: onKeyDown, validators: validators, bgValidator: bgValidator, errorCollector: errorCollector, onInputChange: function (oldVal, newVal) { return _this.onWInputChange(oldVal, newVal); } }));
        return html;
    };
    BBField.prototype.render = function () { return this.createWInput(); };
    return BBField;
}(Component));
var BBStringField = /** @class */ (function (_super) {
    __extends(BBStringField, _super);
    function BBStringField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBStringField.prototype.getWInput = function () { return WStringInput; };
    return BBStringField;
}(BBField));
var BBStringArrayField = /** @class */ (function (_super) {
    __extends(BBStringArrayField, _super);
    function BBStringArrayField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBStringArrayField.prototype.getWInput = function () { return WStringArrayInput; };
    return BBStringArrayField;
}(BBField));
var BBTextField = /** @class */ (function (_super) {
    __extends(BBTextField, _super);
    function BBTextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBTextField.prototype.createWInput = function () {
        var _this = this;
        var _a = this.props, style = _a.style, className = _a.className, bean = _a.bean, field = _a.field, placeholder = _a.placeholder, disable = _a.disable, onKeyDown = _a.onKeyDown;
        var html = (React__default.createElement(WTextInput, { style: style, className: className, name: field, value: bean[field], placeholder: placeholder, disable: disable, onKeyDown: onKeyDown, onInputChange: function (oldVal, newVal) { return _this.onWInputChange(oldVal, newVal); } }));
        return html;
    };
    return BBTextField;
}(BBField));
var BBPasswordField = /** @class */ (function (_super) {
    __extends(BBPasswordField, _super);
    function BBPasswordField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBPasswordField.prototype.getWInput = function () { return WPasswordInput; };
    return BBPasswordField;
}(BBField));
var BBIntField = /** @class */ (function (_super) {
    __extends(BBIntField, _super);
    function BBIntField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBIntField.prototype.getWInput = function () { return WIntInput; };
    return BBIntField;
}(BBField));
var BBIntArrayField = /** @class */ (function (_super) {
    __extends(BBIntArrayField, _super);
    function BBIntArrayField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBIntArrayField.prototype.getWInput = function () { return WIntArrayInput; };
    return BBIntArrayField;
}(BBField));
var BBLongField = /** @class */ (function (_super) {
    __extends(BBLongField, _super);
    function BBLongField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBLongField.prototype.getWInput = function () { return WLongInput; };
    return BBLongField;
}(BBField));
var BBLongArrayField = /** @class */ (function (_super) {
    __extends(BBLongArrayField, _super);
    function BBLongArrayField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBLongArrayField.prototype.getWInput = function () { return WLongArrayInput; };
    return BBLongArrayField;
}(BBField));
var BBFloatField = /** @class */ (function (_super) {
    __extends(BBFloatField, _super);
    function BBFloatField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBFloatField.prototype.getWInput = function () { return WFloatInput; };
    return BBFloatField;
}(BBField));
var BBFloatArrayField = /** @class */ (function (_super) {
    __extends(BBFloatArrayField, _super);
    function BBFloatArrayField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBFloatArrayField.prototype.getWInput = function () { return WFloatArrayInput; };
    return BBFloatArrayField;
}(BBField));
var BBDoubleField = /** @class */ (function (_super) {
    __extends(BBDoubleField, _super);
    function BBDoubleField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBDoubleField.prototype.getWInput = function () { return WDoubleInput; };
    return BBDoubleField;
}(BBField));
var BBNumberField = /** @class */ (function (_super) {
    __extends(BBNumberField, _super);
    function BBNumberField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBNumberField.prototype.getWInput = function () { return WNumberInput; };
    return BBNumberField;
}(BBField));
var BBCurrencyField = /** @class */ (function (_super) {
    __extends(BBCurrencyField, _super);
    function BBCurrencyField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBCurrencyField.prototype.getWInput = function () { return WNumberInput; };
    return BBCurrencyField;
}(BBField));
var BBPercentField = /** @class */ (function (_super) {
    __extends(BBPercentField, _super);
    function BBPercentField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBPercentField.prototype.getWInput = function () { return WPercentInput; };
    return BBPercentField;
}(BBField));
var BBDoubleArrayField = /** @class */ (function (_super) {
    __extends(BBDoubleArrayField, _super);
    function BBDoubleArrayField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBDoubleArrayField.prototype.getWInput = function () { return WDoubleArrayInput; };
    return BBDoubleArrayField;
}(BBField));
var BBRadioInputField = /** @class */ (function (_super) {
    __extends(BBRadioInputField, _super);
    function BBRadioInputField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBRadioInputField.prototype.onWInputChange = function (oldVal, newVal) {
        var _a = this.props, bean = _a.bean, field = _a.field, onInputChange = _a.onInputChange;
        bean[field] = newVal;
        if (onInputChange)
            onInputChange(bean, field, oldVal, newVal);
    };
    BBRadioInputField.prototype.render = function () {
        var _this = this;
        var _a = this.props, bean = _a.bean, field = _a.field, options = _a.options, optionLabels = _a.optionLabels, disable = _a.disable, style = _a.style, className = _a.className;
        var id = IDTracker.next();
        var html = (React__default.createElement(WRadioInput, { style: style, className: className, disable: disable, name: "field_" + id, options: options, optionLabels: optionLabels, select: bean[field], onInputChange: function (oldVal, newVal) { return _this.onWInputChange(oldVal, newVal); } }));
        return html;
    };
    return BBRadioInputField;
}(Component));
var BBCheckboxField = /** @class */ (function (_super) {
    __extends(BBCheckboxField, _super);
    function BBCheckboxField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBCheckboxField.prototype.onWInputChange = function (checked) {
        var _a = this.props, bean = _a.bean, field = _a.field, value = _a.value, onInputChange = _a.onInputChange;
        if (typeof value === "boolean")
            bean[field] = checked;
        else
            bean[field] = checked ? value : null;
        if (onInputChange)
            onInputChange(bean, field, !checked, checked);
    };
    BBCheckboxField.prototype.render = function () {
        var _this = this;
        var _a = this.props, bean = _a.bean, field = _a.field, label = _a.label, disable = _a.disable;
        var checked = bean[field] ? true : false;
        var html = (React__default.createElement(WCheckboxInput, { label: label, name: field, checked: checked, disable: disable, onInputChange: function (checked) { return _this.onWInputChange(checked); } }));
        return html;
    };
    return BBCheckboxField;
}(Component));
var BBMultiCheckboxInputField = /** @class */ (function (_super) {
    __extends(BBMultiCheckboxInputField, _super);
    function BBMultiCheckboxInputField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBMultiCheckboxInputField.prototype.onWInputChange = function (oldVal, newVal) {
        var _a = this.props, bean = _a.bean, field = _a.field, onInputChange = _a.onInputChange;
        bean[field] = newVal;
        if (onInputChange)
            onInputChange(bean, field, oldVal, newVal);
    };
    BBMultiCheckboxInputField.prototype.render = function () {
        var _this = this;
        var _a = this.props, bean = _a.bean, field = _a.field, options = _a.options, optionLabels = _a.optionLabels, disable = _a.disable;
        var html = (React__default.createElement(WMultiCheckboxInput, { name: field, options: options, optionLabels: optionLabels, select: bean[field], disable: disable, onInputChange: function (oldVal, newVal) { return _this.onWInputChange(oldVal, newVal); } }));
        return html;
    };
    return BBMultiCheckboxInputField;
}(Component));
var BBSelectField = /** @class */ (function (_super) {
    __extends(BBSelectField, _super);
    function BBSelectField(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, bean = _a.bean, field = _a.field, options = _a.options;
        if (options.length > 0 && bean[field] == null) {
            bean[field] = options[0];
        }
        return _this;
    }
    BBSelectField.prototype.componentWillReceiveProps = function (nextProps) {
        var bean = nextProps.bean, field = nextProps.field, options = nextProps.options;
        if (options.length > 0 && bean[field] == null) {
            bean[field] = options[0];
        }
    };
    BBSelectField.prototype.onSelect = function (newVal) {
        var _a = this.props, bean = _a.bean, field = _a.field, onInputChange = _a.onInputChange;
        var oldVal = bean[field];
        bean[field] = newVal;
        if (onInputChange)
            onInputChange(bean, field, oldVal, newVal);
    };
    BBSelectField.prototype.render = function () {
        var _this = this;
        var _a = this.props, bean = _a.bean, field = _a.field, options = _a.options, style = _a.style, disable = _a.disable, optionLabels = _a.optionLabels;
        var html = (React__default.createElement(WSelect, { style: style, options: options, optionLabels: optionLabels, select: bean[field], disable: disable, onSelect: function (value) { return _this.onSelect(value); } }));
        return html;
    };
    return BBSelectField;
}(Component));
var BBBeanSelectField = /** @class */ (function (_super) {
    __extends(BBBeanSelectField, _super);
    function BBBeanSelectField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBBeanSelectField.prototype.onSelect = function (opt) {
        var _a = this.props, bean = _a.bean, field = _a.field, fieldCheck = _a.fieldCheck, onInputChange = _a.onInputChange;
        var oldVal = bean[field];
        bean[field] = opt[fieldCheck];
        if (onInputChange) {
            onInputChange(bean, field, oldVal, opt);
        }
    };
    BBBeanSelectField.prototype.render = function () {
        var _this = this;
        var _a = this.props, bean = _a.bean, field = _a.field, options = _a.options, fieldLabel = _a.fieldLabel, fieldCheck = _a.fieldCheck, disable = _a.disable;
        var html = (React__default.createElement(WBeanSelect, { options: options, fieldLabel: fieldLabel, fieldCheck: fieldCheck, select: bean[field], disable: disable, onSelect: function (opt) { return _this.onSelect(opt); } }));
        return html;
    };
    return BBBeanSelectField;
}(Component));
var BBDateTimeField = /** @class */ (function (_super) {
    __extends(BBDateTimeField, _super);
    function BBDateTimeField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBDateTimeField.prototype.onInputChange = function (moment$$1) {
        var _a = this.props, bean = _a.bean, field = _a.field, commitFormat = _a.commitFormat, onInputChange = _a.onInputChange;
        if (!commitFormat)
            commitFormat = COMPACT_DATETIME_FORMAT$2;
        var oldVal = bean[field];
        var value = null;
        if (moment$$1) {
            value = moment$$1.format(commitFormat);
            //moment format time zone as DD/MM/YYYY@HH:mm:ss+HH:mm while java format DD/MM/YYYY@HH:mm:ss+HHmm
            //Need to remove ':' character in timezone
            value = value.slice(0, value.length - 3) + value.slice(value.length - 2);
        }
        bean[field] = value;
        if (onInputChange)
            onInputChange(bean, field, oldVal, bean[field]);
    };
    BBDateTimeField.prototype.render = function () {
        var _this = this;
        var _a = this.props, bean = _a.bean, field = _a.field, commitFormat = _a.commitFormat, dateFormat = _a.dateFormat, timeFormat = _a.timeFormat, disable = _a.disable;
        if (timeFormat === true)
            timeFormat = 'HH:mm';
        if (!commitFormat)
            commitFormat = COMPACT_DATETIME_FORMAT$2;
        var value = bean[field];
        if ('date' === commitFormat) ;
        else {
            if (value) {
                value = moment(value, commitFormat);
            }
            else {
                value = '';
            }
        }
        var html = (React__default.createElement(WDateTime, { value: value, dateFormat: dateFormat, timeFormat: timeFormat, disable: disable, onCommitChange: function (moment$$1) { return _this.onInputChange(moment$$1); } }));
        return html;
    };
    return BBDateTimeField;
}(Component));
var BBMultiLabelSelector = /** @class */ (function (_super) {
    __extends(BBMultiLabelSelector, _super);
    function BBMultiLabelSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dialogContext = null;
        return _this;
    }
    BBMultiLabelSelector.prototype.onCustomSelect = function () {
        var ui = (React__default.createElement("div", { style: { height: 300 } }, "Custom Select"));
        this.dialogShow('Custom Select', 'md', ui);
    };
    BBMultiLabelSelector.prototype.dialogShow = function (title, size, ui) {
        this.dialogContext = new DialogContext();
        showDialog(title, size, ui, this.dialogContext);
    };
    BBMultiLabelSelector.prototype.dialogClose = function () {
        if (this.dialogContext) {
            this.dialogContext.getDialog().doClose();
            this.dialogContext = null;
        }
    };
    BBMultiLabelSelector.prototype.onRemove = function (idx) {
        var labelBeans = this.props.labelBeans;
        labelBeans.splice(idx, 1);
        this.forceUpdate();
    };
    BBMultiLabelSelector.prototype.onLabelClick = function (bean) {
        var onLabelClick = this.props.onLabelClick;
        if (onLabelClick)
            onLabelClick(bean);
    };
    BBMultiLabelSelector.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, labelBeans = _a.labelBeans, labelField = _a.labelField;
        var labelWidgets = [];
        var _loop_7 = function (i) {
            var bean = labelBeans[i];
            var label = bean[labelField];
            var widget = (React__default.createElement("div", { className: 'd-inline border p-1 mr-1' },
                React__default.createElement(Button, { className: 'p-0', color: 'outline', size: 'small', onClick: function () { return _this.onLabelClick(bean); } }, label),
                React__default.createElement(Button, { color: "link", onClick: function () { return _this.onRemove(i); } },
                    React__default.createElement("span", { className: ICONS.editor.remove + " ml-1" }))));
            labelWidgets.push(widget);
        };
        for (var i = 0; i < labelBeans.length; i++) {
            _loop_7(i);
        }
        var html = (React__default.createElement("div", { className: "py-1 " + className, style: style },
            labelWidgets,
            React__default.createElement(Button, { color: 'link', onClick: function () { return _this.onCustomSelect(); } },
                React__default.createElement("span", { className: ICONS.editor.plus }))));
        return html;
    };
    return BBMultiLabelSelector;
}(Component));
var BBReference = /** @class */ (function (_super) {
    __extends(BBReference, _super);
    function BBReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBReference.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, bean = _a.bean, field = _a.field, onInfo = _a.onInfo;
        var value = bean[field];
        var refBtn = null;
        if (value) {
            refBtn = (React__default.createElement(Button, { color: 'link', onClick: function () { return onInfo(); } },
                React__default.createElement("span", { className: ICONS.editor.info })));
        }
        var html = (React__default.createElement("div", { className: "d-flex " + className, style: style },
            React__default.createElement("input", { className: 'form-control', name: field, value: value, disabled: true }),
            refBtn));
        return html;
    };
    return BBReference;
}(Component));
var BBStringFieldCallableServer = /** @class */ (function (_super) {
    __extends(BBStringFieldCallableServer, _super);
    function BBStringFieldCallableServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BBStringFieldCallableServer.prototype.render = function () {
        var _a = this.props, bean = _a.bean, field = _a.field, placeholder = _a.placeholder, disable = _a.disable, focus = _a.focus, validators = _a.validators, bgValidator = _a.bgValidator, errorCollector = _a.errorCollector;
        var _b = this.props, onKeyDown = _b.onKeyDown, onInputChange = _b.onInputChange, onCallServer = _b.onCallServer;
        var callServerBtn = null;
        if (!disable) {
            callServerBtn = (React__default.createElement(Button, { color: 'link', onClick: onCallServer },
                React__default.createElement("span", { className: ICONS.editor.refresh })));
        }
        var html = (React__default.createElement("div", { className: 'd-flex' },
            React__default.createElement(BBStringField, { key: IDTracker.next(), bean: bean, field: field, placeholder: placeholder, disable: disable, errorCollector: errorCollector, focus: focus, validators: validators, bgValidator: bgValidator, onKeyDown: onKeyDown, onInputChange: onInputChange }),
            callServerBtn));
        return html;
    };
    return BBStringFieldCallableServer;
}(Component));
var BBAutoComplete = /** @class */ (function (_super) {
    __extends(BBAutoComplete, _super);
    function BBAutoComplete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dialogContext = null;
        return _this;
    }
    BBAutoComplete.prototype.filter = function (exp, onChangeCallback) {
        var options = this.props.options;
        var selOptions = this.doFilter(exp, options);
        onChangeCallback(selOptions);
    };
    BBAutoComplete.prototype.doFilter = function (exp, records) {
        var selRecords = [];
        for (var i = 0; i < records.length; i++) {
            var record = records[i];
            if (ObjUtil.recordHasExpression(record, exp)) {
                selRecords.push(record);
            }
        }
        return selRecords;
    };
    BBAutoComplete.prototype.getContext = function () { return this.props.context; };
    BBAutoComplete.prototype.onInputChange = function (selectOpt, oldVal, newVal) {
        var _a = this.props, bean = _a.bean, field = _a.field, inputField = _a.inputField, onInputChange = _a.onInputChange;
        if (onInputChange) {
            onInputChange(bean, field, selectOpt, oldVal, newVal);
        }
        else {
            if (inputField) {
                //option is a bean
                bean[field] = newVal[inputField];
            }
            else {
                bean[field] = newVal;
            }
            this.forceUpdate();
        }
    };
    BBAutoComplete.prototype.onShowMoreInfo = function (value) {
        var ui = (React__default.createElement("pre", { style: { height: 500 } },
            "Custom More Info ",
            JSON.stringify(value, null, '  ')));
        this.dialogShow('More Info', 'md', ui);
    };
    BBAutoComplete.prototype.onCustomSelect = function () {
        var ui = (React__default.createElement("div", { style: { height: 300 } }, "Custom Select"));
        this.dialogShow('Custom Select', 'md', ui);
    };
    BBAutoComplete.prototype.dialogShow = function (title, size, ui) {
        this.dialogContext = new DialogContext();
        showDialog(title, size, ui, this.dialogContext);
    };
    BBAutoComplete.prototype.dialogClose = function () {
        if (this.dialogContext) {
            this.dialogContext.getDialog().doClose();
            this.dialogContext = null;
        }
    };
    BBAutoComplete.prototype.render = function () {
        var _this = this;
        var _a = this.props, bean = _a.bean, field = _a.field, inputField = _a.inputField, descriptionField = _a.descriptionField, validators = _a.validators, disable = _a.disable, style = _a.style, autofocus = _a.autofocus;
        var onCreateNew = undefined;
        if (this.onCreateNew)
            onCreateNew = this.onCreateNew;
        var inputValue = bean[field];
        var html = (React__default.createElement("div", { className: 'input-group' },
            React__default.createElement(WAutoComplete, { key: IDTracker.next(), style: style, value: inputValue, autofocus: autofocus, inputField: inputField, descriptionField: descriptionField, validators: validators, disable: disable, filter: function (val, onChangeCallback) { return _this.filter(val, onChangeCallback); }, onInputChange: function (selectBean, oldVal, newVal) { return _this.onInputChange(selectBean, oldVal, newVal); }, onCreateNew: onCreateNew }),
            this.renderControl()));
        return html;
    };
    BBAutoComplete.prototype.renderControl = function () {
        var _this = this;
        var _a = this.props, bean = _a.bean, disable = _a.disable, hideMoreInfo = _a.hideMoreInfo;
        if (disable)
            return null;
        var moreInfoBtn = null;
        if (!hideMoreInfo) {
            moreInfoBtn = (React__default.createElement(Button, { color: 'link', onClick: function () { return _this.onShowMoreInfo(bean); } },
                React__default.createElement("span", { className: ICONS.editor.info })));
        }
        var html = (React__default.createElement("div", { className: "input-group-prepend" },
            moreInfoBtn,
            React__default.createElement(Button, { color: 'link', onClick: function () { return _this.onCustomSelect(); } },
                React__default.createElement("span", { className: ICONS.editor.search }))));
        return html;
    };
    return BBAutoComplete;
}(Component));

var input = /*#__PURE__*/Object.freeze({
  ErrorCollector: ErrorCollector,
  WInput: WInput,
  WStringInput: WStringInput,
  WPasswordInput: WPasswordInput,
  WTextInput: WTextInput,
  WIntInput: WIntInput,
  WLongInput: WLongInput,
  WFloatInput: WFloatInput,
  WDoubleInput: WDoubleInput,
  WNumberInput: WNumberInput,
  WPercentInput: WPercentInput,
  WStringArrayInput: WStringArrayInput,
  WIntArrayInput: WIntArrayInput,
  WLongArrayInput: WLongArrayInput,
  WFloatArrayInput: WFloatArrayInput,
  WDoubleArrayInput: WDoubleArrayInput,
  WRadioInput: WRadioInput,
  WCheckboxInput: WCheckboxInput,
  WMultiCheckboxInput: WMultiCheckboxInput,
  WSelect: WSelect,
  WBeanSelect: WBeanSelect,
  WDateTime: WDateTime,
  WAutoComplete: WAutoComplete,
  BBField: BBField,
  BBStringField: BBStringField,
  BBStringArrayField: BBStringArrayField,
  BBTextField: BBTextField,
  BBPasswordField: BBPasswordField,
  BBIntField: BBIntField,
  BBIntArrayField: BBIntArrayField,
  BBLongField: BBLongField,
  BBLongArrayField: BBLongArrayField,
  BBFloatField: BBFloatField,
  BBFloatArrayField: BBFloatArrayField,
  BBDoubleField: BBDoubleField,
  BBNumberField: BBNumberField,
  BBCurrencyField: BBCurrencyField,
  BBPercentField: BBPercentField,
  BBDoubleArrayField: BBDoubleArrayField,
  BBRadioInputField: BBRadioInputField,
  BBCheckboxField: BBCheckboxField,
  BBMultiCheckboxInputField: BBMultiCheckboxInputField,
  BBSelectField: BBSelectField,
  BBBeanSelectField: BBBeanSelectField,
  BBDateTimeField: BBDateTimeField,
  BBMultiLabelSelector: BBMultiLabelSelector,
  BBReference: BBReference,
  BBStringFieldCallableServer: BBStringFieldCallableServer,
  BBAutoComplete: BBAutoComplete
});

var SORT_FUNC = function (rec1, rec2) {
    var x1 = rec1.x;
    var x2 = rec2.x;
    if (x1 === x2)
        return 0;
    return (x1 > x2) ? 1 : -1;
};
var ListModel = /** @class */ (function () {
    function ListModel(pageSize, records) {
        this.records = [];
        this.filterExp = null;
        this.filterState = null;
        this.filterRecords = [];
        this.selectedRows = new Set([]);
        this.focusRowInPage = null;
        this.treeTableModel = null;
        this.pageSize = pageSize;
        this.pageList = new PageList(pageSize, []);
        this.update(records);
    }
    ListModel.prototype.update = function (records) {
        if (this.records === records)
            return;
        this.records = records;
        this.filterExp = '';
        this.filter(this.filterExp);
        if (this.treeTableModel != null) {
            this.treeTableModel.update(this.filterRecords);
        }
    };
    ListModel.prototype.refresh = function () {
        this.filter(this.filterExp);
    };
    ListModel.prototype.getRecords = function () { return this.records; };
    ListModel.prototype.getFilterRecords = function () { return this.filterRecords; };
    ListModel.prototype.getTreeTableModel = function () { return this.treeTableModel; };
    ListModel.prototype.setTreeTableModel = function (treeModel) { this.treeTableModel = treeModel; };
    ListModel.prototype.getPageList = function () { return this.pageList; };
    ListModel.prototype.getRecordInPage = function (idx) { return this.pageList.getItemInPage(idx); };
    ListModel.prototype.getCurrentPage = function () { return this.pageList.getCurrentPage(); };
    ListModel.prototype.getFocusRowInPage = function () {
        return this.focusRowInPage;
    };
    ListModel.prototype.setFocusRowInPage = function (row) {
        var numOfItemInPage = this.pageList.currentPageItems().length;
        if (row < 0)
            row = 0;
        if (row >= numOfItemInPage)
            row = numOfItemInPage - 1;
        this.focusRowInPage = row;
    };
    ListModel.prototype.clearFocusRowInPage = function () { this.focusRowInPage = null; };
    ListModel.prototype.getFilterExp = function () { return this.filterExp; };
    ListModel.prototype.addRecord = function (record) {
        this.records.push(record);
        this.pageList.setList(this.records);
    };
    ListModel.prototype.hasSelectedRows = function () { return this.selectedRows.size > 0; };
    ListModel.prototype.clearSelectedRows = function () { this.selectedRows = new Set([]); };
    ListModel.prototype.selectRow = function (row) { this.selectedRows.add(row); };
    ListModel.prototype.toggleSelectRow = function (row) {
        if (this.selectedRows.has(row))
            this.selectedRows.delete(row);
        else
            this.selectedRows.add(row);
    };
    ListModel.prototype.toggleSelectRows = function () {
        if (this.hasSelectedRows()) {
            this.clearSelectedRows();
        }
        else {
            for (var i = 0; i < this.records.length; i++) {
                this.selectedRows.add(i);
            }
        }
    };
    ListModel.prototype.getSelectedRows = function () { return this.selectedRows; };
    ListModel.prototype.getSelectedRecords = function () {
        var filterBeans = this.filterRecords;
        var selRecords = [];
        this.selectedRows.forEach(function (row) {
            selRecords.push(filterBeans[row]);
        });
        return selRecords;
    };
    ListModel.prototype.getSelectedRecordIds = function () {
        var filterBeans = this.filterRecords;
        var ids = [];
        this.selectedRows.forEach(function (row) {
            ids.push(filterBeans[row].id);
        });
        return ids;
    };
    ListModel.prototype.removeSelectedRows = function () {
        var _a;
        var selectedBeans = [];
        for (var i = 0; i < this.filterRecords.length; i++) {
            if (this.selectedRows.has(i)) {
                selectedBeans.push(this.filterRecords[i]);
            }
        }
        var holder = [];
        for (var i = 0; i < this.records.length; i++) {
            var isRemove = false;
            for (var j = 0; j < selectedBeans.length; j++) {
                if (this.records[i] === selectedBeans[j]) {
                    isRemove = true;
                    break;
                }
            }
            if (!isRemove)
                holder.push(this.records[i]);
        }
        this.records.length = 0;
        (_a = this.records).push.apply(_a, holder);
        this.pageList.setList(this.records);
        this.clearSelectedRows();
        this.filter(this.filterExp);
    };
    ListModel.prototype.toggleSelectRowInPage = function (page, rowInPage) {
        var row = this.pageList.computeRowIndexOf(page, rowInPage);
        this.toggleSelectRow(row);
    };
    ListModel.prototype.isSelectedRowInPage = function (page, rowInPage) {
        var row = this.pageList.computeRowIndexOf(page, rowInPage);
        return this.selectedRows.has(row);
    };
    ListModel.prototype.selectPage = function (page) {
        this.focusRowInPage = null;
        this.getPageList().getPage(page);
    };
    ListModel.prototype.changePageSize = function (pageSize) {
        this.focusRowInPage = null;
        this.getPageList().setPageSize(pageSize);
    };
    ListModel.prototype.filterByState = function (state) {
        this.filterState = state;
        this.filter(this.filterExp);
    };
    ListModel.prototype.filter = function (exp) {
        this.filterExp = exp;
        var records = null;
        if (this.filterState == null) {
            records = this.records;
        }
        else {
            records = [];
            for (var i = 0; i < this.records.length; i++) {
                var record = this.records[i];
                if (record.entityState == this.filterState) {
                    records.push(record);
                }
            }
        }
        if (!exp || exp.length === 0) {
            this.filterRecords = records;
        }
        else {
            this.filterRecords = [];
            for (var i = 0; i < records.length; i++) {
                var record = records[i];
                if (ObjUtil.recordHasExpression(record, exp)) {
                    this.filterRecords.push(record);
                }
            }
        }
        if (!this.pageList) {
            this.pageList = new PageList(this.pageSize, this.filterRecords);
        }
        else {
            this.pageList.setList(this.filterRecords);
        }
        this.clearSelectedRows();
    };
    ListModel.prototype.sort = function (field, _method) {
        var ascSortFunc = function (rec1, rec2) {
            var val1 = rec1[field];
            var val2 = rec2[field];
            if (val1 === val2)
                return 0;
            return (val1 > val2) ? 1 : -1;
        };
        this.records.sort(ascSortFunc);
        this.pageList = new PageList(this.pageList.getPageSize(), this.records);
    };
    /*************************************************************************************************************/
    /* Chart methods                                                                                             */
    /*************************************************************************************************************/
    ListModel.prototype.getXYCoordinate = function (xField, yField) {
        var values = [];
        var recs = this.records;
        for (var i = 0; i < recs.length; i++) {
            var rec = recs[i];
            values.push({ x: rec[xField], y: rec[yField] });
        }
        //resort data by x
        values.sort(SORT_FUNC);
        return values;
    };
    ListModel.prototype.collectXYCoordinate = function (xyCollector) {
        var values = [];
        var recs = this.records;
        for (var i = 0; i < recs.length; i++) {
            var rec = recs[i];
            values.push(xyCollector(rec));
        }
        //resort data by x
        values.sort(SORT_FUNC);
        return values;
    };
    return ListModel;
}());

function showNotification$1(msg) {
    if (!msg)
        return;
    console.log("[]" + msg.type + "] " + msg.label);
}

var util$1 = /*#__PURE__*/Object.freeze({
  showNotification: showNotification$1
});

function formatCellValue(field, val) {
    if (val == null)
        return null;
    if (field.format)
        return field.format(val);
    if (typeof val.getMonth === 'function')
        return formater.dateTime(val);
    else if (typeof val === 'number')
        return formater.number(val);
    return val;
}
function getCellType(_field, val) {
    if (val == null)
        return '';
    if (typeof val.getMonth === 'function')
        return 'date';
    else if (typeof val === 'number')
        return 'number';
    return 'text';
}
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow(props) {
        var _this = _super.call(this, props) || this;
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onClick = _this.onClick.bind(_this);
        var _a = _this.props, table = _a.table, _ref = _a._ref;
        var row = _ref.index;
        if (table.isFocusRow(row)) {
            table.setFocusRow(null);
        }
        return _this;
    }
    TableRow.prototype.onBlur = function (_evt) {
        var table = this.props.table;
        table.setFocusRow(null);
        this.forceUpdate();
    };
    TableRow.prototype.onClick = function (_evt) {
        var _a = this.props, table = _a.table, _ref = _a._ref;
        var row = _ref.index;
        table.setFocusRow(row);
        this.forceUpdate();
    };
    TableRow.prototype.render = function () {
        var _a = this.props, table = _a.table, _ref = _a._ref;
        var className = _ref.className, style = _ref.style, columns = _ref.columns;
        var row = _ref.index;
        if (table.isFocusRow(row))
            className = className + " focus-row";
        var html = (React__default.createElement("div", { className: className, role: 'row', style: style, tabIndex: 0, onClick: this.onClick, onBlur: this.onBlur }, columns));
        return html;
    };
    return TableRow;
}(Component));
var TableCell = /** @class */ (function (_super) {
    __extends(TableCell, _super);
    function TableCell(props) {
        var _this = _super.call(this, props) || this;
        var fieldConfig = _this.props.fieldConfig;
        if (fieldConfig.editor) {
            _this.onInputChange = _this.onInputChange.bind(_this);
        }
        _this.state = { editMode: false, select: false };
        _this.message = null;
        return _this;
    }
    TableCell.prototype.onEdit = function (field, record) {
        if (field.editor.isEditable) {
            if (!field.editor.isEditable(field, record))
                return;
        }
        this.setState({ editMode: true });
    };
    TableCell.prototype.onInputChange = function (_bean, _fieldName, oldVal, newVal) {
        var _a = this.props, table = _a.table, fieldConfig = _a.fieldConfig, record = _a.record;
        if (fieldConfig.editor.onInputChange) {
            fieldConfig.editor.onInputChange(table, record, oldVal, newVal);
        }
        this.setState({ editMode: false, select: false });
    };
    TableCell.prototype.onEditKeyDown = function (winput, _evt, keyCode, currInput) {
        if (keyCode === 13) {
            winput.updateValue('' + currInput);
            var errMessage = winput.getMessage();
            if (errMessage) {
                this.message = { type: 'warning', label: errMessage };
            }
            this.setState({ editMode: false });
        }
        else if (keyCode === 27) {
            this.setState({ editMode: false });
        }
    };
    TableCell.prototype.renderCustomCell = function (field, record, className) {
        var _a = this.props, style = _a.style, row = _a.row, table = _a.table;
        return (React__default.createElement("div", { className: className, style: __assign({}, style, field.cellStyle) }, field.customRender(table, field, row, record)));
    };
    TableCell.prototype.renderOnClickCell = function (field, record, className) {
        var _a = this.props, row = _a.row, table = _a.table, style = _a.style;
        var cellValue = null;
        if (field.customRender) {
            cellValue = field.customRender(table, field, row, record);
        }
        else if (field.cellDataGetter) {
            cellValue = field.cellDataGetter(record);
        }
        else {
            cellValue = formatCellValue(field, record[field.name]);
        }
        var cellType = getCellType(field, record[field.name]);
        className = className + " cell-" + cellType;
        return (React__default.createElement("div", { className: className, style: __assign({}, style, field.cellStyle) },
            React__default.createElement(Button, { color: 'link', onClick: function () { return table.onCellAction(field, row, record); } }, cellValue)));
    };
    TableCell.prototype.renderCellEditor = function (field, record, className) {
        var _this = this;
        var style = this.props.style;
        var BBTypeField = null;
        if (field.editor.type === 'int')
            BBTypeField = BBIntField;
        else if (field.editor.type === 'long')
            BBTypeField = BBLongField;
        else if (field.editor.type === 'double')
            BBTypeField = BBDoubleField;
        else if (field.editor.type === 'number')
            BBTypeField = BBNumberField;
        else if (field.editor.type === 'currency')
            BBTypeField = BBCurrencyField;
        else if (field.editor.type === 'string')
            BBTypeField = BBStringField;
        return (React__default.createElement(Form, { className: className, style: __assign({}, style, field.cellStyle) },
            React__default.createElement(BBTypeField, { bean: record, field: field.name, focus: true, validators: field.editor.validators, onInputChange: this.onInputChange, onKeyDown: function (winput, evt, keyCode, currInput) { return _this.onEditKeyDown(winput, evt, keyCode, currInput); } })));
    };
    TableCell.prototype.renderCell = function (fieldConfig, record, className) {
        var _this = this;
        var onDoubleClick = undefined, onBlur = undefined, onClick = undefined, onKeyDown = undefined;
        var tabIndex = 0;
        if (fieldConfig.editor)
            onDoubleClick = function () { return _this.onEdit(fieldConfig, record); };
        if (fieldConfig.onKeyDown) {
            var _a = this.props, table_1 = _a.table, row_1 = _a.row;
            onBlur = function (_evt) {
                _this.setState({ select: false });
            };
            onClick = function (_evt) {
                _this.setState({ select: true });
                table_1.setFocusRow(row_1);
            };
            onKeyDown = function (evt) {
                fieldConfig.onKeyDown(evt, table_1, row_1, record);
            };
            tabIndex = 0;
        }
        var cellData = null;
        if (fieldConfig.cellDataGetter)
            cellData = fieldConfig.cellDataGetter(record);
        else
            cellData = formatCellValue(fieldConfig, record[fieldConfig.name]);
        var cellType = getCellType(fieldConfig, record[fieldConfig.name]);
        className = className + " cell-" + cellType;
        var style = this.props.style;
        return (React__default.createElement("div", { tabIndex: tabIndex, className: className, style: __assign({}, style, fieldConfig.cellStyle), onClick: onClick, onBlur: onBlur, onKeyDown: onKeyDown, onDoubleClick: onDoubleClick }, cellData));
    };
    TableCell.prototype.render = function () {
        var _a = this.props, fieldConfig = _a.fieldConfig, record = _a.record, row = _a.row;
        var editMode = this.state.editMode;
        var className = row % 2 == 0 ? 'cell-even-row cell' : 'cell-odd-row cell';
        if (this.state.select)
            className += ' select-cell';
        if (fieldConfig.onClick)
            return this.renderOnClickCell(fieldConfig, record, className);
        else if (fieldConfig.customRender)
            return this.renderCustomCell(fieldConfig, record, className);
        else if (editMode)
            return this.renderCellEditor(fieldConfig, record, className);
        else
            return this.renderCell(fieldConfig, record, className);
    };
    TableCell.prototype.componentDidUpdate = function () {
        showNotification$1(this.message);
        this.message = null;
    };
    return TableCell;
}(Component));
var PageIterator = /** @class */ (function (_super) {
    __extends(PageIterator, _super);
    function PageIterator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageIterator.prototype.render = function () {
        var _a = this.props, pageList = _a.pageList, onSelectPage = _a.onSelectPage;
        var buttons = [];
        var cpage = pageList.getCurrentPage();
        var range = pageList.getSubRange(cpage, 10);
        if (pageList.getCurrentPage() > 1) {
            buttons.push((React__default.createElement(Button, { key: 'first', onClick: function () { return onSelectPage(1); } },
                React__default.createElement("span", { className: ICONS.editor.angleDoubleLeft, title: 'first' }))));
            buttons.push((React__default.createElement(Button, { key: 'prev', onClick: function () { return onSelectPage(cpage - 1); } },
                React__default.createElement("span", { className: ICONS.editor.angleLeft, title: 'prev' }))));
        }
        else {
            buttons.push((React__default.createElement(Button, { key: 'first', disabled: true },
                React__default.createElement("span", { className: ICONS.editor.angleDoubleLeft, title: 'first' }))));
            buttons.push((React__default.createElement(Button, { key: 'prev', disabled: true },
                React__default.createElement("span", { className: ICONS.editor.angleLeft, title: 'prev' }))));
        }
        var _loop_1 = function (i) {
            if (i === cpage) {
                buttons.push((React__default.createElement(Button, { key: 'p' + i, disabled: true }, i)));
            }
            else {
                buttons.push((React__default.createElement(Button, { key: 'p' + i, onClick: function () { return onSelectPage(i); } }, i)));
            }
        };
        for (var i = range[0]; i <= range[1]; i++) {
            _loop_1(i);
        }
        var lastPage = pageList.getAvailablePage();
        if (pageList.getCurrentPage() < lastPage) {
            buttons.push((React__default.createElement(Button, { key: 'next', onClick: function () { return onSelectPage(cpage + 1); } },
                React__default.createElement("span", { className: ICONS.editor.angleRight, title: 'next' }))));
            buttons.push((React__default.createElement(Button, { key: 'last', onClick: function () { return onSelectPage(lastPage); } },
                React__default.createElement("span", { className: ICONS.editor.angleDoubleRight, title: 'last' }))));
        }
        else {
            buttons.push((React__default.createElement(Button, { key: 'next', disabled: true },
                React__default.createElement("span", { className: ICONS.editor.angleRight, title: 'next' }))));
            buttons.push((React__default.createElement(Button, { key: 'last', disabled: true },
                React__default.createElement("span", { className: ICONS.editor.angleDoubleRight, title: 'last' }))));
        }
        var html = (React__default.createElement("div", { className: 'page-iterator' },
            React__default.createElement(ButtonGroup, { size: 'sm' },
                " ",
                buttons,
                " ")));
        return html;
    };
    return PageIterator;
}(Component));

var css$2 = ".ui-table {\n  display: flex;\n  flex-direction: column; }\n  .ui-table > .toolbar {\n    background: #6c757d;\n    padding: 1px 2px 0px 2px;\n    margin-bottom: 2px; }\n  .ui-table > .toolbar-table .ui-search-params .dropdown .dropdown-toggle, .ui-table .toolbar-tree .ui-search-params .dropdown .dropdown-toggle {\n    color: white; }\n  .ui-table > .toolbar-kanban, .ui-table .toolbar-grid {\n    padding: 1px 2px 0px 2px;\n    margin-bottom: 5px;\n    background: whitesmoke; }\n    .ui-table > .toolbar-kanban .btn, .ui-table > .toolbar-kanban .dropdouw, .ui-table .toolbar-grid .btn, .ui-table .toolbar-grid .dropdouw {\n      font-weight: bold; }\n    .ui-table > .toolbar-kanban .btn, .ui-table > .toolbar-kanban .input-group-text, .ui-table > .toolbar-kanban .dropdown, .ui-table .toolbar-grid .btn, .ui-table .toolbar-grid .input-group-text, .ui-table .toolbar-grid .dropdown {\n      background-color: transparent !important;\n      color: #337ab7;\n      border: none; }\n    .ui-table > .toolbar-kanban input, .ui-table .toolbar-grid input {\n      border: none;\n      outline: none;\n      border-bottom: 1px solid lightgray;\n      border-radius: none; }\n  .ui-table > .view {\n    height: 100%; }\n    .ui-table > .view .header-grid {\n      background: #f1f0f0;\n      overflow: hidden !important; }\n    .ui-table > .view .fixed-column-container .fixed-column-grid {\n      overflow: hidden !important;\n      background: #f7f9fc;\n      border-right: 1px solid lightgray; }\n      .ui-table > .view .fixed-column-container .fixed-column-grid .tree-cell {\n        text-align: left;\n        background: transparent; }\n    .ui-table > .view .column-container .column-grid {\n      background-color: white; }\n    .ui-table > .view .cell-even-row {\n      background: white; }\n    .ui-table > .view .cell-odd-row {\n      background: #f8f7f7; }\n    .ui-table > .view .cell {\n      padding: 3px 10px;\n      text-align: right;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n      .ui-table > .view .cell .btn-link {\n        padding: 0px;\n        text-align: left;\n        white-space: nowrap !important;\n        overflow: hidden !important;\n        text-overflow: ellipsis !important; }\n    .ui-table > .view .cell-text {\n      text-align: left; }\n    .ui-table > .view .select-cell {\n      background: wheat; }\n    .ui-table > .view .header-cell {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding: 0 0.5em;\n      font-weight: bold; }\n  .ui-table > .kanban-view {\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important; }\n\n.ui-vlist {\n  display: flex;\n  flex-direction: column !important;\n  flex-grow: 1 !important; }\n  .ui-vlist > .navbar .btn {\n    padding: 2px 5px; }\n  .ui-vlist > .navbar .input-group-text, .ui-vlist > .navbar input.form-control {\n    padding: 2px; }\n  .ui-vlist > .list-view {\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important;\n    min-height: 75px; }\n    .ui-vlist > .list-view .List {\n      width: 100%;\n      border: 1px solid #DDD;\n      outline: none; }\n    .ui-vlist > .list-view .list-row {\n      display: flex;\n      flex-direction: column !important;\n      flex-grow: 1 !important;\n      padding: 5px 5px;\n      background-color: #fff;\n      border-bottom: 1px solid #e0e0e0; }\n    .ui-vlist > .list-view .no-rows {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #bdbdbd; }\n\n.ui-tree {\n  display: flex;\n  flex-direction: column !important;\n  flex-grow: 1 !important; }\n  .ui-tree .ui-vlist {\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important; }\n    .ui-tree .ui-vlist > .list-view {\n      display: flex;\n      flex-direction: column !important;\n      flex-grow: 1 !important; }\n      .ui-tree .ui-vlist > .list-view .list-row {\n        border-bottom: none;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap; }\n      .ui-tree .ui-vlist > .list-view .node .btn-link {\n        padding: 0px 2px; }\n\n.page-iterator {\n  display: flex;\n  flex-flow: row-reverse;\n  margin: 3px 0px; }\n  .page-iterator .btn {\n    padding: 5px 5px; }\n\n.ui-tree-widget {\n  display: flex;\n  flex-flow: wrap;\n  max-height: 630px;\n  overflow-y: auto; }\n  .ui-tree-widget .btn-tree-widget {\n    margin: 5px;\n    width: 30%;\n    border: 1px solid gray;\n    border-radius: 5px;\n    height: 60px; }\n    .ui-tree-widget .btn-tree-widget .btn {\n      width: 100%;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      color: black;\n      border: none;\n      padding: 6px; }\n    .ui-tree-widget .btn-tree-widget .btn:focus, .ui-tree-widget .btn-tree-widget .btn:active {\n      outline: none !important;\n      box-shadow: none !important;\n      background-color: transparent; }\n    .ui-tree-widget .btn-tree-widget .btn:hover {\n      color: white; }\n    .ui-tree-widget .btn-tree-widget .icon {\n      font-size: 0.8rem; }\n";
styleInject(css$2);

var ColumnToggleButton = /** @class */ (function (_super) {
    __extends(ColumnToggleButton, _super);
    function ColumnToggleButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnToggleButton.prototype.render = function () {
        var table = this.props.table;
        var config = table.getConfig();
        var columns = [];
        columns.push.apply(columns, config.columns);
        var onSelect = function (column) { return table.onToggleColumn(column); };
        var html = (React__default.createElement(DropdownSelectComplexItemButton, { label: 'Cols', items: columns, fieldLabel: 'label', fieldCheck: 'visible', onSelect: onSelect }));
        return html;
    };
    return ColumnToggleButton;
}(Component));
var VListToolbar = /** @class */ (function (_super) {
    __extends(VListToolbar, _super);
    function VListToolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VListToolbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, list = _a.list, config = _a.config, model = _a.model;
        var pageSize = model.getPageList().getPageSize();
        var arrPageSize = ['50', '500', '5000', '50000', '100000'];
        var htmlTemplate = (React__default.createElement(Navbar, { color: "secondary", dark: true, expand: "md" },
            React__default.createElement(Nav, null,
                React__default.createElement(ButtonGroup, null,
                    React__default.createElement(DropdownSelectItemButton, { items: arrPageSize, selectItem: pageSize, onSelect: function (value) { return list.onSelectPageSize(value); } }),
                    React__default.createElement(InputGroup, null,
                        React__default.createElement(InputGroupAddon, { addonType: "prepend" },
                            React__default.createElement(InputGroupText, null, "Filter")),
                        React__default.createElement(WStringInput, { name: 'search', value: model.getFilterExp(), placeholder: 'filter expression', onChange: function (_oldVal, newVal) { return list.onFilter(newVal); } })))),
            React__default.createElement(Nav, { className: "ml-auto" }, config.actions.map(function (action, _idx) {
                if (action.createComponent) {
                    return action.createComponent(list);
                }
                else {
                    return _this.renderAction(list, action);
                }
            }))));
        return htmlTemplate;
    };
    VListToolbar.prototype.renderAction = function (list, action) {
        var iconEle = null;
        if (action.icon)
            iconEle = (React__default.createElement("span", { className: action.icon, title: action.hint }));
        return (React__default.createElement(Button, { key: action.name, onClick: function () { return list.onAction(action); } },
            iconEle,
            action.label));
    };
    return VListToolbar;
}(Component));
var VListView = /** @class */ (function (_super) {
    __extends(VListView, _super);
    function VListView(props) {
        var _this = _super.call(this, props) || this;
        _this.ref = React__default.createRef();
        _this.rowRenderer = _this.rowRenderer.bind(_this);
        _this.noRowsRenderer = _this.noRowsRenderer.bind(_this);
        return _this;
    }
    VListView.prototype.componentWillReceiveProps = function (_props) {
        this.forceUpdate();
    };
    VListView.prototype.rowRenderer = function (_ref) {
        var key = _ref.key, index = _ref.index, style = _ref.style;
        var _a = this.props, vlist = _a.vlist, model = _a.model, config = _a.config;
        var pageList = model.getPageList();
        var page = pageList.getCurrentPage();
        var row = pageList.getFrom() + index;
        var records = pageList.currentPageItems();
        var rec = records[index];
        var onSelect = function (_evt) {
            if (config.onSelect) {
                config.onSelect(vlist, page, row, index, rec);
            }
        };
        return (React__default.createElement("div", { key: key, style: style, className: 'list-row', onClick: onSelect }, config.renderItem(vlist, page, row, index, rec)));
    };
    VListView.prototype.noRowsRenderer = function () {
        return (React__default.createElement("div", { className: 'no-rows' }, 'No rows'));
    };
    VListView.prototype.render = function () {
        var _this = this;
        var _a = this.props, model = _a.model, config = _a.config;
        var pageList = model.getPageList();
        var records = pageList.currentPageItems();
        var html = (React__default.createElement(AutoSizer, { key: IDTracker.next() }, function (_a) {
            var height = _a.height, width = _a.width;
            return (React__default.createElement(List, { ref: _this.ref, width: width, height: height, className: 'List', overscanRowCount: 10, rowCount: records.length, rowHeight: config.rowHeight, rowRenderer: _this.rowRenderer, noRowsRenderer: _this.noRowsRenderer, scrollToIndex: 0 }));
        }));
        return html;
    };
    return VListView;
}(Component));
var VList = /** @class */ (function (_super) {
    __extends(VList, _super);
    function VList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { dialog: {} };
        return _this;
    }
    VList.prototype.componentWillReceiveProps = function (_props) {
        this.forceUpdate();
    };
    VList.prototype.getModel = function () { return this.props.model; };
    VList.prototype.getConfig = function () { return this.props.config; };
    VList.prototype.getContext = function () { return this.props.context; };
    VList.prototype.onSelectPageSize = function (pageSize) {
        var model = this.props.model;
        model.changePageSize(pageSize);
        this.forceUpdate();
    };
    VList.prototype.onSelectPage = function (page) {
        var model = this.props.model;
        model.selectPage(page);
        this.forceUpdate();
    };
    VList.prototype.onFilter = function (exp) {
        var model = this.props.model;
        model.filter(exp);
        this.forceUpdate();
    };
    VList.prototype.onAction = function (action) {
        if (action.onClick)
            action.onClick(this);
    };
    VList.prototype.showDialog = function (dialog) {
        dialog.openDialog = true;
        this.setState({ dialog: dialog });
    };
    VList.prototype.hideDialog = function () { this.setState({ dialog: { openDialog: false } }); };
    VList.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, model = _a.model, config = _a.config;
        var pageList = model.getPageList();
        var pageIteratorBlock = null;
        if (pageList.getPageSize() < pageList.getAvailable()) {
            var onSelectPage = function (page) { _this.onSelectPage(page); };
            pageIteratorBlock = (React__default.createElement(PageIterator, { pageList: pageList, onSelectPage: onSelectPage }));
        }
        var toolbarEle = null;
        if (!config.toolbar || !config.toolbar.hide) {
            toolbarEle = (React__default.createElement(VListToolbar, { list: this, config: config, model: model }));
        }
        var html = (React__default.createElement("div", { className: className ? "ui-vlist " + className : 'ui-vlist' },
            toolbarEle,
            React__default.createElement("div", { className: 'list-view' },
                React__default.createElement(VListView, { vlist: this, config: config, model: model })),
            pageIteratorBlock,
            this.renderDialog()));
        return html;
    };
    VList.prototype.renderDialog = function () {
        var _this = this;
        var dialog = this.state.dialog;
        if (!dialog.openDialog)
            return null;
        var html = (React__default.createElement(Modal, { isOpen: dialog.openDialog, toggle: function () { return _this.hideDialog(); } },
            React__default.createElement(ModalHeader, { toggle: function () { return _this.hideDialog(); } }, dialog.title),
            React__default.createElement(ModalBody, null, dialog.content)));
        return html;
    };
    return VList;
}(Component));

var TreeNode = /** @class */ (function () {
    function TreeNode(parent, path, name, label, userData, collapse) {
        this.parent = parent;
        this.path = path;
        this.name = name;
        this.label = label;
        this.userData = userData;
        this.collapse = collapse;
        this.children = null;
        this.loadedChildren = false;
    }
    TreeNode.prototype.getChildByName = function (name) {
        if (!this.children)
            return null;
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (child.name === name)
                return child;
        }
        return null;
    };
    TreeNode.prototype.getChildren = function () { return this.children; };
    TreeNode.prototype.getParent = function () { return this.parent; };
    TreeNode.prototype.setLoadedChildren = function () { this.loadedChildren = true; };
    TreeNode.prototype.addChild = function (name, label, userData, collapse) {
        var path = null;
        if (this.path)
            path = this.path + '/' + name;
        else
            path = name;
        var node = new TreeNode(this, path, name, label, userData, collapse);
        if (!this.children)
            this.children = [];
        this.children.push(node);
        return node;
    };
    return TreeNode;
}());
var TreeModel = /** @class */ (function () {
    function TreeModel(showRoot) {
        this.showRoot = showRoot;
        this.root = new TreeNode(null, '', "root", "Root", null, false);
        this.selectedNode = this.root;
    }
    TreeModel.prototype.setShowRoot = function (bool) { this.showRoot = bool; };
    TreeModel.prototype.getRoot = function () { return this.root; };
    TreeModel.prototype.setRoot = function (root) {
        this.root = root;
        this.selectedNode = root;
    };
    TreeModel.prototype.getSelectedNode = function () { return this.selectedNode; };
    TreeModel.prototype.setSelectedNode = function (node) { this.selectedNode = node; };
    TreeModel.prototype.isLoadedChildren = function (node) {
        if (node.children)
            return true;
        return node.loadedChildren;
    };
    TreeModel.prototype.isLeafNode = function (node) {
        var children = node.getChildren();
        if (!children)
            return true;
        return children.length === 0;
    };
    TreeModel.prototype.onCollapse = function (_node) { };
    TreeModel.prototype.onExpand = function (node, postLoadCallback) {
        if (!this.isLoadedChildren(node)) {
            this.loadChildren(node, postLoadCallback);
        }
        else {
            if (postLoadCallback)
                postLoadCallback(node);
        }
    };
    TreeModel.prototype.removeNode = function (node) {
        var parent = node.getParent();
        if (!parent)
            return;
        var pChildren = parent.getChildren();
        for (var i = 0; i < pChildren.length; i++) {
            var child = pChildren[i];
            if (node.path === child.path)
                pChildren.splice(i, 1);
        }
    };
    TreeModel.prototype.addChild = function (node, name, label, userData) {
        var child = node.addChild(name, label, userData, true);
        return child;
    };
    TreeModel.prototype.loadChildren = function (_node, _postLoadCallback) {
        throw new Error('this method need to reimplement');
    };
    return TreeModel;
}());
var VTreeBase = /** @class */ (function (_super) {
    __extends(VTreeBase, _super);
    function VTreeBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VTreeBase.prototype.getTreeModel = function () { return this.props.model; };
    VTreeBase.prototype.onExpandRoot = function (selectFirstNode) {
        var _this = this;
        if (selectFirstNode === void 0) { selectFirstNode = false; }
        var model = this.props.model;
        var thisUI = this;
        var callback = function (node) {
            if (node.getChildren() != null && selectFirstNode) {
                _this.onSelectNode(node.getChildren()[0]);
            }
            thisUI.forceUpdate();
        };
        model.onExpand(model.getRoot(), callback);
    };
    VTreeBase.prototype.onToggleNode = function (node) {
        var model = this.props.model;
        if (!node.collapse) {
            model.onCollapse(node);
            node.collapse = true;
            this.forceUpdate();
        }
        else {
            var thisUI_1 = this;
            var callback = function (node) {
                node.collapse = false;
                thisUI_1.forceUpdate();
            };
            model.onExpand(node, callback);
        }
    };
    VTreeBase.prototype.onSelectNode = function (node) {
        this.getTreeModel().setSelectedNode(node);
        var onSelectNode = this.props.onSelectNode;
        if (onSelectNode)
            onSelectNode(node);
    };
    VTreeBase.prototype.createDataRow = function (rowDataHolder, model, node, deep) {
        rowDataHolder.push({ node: node, deep: deep });
        if (node.collapse)
            return;
        var children = node.getChildren();
        if (children == null)
            return;
        for (var i = 0; i < children.length; i++) {
            this.createDataRow(rowDataHolder, model, children[i], deep + 1);
        }
    };
    VTreeBase.prototype.initDataRowHolder = function () {
        var model = this.props.model;
        var rows = [];
        if (model.showRoot) {
            this.createDataRow(rows, model, model.root, 0);
        }
        else {
            var children = model.root.getChildren();
            if (children != null) {
                for (var i = 0; i < children.length; i++) {
                    this.createDataRow(rows, model, children[i], 0);
                }
            }
        }
        return rows;
    };
    return VTreeBase;
}(Component));
var VTree = /** @class */ (function (_super) {
    __extends(VTree, _super);
    function VTree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listConfig = {
            toolbar: { hide: true },
            rowHeight: 25,
            renderItem: function (list, _page, row, _rowInPage, item) {
                var uiVtree = list.getContext().uiVTree;
                var model = uiVtree.getTreeModel();
                var node = item.node;
                var userData = node.userData;
                var deep = item.deep;
                var toggleEle = null;
                if (!model.isLoadedChildren(node)) {
                    var toggleBtnClass = ICONS.editor.refresh;
                    toggleEle = (React__default.createElement(Button, { color: 'link', onClick: function () { return uiVtree.onToggleNode(node); } },
                        React__default.createElement("span", { className: toggleBtnClass })));
                }
                else if (!model.isLeafNode(node)) {
                    var toggleBtnClass = ICONS.webapp.caretDown;
                    if (node.collapse)
                        toggleBtnClass = ICONS.webapp.caretRight;
                    toggleEle = (React__default.createElement(Button, { color: 'link', onClick: function () { return uiVtree.onToggleNode(node); } },
                        React__default.createElement("span", { className: toggleBtnClass })));
                }
                var selected = node == model.getSelectedNode();
                var opacity = 1;
                if (userData && userData.state === 'InActive')
                    opacity = 0.6;
                var treeStyle = { paddingLeft: 10 * deep, opacity: opacity };
                return (React__default.createElement("div", { className: 'node', key: row, style: treeStyle },
                    toggleEle,
                    React__default.createElement(Button, { color: 'link', disabled: selected, onClick: function () { return uiVtree.onSelectNode(node); } }, node.label)));
            },
            actions: []
        };
        return _this;
    }
    VTree.prototype.render = function () {
        var rows = this.initDataRowHolder();
        var className = this.props.className;
        className = className ? "ui-tree " + className : 'ui-tree';
        return (React__default.createElement("div", { className: className },
            React__default.createElement(VList, { context: { uiVTree: this }, config: this.listConfig, model: new ListModel(50000, rows) })));
    };
    return VTree;
}(VTreeBase));
var VTreeSimpleTable = /** @class */ (function (_super) {
    __extends(VTreeSimpleTable, _super);
    function VTreeSimpleTable(props) {
        var _this = _super.call(this, props) || this;
        _this.headerRenderer = _this.headerRenderer.bind(_this);
        _this.cellDataGetter = _this.cellDataGetter.bind(_this);
        _this.treeCellRenderer = _this.treeCellRenderer.bind(_this);
        _this.cellRenderer = _this.cellRenderer.bind(_this);
        _this.noRowsRenderer = _this.noRowsRenderer.bind(_this);
        _this.rowClassName = _this.rowClassName.bind(_this);
        return _this;
    }
    VTreeSimpleTable.prototype.cellDataGetter = function (_ref) { return ''; };
    VTreeSimpleTable.prototype.headerRenderer = function (_ref) {
        var label = _ref.label;
        var colConfig = _ref.columnData;
        var style = null;
        if (colConfig)
            style = colConfig.cellStyle;
        return (React__default.createElement("div", { className: 'header-cell', style: style }, label));
    };
    VTreeSimpleTable.prototype.cellRenderer = function (_ref) {
        var rowData = _ref.rowData;
        var node = rowData.node;
        var userData = node.userData;
        var colConfig = _ref.columnData;
        var cellData = '';
        if (userData) {
            cellData = formatCellValue(colConfig, userData[colConfig.name]);
        }
        return (React__default.createElement("div", { className: 'cell' }, cellData));
    };
    VTreeSimpleTable.prototype.treeCellRenderer = function (_ref) {
        var _this = this;
        var model = this.props.model;
        var rowData = _ref.rowData;
        var node = rowData.node;
        var userData = node.userData;
        var deep = rowData.deep;
        var toggleEle = null;
        if (!model.isLoadedChildren(node)) {
            var toggleBtnClass = ICONS.editor.refresh;
            toggleEle = (React__default.createElement(Button, { color: 'link', onClick: function () { return _this.onToggleNode(node); } },
                React__default.createElement("span", { className: toggleBtnClass })));
        }
        else if (!model.isLeafNode(node)) {
            var toggleBtnClass = ICONS.webapp.caretDown;
            if (node.collapse)
                toggleBtnClass = ICONS.webapp.caretRight;
            toggleEle = (React__default.createElement(Button, { color: 'link', onClick: function () { return _this.onToggleNode(node); } },
                React__default.createElement("span", { className: toggleBtnClass })));
        }
        var opacity = 1;
        if (userData && userData.state === 'InActive')
            opacity = 0.6;
        var treeStyle = { paddingLeft: 10 * deep, opacity: opacity };
        return (React__default.createElement("div", { className: 'tree-cell', style: treeStyle },
            toggleEle,
            React__default.createElement(Button, { color: 'link', onClick: function () { return _this.onSelectNode(node); } }, node.label)));
    };
    VTreeSimpleTable.prototype.noRowsRenderer = function () {
        return (React__default.createElement("div", { className: 'no-rows' }, 'No rows'));
    };
    VTreeSimpleTable.prototype.rowClassName = function (_ref) {
        var index = _ref.index;
        if (index < 0)
            return 'header-row';
        else
            return index % 2 === 0 ? 'even-row' : 'odd-row';
    };
    VTreeSimpleTable.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, config = _a.config;
        var rowDataHolder = this.initDataRowHolder();
        var columns = [];
        var treeColWidth = 200;
        columns.push(React__default.createElement(Column, { key: '_tree', label: '', dataKey: "_tree", disableSort: true, width: treeColWidth, headerRenderer: this.headerRenderer, cellDataGetter: this.cellDataGetter, cellRenderer: this.treeCellRenderer }));
        for (var i = 0; i < config.columns.length; i++) {
            var colConfig = config.columns[i];
            if (colConfig.visible) {
                var colWidth = 150;
                if (colConfig.width)
                    colWidth = colConfig.width;
                columns.push(React__default.createElement(Column, { key: i, label: colConfig.label, dataKey: colConfig.name, width: colWidth, columnData: colConfig, headerRenderer: this.headerRenderer, disableSort: true, cellDataGetter: this.cellDataGetter, cellRenderer: this.cellRenderer }));
            }
        }
        className = className ? "ui-vtable " + className : 'ui-vtable';
        var rowHeight = 25;
        return (React__default.createElement("div", { className: className, style: { height: '100%' } },
            React__default.createElement("div", { className: 'view' },
                React__default.createElement(AutoSizer, { key: IDTracker.next() }, function (_a) {
                    var height = _a.height, width = _a.width;
                    return (React__default.createElement(Table, { width: width, height: height, headerHeight: 35, rowHeight: rowHeight, rowCount: rowDataHolder.length, rowGetter: function (_a) {
                            var index = _a.index;
                            return rowDataHolder[index];
                        }, rowClassName: _this.rowClassName, noRowsRenderer: _this.noRowsRenderer }, columns));
                }))));
    };
    return VTreeSimpleTable;
}(VTreeBase));
var UIWidget = /** @class */ (function (_super) {
    __extends(UIWidget, _super);
    function UIWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIWidget.prototype.render = function () {
        var _a = this.props, label = _a.label, node = _a.node, isLeafNode = _a.isLeafNode, onSelectNode = _a.onSelectNode, onExpandNode = _a.onExpandNode, config = _a.config;
        var nodeConfig = config.node;
        var uiNodeInfo = null;
        if (isLeafNode) {
            uiNodeInfo = (React__default.createElement("div", { className: 'btn-tree-widget' },
                React__default.createElement(Button, { outline: true, onClick: function () { return onSelectNode(node); } }, label),
                React__default.createElement("div", { className: 'd-flex' },
                    React__default.createElement(Button, { outline: true, onClick: function () { return onSelectNode(node); } }, nodeConfig.format(node.userData[nodeConfig.name])),
                    React__default.createElement(Button, { outline: true, style: { width: '25px', borderLeft: 'none' }, onClick: function () { return nodeConfig.onNodeInfo(node); } },
                        React__default.createElement("span", { className: "" + ICONS.editor.info })))));
        }
        else {
            uiNodeInfo = (React__default.createElement("div", { className: 'btn-tree-widget' },
                React__default.createElement(Button, { className: 'btn-primary h-100', onClick: function () { return onExpandNode(node); } },
                    React__default.createElement("div", null, label))));
        }
        return uiNodeInfo;
    };
    return UIWidget;
}(Component));
var MUIWidget = /** @class */ (function (_super) {
    __extends(MUIWidget, _super);
    function MUIWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MUIWidget.prototype.render = function () {
        var _a = this.props, label = _a.label, node = _a.node, isLeafNode = _a.isLeafNode, onSelectNode = _a.onSelectNode, onExpandNode = _a.onExpandNode, config = _a.config;
        var nodeConfig = config.node;
        var uiNodeInfo = null;
        if (isLeafNode) {
            uiNodeInfo = (React__default.createElement("div", { className: 'btn-tree-widget' },
                React__default.createElement(Button, { outline: true, onClick: function () { return onSelectNode(node); } }, label),
                React__default.createElement("div", { className: 'd-flex' },
                    React__default.createElement(Button, { outline: true, onClick: function () { return onSelectNode(node); } }, nodeConfig.format(node.userData[nodeConfig.name])))));
        }
        else {
            uiNodeInfo = (React__default.createElement("div", { className: 'btn-tree-widget' },
                React__default.createElement(Button, { className: 'btn-primary h-100', onClick: function () { return onExpandNode(node); } },
                    React__default.createElement("div", null, label))));
        }
        return uiNodeInfo;
    };
    return MUIWidget;
}(UIWidget));
var TreeWidget = /** @class */ (function (_super) {
    __extends(TreeWidget, _super);
    function TreeWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeWidget.prototype.componentWillMount = function () {
        this.initUI(this.props);
    };
    TreeWidget.prototype.componentWillReceiveProps = function (nextProps) {
        this.initUI(nextProps);
    };
    TreeWidget.prototype.initUI = function (props) {
        var pageContext = props.pageContext;
        var nodes = pageContext.nodes;
        var uiNodes = [];
        for (var i = 0; i < nodes.length; i++) {
            uiNodes.push(pageContext.nodeRender(nodes[i]));
        }
        var html = (React__default.createElement("div", { className: 'ui-tree-widget' }, uiNodes));
        var label = pageContext.label;
        this.push("widget-panel-" + label, label, html);
    };
    return TreeWidget;
}(BreadcumbsPage));
var UIVTreeWidget = /** @class */ (function (_super) {
    __extends(UIVTreeWidget, _super);
    function UIVTreeWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIVTreeWidget.prototype.nodeRender = function (node) {
        var _this = this;
        var _a = this.props, model = _a.model, config = _a.config;
        return (React__default.createElement(UIWidget, { key: "node-" + node.name, label: node.label, node: node, isLeafNode: model.isLeafNode(node), config: config, onExpandNode: function (node) { return _this.onExpandNode(node); }, onSelectNode: function (node) { return _this.onSelectNode(node); } }));
    };
    UIVTreeWidget.prototype.onExpandNode = function (node) {
        var thisUI = this;
        var callback = function (node) {
            var children = node.getChildren();
            var uiChildren = [];
            for (var i = 0; i < children.length; i++) {
                uiChildren.push(thisUI.nodeRender(children[i]));
            }
            var html = (React__default.createElement("div", { className: 'ui-tree-widget' },
                " ",
                uiChildren,
                " "));
            thisUI.treeWigdetEle.push("node-" + node.name, node.label, html);
        };
        this.props.model.onExpand(node, callback);
    };
    UIVTreeWidget.prototype.render = function () {
        var _this = this;
        var config = this.props.config;
        var dataHolder = this.initDataRowHolder();
        var nodes = [];
        for (var i = 0; i < dataHolder.length; i++) {
            nodes.push(dataHolder[i].node);
        }
        var pageContext = {
            label: config.label,
            nodeRender: function (node) { return _this.nodeRender(node); },
            nodes: nodes
        };
        var html = (React__default.createElement("div", null, " "));
        if (nodes.length > 0) {
            html = (React__default.createElement(TreeWidget, { pageContext: pageContext, scroll: false, ref: function (instance) { _this.treeWigdetEle = instance; } }));
        }
        return html;
    };
    return UIVTreeWidget;
}(VTree));
var MUIVTreeWidget = /** @class */ (function (_super) {
    __extends(MUIVTreeWidget, _super);
    function MUIVTreeWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MUIVTreeWidget.prototype.nodeRender = function (node) {
        var _this = this;
        var _a = this.props, model = _a.model, config = _a.config;
        return (React__default.createElement(MUIWidget, { key: "node-" + node.name, label: node.label, node: node, isLeafNode: model.isLeafNode(node), config: config, onExpandNode: function (node) { return _this.onExpandNode(node); }, onSelectNode: function (node) { return _this.onSelectNode(node); } }));
    };
    return MUIVTreeWidget;
}(UIVTreeWidget));

var PAGE_SIZES = [100, 500, 1000, 10000];
var ColumnToggleButton$1 = /** @class */ (function (_super) {
    __extends(ColumnToggleButton, _super);
    function ColumnToggleButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnToggleButton.prototype.render = function () {
        var table = this.props.table;
        var config = table.getConfig();
        var onSelect = function (column) { return table.onToggleColumn(column); };
        var html = (React__default.createElement(DropdownSelectComplexItemButton, { label: 'Cols', items: config.columns, fieldLabel: 'label', fieldCheck: 'visible', onSelect: onSelect }));
        return html;
    };
    return ColumnToggleButton;
}(Component));
var AggregationControl = /** @class */ (function (_super) {
    __extends(AggregationControl, _super);
    function AggregationControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AggregationControl.prototype.render = function () {
        var table = this.props.table;
        var model = table.getTreeTableModel();
        var aggregations = model.aggregations;
        var html = (React__default.createElement(DropdownSelectComplexItemButton, { label: 'Aggregations', items: aggregations, fieldLabel: 'name', fieldCheck: 'active', onSelect: function () { return table.updateAggregation(); } }));
        return html;
    };
    return AggregationControl;
}(Component));
var VTableToolbar = /** @class */ (function (_super) {
    __extends(VTableToolbar, _super);
    function VTableToolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VTableToolbar.prototype.render = function () {
        var _a = this.props, table = _a.table, config = _a.config;
        var viewMode = config.viewMode;
        if (!viewMode)
            viewMode = 'table';
        if (viewMode == 'grid' && config.gridView && config.gridView.renderToolbar) {
            return config.gridView.renderToolbar(table);
        }
        if (viewMode == 'kanban' && config.kanbanView && config.kanbanView.renderToolbar) {
            return config.kanbanView.renderToolbar(table);
        }
        return this.renderDefault();
    };
    VTableToolbar.prototype.renderDefault = function () {
        var _a = this.props, table = _a.table, config = _a.config, model = _a.model;
        var title = config.title, viewMode = config.viewMode;
        if (!viewMode)
            viewMode = 'table';
        var titleUI = null;
        if (title) {
            titleUI = (React__default.createElement(Button, { className: 'px-0', disabled: true },
                "[",
                title,
                "]"));
        }
        var html = (React__default.createElement("div", { className: "toolbar toolbar-" + viewMode + " d-flex" },
            React__default.createElement("div", { className: 'd-flex' },
                titleUI,
                this.createGridControls(table, config, model),
                this.renderActions(table, config.actions)),
            React__default.createElement("div", { className: "d-flex ml-auto" }, this.renderFilters(table, config))));
        return html;
    };
    VTableToolbar.prototype.renderActions = function (table, actions) {
        if (!actions || actions.length == 0)
            return null;
        var html = (React__default.createElement("div", { className: "d-flex" }, actions.map(function (action, _idx) {
            if (action.createComponent) {
                return action.createComponent(table);
            }
            else {
                var iconEle = null;
                if (action.icon)
                    iconEle = (React__default.createElement("span", { className: action.icon, title: action.hint }));
                return (React__default.createElement(Button, { key: action.name, onClick: function () { return table.onAction(action); } },
                    " ",
                    iconEle,
                    action.label,
                    " "));
            }
        })));
        return html;
    };
    VTableToolbar.prototype.setActiveFilter = function (idx, filters) {
        for (var i = 0; i < filters.length; i++) {
            var filter = filters[i];
            if (i == idx)
                filter.active = true;
            else
                filter.active = false;
        }
        this.forceUpdate();
    };
    VTableToolbar.prototype.renderFilters = function (table, config) {
        var _this = this;
        var filters = config.filters;
        if (!filters || filters.length == 0)
            return null;
        var definedFilters = filters;
        var uiButtons = [];
        var activeFilter = definedFilters[0];
        var _loop_1 = function (i) {
            var filter = definedFilters[i];
            var iconEle = filter.icon ? (React__default.createElement("span", { className: filter.icon, title: filter.hint })) : null;
            uiButtons.push(React__default.createElement(Button, { onClick: function () { return _this.setActiveFilter(i, definedFilters); }, active: filter.active },
                iconEle,
                filter.label));
            if (filter.active)
                activeFilter = filter;
        };
        for (var i = 0; i < definedFilters.length; i++) {
            _loop_1(i);
        }
        var filterUI = activeFilter.createComponent(table);
        var html = (React__default.createElement("div", { className: "d-flex" },
            React__default.createElement(ButtonGroup, null, uiButtons),
            filterUI));
        return html;
    };
    VTableToolbar.prototype.createGridControls = function (table, config, model) {
        var viewMode = config.viewMode;
        var buttons = [];
        if (config.gridView && viewMode !== 'grid') {
            buttons.push(React__default.createElement(Button, { key: 'grid', onClick: function () { return table.onViewMode('grid'); } },
                React__default.createElement("span", { className: ICONS.editor.th, title: 'Grid' })));
        }
        if (config.kanbanView && viewMode !== 'kanban') {
            buttons.push(React__default.createElement(Button, { key: 'kanban', onClick: function () { return table.onViewMode('kanban'); } },
                React__default.createElement("span", { className: ICONS.editor.tasks, title: 'Kanban' })));
        }
        if (config.treeView && viewMode !== 'tree') {
            buttons.push(React__default.createElement(Button, { key: 'tree', onClick: function () { return table.onViewMode('tree'); } },
                React__default.createElement("span", { className: ICONS.editor.table, title: 'Tree' })));
        }
        if (viewMode && viewMode !== 'table') {
            buttons.push(React__default.createElement(Button, { key: 'table', onClick: function () { return table.onViewMode('table'); } },
                React__default.createElement("span", { className: ICONS.editor.table, title: 'Table' })));
        }
        if (!viewMode || viewMode == 'table') {
            var pageSize = model.getPageList().getPageSize();
            var arrPageSize = PAGE_SIZES;
            if (config.pageSizes)
                arrPageSize = config.pageSizes;
            buttons.push(React__default.createElement(ColumnToggleButton$1, { key: 'column-toggle-button', table: table }));
            buttons.push(React__default.createElement(DropdownSelectItemButton, { key: 'select-page', items: arrPageSize, selectItem: pageSize, onSelect: function (value) { return table.onSelectPageSize(value); } }));
        }
        if (viewMode && viewMode == 'tree') {
            buttons.push(React__default.createElement(AggregationControl, { key: 'aggregation', table: table }));
        }
        return buttons;
    };
    return VTableToolbar;
}(Component));

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

var DEFAULT_COLUMN_WIDTH = 150;
var DEFAULT_ROW_HEIGHT = 25;
var DEFAULT_HEADER_ROW_HEIGHT = 30;

var VTableView = /** @class */ (function (_super) {
    __extends(VTableView, _super);
    function VTableView(props) {
        var _this = _super.call(this, props) || this;
        _this._renderHeader = _this._renderHeader.bind(_this);
        _this._renderCell = _this._renderCell.bind(_this);
        _this._colWidth = _this._colWidth.bind(_this);
        return _this;
    }
    VTableView.prototype._getColumn = function (idx) {
        var _a = this.props, vtable = _a.vtable, config = _a.config;
        var fixedColumns = config.fixedColumns;
        var columns = vtable.visibleColumns;
        if (fixedColumns) {
            if (idx < fixedColumns.length)
                return fixedColumns[idx];
            return columns[idx - fixedColumns.length];
        }
        else {
            return columns[idx];
        }
    };
    VTableView.prototype._renderHeader = function (params) {
        var column = this._getColumn(params.columnIndex);
        return (React__default.createElement("div", { className: 'header-cell', key: params.key, style: __assign({}, column.cellStyle, params.style) }, column.label));
    };
    VTableView.prototype._renderCell = function (params) {
        var _a = this.props, vtable = _a.vtable, model = _a.model;
        var row = params.rowIndex;
        var column = this._getColumn(params.columnIndex);
        var record = model.getRecordInPage(row);
        if (column.name == '_index') {
            var className = row % 2 == 0 ? 'cell-even-row cell' : 'cell-odd-row cell';
            return (React__default.createElement("div", { key: params.key, style: params.style, className: className }, model.getPageList().getFrom() + row + 1));
        }
        else if (column.name == '_selector') {
            var page_1 = model.getPageList().getCurrentPage();
            var selected = model.isSelectedRowInPage(page_1, row);
            var className = row % 2 == 0 ? 'cell-even-row cell row-selector-cell' : 'cell-odd-row cell row-selector-cell';
            var html = (React__default.createElement("div", { key: params.key, className: className, style: params.style },
                React__default.createElement("input", { type: "checkbox", name: 'row_selector', value: 'true', checked: selected ? true : false, onChange: function (_evt) { return vtable.onSelectRowInPage(page_1, row); } })));
            return html;
        }
        else if (column.actions) {
            var className = row % 2 == 0 ? 'cell-even-row cell' : 'cell-odd-row cell';
            var actions = [];
            var _loop_1 = function (i) {
                var action = column.actions[i];
                actions.push(React__default.createElement(Button, { key: i, className: 'px-1', color: 'link', onClick: function () { return action.onClick(vtable, row, record); } }, action.label));
            };
            for (var i = 0; i < column.actions.length; i++) {
                _loop_1(i);
            }
            var html = (React__default.createElement("div", { key: params.key, className: className, style: params.style },
                " ",
                actions,
                " "));
            return html;
        }
        return (React__default.createElement(TableCell, { key: params.key, style: params.style, table: vtable, row: row, fieldConfig: column, record: record }));
    };
    VTableView.prototype._colWidth = function (params) {
        var column = this._getColumn(params.index);
        return column.width ? column.width : DEFAULT_COLUMN_WIDTH;
    };
    VTableView.prototype._gridWidth = function (columns) {
        var width = 0;
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            if (column.width)
                width += column.width;
            else
                width += DEFAULT_COLUMN_WIDTH;
        }
        return width;
    };
    VTableView.prototype.renderFixedColumns = function (scrollTop, headerRowHeight, rowHeight) {
        var _this = this;
        var config = this.props.config;
        var fixedColumns = config.fixedColumns;
        if (!fixedColumns)
            return null;
        var fixedGridWidth = this._gridWidth(fixedColumns);
        var customStyle = { position: "absolute", left: 0, top: 0, zIndex: 10 };
        var html = (React__default.createElement(AutoSizer, { className: 'fixed-column-container', style: customStyle }, function (_a) {
            var height = _a.height;
            return (React__default.createElement("div", null,
                React__default.createElement(Grid, { className: 'header-grid', height: headerRowHeight, width: fixedGridWidth, columnWidth: _this._colWidth, columnCount: fixedColumns.length, rowHeight: headerRowHeight, rowCount: 1, cellRenderer: _this._renderHeader }),
                React__default.createElement(Grid, { className: 'fixed-column-grid', columnCount: fixedColumns.length, columnWidth: _this._colWidth, height: height - headerRowHeight + scrollbarSize(), width: fixedGridWidth, rowHeight: rowHeight, rowCount: _this._getRowCount(), scrollTop: scrollTop, cellRenderer: _this._renderCell })));
        }));
        return html;
    };
    VTableView.prototype._getRowCount = function () {
        var model = this.props.model;
        return model.getPageList().currentPageItems().length;
    };
    VTableView.prototype.render = function () {
        var _this = this;
        var _a = this.props, vtable = _a.vtable, config = _a.config, className = _a.className, style = _a.style;
        var fixedColumns = config.fixedColumns;
        var columns = vtable.visibleColumns;
        var totalColumn = columns.length;
        if (fixedColumns)
            totalColumn += fixedColumns.length;
        var headerRowHeight = config.headerRowHeight ? config.headerRowHeight : DEFAULT_HEADER_ROW_HEIGHT;
        var rowHeight = config.rowHeight ? config.rowHeight : DEFAULT_ROW_HEIGHT;
        var cssClass = className ? "view " + className : 'view';
        return (React__default.createElement(ScrollSync, null, function (_a) {
            var onScroll = _a.onScroll, scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
            return (React__default.createElement("div", { className: cssClass, style: style },
                _this.renderFixedColumns(scrollTop, headerRowHeight, rowHeight),
                React__default.createElement(AutoSizer, { className: 'column-container' }, function (_a) {
                    var height = _a.height, width = _a.width;
                    return (React__default.createElement("div", null,
                        React__default.createElement(Grid, { className: 'header-grid', columnWidth: _this._colWidth, columnCount: totalColumn, height: headerRowHeight, width: width /*- scrollbarSize()*/, rowHeight: headerRowHeight, rowCount: 1, scrollLeft: scrollLeft, cellRenderer: _this._renderHeader }),
                        React__default.createElement(Grid, { className: 'column-grid', columnWidth: _this._colWidth, columnCount: totalColumn, height: height - headerRowHeight + scrollbarSize(), width: width /*- scrollbarSize()*/, rowHeight: rowHeight, rowCount: _this._getRowCount(), onScroll: onScroll, cellRenderer: _this._renderCell })));
                })));
        }));
    };
    return VTableView;
}(React__default.PureComponent));

var VTableGridView = /** @class */ (function (_super) {
    __extends(VTableGridView, _super);
    function VTableGridView(props) {
        var _this = _super.call(this, props) || this;
        _this.ref = React__default.createRef();
        _this.rowRenderer = _this.rowRenderer.bind(_this);
        _this.noRowsRenderer = _this.noRowsRenderer.bind(_this);
        return _this;
    }
    VTableGridView.prototype.noRowsRenderer = function () {
        return (React__default.createElement("div", { className: 'no-rows' }, 'No rows'));
    };
    VTableGridView.prototype.rowRenderer = function (_ref) {
        var key = _ref.key, index = _ref.index, style = _ref.style;
        var _a = this.props, vtable = _a.vtable, model = _a.model, config = _a.config;
        var gridView = config.gridView;
        if (!gridView)
            return null;
        var maxColumn = gridView.column ? gridView.column : 4;
        var columnWidth = 100 / maxColumn;
        var pageList = model.getPageList();
        var from = pageList.getFrom();
        var page = pageList.getCurrentPage();
        var items = pageList.currentPageItems();
        var start = index * maxColumn;
        var limit = start + maxColumn;
        if (items.length < limit)
            limit = items.length;
        var cells = [];
        for (var i = start; i < limit; i++) {
            var item = items[i];
            cells.push(React__default.createElement("div", { key: i, className: 'item', style: { width: columnWidth + "%" } }, gridView.renderItem(vtable, page, from + i, i, item)));
        }
        return (React__default.createElement("div", { key: key, className: "d-flex py-1", style: style }, cells));
    };
    VTableGridView.prototype.render = function () {
        var _this = this;
        var _a = this.props, config = _a.config, model = _a.model, style = _a.style, className = _a.className;
        var gridView = config.gridView;
        if (!gridView)
            return null;
        var maxColumn = gridView.column ? gridView.column : 4;
        var rowHeight = gridView.rowHeight ? gridView.rowHeight : 100;
        var cssClass = className ? "grid-view " + className : 'grid-view';
        var pageList = model.getPageList();
        var items = pageList.currentPageItems();
        var html = (React__default.createElement("div", { className: cssClass, style: style },
            React__default.createElement(AutoSizer, { key: IDTracker.next() }, function (_a) {
                var height = _a.height, width = _a.width;
                return (React__default.createElement(List, { ref: _this.ref, width: width, height: height, overscanRowCount: 10, rowCount: items.length / maxColumn + 1, rowHeight: rowHeight, rowRenderer: _this.rowRenderer, noRowsRenderer: _this.noRowsRenderer, scrollToIndex: 0 }));
            })));
        return html;
    };
    return VTableGridView;
}(Component));

var VTableTool = /** @class */ (function () {
    function VTableTool() {
    }
    VTableTool.removeAction = function (config, actionName) {
        var actions = config.actions;
        if (!actions)
            return;
        for (var i = 0; i < actions.length; i++) {
            if (actionName == actions[i].name) {
                actions.splice(i, 1);
                return;
            }
        }
    };
    VTableTool.removeFilter = function (config, filterName) {
        var filters = config.filters;
        if (!filters)
            return;
        for (var i = 0; i < filters.length; i++) {
            if (filterName == filters[i].name) {
                filters.splice(i, 1);
                return;
            }
        }
    };
    VTableTool.addAction = function (config, actionConfig) {
        if (!config.actions)
            config.actions = [];
        config.actions.push(actionConfig);
    };
    VTableTool.addFixedColumn = function (config, colConfig, atIdx) {
        var columns = config.fixedColumns;
        if (!columns) {
            throw new Error("Fixed Columns are not defined");
        }
        columns.splice(atIdx, 0, colConfig);
    };
    VTableTool.addColumn = function (config, colConfig, atIdx) {
        var columns = config.columns;
        if (!columns) {
            throw new Error("Fixed Columns are not defined");
        }
        columns.splice(atIdx, 0, colConfig);
    };
    VTableTool.removeColumn = function (config, name) {
        if (this.removeFrom(name, config.fixedColumns))
            return;
        this.removeFrom(name, config.columns);
    };
    VTableTool.removeColumns = function (config, names) {
        for (var i = 0; i < names.length; i++) {
            this.removeColumn(config, names[i]);
        }
    };
    VTableTool.removeFrom = function (name, columns) {
        if (columns) {
            for (var i = 0; i < columns.length; i++) {
                if (name == columns[i].name) {
                    columns.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    };
    return VTableTool;
}());

var css$3 = ".dnd-board {\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: row; }\n  .dnd-board .column {\n    padding: 0px 5px;\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important; }\n    .dnd-board .column > .header {\n      border-bottom: 2px solid gray; }\n    .dnd-board .column > .list-body {\n      padding: 5px;\n      border: 1px solid lightgray;\n      height: calc(100% - 30px);\n      outline: none; }\n      .dnd-board .column > .list-body .dnd-item {\n        border: 1px dashed lightgray;\n        display: flex;\n        flex-direction: column !important;\n        flex-grow: 1 !important; }\n        .dnd-board .column > .list-body .dnd-item .item {\n          padding: 2px; }\n        .dnd-board .column > .list-body .dnd-item .item-detail {\n          padding: 2px;\n          display: flex;\n          flex-direction: column !important;\n          flex-grow: 1 !important; }\n      .dnd-board .column > .list-body .ReactVirtualized__Grid__innerScrollContainer {\n        overflow: visible !important; }\n    .dnd-board .column > .list-body-hightlight {\n      border: 2px dashed lightgray;\n      transition: 'background-color 0.2s ease'; }\n";
styleInject(css$3);

var DNDItem = /** @class */ (function (_super) {
    __extends(DNDItem, _super);
    function DNDItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNDItem.prototype.render = function () {
        var _a = this.props, context = _a.context, config = _a.config, columnConfig = _a.columnConfig, item = _a.item, index = _a.index;
        var commonStyle = { padding: 2, margin: "0 0 5px 0", height: config.itemHeight - 5 };
        var itemId = config.getItemId(item, columnConfig.name, index, context);
        var html = (React__default.createElement(Draggable, { key: itemId, draggableId: itemId, index: index }, function (provided, _snapshot) {
            return (React__default.createElement("div", __assign({ className: 'dnd-item', ref: provided.innerRef }, provided.draggableProps, { style: __assign({}, commonStyle, { userSelect: "none" }, provided.draggableProps.style) }),
                React__default.createElement("div", __assign({ className: 'item' }, provided.dragHandleProps), config.renderItem(columnConfig, item, context)),
                React__default.createElement("div", { className: 'item-detail' }, config.renderItemDetail(columnConfig, item, context))));
        }));
        return html;
    };
    return DNDItem;
}(Component));
var DNDColumn = /** @class */ (function (_super) {
    __extends(DNDColumn, _super);
    function DNDColumn(props) {
        var _this = _super.call(this, props) || this;
        _this.rowRenderer = _this.rowRenderer.bind(_this);
        _this.renderClone = _this.renderClone.bind(_this);
        return _this;
    }
    DNDColumn.prototype.rowRenderer = function (_ref) {
        var key = _ref.key, index = _ref.index, style = _ref.style;
        var _a = this.props, context = _a.context, config = _a.config, columnConfig = _a.columnConfig;
        var items = columnConfig.items;
        var item = items[index];
        return (React__default.createElement("div", { key: key, style: style },
            React__default.createElement(DNDItem, { key: index, context: context, config: config, columnConfig: columnConfig, item: item, index: index })));
    };
    DNDColumn.prototype.setRef = function (ref, droppableProvided) {
        // react-virtualized has no way to get the list's ref that I can so
        // So we use the `ReactDOM.findDOMNode(ref)` escape hatch to get the ref
        if (ref) {
            // eslint-disable-next-line react/no-find-dom-node
            var whatHasMyLifeComeTo = ReactDOM.findDOMNode(ref);
            if (whatHasMyLifeComeTo instanceof HTMLElement) {
                droppableProvided.innerRef(whatHasMyLifeComeTo);
            }
        }
    };
    DNDColumn.prototype.renderClone = function (provided, _snapshot, rubric) {
        var _a = this.props, context = _a.context, config = _a.config, columnConfig = _a.columnConfig;
        var items = columnConfig.items;
        var item = items[rubric.source.index];
        var html = (React__default.createElement("div", __assign({}, provided.draggableProps, provided.dragHandleProps),
            React__default.createElement("div", { className: 'border', style: { height: config.itemHeight - 5 } },
                React__default.createElement("div", null, config.renderItem(columnConfig, item, context)))));
        return html;
    };
    DNDColumn.prototype.render = function () {
        var _this = this;
        var _a = this.props, config = _a.config, columnConfig = _a.columnConfig;
        var items = columnConfig.items;
        var columnWidth = columnConfig.width ? columnConfig.width : config.columnWidth;
        var height = 500;
        if (config.height)
            height = config.height - 30;
        var html = (React__default.createElement("div", { className: 'column', key: columnConfig.name },
            React__default.createElement("h3", { className: 'header' }, columnConfig.label),
            React__default.createElement(Droppable, { droppableId: columnConfig.name, mode: "virtual", renderClone: this.renderClone }, function (droppableProvided, snapshot) {
                var className = snapshot.isDraggingOver ? 'list-body list-body-hightlight' : 'list-body';
                return (React__default.createElement(List, { className: className, ref: function (ref) { _this.setRef(ref, droppableProvided); }, width: columnWidth, height: height, rowCount: items.length, rowHeight: config.itemHeight, 
                    //autoHeight={true}
                    overscanRowCount: 5, rowRenderer: _this.rowRenderer }));
            })));
        return html;
    };
    return DNDColumn;
}(Component));
var DNDBoard = /** @class */ (function (_super) {
    __extends(DNDBoard, _super);
    function DNDBoard(props) {
        var _this = _super.call(this, props) || this;
        _this.divElement = null;
        var _a = _this.props, context = _a.context, config = _a.config, items = _a.items;
        var columns = config.columns;
        for (var j = 0; j < columns.length; j++) {
            var column = columns[j];
            column.items = [];
        }
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            for (var j = 0; j < columns.length; j++) {
                var column = columns[j];
                if (config.inColumn(column.name, item, context)) {
                    column.items.push(item);
                    break;
                }
            }
        }
        _this.state = { height: 500, width: 900 };
        return _this;
    }
    DNDBoard.prototype.componentDidMount = function () {
        if (this.divElement) {
            var height = this.divElement.clientHeight;
            var width = this.divElement.clientWidth;
            this.setState({ height: height, width: width });
        }
    };
    DNDBoard.prototype.findColumn = function (name) {
        var config = this.props.config;
        var columns = config.columns;
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            if (name == column.name)
                return column;
        }
        throw new Error("Cannot find the column " + name);
    };
    DNDBoard.prototype.onDragEnd = function (result) {
        if (!result.destination)
            return;
        var _a = this.props, context = _a.context, config = _a.config;
        var source = result.source, destination = result.destination;
        var sourceColumn = this.findColumn(source.droppableId);
        var destColumn = this.findColumn(destination.droppableId);
        var sourceItems = sourceColumn.items;
        var dragItem = sourceItems.splice(source.index, 1)[0];
        if (source.droppableId !== destination.droppableId) {
            var destItems = destColumn.items;
            destItems.splice(destination.index, 0, dragItem);
        }
        else {
            sourceItems.splice(destination.index, 0, dragItem);
        }
        config.onDrop(sourceColumn, destColumn, dragItem, context);
        this.forceUpdate();
    };
    DNDBoard.prototype.render = function () {
        var _this = this;
        if (!this.divElement) {
            return (React__default.createElement("div", { className: 'dnd-board', ref: function (divElement) { _this.divElement = divElement; } }, "Loading..."));
        }
        var _a = this.props, context = _a.context, config = _a.config;
        var _b = this.state, width = _b.width, height = _b.height;
        if (config.columnWidth < 10) {
            config.columnWidth = (width / config.columns.length) - 10;
        }
        config.height = height;
        var columns = config.columns;
        var columnEles = [];
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            columnEles.push(React__default.createElement(DNDColumn, { key: i, context: context, config: config, columnConfig: column }));
        }
        return (React__default.createElement("div", { className: 'dnd-board', ref: function (divElement) { _this.divElement = divElement; } },
            React__default.createElement(DragDropContext, { onDragEnd: function (result) { return _this.onDragEnd(result); } }, columnEles)));
    };
    return DNDBoard;
}(Component));
var items = [
    { id: 'task-1', content: "First task", state: "Requested" },
    { id: 'task-2', content: "Second task", state: "Todo" },
    { id: 'task-3', content: "Third task", state: "Requested" },
    { id: 'task-4', content: "Fourth task", state: "Requested" },
    { id: 'task-5', content: "Fifth task", state: "InProgress" },
    { id: 'random-task', content: "Random", state: "Requested" },
    { id: 'random-task-1', content: "Random", state: "Requested" },
    { id: 'random-task-2', content: "Random", state: "Requested" },
    { id: 'random-task-3', content: "Random", state: "Requested" },
    { id: 'random-task-5', content: "Random", state: "Requested" },
    { id: 'random-task-6', content: "Random", state: "Requested" },
    { id: 'random-task-7', content: "Random", state: "Requested" },
    { id: 'random-task-8', content: "Random", state: "Requested" },
    { id: 'random-task-9', content: "Random", state: "Requested" },
];
function createConfig() {
    var config = {
        columns: [
            { name: "Requested", label: 'Requested', items: [] },
            { name: "Todo", label: 'To Do', items: [] },
            { name: "InProgress", label: 'In Progress', items: [] },
            { name: "Done", label: 'Done', items: [] }
        ],
        columnWidth: 0,
        itemHeight: 100,
        inColumn: function (name, item) {
            return name == item.state;
        },
        onDrop: function (sourceCol, destCol, item) {
            item.state = destCol.name;
            console.log("Drag Item " + item.id + " from " + sourceCol + " to " + destCol);
        },
        getItemId: function (item, _columnName, _index) { return item.id; },
        renderItem: function (_col, item) {
            return (React__default.createElement("h5", { className: 'border-bottom' }, item.id));
        },
        renderItemDetail: function (_col, item) {
            return (React__default.createElement("div", null, item.content));
        }
    };
    return config;
}
var DNDBoardDemo = /** @class */ (function (_super) {
    __extends(DNDBoardDemo, _super);
    function DNDBoardDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNDBoardDemo.prototype.render = function () {
        return (React__default.createElement(DNDBoard, { config: createConfig(), items: items }));
    };
    return DNDBoardDemo;
}(Component));

var VKanbanView = /** @class */ (function (_super) {
    __extends(VKanbanView, _super);
    function VKanbanView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VKanbanView.prototype.render = function () {
        var _a = this.props, vtable = _a.vtable, config = _a.config, model = _a.model, style = _a.style, className = _a.className;
        var kanbanview = config.kanbanView;
        if (!kanbanview)
            return null;
        var records = model.getFilterRecords();
        var cssClass = className ? "kanban-view " + className : 'kanban-view';
        var html = (React__default.createElement("div", { className: cssClass, style: style },
            React__default.createElement(DNDBoard, { context: vtable, config: kanbanview.dndBoard, items: records })));
        return html;
    };
    return VKanbanView;
}(Component));

var VTreeTableView = /** @class */ (function (_super) {
    __extends(VTreeTableView, _super);
    function VTreeTableView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VTreeTableView.prototype._renderTreeCell = function (key, style, cssClass, rowData) {
        var deep = rowData.deep;
        var treeStyle = { paddingLeft: 15 * deep };
        if (rowData.bucket) {
            var bucket_1 = rowData.bucket;
            var toggleBtnClass = "" + ICONS.webapp.caretDown;
            if (bucket_1.collapse)
                toggleBtnClass = "" + ICONS.webapp.caretRight;
            var vtable_1 = this.props.vtable;
            return (React__default.createElement("div", { key: key, className: cssClass + " tree-cell", style: __assign({}, style, treeStyle) },
                React__default.createElement(Button, { color: 'link', onClick: function () { return vtable_1.onToggleBucket(bucket_1); } },
                    React__default.createElement("span", { className: toggleBtnClass })),
                React__default.createElement("strong", null, bucket_1.label),
                React__default.createElement("span", null,
                    "[",
                    bucket_1.getNumOfRecords(),
                    "]")));
        }
        if (rowData.aggRecord) {
            var label = rowData.aggRecord.treeNodeLabel;
            treeStyle.paddingLeft = treeStyle.paddingLeft + 25;
            return (React__default.createElement("div", { key: key, className: 'tree-cell', style: __assign({}, style, treeStyle) }, label));
        }
        return React__default.createElement("div", { key: key, className: 'tree-cell', style: __assign({}, style, treeStyle) });
    };
    VTreeTableView.prototype._renderCell = function (params) {
        var vtable = this.props.vtable;
        var model = vtable.getTreeTableModel();
        var row = params.rowIndex;
        var column = this._getColumn(params.columnIndex);
        var tableRows = model.getTableRows();
        var className = row % 2 == 0 ? 'cell-even-row cell' : 'cell-odd-row cell';
        var rowData = tableRows[row];
        if (column.name == '_tree') {
            return this._renderTreeCell(params.key, params.style, className, rowData);
        }
        var record = rowData.record;
        if (column.actions) {
            if (!record) {
                return (React__default.createElement("div", { key: params.key, className: className, style: params.style }));
            }
            var actions = [];
            var _loop_1 = function (i) {
                var action = column.actions[i];
                actions.push(React__default.createElement(Button, { key: i, className: 'px-1', color: 'link', onClick: function () { return action.onClick(vtable, row, record); } }, action.label));
            };
            for (var i = 0; i < column.actions.length; i++) {
                _loop_1(i);
            }
            return (React__default.createElement("div", { key: params.key, className: className, style: params.style },
                " ",
                actions,
                " "));
        }
        if (!record)
            record = rowData.aggRecord;
        if (!record) {
            return (React__default.createElement("div", { key: params.key, className: className, style: params.style }));
        }
        return (React__default.createElement(TableCell, { key: params.key, style: params.style, table: vtable, row: row, fieldConfig: column, record: record }));
    };
    VTreeTableView.prototype._getRowCount = function () {
        var vtable = this.props.vtable;
        var model = vtable.getTreeTableModel();
        return model.getTableRows().length;
    };
    return VTreeTableView;
}(VTableView));

var VTable = /** @class */ (function (_super) {
    __extends(VTable, _super);
    function VTable(props) {
        var _this = _super.call(this, props) || this;
        _this.visibleColumns = [];
        _this.dialogContext = null;
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.state = { updateView: true };
        var config = props.config;
        _this._updateVisibleColumns(config);
        if (!config.viewMode)
            config.viewMode = 'table';
        _this.onViewMode(config.viewMode);
        return _this;
    }
    VTable.prototype.getModel = function () { return this.props.model; };
    VTable.prototype.getTreeTableModel = function () {
        if (this.props.model.treeTableModel == null) {
            throw Error("TreeTableModel is null");
        }
        return this.props.model.treeTableModel;
    };
    VTable.prototype.getConfig = function () { return this.props.config; };
    VTable.prototype.getContext = function () { return this.props.context; };
    VTable.prototype.onToggleColumn = function (_column) {
        //column.visible = !column.visible; //no need
        this._updateVisibleColumns(this.props.config);
        this.setState({ updateView: true });
    };
    VTable.prototype.setColumnVisible = function (visible, names) {
        var config = this.props.config;
        for (var i = 0; i < config.columns.length; i++) {
            var column = config.columns[i];
            if (util.isIn(column.name, names)) {
                column.visible = visible;
            }
        }
        this._updateVisibleColumns(config);
        this.setState({ updateView: true });
    };
    VTable.prototype.setOnlyColumnVisible = function (names) {
        var config = this.props.config;
        for (var i = 0; i < config.columns.length; i++) {
            var column = config.columns[i];
            if (util.isIn(column.name, names)) {
                column.visible = true;
            }
            else {
                column.visible = false;
            }
        }
        this._updateVisibleColumns(config);
        this.setState({ updateView: true });
    };
    VTable.prototype.setAllColumnVisible = function (visible) {
        var config = this.props.config;
        for (var i = 0; i < config.columns.length; i++) {
            var column = config.columns[i];
            column.visible = visible;
        }
        this._updateVisibleColumns(config);
        this.setState({ updateView: true });
    };
    VTable.prototype._updateVisibleColumns = function (config) {
        this.visibleColumns = [];
        for (var i = 0; i < config.columns.length; i++) {
            var column = config.columns[i];
            if (column.visible == undefined)
                column.visible = true;
            if (column.visible) {
                this.visibleColumns.push(column);
            }
        }
    };
    VTable.prototype.updateAggregation = function () {
        var model = this.getTreeTableModel();
        model.runAggregation();
        model.buildTableRows();
        this.setState({ updateView: true });
    };
    VTable.prototype.onSelectPageSize = function (pageSize) {
        var model = this.props.model;
        model.changePageSize(pageSize);
        this.setState({ updateView: true });
    };
    VTable.prototype.onSelectPage = function (page) {
        var model = this.props.model;
        model.selectPage(page);
        this.setState({ updateView: true });
    };
    VTable.prototype.onSelectRowInPage = function (page, row) {
        var model = this.props.model;
        model.toggleSelectRowInPage(page, row);
        this.setState({ updateView: true });
    };
    VTable.prototype.onToggleBucket = function (bucket) {
        var model = this.getTreeTableModel();
        bucket.collapse = !bucket.collapse;
        model.buildTableRows();
        this.setState({ updateView: true });
    };
    VTable.prototype.isFocusRow = function (row) {
        var model = this.props.model;
        return row === model.getFocusRowInPage();
    };
    VTable.prototype.onFocusRow = function (row) {
        var model = this.props.model;
        if (row === model.getFocusRowInPage())
            return;
        model.setFocusRowInPage(row);
        this.setState({ updateView: true });
    };
    VTable.prototype.setFocusRow = function (row) {
        var model = this.props.model;
        if (row === model.getFocusRowInPage())
            return;
        model.setFocusRowInPage(row);
    };
    VTable.prototype.onFilter = function (exp) {
        var _a = this.props, config = _a.config, model = _a.model;
        model.filter(exp);
        if (config.viewMode == 'tree' && config.treeView) {
            var treeNodeLabel = this.getTreeTableModel();
            treeNodeLabel.update(model.getFilterRecords());
        }
        this.setState({ updateView: true });
    };
    VTable.prototype.onCellAction = function (colConfig, row, rec) {
        if (!colConfig.onClick)
            return;
        colConfig.onClick(this, row, rec);
    };
    VTable.prototype.onAction = function (action) {
        if (action.onClick)
            action.onClick(this);
    };
    VTable.prototype.onViewMode = function (mode) {
        var _a = this.props, config = _a.config, model = _a.model;
        config.viewMode = mode;
        if ('tree' == mode) {
            if (config.treeView) {
                var treeColWidth = config.treeView.treeColumnWidth;
                if (!treeColWidth)
                    treeColWidth = 200;
                var treeTableModel = config.treeView.createTreeTableModel(model.getFilterRecords());
                model.setTreeTableModel(treeTableModel);
                VTableTool.addFixedColumn(config, { name: '_tree', label: 'Tree', width: treeColWidth }, 0);
                this.setColumnVisible(false, ['_index']);
            }
            else {
                throw new Error('Tree View Config is not defined');
            }
        }
        else {
            model.setTreeTableModel(null);
            VTableTool.removeColumn(config, "_tree");
        }
        this.forceUpdate();
    };
    VTable.prototype.onKeyDown = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var _a = this.props, model = _a.model, config = _a.config;
        var currRowFocus = model.getFocusRowInPage();
        if (currRowFocus == null)
            return false;
        var keyCode = evt.keyCode;
        if (keyCode == 38) { // key up
            //model.setFocusRowInPage(currRowFocus - 1);
            //this.setState({updateView: true});
            return false;
        }
        else if (keyCode == 40) { // key down
            //model.setFocusRowInPage(currRowFocus + 1);
            //this.setState({updateView: true});
            return false;
        }
        else if (config.onFocusRowKeyDown) {
            var onFocusRowKeyDown = config.onFocusRowKeyDown;
            onFocusRowKeyDown(evt, this, currRowFocus, model.getRecordInPage(currRowFocus));
            this.setState({ updateView: true });
        }
        return true;
    };
    VTable.prototype.dialogShow = function (title, size, ui) {
        this.dialogContext = new DialogContext();
        showDialog(title, size, ui, this.dialogContext);
    };
    VTable.prototype.dialogClose = function () {
        if (this.dialogContext) {
            this.dialogContext.getDialog().doClose();
            this.dialogContext = null;
        }
    };
    VTable.prototype.render = function () {
        var _this = this;
        var _a = this.props, config = _a.config, model = _a.model, className = _a.className, style = _a.style;
        var viewMode = config.viewMode;
        if (!viewMode)
            viewMode = 'table';
        var renderId = IDTracker.next();
        var viewHeight = 'calc(100% - 40px)';
        var pageIteratorBlock = null;
        var pageList = model.getPageList();
        if (pageList.getPageSize() < pageList.getAvailable()) {
            viewHeight = 'calc(100% - 65px)';
            var onSelectPage = function (page) {
                _this.onSelectPage(page);
            };
            pageIteratorBlock = (React__default.createElement(PageIterator, { pageList: pageList, onSelectPage: onSelectPage }));
        }
        var tableView = null;
        if (viewMode == 'grid') {
            tableView = (React__default.createElement(VTableGridView, { key: renderId, ref: function (view) { _this.view = view; }, style: { height: viewHeight, minHeight: '100px' }, vtable: this, model: model, config: config }));
        }
        else if (viewMode == 'kanban') {
            tableView = (React__default.createElement(VKanbanView, { key: renderId, style: { height: viewHeight, minHeight: 100 }, vtable: this, config: config, model: model }));
            pageIteratorBlock = null;
        }
        else if (viewMode == 'tree') {
            tableView = (React__default.createElement(VTreeTableView, { key: renderId, style: { height: viewHeight, minHeight: 100 }, vtable: this, config: config, model: model }));
            pageIteratorBlock = null;
        }
        else {
            tableView = (React__default.createElement(VTableView, { key: renderId, style: { height: viewHeight, minHeight: 100 }, vtable: this, config: config, model: model }));
        }
        if (!className)
            className = 'full-height-box';
        className = "ui-table " + className;
        var html = (React__default.createElement("div", { className: className, style: style },
            React__default.createElement(VTableToolbar, { table: this, config: config, model: model }),
            tableView,
            pageIteratorBlock));
        return html;
    };
    return VTable;
}(React__default.Component));

var WTableFilter = /** @class */ (function (_super) {
    __extends(WTableFilter, _super);
    function WTableFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WTableFilter.prototype.render = function () {
        var table = this.props.table;
        var model = table.getModel();
        return (React__default.createElement(InputGroup, null,
            React__default.createElement(InputGroupAddon, { addonType: "prepend" },
                React__default.createElement(WStringInput, { name: 'search', value: model.getFilterExp(), placeholder: 'filter expression', onChange: function (_oldVal, newVal) { return table.onFilter(newVal); } }))));
    };
    return WTableFilter;
}(Component));
var WTableStateFilter = /** @class */ (function (_super) {
    __extends(WTableStateFilter, _super);
    function WTableStateFilter(props) {
        var _this = _super.call(this, props) || this;
        _this.onInputChange = _this.onInputChange.bind(_this);
        return _this;
    }
    WTableStateFilter.prototype.onInputChange = function (_bean, _field, _oldVal, newVal) {
        console.log('on select ' + newVal);
        var table = this.props.table;
        var model = table.getModel();
        model.filterByState(newVal);
        table.forceUpdate();
    };
    WTableStateFilter.prototype.render = function () {
        var table = this.props.table;
        var model = table.getModel();
        var opts = [null, 'ACTIVE', 'ARCHIVED'];
        var optLabels = ['All', 'Active', 'Archive'];
        return (React__default.createElement(UncontrolledDropdown, null,
            React__default.createElement(DropdownToggle, { nav: true, caret: true }, "State Filter"),
            React__default.createElement(DropdownMenu, { right: true },
                React__default.createElement(BBRadioInputField, { style: { display: 'block', padding: '5px 10px' }, bean: model, field: 'filterState', options: opts, optionLabels: optLabels, onInputChange: this.onInputChange }))));
    };
    return WTableStateFilter;
}(Component));
var WTableChangeState = /** @class */ (function (_super) {
    __extends(WTableChangeState, _super);
    function WTableChangeState(props) {
        var _this = _super.call(this, props) || this;
        var thisUI = _this;
        var actions = props.actions;
        _this.actions = [];
        for (var i = 0; i < actions.length; i++) {
            if ('ACTIVE' == actions[i]) {
                _this.actions.push({ name: 'activate', label: 'Activate', onSelect: function () { thisUI.onChangeStorageState('ACTIVE'); } });
            }
            else if ('INACTIVE' == actions[i]) {
                _this.actions.push({ name: 'inactive', label: 'Inactive', onSelect: function () { thisUI.onChangeStorageState('INACTIVE'); } });
            }
            else if ('ARCHIVED' == actions[i]) {
                _this.actions.push({ name: 'archive', label: 'Archive', onSelect: function () { thisUI.onChangeStorageState('ARCHIVED'); } });
            }
            else if ('DEPRECATED' == actions[i]) {
                _this.actions.push({ name: 'deprecated', label: 'Deprecated', onSelect: function () { thisUI.onChangeStorageState('DEPRECATED'); } });
            }
        }
        return _this;
    }
    WTableChangeState.prototype.onChangeStorageState = function (newState) {
        var table = this.props.table;
        var model = table.getModel();
        var selRecords = model.getSelectedRecords();
        for (var i = 0; i < selRecords.length; i++) {
            var record = selRecords[i];
            record.entityState = newState;
        }
        model.refresh();
        table.forceUpdate();
    };
    WTableChangeState.prototype.render = function () {
        var html = (React__default.createElement(DropdownActionButton, { label: "States", items: this.actions }));
        return html;
    };
    return WTableChangeState;
}(Component));

var SORT_FUNC$1 = function (rec1, rec2) {
    var x1 = rec1.x;
    var x2 = rec2.x;
    if (x1 === x2)
        return 0;
    return (x1 > x2) ? 1 : -1;
};
var Bucket = /** @class */ (function () {
    function Bucket(name, label, records, collapse) {
        if (collapse === void 0) { collapse = false; }
        this.buckets = null;
        this.aggregatedRecords = null;
        this.name = name;
        this.label = label;
        this.records = records;
        this.collapse = collapse;
    }
    Bucket.prototype.setRecords = function (records) {
        this.records = records;
        this.buckets = [];
    };
    Bucket.prototype.getNumOfRecords = function () {
        if (this.buckets != null && this.buckets.length > 0) {
            var numOfRecords = 0;
            for (var i = 0; i < this.buckets.length; i++) {
                numOfRecords += this.buckets[i].getNumOfRecords();
            }
            return numOfRecords;
        }
        else {
            if (!this.records)
                return 0;
            return this.records.length;
        }
    };
    Bucket.prototype.getChildrenBuckets = function () { return this.buckets; };
    Bucket.prototype.addRecord = function (record) {
        if (this.records == null)
            this.records = [];
        this.records.push(record);
    };
    Bucket.prototype.traverse = function (visit) {
        visit(this);
        var buckets = this.getChildrenBuckets();
        if (buckets == null)
            return;
        for (var i = 0; i < buckets.length; i++) {
            buckets[i].traverse(visit);
        }
    };
    Bucket.prototype.findBucketsByName = function (name) {
        var holder = [];
        var visitor = function (bucket) {
            if (bucket.name === name)
                holder.push(bucket);
        };
        this.traverse(visitor);
        return holder;
    };
    Bucket.prototype.findLeafBucket = function () {
        var holder = [];
        var visitor = function (bucket) {
            if (!bucket.buckets)
                holder.push(bucket);
        };
        this.traverse(visitor);
        return holder;
    };
    return Bucket;
}());
var SumAggregationFunction = /** @class */ (function () {
    function SumAggregationFunction(name, sumFields) {
        this.name = name;
        this.calculateFields = sumFields;
    }
    SumAggregationFunction.prototype.invoke = function (records) {
        var aggRec = { treeNodeLabel: this.name };
        for (var i = 0; i < this.calculateFields.length; i++) {
            var field = this.calculateFields[i];
            var sum = this.calculateAggregationValue(field, records);
            aggRec[field] = sum;
        }
        return aggRec;
    };
    SumAggregationFunction.prototype.calculateAggregationValue = function (field, records) {
        var sum = 0;
        for (var i = 0; i < records.length; i++) {
            var rec = records[i];
            sum += rec[field];
        }
        return sum;
    };
    return SumAggregationFunction;
}());
var AvgAggregationFunction = /** @class */ (function (_super) {
    __extends(AvgAggregationFunction, _super);
    function AvgAggregationFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvgAggregationFunction.prototype.invoke = function (records) {
        var aggRec = { treeNodeLabel: this.name };
        for (var i = 0; i < this.calculateFields.length; i++) {
            var field = this.calculateFields[i];
            var avg = _super.prototype.calculateAggregationValue.call(this, field, records) / records.length;
            aggRec[field] = avg;
        }
        return aggRec;
    };
    return AvgAggregationFunction;
}(SumAggregationFunction));
var Aggregation = /** @class */ (function () {
    function Aggregation(name, field, active) {
        if (active === void 0) { active = false; }
        this.getFieldData = null;
        this.name = name;
        this.field = field;
        this.active = active;
    }
    Aggregation.prototype.withFieldGetter = function (getter) {
        this.getFieldData = getter;
        return this;
    };
    Aggregation.prototype.mapToBucket = function (_bucketMap, _record) { throw new Error("This method need to be implemented"); };
    Aggregation.prototype.sortBuckets = function (buckets) { return buckets; };
    return Aggregation;
}());
var ValueAggregation = /** @class */ (function (_super) {
    __extends(ValueAggregation, _super);
    function ValueAggregation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValueAggregation.prototype.mapToBucket = function (bucketMap, record) {
        var field = this.field;
        var fieldValue = null;
        if (this.getFieldData) {
            fieldValue = this.getFieldData(record);
        }
        else {
            fieldValue = record[field];
        }
        var selBucket = bucketMap[fieldValue];
        if (!selBucket) {
            selBucket = new Bucket(this.name, fieldValue, []);
            bucketMap[fieldValue] = selBucket;
        }
        selBucket.addRecord(record);
    };
    return ValueAggregation;
}(Aggregation));
var DateValueAggregation = /** @class */ (function (_super) {
    __extends(DateValueAggregation, _super);
    function DateValueAggregation(name, field, format) {
        var _this = _super.call(this, name, field) || this;
        _this.format = format ? format : 'YYYY-MM-DD';
        return _this;
    }
    DateValueAggregation.prototype.mapToBucket = function (bucketMap, record) {
        var field = this.field;
        var fieldValue = record[field];
        var mapValue = moment(fieldValue).format(this.format);
        var selBucket = bucketMap[mapValue];
        if (!selBucket) {
            selBucket = new Bucket(this.name, mapValue, []);
            bucketMap[mapValue] = selBucket;
        }
        selBucket.addRecord(record);
    };
    DateValueAggregation.prototype.sortBuckets = function (buckets) {
        var SORT_FUNC = function (b1, b2) {
            var l1 = b1.label;
            var l2 = b2.label;
            if (l1 === l2)
                return 0;
            return (l1 > l2) ? 1 : -1;
        };
        return buckets.sort(SORT_FUNC);
    };
    return DateValueAggregation;
}(Aggregation));
var SingleAggregationModel = /** @class */ (function () {
    function SingleAggregationModel(rootBucket) {
        this.rootBucket = rootBucket;
    }
    SingleAggregationModel.prototype.getCountChartData = function () {
        var values = [];
        var buckets = this.rootBucket.getChildrenBuckets();
        if (buckets == null)
            return values;
        for (var i = 0; i < buckets.length; i++) {
            var bucket = buckets[i];
            var xValue = bucket.label;
            var count = 0;
            if (bucket.records)
                count = bucket.records.length;
            values.push({ x: xValue, y: count });
        }
        return values;
    };
    SingleAggregationModel.prototype.createCountChart = function (type, yAxis) {
        return { key: 'Count', type: type, yAxis: yAxis, values: this.getCountChartData() };
    };
    SingleAggregationModel.prototype.getSumFieldChartData = function (field, xyTransformer) {
        var values = [];
        var buckets = this.rootBucket.getChildrenBuckets();
        if (buckets == null)
            return values;
        for (var i = 0; i < buckets.length; i++) {
            var bucket = buckets[i];
            var xValue = bucket.label;
            var sum = 0;
            if (bucket.records) {
                var records = bucket.records;
                for (var i_1 = 0; i_1 < records.length; i_1++) {
                    sum += records[i_1][field];
                }
            }
            var xy = { x: xValue, y: sum };
            if (xyTransformer)
                xyTransformer(xy);
            values.push(xy);
        }
        return values;
    };
    SingleAggregationModel.prototype.createSumFieldChart = function (field, type, yAxis, xyTransformer) {
        return { key: 'Sum ' + field, type: type, yAxis: yAxis, values: this.getSumFieldChartData(field, xyTransformer) };
    };
    return SingleAggregationModel;
}());
var DoubleAggregationModel = /** @class */ (function () {
    function DoubleAggregationModel(rootBucket) {
        this.aggregations = null;
        this.rootBucket = rootBucket;
    }
    DoubleAggregationModel.prototype.getAggCountChartData = function (chartConfig) {
        var chartMap = {};
        var buckets = this.rootBucket.getChildrenBuckets();
        if (buckets == null)
            return [];
        var subBucketNames = this._getSubBucketNames(buckets);
        for (var i = 0; i < buckets.length; i++) {
            var bucket = buckets[i];
            var xValue = bucket.label;
            var entries = {};
            for (var subBucketName in subBucketNames) {
                var entry = { x: xValue, y: 0 };
                if (!chartMap[subBucketName]) {
                    chartMap[subBucketName] = __assign({ key: 'Count ' + subBucketName }, chartConfig, { values: [] });
                }
                chartMap[subBucketName].values.push(entry);
                entries[subBucketName] = entry;
            }
            var subBuckets = bucket.buckets;
            if (!subBuckets)
                continue;
            for (var j = 0; j < subBuckets.length; j++) {
                var selBucket = subBuckets[j];
                var count = 0;
                if (selBucket.records)
                    count = selBucket.records.length;
                var subBucketName = selBucket.label;
                entries[subBucketName].y = count;
            }
        }
        var chartHolder = [];
        for (var key in chartMap) {
            var chart = chartMap[key];
            chart.values.sort(SORT_FUNC$1);
            chartHolder.push(chart);
        }
        return chartHolder;
    };
    DoubleAggregationModel.prototype.createAggCountChart = function (chartHolder, type, yAxis) {
        var charts = this.getAggCountChartData({ type: type, yAxis: yAxis });
        for (var i = 0; i < charts.length; i++) {
            chartHolder.push(charts[i]);
        }
    };
    DoubleAggregationModel.prototype.getAggSumFieldChartData = function (name, field, chartConfig, xyTransformer) {
        var charts = {};
        var buckets = this.rootBucket.getChildrenBuckets();
        if (buckets == null)
            return [];
        var subBucketNames = this._getSubBucketNames(buckets);
        for (var i = 0; i < buckets.length; i++) {
            var bucket = buckets[i];
            var xValue = bucket.label;
            var entries = {};
            for (var subBucketName in subBucketNames) {
                var entry = { x: xValue, y: 0 };
                if (!charts[subBucketName]) {
                    charts[subBucketName] = __assign({ key: name + ' ' + subBucketName }, chartConfig, { values: [] });
                }
                charts[subBucketName].values.push(entry);
                entries[subBucketName] = entry;
            }
            var subBuckets = bucket.buckets;
            if (!subBuckets)
                continue;
            for (var j = 0; j < subBuckets.length; j++) {
                var selBucket = subBuckets[j];
                var sum = 0;
                var subBucketName = selBucket.label;
                if (selBucket.records) {
                    var records = selBucket.records;
                    for (var i_2 = 0; i_2 < records.length; i_2++) {
                        sum += records[i_2][field];
                    }
                }
                entries[subBucketName].y = sum;
                if (xyTransformer)
                    xyTransformer(entries[subBucketName]);
            }
        }
        var chartHolder = [];
        for (var key in charts) {
            var chart = charts[key];
            chart.values.sort(SORT_FUNC$1);
            chartHolder.push(chart);
        }
        return chartHolder;
    };
    DoubleAggregationModel.prototype.createAggSumFieldChart = function (chartHolder, name, field, type, yAxis, xyTransformer) {
        var charts = this.getAggSumFieldChartData(name, field, { type: type, yAxis: yAxis }, xyTransformer);
        for (var i = 0; i < charts.length; i++) {
            chartHolder.push(charts[i]);
        }
    };
    DoubleAggregationModel.prototype._getSubBucketNames = function (buckets) {
        var bucketNames = {};
        for (var i = 0; i < buckets.length; i++) {
            var subBuckets = buckets[i].buckets;
            for (var j = 0; j < subBuckets.length; j++) {
                var bucketName = subBuckets[j].label;
                bucketNames[bucketName] = bucketName;
            }
        }
        return bucketNames;
    };
    return DoubleAggregationModel;
}());
var TreeTableModel = /** @class */ (function () {
    function TreeTableModel(rootLabel, records, collapse) {
        if (collapse === void 0) { collapse = true; }
        this.tableRows = [];
        this.rootLabel = rootLabel;
        this.records = records;
        this.filterBeans = records;
        this.filterExp = '';
        this.aggregations = [];
        this.aggregationFunction = [];
        this.rootBucket = new Bucket('root', rootLabel, this.filterBeans, collapse);
    }
    TreeTableModel.prototype.getFilterExp = function () { return this.filterExp; };
    TreeTableModel.prototype.getRootBucket = function () { return this.rootBucket; };
    TreeTableModel.prototype.update = function (records) {
        this.records = records;
        this.filter(this.filterExp);
        this.runAggregation();
    };
    TreeTableModel.prototype.addAggregation = function (aggregation, active) {
        if (active === void 0) { active = false; }
        this.aggregations.push(aggregation);
        if (active)
            aggregation.active = true;
    };
    TreeTableModel.prototype.setActivateAggregation = function (name, active) {
        for (var i = 0; i < this.aggregations.length; i++) {
            if (this.aggregations[i].name === name) {
                this.aggregations[i].active = active;
                return;
            }
        }
    };
    TreeTableModel.prototype.addAggregationFunction = function (func) { this.aggregationFunction.push(func); };
    TreeTableModel.prototype.runAggregation = function () {
        this.rootBucket = this.runAggregationWith(this.aggregations, false);
        this.buildTableRows();
    };
    TreeTableModel.prototype.runAggregationWith = function (aggregations, forceActive) {
        var rootBucket = new Bucket('root', this.rootLabel, this.filterBeans);
        this._computeAggregatedRecords(rootBucket);
        for (var i = 0; i < aggregations.length; i++) {
            var agg = aggregations[i];
            if (!forceActive && !agg.active)
                continue;
            this._aggregate(rootBucket, agg);
        }
        return rootBucket;
    };
    TreeTableModel.prototype.getTableRows = function () { return this.tableRows; };
    TreeTableModel.prototype.buildTableRows = function () {
        this.tableRows = [];
        this.addTableRow(this.tableRows, this.rootBucket, 0);
    };
    TreeTableModel.prototype.addTableRow = function (tableRowHolder, bucket, deep) {
        tableRowHolder.push({ deep: deep, bucket: bucket });
        if (!bucket.collapse) {
            var children = bucket.buckets;
            if (children != null) {
                for (var i = 0; i < children.length; i++) {
                    this.addTableRow(tableRowHolder, children[i], deep + 1);
                }
            }
            var records = bucket.records;
            if (records) {
                for (var i = 0; i < records.length; i++) {
                    var rec = records[i];
                    tableRowHolder.push({ deep: deep, record: rec });
                }
            }
        }
        var aggRecords = bucket.aggregatedRecords;
        if (aggRecords) {
            for (var i = 0; i < aggRecords.length; i++) {
                var rec = aggRecords[i];
                tableRowHolder.push({ deep: deep, aggRecord: rec });
            }
        }
    };
    TreeTableModel.prototype._aggregate = function (parentBucket, aggregation) {
        var childrenBuckets = parentBucket.buckets;
        if (childrenBuckets != null) {
            for (var j = 0; j < childrenBuckets.length; j++) {
                this._aggregate(childrenBuckets[j], aggregation);
            }
            return;
        }
        var records = parentBucket.records;
        var bucketMap = {};
        for (var i = 0; i < records.length; i++) {
            aggregation.mapToBucket(bucketMap, records[i]);
        }
        var buckets = [];
        for (var key in bucketMap) {
            if (bucketMap.hasOwnProperty(key)) {
                var bucket = bucketMap[key];
                this._computeAggregatedRecords(bucket);
                buckets.push(bucket);
            }
        }
        parentBucket.buckets = aggregation.sortBuckets(buckets);
        parentBucket.records = null;
        parentBucket.collapse = false;
    };
    TreeTableModel.prototype._computeAggregatedRecords = function (bucket) {
        var aggRecords = [];
        for (var i = 0; i < this.aggregationFunction.length; i++) {
            var func = this.aggregationFunction[i];
            var aggRecord = func.invoke(bucket.records);
            aggRecords.push(aggRecord);
        }
        bucket.aggregatedRecords = aggRecords;
    };
    TreeTableModel.prototype.filter = function (exp) {
        this.filterExp = exp;
        if (!exp || exp.length === 0) {
            this.filterBeans = this.records;
        }
        else {
            this.filterBeans = [];
            for (var i = 0; i < this.records.length; i++) {
                var record = this.records[i];
                if (ObjUtil.recordHasExpression(record, exp)) {
                    this.filterBeans.push(record);
                }
            }
        }
    };
    /*************************************************************************************************************/
    /* Chart methods                                                                                             */
    /*************************************************************************************************************/
    TreeTableModel.prototype.getXYCoordinate = function (xField, yField) {
        var values = [];
        for (var i = 0; i < this.records.length; i++) {
            var rec = this.records[i];
            var entry = { x: rec[xField], y: rec[yField] };
            values.push(entry);
        }
        values.sort(SORT_FUNC$1);
        return values;
    };
    TreeTableModel.prototype.createDoubleAggregationModel = function (aggs) {
        var rootBucket = this.runAggregationWith(aggs, true);
        return new DoubleAggregationModel(rootBucket);
    };
    TreeTableModel.prototype.createSingleAggregationModel = function (agg) {
        var rootBucket = this.runAggregationWith([agg], true);
        return new SingleAggregationModel(rootBucket);
    };
    return TreeTableModel;
}());

var ENTITY_COLUMNS = [
    { name: 'modifiedBy', label: 'Modified By', width: 100 },
    { name: 'modifiedTime', label: 'Modified Time', width: 180, format: formater.compactDateTime },
    { name: 'entityState', label: 'State', width: 100, editor: { type: 'string' }, cellStyle: { textAlign: 'center' } },
    { name: 'companyId', label: 'Company Id', visible: false, width: 100, cellStyle: { textAlign: 'right' } },
    { name: 'createdBy', label: 'Created By', visible: false, width: 100 },
    { name: 'createdTime', label: 'Created Time', visible: false, width: 180, format: formater.compactDateTime },
    { name: 'editState', label: 'EditState', visible: false, width: 100 },
];

var index$5 = /*#__PURE__*/Object.freeze({
  ListModel: ListModel,
  VList: VList,
  ENTITY_COLUMNS: ENTITY_COLUMNS,
  VGridTable: VTable,
  VTable: VTable,
  VTableTool: VTableTool,
  TreeTableModel: TreeTableModel,
  SumAggregationFunction: SumAggregationFunction,
  DateValueAggregation: DateValueAggregation,
  ValueAggregation: ValueAggregation,
  TreeNode: TreeNode,
  TreeModel: TreeModel,
  VTree: VTree,
  VTreeSimpleTable: VTreeSimpleTable,
  UIVTreeWidget: UIVTreeWidget,
  MUIVTreeWidget: MUIVTreeWidget,
  WTableFilter: WTableFilter,
  WTableStateFilter: WTableStateFilter,
  WTableChangeState: WTableChangeState
});

var ArrayEditor = /** @class */ (function (_super) {
    __extends(ArrayEditor, _super);
    function ArrayEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayEditor.prototype.createTableConfig = function () { throw new Error('This method method need to be implemented'); };
    ArrayEditor.prototype.renderBeanEditor = function () { throw new Error('This method method need to be implemented'); };
    ArrayEditor.prototype.isEditable = function () { return true; };
    ArrayEditor.prototype.createNewBean = function () { return {}; };
    ArrayEditor.prototype.getModifiedBean = function () {
        var selectBean = this.state.selectBean;
        return selectBean.modified;
    };
    ArrayEditor.prototype.setModifiedBean = function (modifiedBean) {
        var selectBean = this.state.selectBean;
        selectBean.modified = modifiedBean;
    };
    ArrayEditor.prototype.onSelect = function (_row, bean) {
        var newState = {
            selectBean: { origin: bean, modified: Object.assign({}, bean), edit: true, },
            openDialog: true
        };
        this.setState(newState);
    };
    ArrayEditor.prototype.onNewAction = function () {
        var newBean = this.createNewBean();
        var newState = {
            selectBean: { origin: newBean, modified: Object.assign({}, newBean), edit: false },
            openDialog: !this.state.openDialog
        };
        this.setState(newState);
    };
    ArrayEditor.prototype.onSaveAction = function () { throw new Error('This method method need to be implemented'); };
    ArrayEditor.prototype.hideDialog = function () { this.setState({ openDialog: false }); };
    ArrayEditor.prototype.renderDialogEditor = function () {
        var _this = this;
        var _a = this.state, openDialog = _a.openDialog, selectBean = _a.selectBean;
        var _b = this.props, editorTitle = _b.editorTitle, closeOnLostFocus = _b.closeOnLostFocus;
        var dialogTitle = selectBean.edit ? "Edit " + editorTitle : "Add " + editorTitle;
        var closeOnLostFocusHandler = null;
        if (closeOnLostFocus) {
            closeOnLostFocusHandler = function () { return _this.hideDialog(); };
        }
        else {
            closeOnLostFocusHandler = function () { };
        }
        var editorHtml = (createElement(Modal, { size: 'md', backdropTransition: { timeout: 50, appear: false, exit: false }, modalTransition: { timeout: 50, appear: false, exit: false }, isOpen: openDialog, toggle: closeOnLostFocusHandler },
            createElement(ModalHeader, { toggle: function () { return _this.hideDialog(); } }, dialogTitle),
            createElement(ModalBody, null,
                this.renderBeanEditor(),
                this.renderFooterAction(selectBean))));
        return editorHtml;
    };
    ArrayEditor.prototype.renderFooterAction = function (selectBean) {
        var _this = this;
        if (!this.isEditable())
            return null;
        var html = (createElement("div", { className: 'd-flex justify-content-end mt-2' },
            createElement(Button, { size: 'sm', onClick: function () { return _this.onSaveAction(); } }, selectBean.edit ? 'Save' : 'Add')));
        return html;
    };
    ArrayEditor.prototype.renderEditor = function () {
        var _a = this.state, dialogEditor = _a.dialogEditor, selectBean = _a.selectBean;
        var editorTitle = this.props.editorTitle;
        var editorHtml = null;
        if (dialogEditor) {
            editorHtml = this.renderDialogEditor();
        }
        else {
            var collapseEditor = this.props.collapseEditor;
            collapseEditor = collapseEditor === null ? false : collapseEditor;
            editorHtml = (createElement(Section, { title: editorTitle, collapse: collapseEditor },
                this.renderBeanEditor(),
                this.renderFooterAction(selectBean)));
        }
        return editorHtml;
    };
    return ArrayEditor;
}(Component));
var ListEditor = /** @class */ (function (_super) {
    __extends(ListEditor, _super);
    function ListEditor(props) {
        var _this = _super.call(this, props) || this;
        var beans = props.beans, dialogEditor = props.dialogEditor;
        _this.tableModel = new ListModel(500, beans);
        var bean = {};
        _this.state = {
            dialogEditor: dialogEditor,
            openDialog: false,
            selectBean: { origin: {}, modified: Object.assign({}, bean) }
        };
        return _this;
    }
    ListEditor.prototype.getSelectedBeans = function () {
        if (!this.tableModel)
            return [];
        return this.tableModel.getSelectedRecords();
    };
    ListEditor.prototype.onSaveAction = function () {
        var selectBean = this.state.selectBean;
        selectBean.origin = Object.assign(selectBean.origin, selectBean.modified);
        if (!selectBean.edit) {
            this.tableModel.addRecord(selectBean.origin);
        }
        this.onNewAction();
        var onChange = this.props.onChange;
        if (onChange)
            onChange(this.tableModel.getRecords());
    };
    ListEditor.prototype.onDeleteAction = function () {
        this.tableModel.removeSelectedRows();
        this.forceUpdate();
    };
    ListEditor.prototype.onChangeState = function (newState) {
        var selRecords = this.tableModel.getSelectedRecords();
        for (var i = 0; i < selRecords.length; i++) {
            var record = selRecords[i];
            record.entityState = newState;
        }
        this.tableModel.refresh();
        this.forceUpdate();
    };
    return ListEditor;
}(ArrayEditor));
var UIBeanGridTableEditor = /** @class */ (function (_super) {
    __extends(UIBeanGridTableEditor, _super);
    function UIBeanGridTableEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.config = _this.createTableConfig();
        return _this;
    }
    UIBeanGridTableEditor.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className;
        var editorHtml = this.renderEditor();
        var html = (createElement("div", { className: 'full-height-box' },
            createElement(VTable, { className: className, style: style, context: { uiParent: this }, config: this.config, model: this.tableModel }),
            editorHtml));
        return html;
    };
    return UIBeanGridTableEditor;
}(ListEditor));
var UILazyLoad = /** @class */ (function (_super) {
    __extends(UILazyLoad, _super);
    function UILazyLoad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = false;
        return _this;
    }
    UILazyLoad.prototype.isLoading = function () { return this.loading; };
    UILazyLoad.prototype.markLoading = function (loading) {
        this.loading = loading;
    };
    UILazyLoad.prototype.renderLoading = function () {
        var html = (createElement("div", { className: 'full-height-box' },
            createElement("div", { className: 'mx-auto my-auto' },
                createElement(Spinner, { color: "primary", style: { width: '5rem', height: '5rem' } }))));
        return html;
    };
    return UILazyLoad;
}(Component));

var component = /*#__PURE__*/Object.freeze({
  UIBeanGridTableEditor: UIBeanGridTableEditor,
  UILazyLoad: UILazyLoad
});

var css$4 = ".ui-search-params {\n  max-width: 650px; }\n  .ui-search-params h5 {\n    font-weight: 500; }\n  .ui-search-params label {\n    font-size: 1.1em;\n    padding: 5px 0px;\n    font-weight: 500 !important; }\n  .ui-search-params .badge {\n    display: inline-block;\n    margin: auto 1px;\n    border: 1px solid white; }\n    .ui-search-params .badge > .btn {\n      display: inline-block;\n      margin: 0px 2px !important;\n      padding: 0px !important; }\n  .ui-search-params .form-group {\n    padding: 0.25em 0.5em; }\n    .ui-search-params .form-group > label {\n      margin-top: 0.25em;\n      font-weight: bold; }\n    .ui-search-params .form-group > div {\n      margin-left: .5em; }\n      .ui-search-params .form-group > div > label {\n        margin-bottom: 0.25em;\n        font-weight: bold; }\n      .ui-search-params .form-group > div .rdt input {\n        width: auto; }\n";
styleInject(css$4);

var UISearchParams = /** @class */ (function (_super) {
    __extends(UISearchParams, _super);
    function UISearchParams(props) {
        var _this = _super.call(this, props) || this;
        _this.popoverId = "ui-sqlquery-popover-" + IDTracker.next();
        _this.state = { showFilter: false };
        return _this;
    }
    UISearchParams.prototype.onKeyDown = function (winput, _evt, keyCode, currInput) {
        if (keyCode === 13) {
            var _a = this.props, searchParams = _a.searchParams, onSubmit = _a.onSubmit;
            winput.updateValue(currInput);
            onSubmit(searchParams);
        }
    };
    UISearchParams.prototype.onDeleteMaxReturn = function () {
        var _a = this.props, searchParams = _a.searchParams, onSubmit = _a.onSubmit;
        searchParams.maxReturn = 1000;
        onSubmit(searchParams);
    };
    UISearchParams.prototype.onDeleteOrderBy = function () {
        var _a = this.props, searchParams = _a.searchParams, onSubmit = _a.onSubmit;
        if (searchParams.orderBy) {
            delete searchParams.orderBy.selectFields;
            onSubmit(searchParams);
        }
    };
    UISearchParams.prototype.onDeleteOptionFilter = function (filter) {
        var _a = this.props, searchParams = _a.searchParams, onSubmit = _a.onSubmit;
        filter.selectOption = '';
        onSubmit(searchParams);
    };
    UISearchParams.prototype.setDateTimeRangeFilter = function (filter, dayRange) {
        var time = moment();
        filter.toValue = time.format('DD/MM/YYYY@23:59:59 +0700');
        time = time.subtract(dayRange, 'days');
        filter.fromValue = time.format('DD/MM/YYYY@00:00:00 +0700');
        this.forceUpdate();
    };
    UISearchParams.prototype.clearDateTimeRangeFilter = function (filter) {
        filter.toValue = '';
        filter.fromValue = '';
        this.forceUpdate();
    };
    UISearchParams.prototype.render = function () {
        var _this = this;
        var _a = this.props, searchParams = _a.searchParams, defaultField = _a.defaultField;
        if (!defaultField)
            defaultField = 'search';
        var defaultFilter = this._getFilter(defaultField, searchParams.filters);
        var html = (React__default.createElement("div", { className: 'ui-search-params' },
            React__default.createElement(InputGroup, null,
                React__default.createElement(InputGroupAddon, { addonType: "prepend" },
                    React__default.createElement(BBStringField, { style: { width: 200 }, bean: defaultFilter, field: 'filterValue', placeholder: 'filter value', onKeyDown: function (winput, evt, keyCode, currInput) { return _this.onKeyDown(winput, evt, keyCode, currInput); } })),
                React__default.createElement(InputGroupAddon, { addonType: "prepend" }, this._renderDropdownCriteria(searchParams)))));
        return html;
    };
    UISearchParams.prototype._renderDropdownCriteria = function (searchParams) {
        var onSubmit = this.props.onSubmit;
        var html = (React__default.createElement(UncontrolledDropdown, { placement: 'auto-end' },
            React__default.createElement(DropdownToggle, { nav: true, caret: true },
                React__default.createElement("span", { className: ICONS.editor.reorder, title: 'Filter' })),
            React__default.createElement(DropdownMenu, { style: { left: -325 } },
                React__default.createElement(Form, { className: 'ui-sqlquery' },
                    this._renderDateRangeFilters(searchParams.rangeFilters),
                    this._renderOptionFilters(searchParams.optionFilters),
                    this._renderOrderBy(searchParams.orderBy),
                    this._renderMaxReturn(searchParams),
                    React__default.createElement("div", { className: 'border-top pt-2' },
                        React__default.createElement(Button, { className: 'd-block m-auto', onClick: function () { return onSubmit(searchParams); } },
                            React__default.createElement("span", { className: ICONS.editor.search, title: 'Search' }),
                            " Search"))))));
        return html;
    };
    UISearchParams.prototype._renderCriteriaBadge = function (searchParams) {
        var _this = this;
        var orderByBadge = null;
        var optionFilterBadges = null;
        var orderBy = searchParams.orderBy;
        var optionFilters = searchParams.optionFilters;
        if (orderBy && orderBy.selectFields && orderBy.selectFields.length > 0) {
            orderByBadge = (React__default.createElement(Badge, { key: 'orderBy' },
                "Order By: [",
                formater.text.arrayToString(orderBy.selectFields),
                "] DESC",
                React__default.createElement(Button, { outline: true, size: 'sm', onClick: function () { return _this.onDeleteOrderBy(); } }, "x")));
        }
        if (optionFilters && optionFilters.length > 0) {
            optionFilterBadges = [];
            var _loop_1 = function (i) {
                var filter = optionFilters[i];
                if (!filter.selectOption)
                    return "continue";
                optionFilterBadges.push(React__default.createElement(Badge, { key: i },
                    filter.label,
                    ": ",
                    filter.selectOption,
                    React__default.createElement(Button, { outline: true, size: 'sm', onClick: function () { return _this.onDeleteOptionFilter(filter); } }, "x")));
            };
            for (var i = 0; i < optionFilters.length; i++) {
                _loop_1(i);
            }
        }
        var html = (React__default.createElement(InputGroupAddon, { addonType: "prepend" },
            React__default.createElement(Badge, { key: 'limit' },
                "Limit: ",
                searchParams.maxReturn,
                React__default.createElement(Button, { disabled: true, outline: true, size: 'sm', onClick: function () { return _this.onDeleteMaxReturn(); } }, "x")),
            optionFilterBadges,
            orderByBadge));
        return html;
    };
    UISearchParams.prototype._renderMaxReturn = function (searchParams) {
        var opts = [1000, 5000, 10000, 30000, 50000, 100000];
        var html = (React__default.createElement("div", null,
            React__default.createElement("h5", { className: 'border-bottom' }, "Max Return"),
            React__default.createElement(FormGroup, null,
                React__default.createElement(BBRadioInputField, { bean: searchParams, field: 'maxReturn', options: opts, disable: false, onInputChange: function () { return console.log('todo..'); } }))));
        return html;
    };
    UISearchParams.prototype._renderOrderBy = function (orderBy) {
        if (!orderBy)
            return [];
        var orderSort = ['ASC', 'DESC'];
        var orderSortLabel = ['ASC', 'DESC'];
        var fields = orderBy.fields;
        var fieldLabels = fields;
        if (orderBy.fieldLabels)
            fieldLabels = orderBy.fieldLabels;
        var html = (React__default.createElement("div", null,
            React__default.createElement("h5", { className: 'border-bottom' }, "Order By"),
            React__default.createElement(FormGroup, null,
                React__default.createElement("div", { className: 'd-flex' },
                    React__default.createElement("div", null,
                        React__default.createElement("label", null,
                            'Field',
                            ":"),
                        React__default.createElement(BBMultiCheckboxInputField, { bean: orderBy, field: 'selectFields', options: fields, optionLabels: fieldLabels, disable: false })),
                    React__default.createElement("div", { className: "ml-2", style: { minWidth: 100 } },
                        React__default.createElement("label", null,
                            'Sort',
                            ":"),
                        React__default.createElement(BBRadioInputField, { bean: orderBy, field: 'sort', options: orderSort, optionLabels: orderSortLabel, disable: false }))))));
        return html;
    };
    UISearchParams.prototype._getFilter = function (field, filters) {
        if (filters == null)
            return null;
        for (var i = 0; i < filters.length; i++) {
            var filter = filters[i];
            if (filter.name === field)
                return filter;
        }
        return null;
    };
    UISearchParams.prototype._renderFilters = function (defaultField, filters) {
        if (!filters)
            return [];
        var rows = [];
        for (var i = 0; i < filters.length; i++) {
            var filter = filters[i];
            if (filter.name === defaultField)
                continue;
            var label = filter.label;
            if (!label)
                label = filter.name;
            var html = (React__default.createElement(FormGroup, { key: i },
                React__default.createElement("label", null, label),
                React__default.createElement(BBStringField, { bean: filter, field: 'filterValue', placeholder: "filter value" })));
            rows.push(html);
        }
        return rows;
    };
    UISearchParams.prototype._renderOptionFilters = function (filters) {
        if (!filters)
            return [];
        var optionEles = [];
        var _loop_2 = function (i) {
            var filter = filters[i];
            var optionLabels = filter.optionLabels ? filter.optionLabels : filter.options;
            optionEles.push(React__default.createElement(FormGroup, { className: 'py-0', key: i },
                React__default.createElement("label", null, filter.label ? filter.label : filter.name),
                React__default.createElement(BBRadioInputField, { key: i, bean: filter, field: 'selectOption', options: filter.options, optionLabels: optionLabels, disable: false, onInputChange: function () { return console.log('todo ' + filter.name); } })));
        };
        for (var i = 0; i < filters.length; i++) {
            _loop_2(i);
        }
        return (React__default.createElement("div", null,
            React__default.createElement("h5", { className: 'border-bottom' }, "Filters"),
            React__default.createElement("div", { className: 'py-1' }, optionEles)));
    };
    UISearchParams.prototype._renderDateRangeFilters = function (filters) {
        var _this = this;
        if (!filters)
            return [];
        var rows = [];
        var _loop_3 = function (i) {
            var filter = filters[i];
            var html_1 = (React__default.createElement(FormGroup, { className: 'py-0', key: i },
                React__default.createElement("label", null, filter.label ? filter.label : filter.name),
                React__default.createElement("div", { className: 'd-inline-block' },
                    "[",
                    React__default.createElement("span", null, "Last:"),
                    React__default.createElement(Button, { className: 'px-1', color: 'link', onClick: function () { return _this.setDateTimeRangeFilter(filter, 7); } }, "7D"),
                    React__default.createElement(Button, { className: 'px-1', color: 'link', onClick: function () { return _this.setDateTimeRangeFilter(filter, 30); } }, "1M"),
                    React__default.createElement(Button, { className: 'px-1', color: 'link', onClick: function () { return _this.setDateTimeRangeFilter(filter, 92); } }, "3M"),
                    React__default.createElement(Button, { className: 'px-1', color: 'link', onClick: function () { return _this.setDateTimeRangeFilter(filter, 183); } }, "6M"),
                    React__default.createElement(Button, { className: 'px-1', color: 'link', onClick: function () { return _this.setDateTimeRangeFilter(filter, 365); } }, "1Y"),
                    React__default.createElement(Button, { className: 'px-1', color: 'link', onClick: function () { return _this.setDateTimeRangeFilter(filter, 730); } }, "2Y"),
                    React__default.createElement(Button, { className: 'px-1', color: 'link', onClick: function () { return _this.setDateTimeRangeFilter(filter, 1095); } }, "3Y"),
                    React__default.createElement(Button, { className: 'px-1', color: 'link', onClick: function () { return _this.clearDateTimeRangeFilter(filter); } },
                        React__default.createElement("span", { className: ICONS.editor.trash })),
                    "]"),
                React__default.createElement("div", { className: 'd-flex py-1' },
                    React__default.createElement(BBDateTimeField, { bean: filter, field: 'fromValue', timeFormat: false }),
                    React__default.createElement("span", { className: 'd-inline px-2' }, ".."),
                    React__default.createElement(BBDateTimeField, { bean: filter, field: 'toValue', timeFormat: false }))));
            rows.push(html_1);
        };
        for (var i = 0; i < filters.length; i++) {
            _loop_3(i);
        }
        var html = (React__default.createElement("div", null,
            React__default.createElement("h5", { className: 'border-bottom' }, "Range Filters"),
            rows));
        return html;
    };
    return UISearchParams;
}(React__default.Component));

/**
 * @deprecated The method should not be used
 */
var SEARCH_FILTER = [
    { "name": "search", "type": "STRING_LIKE", "required": true, "filterValue": "*" }
];
function createSearchFilter() {
    return [{ "name": "search", "type": "STRING_LIKE", "required": true, "filterValue": "*" }];
}
/**
 * @deprecated The method should not be used
 */
var ENTITY_STATE_FILTER = [
    {
        "name": "entityState", "label": "State", "type": "STRING", "required": true,
        "options": ["", "ACTIVE", "INACTIVE", "ARCHIVED", "JUNK", "DEPRECATED"],
        "optionLabels": ["All", "Active", "Inactive", "Archived", "Junk", "Deprecated"],
        "selectOption": "ACTIVE"
    }
];
function createEntityStateFilter() {
    return [
        {
            "name": "entityState", "label": "State", "type": "STRING", "required": true,
            "options": ["", "ACTIVE", "INACTIVE", "ARCHIVED", "JUNK", "DEPRECATED"],
            "optionLabels": ["All", "Active", "Inactive", "Archived", "Junk", "Deprecated"],
            "selectOption": "ACTIVE"
        }
    ];
}
/**
 * @deprecated The method should not be used
 */
var MODIFIED_TIME_FILTER = [
    {
        "name": "modifiedTime", "label": "Modified Time", "type": "DATE", "required": true,
        "fromValue": null, "toValue": null
        //"fromValue": "1/1/2010@10:00:00 +0000", "toValue": "1/1/2030@10:00:00 +0000" 
    }
];
function createModifiedTimeFilter() {
    return [
        {
            "name": "modifiedTime", "label": "Modified Time", "type": "DATE", "required": true,
            "fromValue": null, "toValue": null
            //"fromValue": "1/1/2010@10:00:00 +0000", "toValue": "1/1/2030@10:00:00 +0000" 
        }
    ];
}
function createCreatedTimeFilter() {
    return [
        {
            "name": "createdTime", "label": "Created Time", "type": "DATE", "required": true,
            "fromValue": null, "toValue": null
            //"fromValue": "1/1/2010@10:00:00 +0000", "toValue": "1/1/2030@10:00:00 +0000" 
        }
    ];
}
/**
 * @deprecated The method should not be used
 */
var CREATED_TIME_FILTER = [
    {
        "name": "createdTime", "label": "Created Time", "type": "DATE", "required": true,
        "fromValue": null, "toValue": null
        //"fromValue": "1/1/2010@10:00:00 +0000", "toValue": "1/1/2030@10:00:00 +0000" 
    }
];
/**
 * @deprecated The method should not be used
 */
var ORDER_BY = {
    fields: ["modifiedTime"],
    fieldLabels: ["Modified Time"],
    selectFields: null,
    sort: "DESC"
};
function createDefaultOrderBy() {
    return {
        fields: ["modifiedTime"],
        fieldLabels: ["Modified Time"],
        selectFields: null,
        sort: "DESC"
    };
}
function createOrderBy(fields, labels) {
    return { fields: fields, fieldLabels: labels, selectFields: null, sort: "DESC" };
}
function createStateFilter(states) {
    var options = [""];
    var labels = ["All"];
    for (var i = 0; i < states.length; i++) {
        options.push(states[i]);
        var label = states[i].toLowerCase();
        label = label.charAt(0).toUpperCase() + label.slice(1);
        labels.push(label);
    }
    var filter = {
        name: 'entityState', label: 'State', type: 'STRING', required: true,
        options: options,
        optionLabels: labels,
        selectOption: states[0]
    };
    return filter;
}
function createEditModeFilter(modes) {
    var options = [""];
    var labels = ["All"];
    for (var i = 0; i < modes.length; i++) {
        options.push(modes[i]);
        var label = modes[i].toLowerCase();
        label = label.charAt(0).toUpperCase() + label.slice(1);
        labels.push(label);
    }
    var filter = {
        name: 'editMode', label: 'Mode', type: 'STRING', required: true,
        options: options,
        optionLabels: labels,
        selectOption: ''
    };
    return filter;
}

var index$6 = /*#__PURE__*/Object.freeze({
  SEARCH_FILTER: SEARCH_FILTER,
  createSearchFilter: createSearchFilter,
  ENTITY_STATE_FILTER: ENTITY_STATE_FILTER,
  createEntityStateFilter: createEntityStateFilter,
  MODIFIED_TIME_FILTER: MODIFIED_TIME_FILTER,
  createModifiedTimeFilter: createModifiedTimeFilter,
  createCreatedTimeFilter: createCreatedTimeFilter,
  CREATED_TIME_FILTER: CREATED_TIME_FILTER,
  ORDER_BY: ORDER_BY,
  createDefaultOrderBy: createDefaultOrderBy,
  createOrderBy: createOrderBy,
  createStateFilter: createStateFilter,
  createEditModeFilter: createEditModeFilter,
  UISearchParams: UISearchParams
});



var index$7 = /*#__PURE__*/Object.freeze({
  icons: icons,
  element: element,
  input: input,
  component: component,
  layout: layout,
  list: index$5,
  sql: index$6,
  util: util$1
});

var NavbarDemo = /** @class */ (function (_super) {
    __extends(NavbarDemo, _super);
    function NavbarDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = { isOpen: false };
        return _this;
    }
    NavbarDemo.prototype.toggle = function () {
        console.log('call toggle');
        this.setState({ isOpen: !this.state.isOpen });
    };
    NavbarDemo.prototype.render = function () {
        console.log('open state = ' + this.state.isOpen);
        return (React__default.createElement("div", null,
            React__default.createElement(Navbar, { color: "primary", dark: true, expand: "md" },
                React__default.createElement(NavbarBrand, { href: "/" }, "reactstrap"),
                React__default.createElement(Nav, { className: "ml-auto", navbar: true },
                    React__default.createElement(NavItem, null,
                        React__default.createElement(NavLink, { href: "/components/" }, "Components")),
                    React__default.createElement(NavItem, null,
                        React__default.createElement(NavLink, { href: "https://github.com/reactstrap/reactstrap" }, "GitHub")),
                    React__default.createElement(UncontrolledDropdown, { nav: true, inNavbar: true },
                        React__default.createElement(DropdownToggle, { nav: true, caret: true }, "Options"),
                        React__default.createElement(DropdownMenu, { right: true },
                            React__default.createElement(DropdownItem, null, "Option 1"),
                            React__default.createElement(DropdownItem, null, "Option 2"),
                            React__default.createElement(DropdownItem, { divider: true }),
                            React__default.createElement(DropdownItem, null, "Reset")))))));
    };
    return NavbarDemo;
}(Component));
var ButtonGroupDemo = /** @class */ (function (_super) {
    __extends(ButtonGroupDemo, _super);
    function ButtonGroupDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroupDemo.prototype.render = function () {
        return (React__default.createElement("div", null,
            React__default.createElement(ButtonGroup, { size: 'sm' },
                React__default.createElement(Button, null, "Left"),
                React__default.createElement(Button, null, "Middle"),
                React__default.createElement(Button, null, "Right")),
            React__default.createElement("br", null),
            " ",
            React__default.createElement("br", null),
            React__default.createElement(ButtonGroup, null,
                React__default.createElement(Button, null, "Left"),
                React__default.createElement(Button, null, "Middle"),
                React__default.createElement(Button, null, "Middle"),
                React__default.createElement(Button, null, "Middle"),
                React__default.createElement(Button, null, "Right")),
            React__default.createElement("br", null),
            " ",
            React__default.createElement("br", null),
            React__default.createElement(ButtonGroup, { size: 'lg' },
                React__default.createElement(Button, null, "Left"),
                React__default.createElement(Button, null, "Middle"),
                React__default.createElement(Button, null, "Right"))));
    };
    return ButtonGroupDemo;
}(Component));
var PopoverDemo = /** @class */ (function (_super) {
    __extends(PopoverDemo, _super);
    function PopoverDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = { popoverOpen: false };
        return _this;
    }
    PopoverDemo.prototype.toggle = function () {
        this.setState({ popoverOpen: !this.state.popoverOpen });
    };
    PopoverDemo.prototype.render = function () {
        return (React__default.createElement("div", null,
            React__default.createElement(Button, { id: "Popover1", onClick: this.toggle }, "Launch Popover"),
            React__default.createElement(Popover, { placement: "bottom", isOpen: this.state.popoverOpen, target: "Popover1", toggle: this.toggle },
                React__default.createElement(PopoverHeader, null, "Popover Title"),
                React__default.createElement(PopoverBody, null, "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."))));
    };
    return PopoverDemo;
}(Component));
var NestedModalDemo = /** @class */ (function (_super) {
    __extends(NestedModalDemo, _super);
    function NestedModalDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { modal: false };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }
    NestedModalDemo.prototype.toggle = function () {
        this.setState({ modal: !this.state.modal });
    };
    NestedModalDemo.prototype.render = function () {
        return (React__default.createElement("div", null,
            React__default.createElement(Button, { onClick: this.toggle }, "Modal"),
            React__default.createElement(Modal, { size: 'sm', isOpen: this.state.modal, toggle: this.toggle, className: this.props.className },
                React__default.createElement(ModalHeader, { toggle: this.toggle }, "Modal title"),
                React__default.createElement(ModalBody, { size: 'sm' }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor..."),
                React__default.createElement(ModalFooter, null,
                    React__default.createElement(Button, { color: "primary", onClick: this.toggle }, "Do Something"),
                    ' '))));
    };
    return NestedModalDemo;
}(Component));
var ModalDemo = /** @class */ (function (_super) {
    __extends(ModalDemo, _super);
    function ModalDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { modal: false };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }
    ModalDemo.prototype.toggle = function () {
        this.setState({ modal: !this.state.modal });
    };
    ModalDemo.prototype.render = function () {
        return (React__default.createElement("div", null,
            React__default.createElement(Button, { color: "danger", onClick: this.toggle }, "Modal"),
            React__default.createElement(Modal, { isOpen: this.state.modal, toggle: this.toggle, className: this.props.className },
                React__default.createElement(ModalHeader, { toggle: this.toggle }, "Modal title"),
                React__default.createElement(ModalBody, null,
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    React__default.createElement(PopoverDemo, null)),
                React__default.createElement(ModalFooter, null,
                    React__default.createElement(Button, { color: "primary", onClick: this.toggle }, "Do Something"),
                    ' ',
                    React__default.createElement(Button, { color: "secondary", onClick: this.toggle }, "Cancel"),
                    React__default.createElement(NestedModalDemo, null)))));
    };
    return ModalDemo;
}(Component));
var UIBootstrapDemo = /** @class */ (function (_super) {
    __extends(UIBootstrapDemo, _super);
    function UIBootstrapDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBootstrapDemo.prototype.render = function () {
        var html = (React__default.createElement("div", null,
            React__default.createElement("div", null,
                React__default.createElement("h4", null, "Bootstrap Button Collor"),
                React__default.createElement("div", null,
                    React__default.createElement(Button, { color: "primary", onClick: function (_evt) { return alert('on click'); } }, "primary"),
                    ' ',
                    React__default.createElement(Button, { color: "secondary" }, "secondary"),
                    ' ',
                    React__default.createElement(Button, { color: "success" }, "success"),
                    React__default.createElement(Button, { color: "info" }, "info"),
                    React__default.createElement(Button, { color: "warning" }, "warning"),
                    React__default.createElement(Button, { color: "danger" }, "danger"),
                    React__default.createElement(Button, { color: "link" }, "link"))),
            React__default.createElement("div", null,
                React__default.createElement("h4", null, "Bootstrap Button Size"),
                React__default.createElement("div", null,
                    React__default.createElement(Button, { size: "lg", color: "primary" }, "Sprimary"),
                    ' ',
                    React__default.createElement(Button, { color: "secondary" }, "Ssecondary"),
                    ' ',
                    React__default.createElement(Button, { size: "sm", color: "success" }, "Success"))),
            React__default.createElement("div", null,
                React__default.createElement("h4", null, "Bootstrap ButtonGroup"),
                React__default.createElement(ButtonGroupDemo, null)),
            React__default.createElement("div", null,
                React__default.createElement("h4", null, "Bootstrap Navbar"),
                React__default.createElement(NavbarDemo, null)),
            React__default.createElement("div", null,
                React__default.createElement("h4", null, "Popup Demo"),
                React__default.createElement(ModalDemo, null))));
        return html;
    };
    return UIBootstrapDemo;
}(Component));

var UIBeanInfo = /** @class */ (function (_super) {
    __extends(UIBeanInfo, _super);
    function UIBeanInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBeanInfo.prototype.render = function () {
        var bean = this.props.bean;
        var html = (React__default.createElement("div", { style: { flexGrow: 'initial', width: 400, paddingLeft: 15 } },
            React__default.createElement("pre", null, JSON.stringify(bean, null, '  '))));
        return html;
    };
    return UIBeanInfo;
}(Component));
var UIBeanEditor = /** @class */ (function (_super) {
    __extends(UIBeanEditor, _super);
    function UIBeanEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBeanEditor.prototype.componentWillMount = function () {
        this.setState({
            disable: false,
            bean: {
                string: 'a string',
                stringArray: ['string 1', 'string 2'],
                text: 'this is a sample text',
                integer: 12,
                integerArray: [1, 2],
                long: 1000,
                float: 1.23,
                double: 10.234,
                doubleArray: [1.0, 2.0],
                select: 'male', numSelect: 3,
                dropdownSelect: 'female',
                numDropdownSelect: 3,
                checkbox: 'test',
                itemSelect: 'vn',
                primitiveAutoComplete: 'option 2',
                beanAutoComplete: 'tuan',
                datetime: '5/4/2018@14:00:00',
                renderUpdate: 0,
                cron: ''
            }
        });
        this.onInputChange = this.onInputChange.bind(this);
        this.autoCompleteOnInputChange = this.autoCompleteOnInputChange.bind(this);
    };
    UIBeanEditor.prototype.onInputChange = function (_bean, _field, _oldVal, _newVal) {
        var update = this.state.renderUpdate + 1;
        this.setState({ renderUpdate: update });
    };
    UIBeanEditor.prototype.autoCompleteOnInputChange = function (_bean, _field, _selectOpt, _oldVal, _newVal) {
        var update = this.state.renderUpdate + 1;
        this.setState({ renderUpdate: update });
    };
    UIBeanEditor.prototype.render = function () {
        var _a = this.state, bean = _a.bean, disable = _a.disable;
        var onInputChange = this.onInputChange;
        var selectOpts = ['male', 'female', 'none', 'undefined'];
        var numSelectOpts = [1, 2, 3, 4, 5];
        var languageItems = [
            { language: 'vn', label: "Viet nam" },
            { language: 'en', label: "English" }
        ];
        var beanAutoCompleteOpts = [
            { name: 'tuan', fullName: 'Tuan Nguyen' },
            { name: 'hieu', fullName: 'Hieu Nguyen' },
            { name: 'lam', fullName: 'Lam Nguyen' }
        ];
        var primitiveAutoComOpts = [
            'option 1', 'option 2', 'option 3', 'option 4', 'option 5'
        ];
        var html = (React__default.createElement(ColumnLayout, null,
            React__default.createElement(Column$1, { growth: 1 },
                React__default.createElement("h4", null, "Bean Editor Sample"),
                React__default.createElement(FormContainer, { fluid: true },
                    React__default.createElement(Row, null,
                        React__default.createElement(FormGroupCol, { type: 'md', span: 6 },
                            React__default.createElement("label", null, "String:"),
                            React__default.createElement(BBStringField, { bean: bean, field: 'string', disable: disable, onInputChange: onInputChange })),
                        React__default.createElement(FormGroupCol, { type: 'md', span: 6 },
                            React__default.createElement("label", null, "String Array"),
                            React__default.createElement(BBStringArrayField, { bean: bean, field: 'stringArray', disable: disable, onInputChange: onInputChange }))),
                    React__default.createElement(Row, null,
                        React__default.createElement(FormGroupCol, { type: 'md', span: 12 },
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Text"),
                                React__default.createElement(BBTextField, { bean: bean, field: 'text', disable: disable, onInputChange: onInputChange })))),
                    React__default.createElement(Row, null,
                        React__default.createElement(FormGroupCol, { type: 'md', span: 6 },
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Integer"),
                                React__default.createElement(BBIntField, { bean: bean, field: 'integer', disable: disable, onInputChange: onInputChange }))),
                        React__default.createElement(FormGroupCol, { type: 'md', span: 6 },
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Integer Array"),
                                React__default.createElement(BBIntArrayField, { bean: bean, field: 'integerArray', disable: disable, onInputChange: onInputChange })))),
                    React__default.createElement(Row, null,
                        React__default.createElement(FormGroupCol, { type: 'md', span: 12 },
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Long"),
                                React__default.createElement(BBLongField, { bean: bean, field: 'long', disable: disable, onInputChange: onInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Float"),
                                React__default.createElement(BBFloatField, { bean: bean, field: 'float', disable: disable, onInputChange: onInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Double"),
                                React__default.createElement(BBDoubleField, { bean: bean, field: 'double', disable: disable, onInputChange: onInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Double Array"),
                                React__default.createElement(BBDoubleArrayField, { bean: bean, field: 'doubleArray', disable: disable, onInputChange: onInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Radio Select"),
                                React__default.createElement(BBRadioInputField, { bean: bean, field: 'select', options: selectOpts, disable: disable, onInputChange: onInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Radio Number Select"),
                                React__default.createElement(BBRadioInputField, { bean: bean, field: 'numSelect', options: numSelectOpts, disable: disable, onInputChange: onInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Date Time"),
                                React__default.createElement(BBDateTimeField, { bean: bean, field: 'datetime', timeFormat: 'HH:mm:ss', onInputChange: onInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Dropdown Select"),
                                React__default.createElement(BBSelectField, { bean: bean, field: 'dropdownSelect', options: selectOpts, disable: disable, onInputChange: onInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Dropdown Select Num"),
                                React__default.createElement(BBSelectField, { bean: bean, field: 'numDropdownSelect', options: numSelectOpts, disable: disable, onInputChange: onInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Autocomplete"),
                                React__default.createElement(BBAutoComplete, { bean: bean, field: 'primitiveAutoComplete', options: primitiveAutoComOpts, onInputChange: this.autoCompleteOnInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Autocomplete Complex Bean"),
                                React__default.createElement(BBAutoComplete, { bean: bean, field: 'beanAutoComplete', options: beanAutoCompleteOpts, inputField: 'name', descriptionField: 'fullName', onInputChange: this.autoCompleteOnInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Dropdown Item"),
                                React__default.createElement(BBBeanSelectField, { bean: bean, field: 'itemSelect', options: languageItems, fieldCheck: 'language', fieldLabel: 'label', disable: disable, onInputChange: onInputChange })),
                            React__default.createElement(FormGroup, null,
                                React__default.createElement("label", null, "Check Box"),
                                React__default.createElement(BBCheckboxField, { bean: bean, field: 'checkbox', value: 'test', label: "Test Checkbox", disable: disable, onInputChange: onInputChange })))))),
            React__default.createElement(Column$1, { width: 450 },
                React__default.createElement(UIBeanInfo, { bean: bean }))));
        return html;
    };
    return UIBeanEditor;
}(Component));

var DraggableId = /** @class */ (function () {
    function DraggableId(id) {
        this.itemId = '';
        var token = id.split(':');
        this.type = token[0];
        this.taskId = token[1];
        if (token.length === 3) {
            this.itemId = token[2];
        }
    }
    return DraggableId;
}());
var createTasks = function (from, to) {
    var tasks = [];
    for (var i = from; i < to; i++) {
        var task = {
            id: "task-" + i,
            content: "Task " + i,
            taskItems: [
                { id: "task-" + i + "-0", taskId: "task-" + i, content: "Task " + i + " item 0" },
                { id: "task-" + i + "-1", taskId: "task-" + i, content: "Task " + i + " item 1" }
            ]
        };
        tasks.push(task);
    }
    return tasks;
};
var reorder = function (list, startIndex, endIndex) {
    var result = Array.from(list);
    var removed = result.splice(startIndex, 1)[0];
    result.splice(endIndex, 0, removed);
    return result;
};
/** Moves an task from one list to another list. */
var move = function (sourceList, destList, droppableSource, droppableDestination) {
    console.log('droppableSource.index      = ' + droppableSource.index);
    console.log('droppableDestination.index = ' + droppableDestination.index);
    var removed = sourceList.splice(droppableSource.index, 1)[0];
    destList.splice(droppableDestination.index, 0, removed);
    return { sourceList: sourceList, destList: destList };
};
var createDraggableStyle = function (isDragging, draggableStyle) { return (__assign({ 
    // some basic styles to make the container1 look a bit nicer
    userSelect: 'none', 
    //margin: `0 0 ${GRID}px 0`,
    // change background colour if dragging
    background: 'wheat', opacity: isDragging ? 0.75 : 1 }, draggableStyle)); };
var createContainerStyle = function (isDraggingOver) { return ({
    background: isDraggingOver ? 'lightgray' : 'white',
    border: '1px solid lightgray',
    margin: '0px 2px',
    padding: '2px 2px',
    width: 200
}); };
var TaskItem = /** @class */ (function (_super) {
    __extends(TaskItem, _super);
    function TaskItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskItem.prototype.render = function () {
        var _a = this.props, taskItem = _a.taskItem, position = _a.position;
        var html = (React__default.createElement(Draggable, { key: taskItem.id, draggableId: "item:" + taskItem.taskId + ":" + taskItem.id, index: position }, function (provided, snapshot) { return (React__default.createElement("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { style: createDraggableStyle(snapshot.isDragging, provided.draggableProps.style) }),
            React__default.createElement("div", { style: { marginTop: 1, paddingLeft: 5 } },
                React__default.createElement("strong", null,
                    "Item ",
                    taskItem.id)))); }));
        return html;
    };
    return TaskItem;
}(Component));
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { showItems: true };
        return _this;
    }
    Task.prototype.componentWillReceiveProps = function (_nextProps) {
        this.setState({ showItems: true });
    };
    Task.prototype.onDragStart = function (draggableId) {
        if (draggableId.type === 'task') {
            console.log("Task: onDragStart taskId = " + draggableId.taskId);
            this.setState({ showItems: false });
        }
    };
    Task.prototype.onDragEnd = function (taskId) {
        console.log("Task: onDragEnd taskId = " + taskId);
        this.setState({ showItems: true });
    };
    Task.prototype.render = function () {
        var _a = this.props, task = _a.task, position = _a.position;
        var showItems = this.state.showItems;
        //  console.log(`Task: render(...) task.id = ${task.id}`);
        var taskItemEles = [];
        var taskItems = task.taskItems;
        for (var i = 0; i < taskItems.length; i++) {
            var taskItem = taskItems[i];
            taskItemEles.push(React__default.createElement(TaskItem, { key: i, taskItem: taskItem, position: position }));
        }
        var html = (React__default.createElement("div", { style: { border: '2px solid tan', margin: '5px 0px', padding: '2px' } },
            React__default.createElement(Draggable, { key: task.id, draggableId: "task:" + task.id, index: position }, function (provided, snapshot) { return (React__default.createElement("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { style: createDraggableStyle(snapshot.isDragging, provided.draggableProps.style) }),
                React__default.createElement("div", null,
                    React__default.createElement("strong", null,
                        "Task ",
                        task.id)))); }),
            React__default.createElement("div", { style: { marginTop: 3, display: showItems ? 'block' : 'none' } }, taskItemEles)));
        return html;
    };
    return Task;
}(Component));
var TaskContainer = /** @class */ (function (_super) {
    __extends(TaskContainer, _super);
    function TaskContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskContainer.prototype.componentWillReceiveProps = function (_nextProps) {
        this.uiTaskMap = {};
        // let {id} = nextProps;
        //console.log(`TaskContainer: componentWillReceiveProps(...) id = ${id}`);
    };
    TaskContainer.prototype.onDragStart = function (draggableId) {
        var id = this.props.id;
        console.log("TaskContainer: onDragStart container = " + id + ", taskId = " + draggableId.taskId);
        this.uiTaskMap[draggableId.taskId].onDragStart(draggableId);
    };
    TaskContainer.prototype.onDragEnd = function (draggableId) {
        var id = this.props.id;
        console.log("TaskContainer: onDragEnd container = " + id + ", taskId = " + draggableId.taskId);
        //this.uiTaskMap[draggableId.taskId].onDragEnd(draggableId);
        this.forceUpdate();
    };
    TaskContainer.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, tasks = _a.tasks;
        //console.log(`TaskContainer: render(...) id = ${id}`);
        this.uiTaskMap = {};
        var uiTasks = [];
        var _loop_1 = function (i) {
            var task = tasks[i];
            var uiTask = (React__default.createElement(Task, { ref: function (instance) { _this.uiTaskMap[task.id] = instance; }, key: i, task: task, position: i }));
            uiTasks.push(uiTask);
        };
        for (var i = 0; i < tasks.length; i++) {
            _loop_1(i);
        }
        var html = (React__default.createElement("div", null,
            React__default.createElement("h3", null, id),
            React__default.createElement(Droppable, { droppableId: id }, function (provided, snapshot) { return (React__default.createElement("div", { ref: provided.innerRef, style: createContainerStyle(snapshot.isDraggingOver) },
                uiTasks,
                provided.placeholder)); })));
        return html;
    };
    return TaskContainer;
}(Component));
var TaskBoard = /** @class */ (function (_super) {
    __extends(TaskBoard, _super);
    function TaskBoard(props) {
        var _this = _super.call(this, props) || this;
        _this.getTasksByContainerId = function (id) { return _this.containerMap[id].tasks; };
        _this.onDragEnd = function (result) {
            var source = result.source, destination = result.destination;
            // dropped outside the list
            if (!destination)
                return;
            var sourceContainerId = source.droppableId;
            var destContainerId = destination.droppableId;
            var draggableId = new DraggableId(result.draggableId);
            console.log('onDragEnd:');
            console.log("  source container = " + sourceContainerId + ", destination container = " + destContainerId + ", dragbleId = " + result.draggableId);
            console.log('  sourcei.index = ' + source.index + ", destination.index = " + destination.index);
            if (sourceContainerId === destContainerId) {
                var sourceList = reorder(_this.containerMap[source.droppableId].tasks, source.index, destination.index);
                _this.containerMap[sourceContainerId].tasks = sourceList;
                _this.containerMap[sourceContainerId].ui.onDragEnd(draggableId);
            }
            else {
                var result_1 = move(_this.getTasksByContainerId(sourceContainerId), _this.getTasksByContainerId(destContainerId), source, destination);
                _this.containerMap[source.droppableId].tasks = result_1.sourceList;
                _this.containerMap[destination.droppableId].tasks = result_1.destList;
                _this.containerMap[sourceContainerId].ui.onDragEnd(draggableId);
                _this.containerMap[destContainerId].ui.onDragEnd(draggableId);
            }
            _this.forceUpdate();
        };
        _this.onDragStart = function (result) {
            var containerId = result.source.droppableId;
            var draggableId = new DraggableId(result.draggableId);
            console.log('onDragStart');
            console.log("  Container = " + containerId + ", id = " + result.dragbleId);
            _this.containerMap[containerId].ui.onDragStart(draggableId);
        };
        _this.containerMap = {
            container1: { tasks: createTasks(0, 3) },
            container2: { tasks: createTasks(3, 6) },
            container3: { tasks: createTasks(6, 9) },
            container4: { tasks: createTasks(9, 12) }
        };
        return _this;
    }
    TaskBoard.prototype.render = function () {
        return (React__default.createElement("div", { className: 'd-flex' },
            React__default.createElement(DragDropContext, { onDragEnd: this.onDragEnd, onDragStart: this.onDragStart }, this.renderTaskContainers())));
    };
    TaskBoard.prototype.renderTaskContainers = function () {
        var _this = this;
        var containers = [];
        containers.push(React__default.createElement(TaskContainer, { ref: function (instance) { _this.containerMap.container1.ui = instance; }, key: 1, id: 'container1', tasks: this.containerMap.container1.tasks }));
        containers.push(React__default.createElement(TaskContainer, { ref: function (instance) { _this.containerMap.container2.ui = instance; }, key: 2, id: 'container2', tasks: this.containerMap.container2.tasks }));
        containers.push(React__default.createElement(TaskContainer, { ref: function (instance) { _this.containerMap.container3.ui = instance; }, key: 3, id: 'container3', tasks: this.containerMap.container3.tasks }));
        containers.push(React__default.createElement(TaskContainer, { ref: function (instance) { _this.containerMap.container4.ui = instance; }, key: 4, id: 'container4', tasks: this.containerMap.container4.tasks }));
        return containers;
    };
    return TaskBoard;
}(Component));
var DNDDemo = /** @class */ (function (_super) {
    __extends(DNDDemo, _super);
    function DNDDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNDDemo.prototype.render = function () {
        return (React__default.createElement(TaskBoard, null));
    };
    return DNDDemo;
}(Component));

// fake data generator
var getItems = function (count, offset) {
    if (offset === void 0) { offset = 0; }
    Array.from({ length: count }, function (_v, k) { return k; }).map(function (k) { return ({
        id: "item-" + (k + offset),
        content: "item " + (k + offset)
    }); });
};
// a little function to help us with reordering the result
var reorder$1 = function (list, startIndex, endIndex) {
    //@ts-ignore
    var result = Array.from(list);
    var removed = result.splice(startIndex, 1)[0];
    result.splice(endIndex, 0, removed);
    return result;
};
/** * Moves an item from one list to another list. */
var move$1 = function (source, destination, droppableSource, droppableDestination) {
    //@ts-ignore
    var sourceClone = Array.from(source);
    //@ts-ignore
    var destClone = Array.from(destination);
    var removed = sourceClone.splice(droppableSource.index, 1)[0];
    destClone.splice(droppableDestination.index, 0, removed);
    var result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
};
var grid = 8;
var getItemStyle = function (isDragging, draggableStyle) { return (__assign({ 
    // some basic styles to make the items look a bit nicer
    userSelect: 'none', padding: grid * 2, margin: "0 0 " + grid + "px 0", 
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey' }, draggableStyle)); };
var getListStyle = function (isDraggingOver) { return ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
}); };
var UIMultiVerticalListDND = /** @class */ (function (_super) {
    __extends(UIMultiVerticalListDND, _super);
    function UIMultiVerticalListDND() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: getItems(10),
            selected: getItems(5, 10)
        };
        /**
        * A semi-generic way to handle multiple lists. Matches
        * the IDs of the droppable container to the names of the
        * source arrays stored in the state.
        */
        _this.id2List = {
            droppable: 'items',
            droppable2: 'selected'
        };
        return _this;
    }
    UIMultiVerticalListDND.prototype.getList = function (id) {
        //@ts-ignore
        return this.state[this.id2List[id]];
    };
    UIMultiVerticalListDND.prototype.onDragEnd = function (result) {
        var source = result.source, destination = result.destination;
        // dropped outside the list
        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId) {
            var items = reorder$1(this.getList(source.droppableId), source.index, destination.index);
            var state = { items: items };
            if (source.droppableId === 'droppable2') {
                //@ts-ignore
                state = { selected: items };
            }
            this.setState(state);
        }
        else {
            var result_1 = move$1(this.getList(source.droppableId), this.getList(destination.droppableId), source, destination);
            //@ts-ignore
            this.setState({ items: result_1.droppable, selected: result_1.droppable2 });
        }
    };
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    UIMultiVerticalListDND.prototype.render = function () {
        var items = this.state.items;
        var selected = this.state.selected;
        return (React__default.createElement(DragDropContext, { onDragEnd: this.onDragEnd },
            React__default.createElement(Droppable, { droppableId: "droppable" }, function (provided, snapshot) { return (React__default.createElement("div", { ref: provided.innerRef, style: getListStyle(snapshot.isDraggingOver) },
                //@ts-ignore
                items.map(function (item, index) { return (React__default.createElement(Draggable, { key: item.id, draggableId: item.id, index: index }, function (provided, snapshot) { return (React__default.createElement("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { style: getItemStyle(snapshot.isDragging, provided.draggableProps.style) }), item.content)); })); }),
                provided.placeholder)); }),
            React__default.createElement(Droppable, { droppableId: "droppable2" }, function (provided, snapshot) { return (React__default.createElement("div", { ref: provided.innerRef, style: getListStyle(snapshot.isDraggingOver) },
                //@ts-ignore
                selected.map(function (item, index) { return (React__default.createElement(Draggable, { key: item.id, draggableId: item.id, index: index }, function (provided, snapshot) { return (React__default.createElement("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { style: getItemStyle(snapshot.isDragging, provided.draggableProps.style) }), item.content)); })); }),
                provided.placeholder)); })));
    };
    return UIMultiVerticalListDND;
}(Component));

var records = [];
for (var i = 0; i < 1500; i++) {
    var date = new Date();
    date.setDate(date.getDate() + i);
    var type = 'type-' + (i % 5);
    var randQty = Math.floor(Math.random() * 100);
    var record = {
        string: 'string: row = ' + i,
        type: type,
        date: date,
        integer: 123, long: 123, float: 1.23, double: 1.234, boolean: true,
        saleQuantity: randQty,
        saleRevenue: randQty * 50000
    };
    records.push(record);
}
var UIVList = /** @class */ (function (_super) {
    __extends(UIVList, _super);
    function UIVList(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            rowHeight: 60,
            renderItem: function (_list, _page, row, _rowInPage, item) {
                var html = (React__default.createElement("div", null,
                    React__default.createElement("div", null,
                        React__default.createElement("span", { style: { display: 'inline-block', width: 35 } },
                            row,
                            "."),
                        React__default.createElement("strong", null,
                            item.string,
                            " - ",
                            item.type)),
                    React__default.createElement("div", null,
                        "integer = ",
                        item.integer,
                        ", long = ",
                        item.long,
                        ", float = ",
                        item.float,
                        ", double = ",
                        item.double)));
                return html;
            },
            actions: [
                {
                    name: 'chart', label: 'Chart',
                    createComponent: function (_vlist) {
                        return (React__default.createElement(Button, { key: 'chart', onClick: function () { return console.log('TODO...'); } }, "Chart"));
                    }
                },
                {
                    name: 'add', label: 'Add', icon: 'icon-add',
                    onClick: function (vlist) {
                        var model = vlist.getModel();
                        model.addRecord({ string: 'string row ?', type: 'add', date: new Date() });
                        vlist.forceUpdate();
                    }
                },
                {
                    name: 'delete', label: 'Del', icon: 'icon-del',
                    onClick: function (vlist) {
                        console.log("Click delete.....");
                        var model = vlist.getModel();
                        var selectedRows = model.getSelectedRows();
                        console.log("Selected Rows: ");
                        console.log(selectedRows);
                        model.removeSelectedRows();
                        vlist.forceUpdate();
                    }
                }
            ]
        };
        _this.model = new ListModel(5000, records);
        return _this;
    }
    UIVList.prototype.render = function () {
        var html = (React__default.createElement(VList, { className: 'h-100', config: this.config, model: this.model }));
        return html;
    };
    return UIVList;
}(Component));

var DemoTreeModel = /** @class */ (function (_super) {
    __extends(DemoTreeModel, _super);
    function DemoTreeModel(showRoot) {
        var _this = _super.call(this, showRoot) || this;
        var root = new TreeNode(null, '', '', 'Root', null, false);
        _this.setRoot(root);
        var hktNode = root.addChild('hkt', 'HKT', null, false);
        hktNode.addChild('employees', 'Employees', null, true);
        root.addChild('erp', 'ERP', null, true);
        return _this;
    }
    DemoTreeModel.prototype.loadChildren = function (node, postLoadCallback) {
        var path = node.path;
        var pathSeg = path.split('/');
        if (pathSeg.length > 5) ;
        else {
            for (var i = 0; i < 3; i++) {
                var userData = { label: "Userdata " + i, field: 'test field' };
                this.addChild(node, 'node-' + i, 'node ' + i, userData);
            }
        }
        node.setLoadedChildren();
        if (postLoadCallback)
            postLoadCallback(node);
    };
    return DemoTreeModel;
}(TreeModel));
var TREE_TABLE_CONFIG = {
    columns: [
        { name: 'label', label: 'Label', visible: true, width: 200 },
        { name: 'field', label: 'Field', visible: true, width: 200 },
    ]
};
var UITreeDemo = /** @class */ (function (_super) {
    __extends(UITreeDemo, _super);
    function UITreeDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UITreeDemo.prototype.componentWillMount = function () {
        var model = new DemoTreeModel(true);
        this.setState({ model: model });
    };
    UITreeDemo.prototype.onToggleRoot = function () {
        var model = this.state.model;
        model.showRoot = !model.showRoot;
        this.forceUpdate();
    };
    UITreeDemo.prototype.onSelectNode = function (node) {
        console.log("on select node");
        console.log(node);
    };
    UITreeDemo.prototype.render = function () {
        var _this = this;
        var model = this.state.model;
        var html = (React__default.createElement("div", null,
            React__default.createElement(Button, { size: 'sm', color: 'primary', onClick: function () { return _this.onToggleRoot(); } }, "Show Root"),
            React__default.createElement("div", { className: 'd-flex h-100' },
                React__default.createElement("div", { style: { padding: '5px', width: "50%" } },
                    React__default.createElement("h4", { className: 'border-bottom' }, "Tree Node"),
                    React__default.createElement("div", { style: { height: 600 } },
                        React__default.createElement(VTree, { className: 'h-100', config: {}, model: model }))),
                React__default.createElement("div", { style: { padding: '5px', height: 600, width: "50%" } },
                    React__default.createElement("h4", { className: 'border-bottom' }, "Tree Table"),
                    React__default.createElement(VTreeSimpleTable, { model: model, onSelectNode: function (node) { return _this.onSelectNode(node); }, config: TREE_TABLE_CONFIG })))));
        return html;
    };
    return UITreeDemo;
}(Component));

function createConfig$1() {
    var CONFIG = {
        fixedColumns: [
            { name: '_selector', label: 'Sel', width: 25 },
            { name: '_index', label: '#', width: 35 },
            {
                name: 'left', label: 'left column', visible: true, width: 150, cellStyle: { textAlign: 'left' },
                onClick: function (_table, _row, bean) {
                    console.log('on click row');
                    console.log(bean);
                }
            },
            {
                name: 'actions', label: 'Actions', visible: true, width: 100,
                actions: [
                    {
                        name: 'del', label: 'Del',
                        onClick: function (_table, _row, bean) {
                            console.log('on click Del');
                            console.log(bean);
                        }
                    },
                    {
                        name: 'add', label: 'Add',
                        onClick: function (_table, _row, bean) {
                            console.log('on click Add');
                            console.log(bean);
                        }
                    }
                ]
            }
        ],
        columns: [
            {
                name: 'string', label: 'string column', visible: true, width: 150, cellStyle: { textAlign: 'left' },
                onClick: function (_table, _row, bean) {
                    console.log('on click row');
                    console.log(bean);
                }
            },
            { name: 'type', label: 'Type', visible: true, cellStyle: { textAlign: 'center' }, },
            { name: 'integer', label: 'Integer', visible: true },
            { name: 'long', label: 'Long', visible: true, editor: { type: 'long' } },
            { name: 'float', label: 'Float', visible: true },
            { name: 'double', label: 'Double', visible: true, editor: { type: 'double' } },
            { name: 'boolean', label: 'Boolean', visible: true },
            { name: 'saleQuantity', label: 'Sale Qty', visible: true, format: formater.integer },
            { name: 'saleRevenue', label: 'Sale Revenue', visible: true, format: formater.currency },
            { name: 'type', label: 'Type', visible: true, cellStyle: { textAlign: 'center' }, },
            { name: 'integer', label: 'Integer', visible: true },
            { name: 'long', label: 'Long', visible: true, editor: { type: 'long' } },
            { name: 'float', label: 'Float', visible: true },
            { name: 'double', label: 'Double', visible: true, editor: { type: 'double' } },
            { name: 'boolean', label: 'Boolean', visible: true },
            { name: 'saleQuantity', label: 'Sale Qty', visible: true, format: formater.integer },
            { name: 'saleRevenue', label: 'Sale Revenue', visible: true, format: formater.currency },
        ],
        gridView: {
            renderItem: function (_vtable, _page, _row, _rowInPage, bean) {
                var html = (createElement("div", { className: 'border m-2', style: { minHeight: '100px' } }, bean.string));
                return html;
            }
        },
        kanbanView: {
            dndBoard: {
                columns: [
                    { name: "step-1", label: 'Step 1', items: [] },
                    { name: "step-2", label: 'Step 2', items: [] },
                    { name: "step-3", label: 'Step 3', items: [] },
                    { name: "step-4", label: 'Step 4', items: [] },
                    { name: "step-5", label: 'Step 5', items: [] },
                ],
                columnWidth: 0,
                itemHeight: 100,
                inColumn: function (name, item) {
                    return name == item.step;
                },
                onDrop: function (sourceCol, destCol, item) {
                    item.state = destCol.name;
                    console.log("Drag Item " + item.string + " from " + sourceCol.name + " to " + destCol.name);
                },
                getItemId: function (_item, columnName, index) { return columnName + "-item-" + index; },
                renderItem: function (_col, item) {
                    return (createElement("h5", { className: 'border-bottom' }, item.string));
                },
                renderItemDetail: function (_col, item) {
                    return (createElement("div", null, item.string));
                }
            }
        },
        actions: [
            {
                name: 'add', label: 'Add', icon: 'icon-add',
                onClick: function (table) {
                    var model = table.getModel();
                    model.addRecord({ string: 'string row ?', type: 'add', date: new Date() });
                    table.forceUpdate();
                }
            },
            {
                name: 'delete', label: 'Del', icon: 'icon-del',
                onClick: function (table) {
                    console.log("Click delete.....");
                    var model = table.getModel();
                    var selectedRows = model.getSelectedRows();
                    console.log("Selected Rows: ");
                    console.log(selectedRows);
                    model.removeSelectedRows();
                    table.forceUpdate();
                }
            }
        ]
    };
    return CONFIG;
}
var records$1 = [];
for (var i$1 = 0; i$1 < 1500; i$1++) {
    var date$1 = new Date();
    date$1.setDate(date$1.getDate() + i$1);
    var type$1 = 'type-' + (i$1 % 5);
    var randQty$1 = Math.floor(Math.random() * 100);
    var step = i$1 % 5 + 1;
    var record$1 = {
        left: 'left: row = ' + i$1,
        step: 'step-' + step,
        string: 'string: row = ' + i$1,
        type: type$1,
        date: date$1,
        integer: 123, long: 123, float: 1.23, double: 1.234, boolean: true,
        saleQuantity: randQty$1,
        saleRevenue: randQty$1 * 50000
    };
    records$1.push(record$1);
}
var VTableDemo = /** @class */ (function (_super) {
    __extends(VTableDemo, _super);
    function VTableDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VTableDemo.prototype.render = function () {
        var model = new ListModel(1000, records$1);
        var html = (createElement(VTable, { config: createConfig$1(), model: model, style: { height: '100%' } }));
        return html;
    };
    return VTableDemo;
}(Component));

var Coordinate = /** @class */ (function () {
    function Coordinate(x, y) {
        this.x = x;
        this.y = y;
    }
    return Coordinate;
}());
function toInt(string, defaultVal) {
    if (!string)
        return defaultVal;
    return parseInt(string, 10);
}
var Graphic = /** @class */ (function () {
    function Graphic() {
        this.Panel = new Element("sgv");
    }
    Graphic.prototype.drawLine = function (style, p1, p2) {
        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute("x1", p1.x + "px");
        line.setAttribute("y1", p1.y + "px");
        line.setAttribute("x2", p2.x + "px");
        line.setAttribute("y2", p2.y + "px");
        for (var prop in style) {
            line.style.setProperty(prop, style[prop]);
        }
        this.Panel.element.appendChild(line);
    };
    Graphic.prototype.drawConnectedLines = function (style, points) {
        console.log(points);
        for (var i = 0; i < points.length - 1; i++) {
            this.drawLine(style, points[i], points[i + 1]);
            this.drawCircle({ "stroke": "rgb(255,0,0)", "stroke-width": 2 }, points[i], 4);
        }
        this.drawCircle({ "stroke": "rgb(255,0,0)", "stroke-width": 2 }, points[points.length - 1], 4);
    };
    Graphic.prototype.drawLineWithArrow = function (_p1, _arrow1Style, _p2, _arrow2Style) {
    };
    Graphic.prototype.drawCircle = function (style, center, diameter) {
        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute("cx", center.x + "px");
        circle.setAttribute("cy", center.y + "px");
        circle.setAttribute("r", diameter + "px");
        for (var prop in style) {
            circle.style.setProperty(prop, style[prop]);
        }
        this.Panel.element.appendChild(circle);
    };
    return Graphic;
}());
var Element = /** @class */ (function () {
    function Element(element) {
        if (element instanceof HTMLElement) {
            this.element = element;
        }
        else {
            var foundEle = document.getElementById(element);
            if (!foundEle) {
                throw new Error("Cannot find the element with id" + element);
            }
            this.element = foundEle;
        }
        this.element.style.position = "relative";
        if (this.element.style.top == "")
            this.element.style.top = "0";
        if (this.element.style.left == "")
            this.element.style.left = "0";
        if (this.element.style.width == "")
            this.element.style.width = this.element.offsetWidth + "px";
    }
    Element.prototype.getWidth = function () { return this.element.offsetWidth; };
    Element.prototype.getHeight = function () { return this.element.offsetHeight; };
    Element.prototype.findTopLeftPos = function () { return new Coordinate(toInt(this.element.style.left, 0), toInt(this.element.style.top, 0)); };
    Element.prototype.findTopRightPos = function () { return new Coordinate(this.findTopLeftPos().x + this.getWidth(), this.findTopLeftPos().y); };
    Element.prototype.findBottomLeftPos = function () { return new Coordinate(this.findTopLeftPos().x, this.findTopLeftPos().y + this.getHeight()); };
    Element.prototype.findBottomRightPos = function () { return new Coordinate(this.findTopLeftPos().x + this.getWidth(), this.findTopLeftPos().y + this.getHeight()); };
    Element.prototype.findCenterTopPos = function () { return new Coordinate((this.findTopLeftPos().x + this.getWidth()) / 2, this.findTopLeftPos().y); };
    Element.prototype.findCenterBottomPos = function () { return new Coordinate((this.findTopLeftPos().x + this.getWidth()) / 2, this.findTopLeftPos().y + this.getHeight()); };
    Element.prototype.findCenterLeftPos = function () { return new Coordinate(this.findTopLeftPos().x, (this.findTopLeftPos().y + this.getHeight()) / 2); };
    Element.prototype.findCenterRightPos = function () { return new Coordinate(this.findTopLeftPos().x + this.getWidth(), (this.findTopLeftPos().y + this.getHeight()) / 2); };
    Element.prototype.findCenterPos = function () { return new Coordinate((this.findTopLeftPos().x + this.getWidth()) / 2, (this.findTopLeftPos().y + this.getHeight()) / 2); };
    return Element;
}());
var DraggableElement = /** @class */ (function (_super) {
    __extends(DraggableElement, _super);
    function DraggableElement(ele, onDrag) {
        var _this = _super.call(this, ele) || this;
        _this.initX = 0;
        _this.initY = 0;
        _this.mouseX = 0;
        _this.mouseY = 0;
        _this.onDrag = onDrag;
        var _a = _this, initX = _a.initX, initY = _a.initY, mouseX = _a.mouseX, mouseY = _a.mouseY;
        _this.element.style.cursor = "move";
        var move = function (e) {
            _this.element.style.left = initX + (e.clientX - mouseX) + "px";
            _this.element.style.top = initY + (e.clientY - mouseY) + "px";
            onDrag(_this, e.clientX, e.clientY);
        };
        var stopMove = function (_e) {
            DraggableElement.hold = null;
            window.removeEventListener("mousemove", move, true);
            window.removeEventListener("mouseup", stopMove, true);
        };
        var initMove = function (e) {
            _this.element.style.zIndex = "1";
            DraggableElement.hold = _this;
            initX = _this.findTopLeftPos().x;
            initY = _this.findTopLeftPos().y;
            mouseX = e.clientX;
            mouseY = e.clientY;
            window.addEventListener("mousemove", move, true);
            window.addEventListener("mouseup", stopMove, true);
        };
        _this.element.addEventListener("mousedown", initMove);
        return _this;
    }
    DraggableElement.hold = null;
    return DraggableElement;
}(Element));
var DroppableElement = /** @class */ (function (_super) {
    __extends(DroppableElement, _super);
    function DroppableElement(ele, onDrop) {
        var _this = _super.call(this, ele) || this;
        _this.onDrop = onDrop;
        _this.mouseover = _this.mouseover.bind(_this);
        _this.mouseup = _this.mouseup.bind(_this);
        document.body.addEventListener("mousemove", _this.mouseover, true);
        _this.element.addEventListener("mouseup", _this.mouseup, true);
        return _this;
    }
    DroppableElement.prototype.mouseup = function () {
        document.body.removeEventListener("mousemove", this.mouseover, true);
        this.element.removeEventListener("mouseup", this.mouseup, true);
    };
    DroppableElement.prototype.mouseover = function (e) {
        var ele = this.element;
        if (DraggableElement.hold && ele.offsetLeft < e.clientX
            && ele.offsetLeft + ele.offsetWidth > e.clientX
            && ele.offsetTop < e.clientY
            && ele.offsetTop + ele.offsetHeight > e.clientY) {
            this.onDrop(DraggableElement.hold, this, e.clientX, e.clientY);
        }
        else {
            this.element.style.border = "";
        }
    };
    return DroppableElement;
}(Element));
var ResizableElement = /** @class */ (function (_super) {
    __extends(ResizableElement, _super);
    function ResizableElement(ele, config) {
        var _this = _super.call(this, ele) || this;
        _this.handleSize = config.handleSize ? config.handleSize : 5;
        _this.minWidth = config.minWidth ? config.minWidth : 0;
        _this.maxWidth = config.maxWidth ? config.maxWidth : 1000;
        _this.minHeight = config.minHeight ? config.minHeight : 0;
        _this.maxHeight = config.maxHeight ? config.maxHeight : 1000;
        _this.debug = config.debug ? config.debug : false;
        _this.resizeTop = _this.resizeTop.bind(_this);
        _this.resizeBottom = _this.resizeBottom.bind(_this);
        _this.resizeLeft = _this.resizeLeft.bind(_this);
        _this.resizeRight = _this.resizeRight.bind(_this);
        var handle = _this.handleSize + "px";
        var vHandleStyle = { background: "transparent", width: handle, minWidth: handle, maxWidth: handle, minHeight: 0, cursor: "w-resize" };
        var hHandleStyle = { background: "transparent", height: handle, minHeight: handle, maxHeight: handle, cursor: "n-resize" };
        if (_this.debug == true) {
            vHandleStyle.background = 'gray';
            hHandleStyle.background = 'gray';
        }
        var template = [
            React__default.createElement("div", { style: hHandleStyle, onMouseDown: _this.resizeTop }),
            React__default.createElement("div", { className: 'd-flex flex-grow-1' },
                React__default.createElement("div", { style: vHandleStyle, onMouseDown: _this.resizeLeft }),
                React__default.createElement("div", { style: { overflow: "hidden" }, className: 'flex-grow-1', dangerouslySetInnerHTML: { __html: _this.element.innerHTML } }),
                React__default.createElement("div", { style: vHandleStyle, onMouseDown: _this.resizeRight })),
            React__default.createElement("div", { style: hHandleStyle, onMouseDown: _this.resizeBottom })
        ];
        var block = document.createElement('div');
        block.setAttribute('class', 'd-flex flex-column flex-grow-1');
        block.style.height = "100%";
        ReactDOM.render(template, block);
        _this.element.innerHTML = '';
        _this.element.appendChild(block);
        return _this;
    }
    ResizableElement.prototype.resizeTop = function (me) {
        var _this = this;
        var top = toInt(this.element.style.top, 0);
        var height = this.getHeight();
        var mtop = me.clientY;
        var stop = function () {
            window.removeEventListener("mousemove", move);
        };
        var move = function (m) {
            if (height - (m.clientY - mtop) > 60) {
                _this.element.style.top = top + (m.clientY - mtop) + "px";
                _this.element.style.height = height - (m.clientY - mtop) + "px";
            }
        };
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };
    ResizableElement.prototype.resizeBottom = function (me) {
        var _this = this;
        var height = this.getHeight();
        var mtop = me.clientY;
        var stop = function () {
            window.removeEventListener("mousemove", move);
        };
        var move = function (m) {
            if (height + (m.clientY - mtop) > 60)
                _this.element.style.height = height + (m.clientY - mtop) + "px";
        };
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };
    ResizableElement.prototype.resizeLeft = function (me) {
        var _this = this;
        var left = toInt(this.element.style.left, 10);
        var width = this.getWidth();
        var mX = me.clientX;
        var stop = function () {
            window.removeEventListener("mousemove", move);
        };
        var move = function (m) {
            if (width - (m.clientX - mX) > 60) {
                _this.element.style.left = left + (m.clientX - mX) + "px";
                _this.element.style.width = width - (m.clientX - mX) + "px";
            }
        };
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };
    ResizableElement.prototype.resizeRight = function (me) {
        var _this = this;
        var width = toInt(this.element.style.width, 10);
        var mX = me.clientX;
        var stop = function () {
            window.removeEventListener("mousemove", move);
        };
        var move = function (m) {
            if (width + (m.clientX - mX) > 60) {
                _this.element.style.width = width + (m.clientX - mX) + "px";
            }
        };
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", stop);
    };
    return ResizableElement;
}(Element));
var ConnectableElement = /** @class */ (function (_super) {
    __extends(ConnectableElement, _super);
    function ConnectableElement(ele) {
        var _this = _super.call(this, ele) || this;
        _this.element.style.position = "absolute";
        return _this;
    }
    ConnectableElement.prototype.translate = function (Point, vector) {
        return { left: Point.left + vector[0], top: Point.top + vector[1], width: Point.width, height: Point.height };
    };
    ConnectableElement.prototype.setLeft = function (Point, left) {
        var res = __assign({}, Point);
        res.left = left;
        return res;
    };
    ConnectableElement.prototype.createCoordinate = function (Point) {
        return new Coordinate(Point.left, Point.top);
    };
    ConnectableElement.prototype.setTop = function (Point, top) {
        var res = __assign({}, Point);
        res.top = top;
        return res;
    };
    ConnectableElement.prototype.connect = function (other) {
        var _a = this, translate = _a.translate, createCoordinate = _a.createCoordinate, setLeft = _a.setLeft, setTop = _a.setTop;
        var Points = [];
        var e1 = this.element;
        var e2 = other.element;
        if (e1 != null && e2 != null) {
            var Point1 = { top: e1.offsetTop + e1.offsetHeight / 2, left: e1.offsetLeft + e1.offsetWidth, width: e1.offsetWidth, height: e1.offsetHeight };
            var Point2 = { top: e2.offsetTop + e2.offsetHeight / 2, left: e2.offsetLeft, width: e2.offsetWidth, height: e2.offsetHeight };
            var TPoint1 = translate(Point1, [20, 0]);
            var TPoint2 = translate(Point2, [-20, 0]);
            Points.push(createCoordinate(Point1));
            Points.push(createCoordinate(TPoint1));
            if (TPoint1.left <= TPoint2.left) {
                Points.push(new Coordinate(Point1.left + 20, Point2.top));
            }
            else {
                if (TPoint1.height / 2 + TPoint2.height / 2 < Math.abs(TPoint1.top - TPoint2.top)) {
                    var sp = Math.abs(TPoint1.top - TPoint2.top) - (TPoint1.height / 2 + TPoint2.height / 2);
                    sp = sp / 2 + TPoint1.height / 2;
                    if (TPoint1.top > TPoint2.top)
                        sp = -sp;
                    Points.push(createCoordinate(translate(TPoint1, [0, sp])));
                    Points.push(createCoordinate(setLeft(translate(TPoint1, [0, sp]), TPoint2.left)));
                }
                else {
                    if (TPoint1.left <= Point2.left + Point2.width) {
                        Points.push(createCoordinate(translate(TPoint1, [Point2.width, 0])));
                        TPoint1 = translate(TPoint1, [Point2.width, 0]);
                    }
                    var sd = Math.max(Point1.top + Point1.height / 2, Point2.top + Point2.height / 2) + 20;
                    Points.push(createCoordinate(setTop(TPoint1, sd)));
                    Points.push(createCoordinate(setTop(TPoint2, sd)));
                }
            }
            Points.push(createCoordinate(TPoint2));
            Points.push(createCoordinate(Point2));
            var graphic = new Graphic;
            graphic.drawConnectedLines({ "stroke": "rgb(255,0,0)", "stroke-width": 2 }, Points);
        }
    };
    return ConnectableElement;
}(Element));

var UIGraphicDemo = /** @class */ (function (_super) {
    __extends(UIGraphicDemo, _super);
    function UIGraphicDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIGraphicDemo.prototype.componentDidMount = function () {
        var div1 = new ConnectableElement("div1");
        var div2 = new ConnectableElement("div2");
        div2.connect(div1);
        new DraggableElement("div3", function () { });
        new ResizableElement("div4", { debug: true });
        new DroppableElement("div5", function (_dragEle, dropEle, _x, _y) { dropEle.element.style.border = "5px solid red"; });
        var frame = document.getElementById("frame");
        if (frame) {
            frame.ondragstart = function () { return false; };
            frame.ondrop = function () { return false; };
        }
    };
    UIGraphicDemo.prototype.render = function () {
        var html = (React__default.createElement("div", { style: { height: "100%" } },
            React__default.createElement("div", { style: { top: 0, left: 0, height: "200px", width: "400px", border: "1px solid", position: "relative" } },
                React__default.createElement("svg", { width: "100%", height: "100%", style: { top: 0, left: 0, position: "relative" }, id: "sgv" }),
                React__default.createElement("div", { id: "div1", style: { width: "50px", height: "50px", top: 0, left: 30, background: "#4287f5" } }),
                React__default.createElement("div", { id: "div2", style: { width: "50px", height: "50px", top: 100, left: 100, background: "#4287f5" } })),
            React__default.createElement("div", { id: "frame", style: { height: 200, width: 400, border: "1px solid" } },
                React__default.createElement("div", { id: "div3", style: { width: "50px", height: "50px", top: 0, left: 50, background: "#4287f5" } }),
                React__default.createElement("div", { id: "div5", style: { width: "200px", height: "50px", top: 40, left: 150, background: "blue" } })),
            React__default.createElement("div", { style: { height: 200, border: "1px solid", padding: 20 } },
                React__default.createElement("div", { id: "div4", style: { background: "#4287f5" } },
                    React__default.createElement("div", null, "some text!!!")))));
        return html;
    };
    return UIGraphicDemo;
}(Component));

var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.render = function () {
        var _a = this.props, style = _a.style, selected = _a.selected, preview = _a.preview, day = _a.day, children = _a.children;
        var className = 'cell';
        if (selected)
            className += ' cell-selected';
        else if (preview)
            className += ' cell-preview';
        else if (day)
            className += ' cell-day';
        return (React__default.createElement(Button, { className: className, style: style }, children));
    };
    return Cell;
}(Component));
var UIMiniMonthCalendar = /** @class */ (function (_super) {
    __extends(UIMiniMonthCalendar, _super);
    function UIMiniMonthCalendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dayInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return _this;
    }
    UIMiniMonthCalendar.prototype.renderColumnName = function () {
        var res1 = [];
        this.dayInWeek.forEach(function (value) { res1.push(React__default.createElement(Cell, { day: true }, value)); });
        return res1;
    };
    UIMiniMonthCalendar.prototype.getNumberOfDay = function () {
        return new Date(this.props.year, this.props.month, 0).getDate();
    };
    UIMiniMonthCalendar.prototype.startAt = function () {
        var date = new Date(this.props.year + "-" + this.props.month + "-" + 1);
        return date;
    };
    UIMiniMonthCalendar.prototype.isCurrentDay = function (y, m, d) {
        var currDate = new Date();
        return (y == currDate.getFullYear() && currDate.getMonth() == m - 1 && currDate.getDate() == d);
    };
    UIMiniMonthCalendar.prototype.getPrevDate = function (colId) {
        var date1 = new Date(this.props.year, this.props.month - 1, 1);
        date1.setDate(date1.getDate() - (this.startAt().getDay() - colId));
        return React__default.createElement(Cell, { preview: true }, date1.getDate());
    };
    UIMiniMonthCalendar.prototype.renderTable = function () {
        var rows = [];
        var startDay = this.startAt().getDay();
        var _a = this.props, year = _a.year, month = _a.month;
        var day = 1;
        var nextMonthDay = 1;
        var firstRow = [];
        for (var i = 0; i < 7; i++) {
            if (i < startDay) {
                firstRow.push(this.getPrevDate(i));
            }
            else {
                firstRow.push(React__default.createElement(Cell, { selected: this.isCurrentDay(year, month, day) }, day++));
            }
        }
        rows.push(React__default.createElement("div", { className: "d-flex justify-content-between" },
            " ",
            firstRow,
            " "));
        for (var i = 0; i < 5; i++) {
            var row = [];
            for (var j = 0; j < 7; j++) {
                if (day <= this.getNumberOfDay()) {
                    row.push(React__default.createElement(Cell, { selected: this.isCurrentDay(year, month, day) }, day++));
                }
                else {
                    row.push(React__default.createElement(Cell, { preview: true }, nextMonthDay++));
                }
            }
            rows.push(React__default.createElement("div", { className: "d-flex justify-content-between" },
                " ",
                row,
                " "));
        }
        return [(React__default.createElement("div", { className: "d-flex justify-content-between" },
                " ",
                this.renderColumnName(),
                " ")), rows];
    };
    UIMiniMonthCalendar.prototype.render = function () {
        var _a = this.props, month = _a.month, year = _a.year /*, movable */;
        var MonthLabel = [{ label: "January" }, { label: "February" }, { label: "March" }, { label: "April" }, { label: "May" },
            { label: "June" }, { label: "July" }, { label: "August" }, { label: "September" }, { label: "October" }, { label: "November" }, { label: "December" }];
        var YearLabel = [{ label: 2013 }, { label: 2014 }, { label: 2015 }, { label: 2016 }, { label: 2017 }, { label: 2018 }, { label: 2019 }, { label: 2020 }, { label: 2021 }];
        var bean = { month: MonthLabel[month - 1].label, year: year };
        return (React__default.createElement("div", { className: 'ui-mini-month-calendar' },
            React__default.createElement("div", { className: "control d-flex justify-content-between border" },
                React__default.createElement(Button, { color: 'link', onClick: function () { } }, '<'),
                React__default.createElement("div", { className: 'text-center d-flex' },
                    React__default.createElement(BBBeanSelectField, { bean: bean, field: 'month', options: MonthLabel, fieldCheck: 'label', fieldLabel: 'label', onInputChange: function () { } }),
                    React__default.createElement(BBBeanSelectField, { bean: bean, field: 'year', options: YearLabel, fieldCheck: 'label', fieldLabel: 'label', onInputChange: function () { } })),
                React__default.createElement(Button, { color: 'link', onClick: function () { } }, '>')),
            React__default.createElement("div", { className: "d-flex flex-column my-2" }, this.renderTable())));
    };
    return UIMiniMonthCalendar;
}(Component));

var Cell$1 = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, label = _a.label, selected = _a.selected, preview = _a.preview;
        var className = 'cell';
        if (label)
            className += ' cell-label';
        if (selected)
            className += ' cell-selected';
        if (preview)
            className += ' cell-preview';
        return (React__default.createElement("div", { className: className, style: style }, children));
    };
    return Cell;
}(Component));
var UIMonthCalendar = /** @class */ (function (_super) {
    __extends(UIMonthCalendar, _super);
    function UIMonthCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIMonthCalendar.prototype.startAt = function () {
        var date = new Date(this.props.year + "-" + this.props.month + "-" + 1);
        return date;
    };
    UIMonthCalendar.prototype.isCurrentDay = function (y, m, d) {
        var currDate = new Date();
        return (y == currDate.getFullYear() && currDate.getMonth() == m - 1 && currDate.getDate() == d);
    };
    UIMonthCalendar.prototype.getNumberOfDay = function () {
        return new Date(this.props.year, this.props.month, 0).getDate();
    };
    UIMonthCalendar.prototype.renderLabel = function () {
        var style = { height: 50 };
        return (React__default.createElement("div", { className: " d-flex flex-row" },
            React__default.createElement(Cell$1, { label: true, style: style }, " Sun"),
            React__default.createElement(Cell$1, { label: true, style: style }, " Mon"),
            React__default.createElement(Cell$1, { label: true, style: style }, " Tue"),
            React__default.createElement(Cell$1, { label: true, style: style }, " Wed"),
            React__default.createElement(Cell$1, { label: true, style: style }, " Thu"),
            React__default.createElement(Cell$1, { label: true, style: style }, " Fri"),
            React__default.createElement(Cell$1, { label: true, style: style }, " Sat")));
    };
    UIMonthCalendar.prototype.getPrevDate = function (colId) {
        var date1 = new Date(this.props.year, this.props.month - 1, 1);
        date1.setDate(date1.getDate() - (this.startAt().getDay() - colId));
        return React__default.createElement(Cell$1, { preview: true }, date1.getDate());
    };
    UIMonthCalendar.prototype.renderItem = function () {
        var _a = this.props, year = _a.year, month = _a.month;
        var table = [];
        var startDay = this.startAt().getDay();
        var day = 1;
        var nextMonthDay = 1;
        var firstRow = [];
        for (var i = 0; i < 7; i++) {
            if (i < startDay) {
                firstRow.push(this.getPrevDate(i));
            }
            else {
                firstRow.push(React__default.createElement(Cell$1, { selected: this.isCurrentDay(year, month, day) }, day++));
            }
        }
        table.push(React__default.createElement("div", { className: " d-flex flex-row" }, firstRow));
        for (var i = 0; i < 5; i++) {
            var row = [];
            for (var j = 0; j < 7; j++) {
                if (day <= this.getNumberOfDay()) {
                    row.push(React__default.createElement(Cell$1, { selected: this.isCurrentDay(year, month, day) }, day++));
                }
                else {
                    row.push(React__default.createElement(Cell$1, { preview: true }, nextMonthDay++));
                }
            }
            table.push(React__default.createElement("div", { className: "d-flex flex-row" },
                " ",
                row,
                " "));
        }
        return table;
    };
    UIMonthCalendar.prototype.render = function () {
        var MonthLable = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return (React__default.createElement("div", { className: "ui-month-calendar d-flex flex-column" },
            React__default.createElement("div", { className: "d-flex justify-content-center " },
                React__default.createElement(Button, { style: { marginRight: 50 }, color: 'primay', onClick: function () { } }, '<'),
                this.props.year + "-" + MonthLable[this.props.month - 1],
                React__default.createElement(Button, { style: { marginLeft: 50 }, color: 'primay', onClick: function () { } }, '>')),
            this.renderLabel(),
            this.renderItem()));
    };
    return UIMonthCalendar;
}(React__default.Component));

var UIYearCalendar = /** @class */ (function (_super) {
    __extends(UIYearCalendar, _super);
    function UIYearCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIYearCalendar.prototype.getCurrentYear = function () {
        var date = new Date();
        return date.getFullYear();
    };
    UIYearCalendar.prototype.render = function () {
        var table = [];
        for (var i = 0; i < 3; i++) {
            var row = [];
            for (var j = 0; j < 4; j++) {
                row.push(React__default.createElement(UIMiniMonthCalendar, { month: i * 4 + j + 1, year: this.getCurrentYear() }));
            }
            table.push(React__default.createElement("div", { className: "d-flex flex-row justify-content-around" }, row));
        }
        return (React__default.createElement("div", { className: 'ui-calendar-manager d-flex flex-column justify-content-around' }, table));
    };
    return UIYearCalendar;
}(Component));

var Cell$2 = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, hour = _a.hour, day = _a.day, workspace = _a.workspace, seleced = _a.seleced;
        var className = 'cell';
        if (hour)
            className += ' cell-hour-name';
        if (day)
            className += ' cell-day-name';
        if (workspace)
            className += ' cell-workspace';
        if (seleced)
            className += ' cell-selected';
        return (React__default.createElement("div", { className: className, style: style }, children));
    };
    return Cell;
}(React__default.Component));
var UIWeekCalendar = /** @class */ (function (_super) {
    __extends(UIWeekCalendar, _super);
    function UIWeekCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIWeekCalendar.prototype.renderHourColumn = function () {
        var column = [];
        column.push(React__default.createElement(Cell$2, { hour: true }));
        for (var i = 0; i < 12; i++) {
            column.push(React__default.createElement(Cell$2, { hour: true }, i + "AM"));
        }
        column.push(React__default.createElement(Cell$2, { hour: true }, "12PM"));
        for (var i = 1; i < 12; i++) {
            column.push(React__default.createElement(Cell$2, { hour: true }, i + "PM"));
        }
        return column;
    };
    UIWeekCalendar.prototype.getDate = function (day) {
        var date = new Date();
        date.setDate(date.getDate() + (day - date.getDay()));
        return date.toDateString();
    };
    UIWeekCalendar.prototype.renderLabel = function () {
        return (React__default.createElement("div", { className: " d-flex flex-row flex-grow-1" },
            React__default.createElement(Cell$2, { day: true },
                " ",
                this.getDate(0)),
            React__default.createElement(Cell$2, { day: true },
                " ",
                this.getDate(1)),
            React__default.createElement(Cell$2, { day: true },
                " ",
                this.getDate(2)),
            React__default.createElement(Cell$2, { day: true },
                " ",
                this.getDate(3)),
            React__default.createElement(Cell$2, { day: true },
                " ",
                this.getDate(4)),
            React__default.createElement(Cell$2, { day: true },
                " ",
                this.getDate(5)),
            React__default.createElement(Cell$2, { day: true },
                " ",
                this.getDate(6))));
    };
    UIWeekCalendar.prototype.isCurrDate = function (day) {
        var date = new Date();
        return day == date.getDay();
    };
    UIWeekCalendar.prototype.renderItem = function () {
        var table = [];
        for (var i = 0; i < 24; i++) {
            table.push(React__default.createElement("div", { className: " d-flex flex-row flex-grow-1" },
                React__default.createElement(Cell$2, { workspace: true, seleced: this.isCurrDate(0) }),
                React__default.createElement(Cell$2, { workspace: true, seleced: this.isCurrDate(1) }),
                React__default.createElement(Cell$2, { workspace: true, seleced: this.isCurrDate(2) }),
                React__default.createElement(Cell$2, { workspace: true, seleced: this.isCurrDate(3) }),
                React__default.createElement(Cell$2, { workspace: true, seleced: this.isCurrDate(4) }),
                React__default.createElement(Cell$2, { workspace: true, seleced: this.isCurrDate(5) }),
                React__default.createElement(Cell$2, { workspace: true, seleced: this.isCurrDate(6) })));
        }
        return table;
    };
    UIWeekCalendar.prototype.getTimePostion = function () {
        var date = new Date();
        return (date.getHours() + date.getMinutes() / 60 + 1) * 50;
    };
    UIWeekCalendar.prototype.render = function () {
        return (React__default.createElement("div", { className: "ui-week-calendar" },
            React__default.createElement("div", { style: { width: '100%', borderBottom: '2px solid red', position: 'relative', top: this.getTimePostion() } }),
            React__default.createElement("div", { className: " d-flex flex-row" },
                React__default.createElement("div", { style: { width: 80 }, className: "d-flex flex-column" }, this.renderHourColumn()),
                React__default.createElement("div", { className: "flex-grow-1 d-flex flex-column flex-start" },
                    this.renderLabel(),
                    this.renderItem()))));
    };
    return UIWeekCalendar;
}(React__default.Component));

var Cell$3 = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cell.prototype.render = function () {
        var _a = this.props, style = _a.style, children = _a.children;
        var className = 'cell';
        return (React__default.createElement("div", { className: className, style: style }, children));
    };
    return Cell;
}(Component));
var UIDayCalendar = /** @class */ (function (_super) {
    __extends(UIDayCalendar, _super);
    function UIDayCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIDayCalendar.prototype.renderHourColumn = function () {
        var column = [];
        for (var i = 0; i < 12; i++) {
            column.push(React__default.createElement(Cell$3, null, i + "AM"));
        }
        column.push(React__default.createElement(Cell$3, null, "12PM"));
        for (var i = 1; i < 12; i++) {
            column.push(React__default.createElement(Cell$3, null, i + "PM"));
        }
        return column;
    };
    UIDayCalendar.prototype.renderItem = function () {
        var table = [];
        for (var i = 0; i < 24; i++) {
            table.push(React__default.createElement("div", { className: " d-flex flex-row flex-grow-1" },
                React__default.createElement(Cell$3, { style: { width: "100%", minWidth: 100 } })));
        }
        return table;
    };
    UIDayCalendar.prototype.getTimePostion = function () {
        var date = new Date();
        return (date.getHours() + date.getMinutes() / 60) * 50;
    };
    UIDayCalendar.prototype.render = function () {
        var date = new Date();
        return (React__default.createElement("div", { className: 'ui-day-calendar' },
            React__default.createElement("div", null, date.toDateString()),
            React__default.createElement("div", null,
                React__default.createElement("div", { style: { width: '100%', borderBottom: '2px solid red', position: 'relative', top: this.getTimePostion() } }),
                React__default.createElement("div", { className: " d-flex flex-row" },
                    React__default.createElement("div", { style: { width: 80 }, className: "d-flex flex-column" }, this.renderHourColumn()),
                    React__default.createElement("div", { className: "flex-grow-1 d-flex flex-column flex-start" }, this.renderItem())))));
    };
    return UIDayCalendar;
}(React__default.Component));

var css$5 = ".ui-calendar-manager {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  border: 1px solid lightgray; }\n  .ui-calendar-manager > .ui-calendar-control {\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important;\n    max-width: 300px;\n    border-right: 1px solid lightgray; }\n  .ui-calendar-manager > .ui-calendar-workspace {\n    display: flex;\n    flex-direction: column !important;\n    flex-grow: 1 !important;\n    flex-grow: 1; }\n  .ui-calendar-manager .ui-mini-month-calendar {\n    margin: 10px; }\n    .ui-calendar-manager .ui-mini-month-calendar .control {\n      padding: 2px; }\n      .ui-calendar-manager .ui-mini-month-calendar .control .dropdown-toggle {\n        background-color: transparent;\n        color: black;\n        border: none;\n        outline: none; }\n    .ui-calendar-manager .ui-mini-month-calendar .cell {\n      display: block;\n      width: 13% !important;\n      margin: 2px 0px;\n      color: black;\n      background-color: transparent; }\n    .ui-calendar-manager .ui-mini-month-calendar .cell-day {\n      color: blue; }\n    .ui-calendar-manager .ui-mini-month-calendar .cell-selected {\n      color: red; }\n    .ui-calendar-manager .ui-mini-month-calendar .cell-preview {\n      color: gray; }\n  .ui-calendar-manager .ui-month-calendar .cell {\n    display: block;\n    border: 1px solid #d9d9d9;\n    text-align: center;\n    width: 14% !important;\n    min-width: 100;\n    height: 100px; }\n  .ui-calendar-manager .ui-month-calendar .cell-label {\n    background-color: aqua; }\n  .ui-calendar-manager .ui-month-calendar .cell-selected {\n    background-color: #f5a142; }\n  .ui-calendar-manager .ui-month-calendar .cell-preview {\n    background-color: #bababa; }\n  .ui-calendar-manager .ui-week-calendar .cell {\n    border: 1px solid #d9d9d9;\n    text-align: center;\n    height: 50px; }\n  .ui-calendar-manager .ui-week-calendar .cell-hour-name {\n    height: 50px; }\n  .ui-calendar-manager .ui-week-calendar .cell-day-name {\n    background-color: #4287f5;\n    width: 14%;\n    min-width: 100;\n    height: 50px; }\n  .ui-calendar-manager .ui-week-calendar .cell-workspace {\n    width: 14%;\n    min-width: 100;\n    height: 50px; }\n  .ui-calendar-manager .ui-week-calendar .cell-selected {\n    background-color: #9ff5e9; }\n  .ui-calendar-manager .ui-day-calendar .cell {\n    border: 1px solid #d9d9d9;\n    text-align: center;\n    height: 50px; }\n";
styleInject(css$5);

var UICalendarControl = /** @class */ (function (_super) {
    __extends(UICalendarControl, _super);
    function UICalendarControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UICalendarControl.prototype.getCurrentDay = function () { return new Date(); };
    UICalendarControl.prototype.onSelectCalendarView = function (view) {
        var _a = this.props, config = _a.config, broadcast = _a.broadcast;
        config.view = view;
        broadcast({ name: 'change-calendar-view', updateView: true });
    };
    UICalendarControl.prototype.render = function () {
        var _this = this;
        var currDate = this.getCurrentDay();
        return (React__default.createElement("div", { className: "ui-calendar-control" },
            React__default.createElement(UIMiniMonthCalendar, { month: currDate.getMonth() + 1, year: currDate.getFullYear(), movable: true }),
            React__default.createElement("div", { className: "d-flex justify-content-around" },
                React__default.createElement(Button, { onClick: function () { return _this.onSelectCalendarView('year'); } }, "Year"),
                React__default.createElement(Button, { onClick: function () { return _this.onSelectCalendarView('month'); } }, "Month"),
                React__default.createElement(Button, { onClick: function () { return _this.onSelectCalendarView('week'); } }, "Week"),
                React__default.createElement(Button, { onClick: function () { return _this.onSelectCalendarView('day'); } }, "Day"))));
    };
    return UICalendarControl;
}(React__default.Component));
var UICalendarWorkspace = /** @class */ (function (_super) {
    __extends(UICalendarWorkspace, _super);
    function UICalendarWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UICalendarWorkspace.prototype.getCurrentDate = function () { return new Date(); };
    UICalendarWorkspace.prototype.render = function () {
        var config = this.props.config;
        var UICalendarView = null;
        if ('year' == config.view) {
            UICalendarView = (React__default.createElement(UIYearCalendar, null));
        }
        else if (config.view == "month") {
            UICalendarView = React__default.createElement(UIMonthCalendar, { year: this.getCurrentDate().getFullYear(), month: this.getCurrentDate().getMonth() + 1 });
        }
        else if (config.view == "week") {
            UICalendarView = React__default.createElement(UIWeekCalendar, null);
        }
        else {
            UICalendarView = React__default.createElement(UIDayCalendar, null);
        }
        return (React__default.createElement("div", { className: 'ui-calendar-workspace' }, UICalendarView));
    };
    return UICalendarWorkspace;
}(React__default.Component));
var UICalendarManager = /** @class */ (function (_super) {
    __extends(UICalendarManager, _super);
    function UICalendarManager(props) {
        var _this = _super.call(this, props) || this;
        _this.currentEvent = null;
        _this.broadcast = _this.broadcast.bind(_this);
        _this.state = { renderId: "" + IDTracker.next() };
        return _this;
    }
    UICalendarManager.prototype.consumeEvent = function () {
        var event = this.currentEvent;
        this.currentEvent = null;
        return event;
    };
    UICalendarManager.prototype.broadcast = function (event) {
        this.currentEvent = event;
        if (event && event.updateView) {
            this.setState({ renderId: "" + IDTracker.next });
        }
    };
    UICalendarManager.prototype.render = function () {
        var config = this.props.config;
        var event = this.consumeEvent();
        return (React__default.createElement("div", { key: this.state.renderId, className: "ui-calendar-manager" },
            React__default.createElement(UICalendarControl, { config: config, event: event, broadcast: this.broadcast }),
            React__default.createElement(UICalendarWorkspace, { config: config, event: event })));
    };
    return UICalendarManager;
}(Component));

var UICalendarManagerDemo = /** @class */ (function (_super) {
    __extends(UICalendarManagerDemo, _super);
    function UICalendarManagerDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.config = {
            view: 'year'
        };
        return _this;
    }
    UICalendarManagerDemo.prototype.render = function () {
        return React__default.createElement(UICalendarManager, { config: this.config });
    };
    return UICalendarManagerDemo;
}(Component));

var css$6 = "html, body, #app {\n  padding: 0px;\n  margin: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #f7f7f7;\n  font-family: Verdana, Geneva, sans-serif;\n  font-size: 9pt; }\n\n#app {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 1px; }\n\na {\n  cursor: pointer;\n  padding: 0px 5px;\n  color: #337ab7; }\n\nsvg {\n  display: inline-block; }\n\nh4 {\n  margin: 0px; }\n\nhr {\n  border: 0;\n  height: 1px;\n  width: 100%;\n  border-top: 1px dashed #ccc;\n  margin: 2px 0px 5px 0px; }\n\ninput, select, textarea {\n  padding: 2px;\n  border: 1px solid lightgray; }\n\n::-webkit-scrollbar {\n  width: 5px;\n  height: 5px; }\n\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #b8b5b5; }\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n.full-height-box {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1; }\n\n.icon {\n  font-size: 1.1rem; }\n\n.icon-24 {\n  font-size: 24px; }\n\n.icon-36 {\n  font-size: 36px; }\n\n.icon-48 {\n  font-size: 48px; }\n\n.container,\n.container-fluid {\n  padding: 5px; }\n  .container .row,\n  .container-fluid .row {\n    margin-left: 0px;\n    margin-right: 0px; }\n  .container .col-1, .container .col-2, .container .col-3, .container .col-4, .container .col-5, .container .col-6, .container .col-7, .container .col-8, .container .col-9, .container .col-10, .container .col-11, .container .col-12,\n  .container .col-md-1, .container .col-md-2, .container .col-md-3, .container .col-md-4, .container .col-md-5, .container .col-md-6,\n  .container .col-md-7, .container .col-md-8, .container .col-md-9, .container .col-md-10, .container .col-md-11, .container .col-md-12,\n  .container-fluid .col-1,\n  .container-fluid .col-2,\n  .container-fluid .col-3,\n  .container-fluid .col-4,\n  .container-fluid .col-5,\n  .container-fluid .col-6,\n  .container-fluid .col-7,\n  .container-fluid .col-8,\n  .container-fluid .col-9,\n  .container-fluid .col-10,\n  .container-fluid .col-11,\n  .container-fluid .col-12,\n  .container-fluid .col-md-1,\n  .container-fluid .col-md-2,\n  .container-fluid .col-md-3,\n  .container-fluid .col-md-4,\n  .container-fluid .col-md-5,\n  .container-fluid .col-md-6,\n  .container-fluid .col-md-7,\n  .container-fluid .col-md-8,\n  .container-fluid .col-md-9,\n  .container-fluid .col-md-10,\n  .container-fluid .col-md-11,\n  .container-fluid .col-md-12 {\n    padding: 0px 5px; }\n\n.app .btn:focus,\n.app .btn-outline-secondary:focus,\n.ui-dialog .btn:focus,\n.ui-dialog .btn-outline-secondary:focus {\n  box-shadow: none; }\n\n.app .btn-primary,\n.ui-dialog .btn-primary {\n  background-color: #54546b;\n  border: 1px outset;\n  font-weight: 900; }\n\n.app .btn-info,\n.app .btn-info:disabled,\n.ui-dialog .btn-info,\n.ui-dialog .btn-info:disabled {\n  background-color: #5ab0ee; }\n\n.app .btn-group > .btn,\n.ui-dialog .btn-group > .btn {\n  margin: 0px !important; }\n\n.navbar-expand-md {\n  padding: 0.1rem 0.1rem; }\n\n.modal {\n  z-index: 1050; }\n  .modal .modal-backdrop {\n    background: transparent; }\n  .modal .modal-dialog {\n    max-width: 100%;\n    max-height: 100%;\n    margin: 30px 30px; }\n    .modal .modal-dialog > .modal-content {\n      margin: 0px auto; }\n  .modal .modal-header {\n    padding: 0.2rem 0.5rem;\n    background-color: #406079;\n    color: #ffffff; }\n    .modal .modal-header > .close {\n      color: #ffffff;\n      padding-top: 1.3rem; }\n  .modal .modal-body {\n    padding: 5px; }\n  .modal .modal-xl {\n    max-width: 100%; }\n    .modal .modal-xl > .modal-content {\n      margin: 0px auto;\n      max-width: 1500px; }\n  .modal .modal-lg {\n    max-width: 100%; }\n    .modal .modal-lg > .modal-content {\n      margin: 0px auto;\n      max-width: 1200px; }\n  .modal .modal-md {\n    max-width: 100%; }\n    .modal .modal-md > .modal-content {\n      margin: 0px auto;\n      max-width: 800px; }\n  .modal .modal-sm {\n    max-width: 100%; }\n    .modal .modal-sm > .modal-content {\n      margin: 0px auto;\n      max-width: 500px; }\n  .modal .modal-xs {\n    max-width: 100%; }\n    .modal .modal-xs > .modal-content {\n      margin: 0px auto;\n      max-width: 300px; }\n\n.popover {\n  z-index: 1050;\n  max-width: 1000px; }\n  .popover .popover-body {\n    padding: 2px;\n    min-height: 50px; }\n\n.ui-card {\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  box-shadow: 0 3px 23px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 5px; }\n\n.ui-card > .header {\n  height: 60px;\n  display: flex;\n  padding: 0px 10px;\n  background-color: #406079;\n  border-radius: 5px 5px 0px 0px;\n  align-items: center; }\n\n.ui-card > .header > h4 {\n  display: flex;\n  flex-grow: 1;\n  font-size: 28px;\n  color: #d0e6f4; }\n\n.ui-card .footer {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: #f8f8f8; }\n";
styleInject(css$6);

var DEFAULT_CATEGORY = 'graphic';
var DEFAULT_VIEW = 'Calendar';
var DEMO_COMPONENTS = {
    'widget': {
        'label': 'Widget',
        'components': {
            'reactstrap': {
                'label': "Reactstrap",
                'description': "Reactstrap(Bootstrap) Demo",
                'view': (React__default.createElement(UIBootstrapDemo, null))
            },
            'bean-editor': {
                'label': "Bean Editor",
                'description': "Demo Bean Editor",
                'view': (React__default.createElement(UIBeanEditor, null))
            }
        }
    },
    'dnd': {
        'label': 'DND',
        'components': {
            'multi-list': {
                'label': "Multi Vertical List",
                'description': "DND Demo",
                'view': (React__default.createElement(UIMultiVerticalListDND, null))
            },
            'dnd': {
                'label': "DND Demo",
                'description': "DND Demo",
                'view': (React__default.createElement(DNDDemo, null))
            },
            'DNDBoardDemo': {
                'label': "DND Board Demo",
                'description': "DND Board Demo",
                'view': (React__default.createElement(DNDBoardDemo, null))
            }
        }
    },
    'graphic': {
        'label': 'Graphic',
        'components': {
            'UIGraphicDemo': {
                'label': "Graphic Demo",
                'description': "Graphic Demo",
                'view': (React__default.createElement(UIGraphicDemo, null))
            },
            'Calendar': {
                'label': "Calendar",
                'description': "Calendar Demo",
                'view': (React__default.createElement(UICalendarManagerDemo, null))
            }
        }
    },
    'list': {
        'label': 'List',
        'components': {
            'vlist': {
                'label': "VList",
                'description': "Demo VList",
                'view': (React__default.createElement("div", { style: { height: '600px' } },
                    " ",
                    React__default.createElement(UIVList, null),
                    " "))
            },
            'vgridtable': {
                'label': "VTableDemo",
                'description': "Demo Grid Table",
                'view': (React__default.createElement(VTableDemo, null))
            },
            'vtree': {
                'label': "VTree Demo",
                'description': "Demo VTree",
                'view': (React__default.createElement("div", { style: { height: '600px' } },
                    " ",
                    React__default.createElement(UITreeDemo, null),
                    " "))
            }
        }
    },
    'server': {
        'label': 'Server',
        'components': {
            'rest-ping': {
                'label': "Rest Ping",
                'description': "Demo UIRestPing Component",
                'view': (React__default.createElement(UIRestPing, { serverUrl: "http://localhost:7080/rest/v1.0.0", restPath: "/monitor/ping" }))
            },
            'websocket-ping': {
                'label': "Websocket Echo",
                'description': "Demo UIWebsocketEcho Component",
                'view': (React__default.createElement(UIWebsocketEcho, { serverUrl: "ws://localhost:7080", wsPath: "/chat" }))
            },
        }
    },
};
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.render = function () {
        var broadcast = this.props.broadcast;
        var sections = [];
        var _loop_1 = function (categoryName) {
            var category = DEMO_COMPONENTS[categoryName];
            var items = [];
            var _loop_2 = function (name_1) {
                var entry = category.components[name_1];
                var onClickItem = function () {
                    var params = { 'category': categoryName, 'component': name_1 };
                    broadcast(new AppEvent('navigation', 'change-component', params, null));
                };
                var key = categoryName + '/' + name_1;
                items.push((React__default.createElement(Button, { key: key, onClick: onClickItem, size: 'sm', color: 'link', className: 'd-block' }, entry.label)));
            };
            for (var name_1 in category.components) {
                _loop_2(name_1);
            }
            sections.push((React__default.createElement("div", { key: categoryName, className: 'mb-3' },
                React__default.createElement("h5", { className: 'border-bottom' }, category.label),
                items)));
        };
        for (var categoryName in DEMO_COMPONENTS) {
            _loop_1(categoryName);
        }
        return (React__default.createElement("div", { className: 'p-1 mt-2 border-right h-100' }, sections));
    };
    return Navigation;
}(Component));
var Workspace = /** @class */ (function (_super) {
    __extends(Workspace, _super);
    function Workspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Workspace.prototype.render = function () {
        var event = this.props.event;
        var selectDemoComponent = DEMO_COMPONENTS[DEFAULT_CATEGORY].components[DEFAULT_VIEW];
        if (event) {
            var params = event.data;
            selectDemoComponent = DEMO_COMPONENTS[params['category']].components[params['component']];
        }
        return (React__default.createElement("div", { className: 'p-1 full-height-box' },
            React__default.createElement("h1", null, selectDemoComponent.description),
            selectDemoComponent.view));
    };
    return Workspace;
}(Component));
var UISample = /** @class */ (function (_super) {
    __extends(UISample, _super);
    function UISample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UISample.prototype.render = function () {
        var _this = this;
        var appContext = this.props.appContext;
        var broadcast = function (event) {
            console.log('App: call broadcast event!!!');
            appContext.setEvent(event);
            _this.forceUpdate();
        };
        var event = appContext.consumeEvent();
        var html = (React__default.createElement("div", { className: 'd-flex flex-grow-1 w-100' },
            React__default.createElement("div", { className: 'd-flex flex-column', style: { minWidth: 200, maxWidth: 200 } },
                React__default.createElement(Navigation, { appContext: appContext, broadcast: broadcast, event: event })),
            React__default.createElement("div", { className: 'd-flex flex-olumn flex-grow-1' },
                React__default.createElement(Workspace, { appContext: appContext, broadcast: broadcast, event: event }))));
        return html;
    };
    return UISample;
}(Component));

var index$8 = /*#__PURE__*/Object.freeze({
  Navigation: Navigation,
  Workspace: Workspace,
  UISample: UISample
});

export { index as util, index$7 as widget, index$3 as server, index$4 as app, index$8 as sample };
