$(document).ready(function() {
    reset();

    var commands = [
        {key: 'help', val: "I can't help u right now"}
    ];

    function appendLine(str) {
        $('#terminal').append('<br><span>' + str + '</span>');
    }

    function reset() {
        $('input').val('');
    }

    function execute(command) {
        for (var i = 0; i < commands.length; i++) {
            if (commands[i].key == command) {
                appendLine(commands[i].val);
                reset();
            }
        }
    }


    $('input').on('keydown', function(e) {
        if (e.keyCode == 13) {
            var text = $(this).val();
            var executed = false;

            for (var i = 0; i < commands.length; i++) {
                if (commands[i].key == text) {
                    console.log('Yaas');
                    execute(text);
                    executed = true;
                }
            }

            if (!executed) {
                appendLine($(this).val());
                reset();
            }
        }
    });
});
