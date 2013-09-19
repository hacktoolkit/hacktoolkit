function GetXmlHttpObject() {
    var xmlHttp = null;
    try {
        // Firefox, Opera 8.0+, Safari
            xmlHttp = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
    }
    return xmlHttp;
}

function getValueById(id) {
    try {
        var obj = document.getElementById(id);
        return obj.value;
    } catch(e) {
        return "";
    }
}

function setValueById(id, value) {
    try {
        var obj = document.getElementById(id);
        obj.value = value;
    } catch(e) {
    }
}

function voidAjaxCall(url, callback, method, parameters) {
    var xmlHttp = GetXmlHttpObject();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState==4) {
	    if (callback != undefined) {
	        callback();
            }
        }
    }
    ajaxRequest(xmlHttp, url, method, parameters);
}

function setIdToHTML(id, html) {
    document.getElementById(id).innerHTML = html;
}

function setIdToAjaxResponse(id, url, callback, method, parameters) {
    var xmlHttp = GetXmlHttpObject();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState==4) {
	    setIdToHTML(id, xmlHttp.responseText);
	    if (callback != undefined) {
	        callback();
            }
        }
    }
    ajaxRequest(xmlHttp, url, method, parameters);
}

function ajaxHandleResponse(url, callback, method, parameters) {
    var xmlHttp = GetXmlHttpObject();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState==4) {
	    if (callback != undefined) {
	        callback(xmlHttp.responseText);
            }
        }
    }
    ajaxRequest(xmlHttp, url, method, parameters);
}

function ajaxRequest(xmlHttp, url, method, parameters) {
    var requestMethod = "GET";
    if (method != undefined && method.toLowerCase() == "get" || method.toLowerCase() == "post") {
	requestMethod = method;
    }
    xmlHttp.open(requestMethod, url, true);

    if (parameters != undefined) {
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-length", parameters.length);
	xmlHttp.setRequestHeader("Connection", "close");
	xmlHttp.send(parameters);
    } else {
	xmlHttp.send(null);
    }
}