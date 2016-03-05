var dirty = false;

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        chrome.storage.local.get(window.location.href, function(data) {
            var targetField = document.getElementById(data[window.location.href]);
            if (!targetField) {
                var query = 'input[name=' + data[window.location.href] + ']';
                targetField = document.querySelector(query);
            }
            targetField.select();
            targetField.focus();
            targetField.oninput = function() {
                dirty = true;
            }
        });

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