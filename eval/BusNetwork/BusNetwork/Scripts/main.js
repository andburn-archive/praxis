$(document).ready(function () {

    
    $("#btn_start").on("click", function (event) {
        event.preventDefault();
        var textin = $("#textin").val().split("\n");
        for (var line in textin) {
            console.log(textin[line] + "<<")
            var parts = textin[line].split("; ");
            for (var p in parts) {
                console.log("(" + parts[p] + ")");
                // now need to make a route object
            }
        }
        $("#textout").html(textin);
    });

});