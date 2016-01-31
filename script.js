$(document).ready(function() {
    $(function() {
       $('#terminal').focus();
   });

    $('#terminal').on('keydown', function(e) {
        e.preventDefault();
        var currText = $(this).text();

        switch (e.keyCode) {
            case 0:
                //Unknown
                break;
            case 13:
                //Enter
                break;
            case 9:
                //Tab
                break;
            case 17:
                //CTRL
                break;
            case 18:
                //ALT
                break;
            case 225:
                //ALTGR
                break;
            case 16:
                //Shift
                break;
            case 20:
                //Caps
                break;
            case 27:
                //Esc
                break;
            case 91:
                //META
                break;
            case 8:
                //Backspace
                var newText = currText.substr(0, currText.length-1);
                $(this).text(newText);
                break;
            case 37:
                //ARROW LEFT
                break;
            case 38:
                //ARROW UP
                break;
            case 39:
                //ARROW RIGHT
                break;
            case 40:
                //ARROW DOWN
                break;
            case 112:
                //F1
                break;
            case 113:
                //F2
                break;
            case 114:
                //F3
                break;
            case 115:
                //F4
                break;
            case 116:
                //F5
                break;
            case 117:
                //F6
                break;
            case 118:
                //F7
                break;
            case 119:
                //F8
                break;
            case 120:
                //F9
                break;
            case 121:
                //F10
                break;
            case 122:
                //F11
                break;
            case 123:
                //F12
                break;
            default:
                $(this).text(currText + e.key);
        }

    });
});
