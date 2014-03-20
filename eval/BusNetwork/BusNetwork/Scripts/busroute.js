var busnetwork = (function () {
    
    var timeBetweenStops = 7;
    var timeToChangeBus = 12;
    var network = [];

    function addStop(stop, connections) {
        if (network[stop] == undefined) {
            network[stop] = [connections];            
        } else {
            network[stop].push(connections);
        }
        // a undefined value in connections => terminus
        // TODO: should only have one undefined in connections!
    }

    return {        
        addRoute: function (route) {
            console.log("in: " + route);
            var pieces = route.split("=");
            var route = pieces[0];
            var stops = eval(pieces[1]);
            var i = 0;
            for (i = 0; i < stops.length; i++) {
                if ((i + 1) >= stops.length)  {
                    // at end stop
                    addStop(stops[i]);
                    console.log("adding " + stops[i])
                } else {
                    // normal stop
                    addStop(stops[i], { id: stops[i + 1], route: route });
                    console.log("adding " + stops[i] + " to " + stops[i + 1]);
                }
            }
        },
        getStop: function(stop) {
            return network[stop];
        },
        reset: function () {
            network = [];
        }
    }

})();
