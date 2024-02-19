(function() {
    'use strict';
    var firstChecked, lastChecked;

    function handleVersionSelection(event) {
        if (firstChecked instanceof HTMLInputElement && firstChecked.checked) {
            firstChecked.checked = false;
            firstChecked.closest('tr').classList.remove('selected');
            firstChecked = lastChecked;
        }
        if (event.target instanceof HTMLInputElement) {
            if (event.target.checked) {
                firstChecked = lastChecked;
                lastChecked = event.target;
            } else if (firstChecked === event.target) {
                firstChecked = null;
            } else {
                lastChecked = null;
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function(){
        var selectedVersions = document.querySelectorAll('#result_list input[type="checkbox"].action-select');
        selectedVersions.forEach(function(selectedVersion){
            selectedVersion.addEventListener('change', handleVersionSelection);
        });
    });
 })();
