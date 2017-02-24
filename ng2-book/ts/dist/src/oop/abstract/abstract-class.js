var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SmallAnimals = (function () {
    function SmallAnimals() {
    }
    SmallAnimals.prototype.makeSound = function () {
        return this.name() + " : " + this.sound() + " ";
    };
    return SmallAnimals;
}());
var Mouse = (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouse.prototype.sound = function () {
        return "peep peep~";
    };
    Mouse.prototype.name = function () {
        return "mouse";
    };
    return Mouse;
}(SmallAnimals));
var mouse = new Mouse();
console.log(mouse.makeSound());
//# sourceMappingURL=abstract-class.js.map