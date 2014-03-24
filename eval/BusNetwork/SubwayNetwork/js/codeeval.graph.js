codeeval.graph = (function() {

    var graph = {};

    var addVertex =  function(name, id, edges) {
        graph[name] = {
            id: id,
            edges: edges
        };
    };

    var makeVertex = function(id, edges) {
        var vertex = Object.create(Object);
        vertex.id = id;
        vertex.edges = edges;
        return vertex;
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

    return {
        makeVertex: makeVertex,
        makeEdge: makeEdge
    };

})();