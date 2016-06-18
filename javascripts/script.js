$(document).ready(function() {
  var INPUT = $('input');
  var INPUT_CHAR = $('#terminal-input span');
  var CONTENT = $('#terminal-content');
  var commands = [{
    key: 'help',
    val: "I can't help u right now"
  }];

  reset();

  function reset() {
    INPUT.val('');
    CONTENT.append(
      '<span class="blue">#</span> ' +
      '<span class="teal">raphael</span> in ' +
      '<span class="yellow">~/dev/rphl.io</span>'
    );

    //INPUT_CHAR.text('→');

    INPUT.val('');
  }

  $('input').on('keydown', function(e) {
    if (e.keyCode == 13) {
      var text = $(this).val();
      appendLine(text);

      execute(text);

      reset();
    }
  });

  function clear() {
    reset();
    CONTENT.empty();
  }


  function appendLine(str) {
    CONTENT.append('<li>' + '<span class="red">→</span> ' + str + '</li>');
  }



  function execute(command) {
    switch (command) {
      case 'clear':
        clear();
        break;
      default:

    }
    for (var i = 0; i < commands.length; i++) {
      if (commands[i].key == command) {
        appendLine(commands[i].val);
      }
    }
  }


  /*
  $('input').on('keydown', function(e) {
      if (e.keyCode == 13) {
          var text = $(this).val();
          var executed = false;

          for (var i = 0; i < commands.length; i++) {
              if (commands[i].key == text) {
                  execute(text);
                  executed = true;
              }
          }

          if (!executed) {
              appendLine($(this).val());
              reset();
          }
      }
  });*/
});
