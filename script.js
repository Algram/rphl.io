$(document).ready(function() {
    reset();

    function appendLine(str) {
        $('#terminal').append('<br><span>' + str + '</span>');
    }

    function reset() {
        $('input').val('~');
    }


    $('input').on('keydown', function(e) {
        if (e.keyCode == 13) {
            appendLine($(this).val());
            reset();
        }
    });
});
