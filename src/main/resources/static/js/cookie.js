/**
 * Created by Nizis on 2/3/2021.
 */
$(document).ready(function () {
	"use strict"
    $('#submit').click(function(){
        if(checkCookie()){
            setCookie('customer',$('#email')[0].value,1);
        }
    });
    $('#logout').click(function(){
        deleteCookie('customer');
    });


    function setCookie(cName, cValue, exDays) {
        var d = new Date();
        d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
    }
    function deleteCookie(cName) {
        setCookie(cName,"",0);
    }

    function getCookie(cName) {
        var name = cName + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function checkCookie() {
        var user=getCookie('customer');
        if (user != "") {
            alert("Welcome again " + user);
            return false;
        } else {
            return true;
        }
    }
});

