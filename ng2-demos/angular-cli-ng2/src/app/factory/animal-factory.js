"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var animal_1 = require('./animal');
//팩토리패턴
var Factory = (function () {
    function Factory() {
    }
    // 객체 생성방법 결정
    Factory.prototype.create = function () {
        return this.careteAnimal(new animal_1.Config());
    };
    return Factory;
}());
var AnimalFactory = (function (_super) {
    __extends(AnimalFactory, _super);
    function AnimalFactory() {
        _super.apply(this, arguments);
    }
    // 객체 설정방법 결정
    AnimalFactory.prototype.careteAnimal = function (config) {
        config.bark = "야옹야옹";
        config.name = "고양이";
        return new animal_1.Animal(config);
    };
    return AnimalFactory;
}(Factory));
exports.AnimalFactory = AnimalFactory;
function mainFactory() {
    var myAnimal = (new AnimalFactory()).create();
    return myAnimal;
}
exports.mainFactory = mainFactory;
