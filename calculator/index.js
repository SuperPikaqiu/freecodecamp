$(document).ready(function () {
    var newFlag = true;

    $('.button-field button').on('click', function () {
        var value = $(this).val();
        var input = $('#result');
        var exp = input.val();
        var result;

        switch (value) {
            case 'AC':
                exp = '';
                break;
            case 'Del':
                if(!newFlag){
                    exp = exp.slice(0, exp.length - 1);
                }

                break;
            case '=':
                try {
                    exp = eval(exp);
                    newFlag = true;
                }
                catch (e) {

                }
                break;
            default:
                if (newFlag) {
                    exp = value;
                }
                else {
                    exp += value;
                }

                newFlag = false;

                break;
        }



        input.val(exp);
    })
});