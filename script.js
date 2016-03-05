var dirty = false;

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        var inputs = document.querySelectorAll('input');
        for (var i = 0; i < inputs.length; ++i) {
            inputs[i].onclick = function(event) {
                if (dirty) {
                    return;
                }
                dirty = true;
                obj = {}
                obj[window.location.href] = event.target.id ? event.target.id : event.target.name;
                chrome.storage.local.set(obj, function(){});
            }
        }
    }
}