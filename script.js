var dirty = false;

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        var inputs = document.querySelectorAll('input');
        for (var i = 0; i < inputs.length; ++i) {
            inputs[i].onclick = function(event) {
                dirty = true;
                event.stopPropagation();
            }
        }
    }
}