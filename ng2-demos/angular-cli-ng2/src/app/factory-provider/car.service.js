"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Engine = (function () {
    function Engine() {
    }
    Engine = __decorate([
        core_1.Injectable()
    ], Engine);
    return Engine;
}());
exports.Engine = Engine;
var Speedmeter = (function () {
    function Speedmeter() {
    }
    Speedmeter = __decorate([
        core_1.Injectable()
    ], Speedmeter);
    return Speedmeter;
}());
exports.Speedmeter = Speedmeter;
var CarService = (function () {
    function CarService(speedmeter, engine) {
        this.speedmeter = speedmeter;
        this.engine = engine;
    }
    CarService = __decorate([
        core_1.Injectable()
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
