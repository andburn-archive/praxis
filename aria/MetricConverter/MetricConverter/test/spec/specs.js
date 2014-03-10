describe("Metric Converter", function () {
    it("should convert pounds to kilos", function () {
        expect(converter.poundsToKilos(150)).toBe(68.04)
    })
    it("should convert kilos to pounds", function () {
        expect(converter.kilosToPounds(25)).toBe(55.12)
    })
    /*it("should be able to deal with strings", function () {
        expect(function () {
            Converter.convertFromImperialToMetric("hello")
        }).toThrow(new Error("Not a number"));
    })*/    
})