if (localStorage) {
    (function(){
        "use strict";

        var NOTES_ID = "notes";
        var SAVE_KEY = "notes-storage";
        var SAVE_INTERVAL = 5000;

        var notes = document.getElementById(NOTES_ID);
        var changed = false;
        notes.value = localStorage.getItem(SAVE_KEY) || '';

        notes.onchange = changeHandler;
        notes.onkeydown = changeHandler;

        setInterval(saveHandler, SAVE_INTERVAL);

        function changeHandler() {
            changed = true;
        }

        function saveHandler() {
            if (changed) {
                showMessage("Saving...");
                localStorage.setItem(SAVE_KEY, notes.value);
                changed = false;
            }
        }

        function showMessage(text) {
            var MSG_VISIBLE_DELAY = 500;
            var msg = document.getElementById("msg");
            msg.innerHTML = text;
            setTimeout(function clearMessage() {
                msg.innerHTML = '';
            }, MSG_VISIBLE_DELAY);
        }
    })();

} else {
    console.error("No localStorage!");
}

