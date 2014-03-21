var busnetwork = (function () {
    
    var timeBetweenStops = 7;
    var timeToChangeBus = 12;
    var network = [];

    function addStop(stop, connections) {
        //console.log("addStop: call(" + stop + ", [" + connections.id + ", " + connections.route + "])");
        // first time stop has been seen
        if (network[stop] == undefined) {            
            network[stop] = [];
            console.log("addStop: new stop (" + stop + ")");
        }
        // terminal stop
        if (connections == undefined) {            
            // check hasn't already been set as a terminal
            // and that it doesn't have any other connections
            console.log("addStop: (" + stop + ") no connections found");
            if (network[stop].length <= 0) {
                // no connections, add terminal
                network[stop].push({ id: 0, route: null });
                console.log("addStop: (" + stop + ") adding terminal connection");
            }            
        } else {
            network[stop].push(connections);
            console.log("addStop: (" + stop + ") adding connections [" +
                connections.id + ", " + connections.route + "])");
            // check hasn't been set previously
            var duplicateIndex = -1;
            for (var i = 0; i < network[stop].length; i++) {
                for (var j = 0; j < network[stop].length; j++) {
                    if (i === j) { continue; }
                    if (network[stop][i].id === network[stop][j].id) {
                        duplicateIndex = i;
                        break;
                    }
                }
            }
            if (duplicateIndex >= 0) {
                // remove terminal entry
                network[stop].splice(duplicateIndex, 1);
                console.log("addStop: (" + stop + ") has been set as terminal, removing");
            }
            
        }
    }

    function displayNetwork() {
        var i, j, temp, stops = network.length;
        console.log("Network has " + stops + " stops.");
        for (i = 0; i < stops; i++) {
            if (network[i] != undefined) {
                temp = "";
                for (j = 0; j < network[i].length; j++) {
                    if (network[i][j] == undefined) {
                        console.log("displayNetwork: somehow have an undefined connection!");
                    } else {
                        temp += network[i][j].route + "->" + network[i][j].id + ", ";
                    }
                }
                console.log(i + ": " + temp)
            }
        }
    }

    function shortestDist(q, dist) {
        var i, min = Infinity, idx = -1;
        for (i = 0; i < q.length; i++) {
            if (dist[q[i]] <= min) {
                min = dist[q[i]];
                idx = q[i];
            }
        }
        return idx;
    }

    function findInQueue(q, e) {
        for (var i = 0; i < q.length; i++) {
            if (q[i] == e) {
                return i;
            }
        }
        return -1;
    }

    function distanceBetween(a, b, route) {

        if (route == undefined) {
            return timeBetweenStops;
        }
        
        for (var i = 0; i < network[a].length; i++) {
            if (network[a][i].id == b) {
                var takenRoute = network[a][i].route;
            }
        }

        if (route == takenRoute) {
            return timeBetweenStops;
        } else {
            return timeToChangeBus;
        }
    }

    function dijkstra(source, target) {
        var i, j, u, alt, currentRoute,
            distance = [],
            previous = [],
            queue = [];

        for (i = 0; i < network.length; i++) {
            if (network[i] != undefined) {
                distance[i] = Infinity;
                previous[i] = undefined;
                queue.push(i);
            }
            distance[source] = 0;
        }

        while (queue.length > 0) {
            u = shortestDist(queue, distance);
            console.log("u: " + u);
            for (j = 0; j < queue.length; j++) {
                if (queue[j] == u) {
                    queue.splice(j, 1);
                }
            }
            if (distance[u] == Infinity) {
                console.log("infinity check triggered on " + u);
                break;
            }
            var children = network[u]; // should be neighbours
            for (var c = 0; c < children.length; c++) {
                if (findInQueue(queue, children[c].id) != -1) {
                    var v = children[c].id;                    
                    alt = distance[u] + distanceBetween(u, v, currentRoute);
                    console.log("v: " + v + ", alt: " + alt);
                    if (alt < distance[v]) {
                        distance[v] = alt;
                        previous[v] = u;
                        // reorder queue, nah!
                    }
                }
            }
        }
        for (var d = 0; d < distance.length; d++) {
            console.log(d + ": " + distance[d]);
        }
        return distance;
    }

    function calcStop(stop, goal, route, time, tabs) {
        var tabspaces = "";
        for (var x = 0; x < tabs; x++) { tabspaces += "\t"; }
        console.log("calcStop: " + tabspaces + "call(" + stop + ", " + goal + ")");
        if (network[stop] == undefined) {
            // fucked up!
            console.log("calcStop: " + tabspaces + "(" + stop + ", " + goal + ") crap! undefined.");
            return -1;
        } else if (stop == goal) {
            console.log("calcStop: " + tabspaces + "(" + stop + ", " + goal + ") route.");
            return time;
        } else {
            for (var i = 0; i < network[stop].length; i++) {
                if (network[stop][i].id == 0) {
                    console.log("calcStop: " + tabspaces + "(" + stop + ", " + goal + ") got terminus.");
                    if (network[stop].length > 1) {
                        console.log("addStop: " + tabspaces + "(" + stop + ") crap! terminal with len > 1");
                    }
                    return -1;
                }
            }
            // now for recursion
            for (var j = 0; j < network[stop].length; j++) {
                var newRoute = network[stop][j].route;
                var newtime = time;
                if (route == undefined) {
                    // do nothing
                } else if (route == newRoute) {
                    newtime += timeToChangeBus;
                } else {
                    newtime += timeBetweenStops;
                }
                var r = calcStop(network[stop][j].id, goal, newRoute, newtime, tabs + 1);
                console.log("ret: " + r);
            }
        }
    }

    function planJourney(start, finish) {
        // first check points exist on network
        if (network[start] == undefined || network[finish] == undefined) {
            return "None";
        }
        var timecalc = calcStop(start, finish, undefined, 0, 0);
        console.log("rec: " + timecalc);
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
                    addStop(parseInt(stops[i]));
                    console.log("adding " + stops[i])
                } else {
                    // normal stop
                    addStop(parseInt(stops[i]), { id: parseInt(stops[i + 1]), route: route });
                    console.log("adding " + stops[i] + " to " + stops[i + 1]);
                    if ((i - 1) >= 0) {
                        // normal stop
                        addStop(parseInt(stops[i]), { id: parseInt(stops[i - 1]), route: route });
                        console.log("adding " + stops[i] + " to " + stops[i - 1]);
                    }
                }
            }
        },
        getStop: function(stop) {
            return network[stop];
        },
        reset: function () {
            network = [];
        },
        planJourney: planJourney,
        displayNetwork: displayNetwork,
        shortestDist: shortestDist,
        dijkstra: dijkstra
    }

})();
