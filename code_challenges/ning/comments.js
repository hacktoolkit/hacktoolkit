// comments.js
// author: jontsai AT cal DOT berkeley DOT edu
// date: 2009.04.21
//
// JavaScript stuff for Ning
// assumes  ajax.js, saXMLUtils.js present

/**
 * submitContent
 * Submits the form via AJAX
 *
 */
function submitComment() {
    var id = "comment";
    var commentText = getValueById(id);
    disableFieldById(id);
    var callback = function(response) {
        resetFieldById(id);
        updateComments(response);
    };
    var params = buildCommentParamsForPost(commentText);
    ajaxHandleResponse("addComment.php", callback, "POST", params);
}

/**
 * buildCommentParamsForPost
 * Builds a string for POST method via AJAX
 *
 * @param commentText
 *
 * @returns a param string of key-value pairs separated by &
 */
function buildCommentParamsForPost(commentText) {
    var params = "comment=" + commentText;
    return params;
}

/**
 * displayMessage
 * display a message in the message area
 *
 * @param message the message to display
 */
function displayMessage(message) {
    var messageField = getFieldById("message");
    messageField.innerHTML = message;
}

/**
 * updateCharCout
 * update the character count for the specified field and display as message
 *
 * @returns void
 */
function updateCharCount(target) {
    var length = target.value.length;
    displayMessage(length + " characters");
}

/**
 * updateComments
 * Display the comments on the page
 *
 * @param xmlResponse the text that comes back from the XmlHttpRequest after POSTing
 * @returns void
 */
function updateComments(xmlResponse) {
    var xml_doc = XMLObjectifier.textToXML(xmlResponse); // Converts xml string to xml dom
    var json = XMLObjectifier.xmlToJSON(xml_doc); // Converts xml dom object to JSON

    var newCommentsHTML = "<table>";
    newCommentsHTML += "<tr><th>Time</th><th>User</th><th>Comment</th></tr>";

    for (var i=0; i < json.comment.length; ++i) {
        newCommentsHTML += "<tr>";
        newCommentsHTML += "<td>" + toLocalTime(sanitize(json.comment[i].time[0].Text)) + "</td>";
        newCommentsHTML += "<td>" + sanitize(json.comment[i].user[0].Text) + "</td>";
        newCommentsHTML += "<td>" + sanitize(json.comment[i].Text) + "</td>";
        newCommentsHTML += "</tr>";
    }
    newCommentsHTML += "</table>";

    var commentField = getFieldById("comments");
    commentField.innerHTML = newCommentsHTML;
}

/**
 * sanitize
 * Cleans up user-input text and removes anything that would be unsafe on a page
 * Examples of unsafe:
 * - Javascript pseudo URLs in hyperlink
 *
 * @param unsafe
 * @returns a string with unsafe elements removed
 */
function sanitize(unsafe) {
    var filtered = unsafe;

    var badPatterns = [
                       // javascript:function(); or variants
                       /j\w*a\w*v\w*a\w*s\w*c\w*r\w*i\w*p\w*t\w*:(.*;)?/i,
                       // <script> tag, greedy until close >
                       /<\w*s\w*c\w*r\w*i\w*p\w*t\w*.*>/i,
                       // </script> tag
                       /<\w*\/\w*s\w*c\w*r\w*i\w*p\w*t\w*>/i
                       ];

    for (var i=0; i < badPatterns.length; ++i) {
        filtered = filtered.replace(badPatterns[i], "");
    }

    return filtered;
}

/**
 * toLocalTime
 * Converts a given date/time string to one in the current Locale setting
 *
 * @param datetime
 * @returns a string with the formatted date time
 */
function toLocalTime(datetime) {
    var parsed = Date.parse(datetime);
    var formatted = (new Date(parsed)).toLocaleString();
    return formatted;
}

/**
 * getFieldById
 *
 * return the field with id
 */
function getFieldById(id) {
    try {
        var obj = document.getElementById(id);
        return obj;
    } catch(e) {
        return false;
    }
}

/**
 * resetFieldById
 * reset the value of the field with id
 *
 * @returns the field with id
 */
function resetFieldById(id) {
    var field = enableFieldById(id);
    field.value = "";
    updateCharCount(field);
    return field;
}

/**
 * enableFieldById
 * enable the field with id
 *
 * @returns the field with id
 */
function enableFieldById(id) {
    var field = getFieldById(id);
    if (field) {
        field.disabled = false;
        return field;
    } else {
        return false;
    }
}

/**
 * disableFieldById
 * disable the field with id
 *
 * @returns the field with id
 */
function disableFieldById(id) {
    var field = getFieldById(id);
    if (field) {
        field.disabled = false;
        return field;
    } else {
        return false;
    }
}