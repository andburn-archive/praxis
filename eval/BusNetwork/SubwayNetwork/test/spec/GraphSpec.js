describe('Graph Structure', function() {

    beforeEach(function() {
        codeeval.graph.empty();
    });

    it('should be able to create an edge with a weight and endpoint', function() {
        var e = codeeval.graph.makeEdge(12, "R1:1");
        expect(e.weight).toBe(12);
        expect(e.vertexName).toBe("R1:1");
    });

    it('should not be able to create an edge with a negative weight', function() {
        var e = codeeval.graph.makeEdge(-3, "R2:1");
        expect(e).toBeUndefined();
    });

    it('should be able to add a vertex to the graph', function() {
        var v = codeeval.graph.addVertex("R2:1", 1,
            codeeval.graph.makeEdge(12, "R1:1"));
        expect(v.id).toBe(1);
    });

    it('should be able to delete a vertex from a graph', function() {
        var v = codeeval.graph.addVertex("R2:1", 1,
            codeeval.graph.makeEdge(12, "R1:1"));
        expect(codeeval.graph.removeVertex("R2:1")).toBeTruthy();
    });

    it('already has a vertex should be able to add a new edge to it', function() {
        var v1 = codeeval.graph.addVertex("R2:1", 1,
            codeeval.graph.makeEdge(12, "R1:1"));
        var v2 = codeeval.graph.addVertex("R2:1", 1,
            codeeval.graph.makeEdge(7, "R2:3"));
        var v = codeeval.graph.getVertex("R2:1");
        // not robust enough order of addition would matter
        expect(v.edges).toEqual([
            { weight: 12, vertexName: 'R1:1' },
            {weight: 7, vertexName: 'R2:3'}
        ]);
    });

    it('should be able to get the number of vertices', function() {
        expect(codeeval.graph.size()).toBe(0);
        var v = codeeval.graph.addVertex("R2:1", 1,
            codeeval.graph.makeEdge(12, "R1:1"));
        expect(codeeval.graph.size()).toBe(1);
    });

});
