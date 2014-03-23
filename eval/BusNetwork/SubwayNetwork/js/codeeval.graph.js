codeeval.graph = (function() {

    var makeVertex = function (id, edges) {
        var vertex = Object.create(Object);
        vertex.id = id;
        vertex.edges = edges;
        return vertex;
    };

    return {
        makeVertex: makeVertex
    };

})();