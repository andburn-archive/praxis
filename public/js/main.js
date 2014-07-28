var map;

var initMap = function() {
    var key = "AgUpD8p1gYE25hd1f0NnVt6hu_Y8wNDx37h8rY09UqLpQlNnjFMTs-IZgdYraiuq";
    map = new Microsoft.Maps.Map(
        document.getElementById("map-container"),
        {
            credentials: key,
            center: new Microsoft.Maps.Location(53.35, -6.26),
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            zoom: 15,
            enableClickableLogo: false,
            enableSearchLogo: false,
            showDashboard: false,
            showCopyright: true,
            showScalebar: false
        }
    );
};

var initGeoLoc = function() {

    if (navigator.geolocation) {
        watchGeo();
    } else {
        alert('Geolocation is not supported in your browser');
    }
};

var watchGeo = function() {
    var optns = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    };

    navigator.geolocation.watchPosition(function(position) {
        var loc = new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude);

        map.entities.clear();
        map.entities.push(new Microsoft.Maps.Pushpin(loc));
        //console.log("new watch update");
    }, errorCase, optns);
};

var errorCase = function(err) {
    alert('ERROR(' + err.code + '): ' + err.message);
    //console.log("new watch update - failed");
};
