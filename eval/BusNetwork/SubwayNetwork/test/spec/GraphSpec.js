describe('Graph data structure', function () {

    var vertex;

    beforeEach(function () {
        var v = codeeval;
        vertex = codeeval.graph.makeVertex(3, 2);
    });

    it('should be able to create a vertex with id and edges', function () {
        expect(vertex).toBeTruthy();
    });

    it('should be able to access id value', function () {
        expect(vertex.id).toBe(3);
    });

});