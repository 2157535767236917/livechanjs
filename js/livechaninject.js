var selText = '';

function getSelText() {
    if (window.getSelection) {
        selText = window.getSelection();
    }
    else if (document.getSelection) {
        selText = document.getSelection();
    }
    else if (document.selection) {
        selText = document.selection.createRange().text;
    }
    else {
        return;
    }
}
document.onmouseup = getSelText;


quote = function(id) {
    "use strict";

    var el = $("#body")[0];
    var text = ">>" + id + "\n" + '>' + selText;
    var val = el.value,
        endIndex, range;s
    if (el.selectionStart !== undefined && el.selectionEnd !== undefined) {
        endIndex = el.selectionEnd;
        el.value = val.slice(0, el.selectionStart) + text + val.slice(endIndex);
        el.selectionStart = el.selectionEnd = endIndex + text.length;
    } else if (document.selection !== undefined && document.selection.createRange !== undefined) {
        el.focus();
        range = document.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
    }

    // set conversation
    if ($.inArray(get_convo(), convos) > -1) {
        $("#convo").val(chat[id].convo);
        apply_filter();
    }
}