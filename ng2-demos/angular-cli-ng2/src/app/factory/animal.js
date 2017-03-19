"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Config = (function () {
    function Config() {
        this.bark = '어흥';
        this.name = '사자';
    }
    return Config;
}());
exports.Config = Config;
var Animal = (function () {
    function Animal(config) {
        this.config = config;
    }
    Animal.prototype.getBark = function () {
        return this.config.bark;
    };
    Animal.prototype.getAnimalName = function () {
        return this.config.name;
    };
    Animal = __decorate([
        core_1.Injectable()
    ], Animal);
    return Animal;
}());
exports.Animal = Animal;
