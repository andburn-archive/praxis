$(document).ready(function () {

    
    $("#btn_start").on("click", function (event) {
        event.preventDefault();
        var textin = $("#textin").val().split("\n");
        for (var line in textin) {
            console.log(textin[line] + "<<")
            var parts = textin[line].split("; ");
            // new line => new routing problem
            busnetwork.reset();
            for (var p in parts) {
                console.log(parts[p]);
                var match = /\((\d+),(\d+)\)/.exec(parts[p]);
                if (match != null) {
                    // this is the start end stops
                    console.log("found " + match[1] + match[2]);
                    var start = parseInt(match[1]);
                    var finish = parseInt(match[2]);
                } else {
                    // must be a route
                    console.log("added " + parts[p])
                    busnetwork.addRoute(parts[p]);
                }
            }
            busnetwork.displayNetwork();
            // find a route from start to finish
            //busnetwork.planJourney(start, finish);
            busnetwork.dijkstra(start, finish);
        }
        $("#textout").html(textin);
    });

});