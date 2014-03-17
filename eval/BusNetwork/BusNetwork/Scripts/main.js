$(document).ready(function () {
    $("#btn_start").on("click", function (event) {
        event.preventDefault();
        var textin = $("#textin").text();
        console.log(textin);
        $("#textout").html(textin);
    });
	// what happens next
	
	// need to get schedule via text box
	
	// generate route map
});