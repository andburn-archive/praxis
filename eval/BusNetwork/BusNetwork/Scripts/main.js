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
                    var start = match[1];
                    var finish = match[2];                 
                } else {
                    // must be a route
                    console.log("added " + parts[p])
                    busnetwork.addRoute(parts[p]);
                }
            }
            // find a route from start to finish
            var first = busnetwork.getStop(start);
            var a = [first], temp = [];
            for (var i = 0; i <= a.length; i++) {
                if (a[i] == undefined) {
                    console.log("end of branch");
                } else if (a[i].id == finish) {
                    // we're done
                    console.log("done " + a[i]);
                } else {
                    
                }
            }
        }
        $("#textout").html(textin);
    });

});