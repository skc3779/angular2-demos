"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SuperPowerEngine = (function () {
    function SuperPowerEngine() {
        this.name = "슈퍼엔진";
        this.description = '세계 최고의 성능을 자랑하는 슈퍼엔진';
    }
    SuperPowerEngine = __decorate([
        core_1.Injectable()
    ], SuperPowerEngine);
    return SuperPowerEngine;
}());
exports.SuperPowerEngine = SuperPowerEngine;
