$(document).ready(function() {
  var TERMINAL = document.getElementById('terminal');
  var INPUT = $('#terminal-input input');
  var INPUT_CHAR = $('#terminal-input span');
  var CONTENT = $('#terminal-content');

  var commands = [{
    key: 'help',
    val: "I can't help you right now"
  }];

  reset();

  $('#terminal').click(function() {
    INPUT.focus();
  });

  function reset() {
    INPUT.val('');
    CONTENT.append(
      '<span class="blue">#</span> ' +
      '<span class="teal">raphael</span> in ' +
      '<span class="yellow">~/dev/rphl.io</span>'
    );
    INPUT.val('');
    TERMINAL.scrollTop = TERMINAL.scrollHeight;
  }

  $('input').on('keydown', function(e) {
    if (e.keyCode == 13) {
      var text = $(this).val();
      appendLine(text);

      execute(text);

      reset();
    }
  });

  function appendLine(str) {
    CONTENT.append('<li>' + '<span class="red">→</span> ' + str + '</li>');
  }

  function appendAnswer(str) {
    CONTENT.append('<li>' + str + '</li>');
  }

  function execute(command) {
    switch (command) {
      case 'clear':
        reset();
        CONTENT.empty();
        break;
      default:
        var found = false;
        for (var i = 0; i < commands.length; i++) {
          if (commands[i].key == command) {
            found = true;
            appendAnswer(commands[i].val);
          }
        }

        if (!found) {
          appendAnswer(command + ': Command not found...');
        }
    }
  }
});
