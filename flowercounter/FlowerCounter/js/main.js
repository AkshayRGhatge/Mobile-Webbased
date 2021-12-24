$(document).ready(function () {
    let roseC = 0;
    let daisyC = 0;

    $("#sub").click(function () {

            if ($(`input[name=count]:checked`, `#data`).val() == "rose") {
                roseC++;
                $(`#roseCount`).html(roseC);

            } else if ($(`input[name=count]:checked`, `#data`).val() == "daisy") {
                daisyC++;
                $(`#daisiesCount`).html(daisyCC);

            }
        }
    );

});
