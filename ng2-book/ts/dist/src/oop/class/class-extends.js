var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name, leg) {
        this.name = name;
        this.leg = leg;
    }
    Animal.prototype.getLeg = function () {
        return this.leg;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var Monkey = (function (_super) {
    __extends(Monkey, _super);
    function Monkey(name, leg) {
        return _super.call(this, name, leg) || this;
    }
    Monkey.prototype.isClimbing = function () {
        return true;
    };
    Monkey.prototype.superGetName = function () {
        return _super.prototype.getName.call(this);
    };
    return Monkey;
}(Animal));
var monkey = new Monkey("Lemur", 2);
console.log("원숭이 이름 : " + monkey.name);
console.log("나무타기 가능 여부 : " + monkey.isClimbing());
console.log("다리개수 : " + monkey.getLeg());
console.log("상위 클래스의 메서드 호출 : " + monkey.superGetName());
//# sourceMappingURL=class-extends.js.map