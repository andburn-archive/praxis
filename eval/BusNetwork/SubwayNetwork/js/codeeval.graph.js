codeeval.graph = (function() {

    var graph = {};
	
	// TODO: make this a general graph, and inherit

    var addVertex = function(name, id, edge) {
        if (!graph.hasOwnProperty(name)) {
            graph[name] = {
                id: id,
                edges: []
            };
        }
        graph[name].edges.push(edge);
        return graph[name];
    };

    var removeVertex = function(name) {
        if (graph.hasOwnProperty(name)) {
            return delete graph[name];
        } else {
            return false;
        }
    };

    var getVertex = function(name) {
        return graph[name];
    };

    var makeEdge = function(weight, vertex_name) {
        var edge;
        
        if ($.isNumeric(weight) && weight >= 0) {
            edge = Object.create(Object);
            edge.weight = weight;
            edge.vertexName = vertex_name;
        }
        
        return edge;
    };

    var empty = function() {
        graph = {};
    };

    var getGraph = function() {
        return graph;
    };


    var size = function() {
        var v, count = 0;
        for (v in graph) {
            count++;
        }
        return count;
    };

    return {
        addVertex: addVertex,
        makeEdge: makeEdge,
        empty: empty,
        removeVertex: removeVertex,
        getVertex: getVertex,
        getGraph: getGraph,
        size: size
    };

})();