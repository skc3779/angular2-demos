"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Config = (function () {
    function Config() {
        this.walking = '쫄랑쫄랑';
    }
    return Config;
}());
exports.Config = Config;
var Dog = (function () {
    function Dog(config) {
        this.config = config;
    }
    Dog.prototype.walking = function () {
        return this.config.walking;
    };
    Dog.prototype.getName = function () {
        return "강아지";
    };
    Dog = __decorate([
        core_1.Injectable()
    ], Dog);
    return Dog;
}());
exports.Dog = Dog;
var Pet = (function (_super) {
    __extends(Pet, _super);
    function Pet(config) {
        _super.call(this, config);
        this.config = config;
    }
    Pet.prototype.run = function () {
        return this.config.walking;
    };
    Pet.prototype.getName = function () {
        return "애완견";
    };
    Pet = __decorate([
        core_1.Injectable()
    ], Pet);
    return Pet;
}(Dog));
exports.Pet = Pet;
