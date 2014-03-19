test("create bus stop", function () {
    var route = busroute.newRoute("R3", "[1,2,3,4]");
    ok(route.name == "R3", "Passed!");
    ok(route.stops == "[1,2,3,4]", "Passed!");
});