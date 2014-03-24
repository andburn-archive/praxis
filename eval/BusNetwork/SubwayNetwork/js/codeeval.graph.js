codeeval.graph = (function() {

    var makeVertex = function(id, edges) {
        var vertex = Object.create(Object);
        vertex.id = id;
        vertex.edges = edges;
        return vertex;
    };

    var makeEdge = function(weight, vertex) {
        var edge;

        if (typeof vertex === 'undefined') {
            return;
        }
        edge = Object.create(Object);
        edge.weight = weight;
        edge.vertex = vertex;
        return edge;
    }

    return {
        makeVertex: makeVertex,
        makeEdge: makeEdge
    };

})();