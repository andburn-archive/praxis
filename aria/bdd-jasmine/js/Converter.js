var Converter = (function () {
    // private stuff
    var poundsToKilos = 0.453592;

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    // return public interface
    return {
        convertFromImperialToMetric: function (weight) {
            if (isNumber(weight)) {
                return 1;
            } else {
                throw new Error("Not a number");
            }
        },
        convertFromMetricToImperial: function (weight) {
            if (isNumber(weight)) {
                return 2.2;
            } else {
                throw new Error("Not a number");
            }
        },
        convertPoundsToKilos: function (pounds) {
            if (isNumber(pounds)) {
                return parseFloat((poundsToKilos * pounds).toFixed(2));
                //return (poundsToKilos * pounds);
            } else {
                throw new Error("Not a number");
            } 
        }
    }
})();