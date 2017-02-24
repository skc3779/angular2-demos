var BlueBird = (function () {
    function BlueBird(leg, wing) {
        this.leg = leg;
        this.wing = wing;
    }
    BlueBird.prototype.getNumWing = function () {
        return this.wing;
    };
    return BlueBird;
}());
var myBlueBird = new BlueBird(2, 2);
console.log("파랑새의 날개 : " + myBlueBird.getNumWing() + "개");
//# sourceMappingURL=interface-implements.js.map