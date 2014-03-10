$(document).ready(function () {

    $("#convert-value").blur(function () {
        getValues();
        console.log("value blur");
    });

    $("#convert-from").blur(function () {
        getValues();
        console.log("from blur");
    });

    $("#convert-to").blur(function () {
        getValues();
        console.log("to blur");
    });


    function getValues() {
        var to = $("#convert-to").val();
        var from = $("#convert-from").val();
        var value = $("#convert-value").val();

        if (to === from) {
            $("#converted-value").val(value);
            return;
        }

        if (from.toLowerCase() === "pounds") {
            if (to.toLowerCase() === "kilos") {
                $("#converted-value").val(converter.poundsToKilos(value));
            }
        } else if (from.toLowerCase() === "kilos") {
            if (to.toLowerCase() === "pounds") {
                $("#converted-value").val(converter.kilosToPounds(value));
            }
        }
    }

});