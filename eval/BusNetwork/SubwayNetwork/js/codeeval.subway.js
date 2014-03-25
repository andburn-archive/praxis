codeeval.subway = (function() {
	
	var network = {
		stopTime: 7,
		changeTime: 12		
	};

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

	function neighbourDistance(graph, u, v) {
	    var edges = graph[u].edges;
	    for (var i = 0; i <= edges.length; i++) {
	        if (v === edges[i].vertexName) {
	            return edges[i].weight;
	        }
	    }
	    return Infinity;
	}

	var findShortestPath = function(graph, start, finish) {
	    //function dijkstra(source, target) {
	    var i, j, u, v, alt, currentRoute, graphSize, re,
            distance = {},
            previous = [],
            queue = [];
	    
	    // first get start and finish vertices
	    var starts = [];
	    var ends = [];
	    re = new RegExp('^[A-Za-z0-9]+:' + start);
	    console.log(re);
	    for (v in graph) {
	        if (v.match(re)) {
	            console.log('start: ' + v);
	            starts.push(v);
	        }
	    }
	    re = new RegExp('^[A-Za-z0-9]+:' + finish);
	    v = undefined;
	    for (v in graph) {
	        if (v.match(re)) {
	            console.log('end: ' + v);
	            ends.push(v);
	        }
	    }

	    i = 0, v = undefined;
        for (v in graph) {
	        distance[v] = Infinity;
	        previous[i] = undefined;
	        queue.push(v);
	        i++;
        }
        distance[start] = 0;

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
	        var children = graph[u].edges; // should be neighbours
	        console.log(queue);
	        console.log(children);

	        for (var c = 0; c < children.length; c++) {
	            if (findInQueue(queue, children[c].vertexName) != -1) {
	                var v = children[c].vertexName;
	                alt = distance[u] + neighbourDistance(graph, u, v);
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
	};
	
	return {
        findShortestPath: findShortestPath
	};

})();