var busroute = (function () {
    
    var timeBetweenStops = 7;
    var timeToChangeBus = 12;

    return {
        newRoute: function (name, stops) {
            return {
                stops: "[1,2,3,4]",
                name: "R3"
            }
        }        
    }

})();

// http://www.mojavelinux.com/articles/javascript_hashes.html
// http://blog.xkoder.com/2008/07/10/javascript-associative-arrays-demystified/