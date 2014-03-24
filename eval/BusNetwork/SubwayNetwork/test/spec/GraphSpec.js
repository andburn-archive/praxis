describe('Graph Structure', function() {

    it('should be able to create an edge with a weight', function() {
        var e = codeeval.graph.makeEdge(12, "R1:1");
        expect(e.weight).toBe(12);
    });

    it('should not be able to create an edge with a negative weight', function() {
        var e = codeeval.graph.makeEdge(-3, "R2:1");
        expect(e).toBeUndefined();
    });

});

xdescribe('V1 Graph data structure', function() {

    var vertex, edge;

    beforeEach(function () {
        vertex = codeeval.graph.makeVertex(3, [edge]);
        edge = codeeval.graph.makeEdge(7, vertex);
    });

    it('should be able to create an edge with a weight and a vertex', function () {        
        expect(edge.weight).toBe(7);
        expect(edge.vertex).toEqual(vertex);
    });

    it('should not be able to create an edge without a vertex', function() {
        var e = codeeval.graph.makeEdge(4);
        expect(e).toBeUndefined();
    });

    it('should be able to create a vertex with an id and one or more edges', function () {
        expect(vertex.edges).toEqual([edge]);
    });

    it('should be able to create a vertex with id and no edges', function () {
        var v = codeeval.graph.makeVertex(3);
        expect(vertex).toBeTruthy();
        expect(v.edges).toBeUndefined();
    });

    it('should be able to access id value', function () {
        expect(vertex.id).toBe(3);
    });

});

