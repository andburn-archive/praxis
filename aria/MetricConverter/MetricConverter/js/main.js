var converter = (function () {

    // private
    var kilosInPounds = 0.453592;
    var poundsInKilos = 2.20462;

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function convert(value, conversion) {
        var converted = 0;
        if (isNumber(value)) {
            converted = value * conversion;
            return parseFloat(converted.toFixed(2));
        } else {
            throw new Error("Not a number");
        }
    }

    // public 'interface'
    return {
        poundsToKilos: function (pounds) {
            return convert(pounds, kilosInPounds);
        },
        kilosToPounds: function (kilos) {
            return convert(kilos, poundsInKilos);
        }
    }
})();