var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Car = (function () {
    function Car(name, numTier) {
        this.name = name;
        this.numTier = numTier;
    }
    Car.prototype.getName = function () {
        return this.name;
    };
    Car.prototype.getTier = function () {
        return this.numTier;
    };
    return Car;
}());
var SuperCar = (function (_super) {
    __extends(SuperCar, _super);
    function SuperCar(name, numTier) {
        var _this = _super.call(this, name, numTier) || this;
        _this.name = name;
        _this.numTier = numTier;
        return _this;
    }
    SuperCar.prototype.getIncreaseTier = function () {
        return this.getTier() + 10;
    };
    return SuperCar;
}(Car));
var mySuperCar = new SuperCar("MySuperCar", 5);
console.log(mySuperCar.getTier());
console.log(mySuperCar.getIncreaseTier());
//console.log(mySuperCar.getName()); // 에러!
/*
주석 해제 후 테스트
*/ 
//# sourceMappingURL=extends.js.map