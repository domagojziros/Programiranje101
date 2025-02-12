
window.onload = function() {
    var editor1 = ace.edit("editor1");
    editor1.setTheme("ace/theme/monokai");
    editor1.session.setMode("ace/mode/python");

    var editor2 = ace.edit("editor2");
    editor2.setTheme("ace/theme/monokai");
    editor2.session.setMode("ace/mode/python");

    var editor3 = ace.edit("editor3");
    editor3.setTheme("ace/theme/monokai");
    editor3.session.setMode("ace/mode/python");

    var editor4 = ace.edit("editor4");
    editor4.setTheme("ace/theme/monokai");
    editor4.session.setMode("ace/mode/python");
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("scrollToTop").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
