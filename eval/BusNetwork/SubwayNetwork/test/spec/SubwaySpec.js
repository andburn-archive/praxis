describe('Subway Network', function() {

    var graph;

    beforeEach(function() {
        codeeval.graph.empty();
        codeeval.graph.addVertex('R1:1', 1, 
            { weight: 7, vertexName: 'R1:2' }
        );
        codeeval.graph.addVertex('R1:2', 2,
            { weight: 7, vertexName: 'R1:3' }
        );
        codeeval.graph.addVertex('R1:2', 2,
            { weight: 7, vertexName: 'R1:1' }
        );
        codeeval.graph.addVertex('R1:3', 3, 
            { weight: 7, vertexName: 'R1:4' }
        );
        codeeval.graph.addVertex('R1:3', 3,
            { weight: 7, vertexName: 'R1:2' }
        );
        codeeval.graph.addVertex('R1:3', 3,
            { weight: 12, vertexName: 'R2:3' }
        );
        codeeval.graph.addVertex('R1:4', 4,
            { weight: 7, vertexName: 'R1:3' }
        );
        codeeval.graph.addVertex('R2:3', 3,
            { weight: 7, vertexName: 'R2:6' }
        );
        codeeval.graph.addVertex('R2:3', 3,
            { weight: 12, vertexName: 'R1:3' }
        );
        codeeval.graph.addVertex('R2:6', 6,
            { weight: 7, vertexName: 'R2:3' }
        );
        graph = codeeval.graph.getGraph();
    });

    it('should be able to find shortest path', function() {
        var i = codeeval.subway.findShortestPath(graph, 1, 6);
        expect(i).toBe(33);
    });

});