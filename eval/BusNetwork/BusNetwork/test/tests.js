/*test("create bus stop", function () {
    var stop = busnetwork.addstop("3", [{id: 2, route: "r3"}, { id: 9, route: "r4" }]);
    var expected = [{id: 2, route: "r3"}, {id: 9, route: "r4"}];
    deepequal(stop, expected);
});*/

test("create bus route", function () {
    busnetwork.addRoute("R2=[5,6,4]");
    var five = busnetwork.getStop(6);
    var expected = [{ id: 4, route: "R2" }];
    deepEqual(five, expected);
});

test("create intersect route", function () {
    busnetwork.addRoute("R3=[1,6,2]");
    var five = busnetwork.getStop(6);
    var expected = [{ id: 4, route: "R2" }, { id: 2, route: "R3" }];
    deepEqual(five, expected);
});