$(document).ready(function() {
  const TERMINAL = document.getElementById('terminal');
  const INPUT = $('#terminal-input input');
  const INPUT_CHAR = $('#terminal-input span');
  const CONTENT = $('#terminal-content');

  let history = [];

  let commands = [{
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
    TERMINAL.scrollTop = TERMINAL.scrollHeight;
  }

  INPUT.on('keydown', function(e) {
    if (e.keyCode === 13) {
      let text = $(this).val();
      addToHistory(text);

      appendLine(text);

      execute(text);

      reset();
    }
  });

  let pos = -1;

  function addToHistory(text) {
    pos = -1;

    // Only add item to history if the last command was not the same
    if (history[history.length - 1] !== text) {
      history.push(text);
    }
  }

  INPUT.on('keydown', function(e) {
    if (e.keyCode === 38) {
      if (pos < history.length - 1) {
        pos++;
        INPUT.val(history[history.length - pos - 1]);
      }
    } else if (e.keyCode === 40) {
      if (pos > 0) {
        pos--;
        INPUT.val(history[history.length - pos - 1]);
      } else {
        pos = -1;
        INPUT.val('');
      }
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
      case '':
        break;
      case 'clear':
        reset();
        CONTENT.empty();
        break;
      default:
        let found = false;
        for (let i = 0; i < commands.length; i++) {
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

  $.get('https://api.github.com/users/algram/repos', function(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      $('.gh-info').append('<li>' + data[i].name + '</li>');
    }
  });
});
