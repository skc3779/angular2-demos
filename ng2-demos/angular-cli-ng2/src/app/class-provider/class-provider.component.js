"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var super_power_engine_service_1 = require('./super-power-engine.service');
var engine_service_1 = require('./engine.service');
var ClassProviderComponent = (function () {
    function ClassProviderComponent(engine, spEngine) {
        this.engine = engine;
        this.spEngine = spEngine;
        if (engine === spEngine) {
            this.result = "두 객체는 동일 객체입니다.";
            throw new Error('Error');
        }
        else {
            this.result = "두 객체는 다른 객체입니다.";
        }
    }
    ClassProviderComponent = __decorate([
        core_1.Component({
            selector: 'app-class-provider',
            template: "\n  {{engine.name}}<br>\n  {{spEngine.name}}<br>\n  {{result}}",
            providers: [super_power_engine_service_1.SuperPowerEngine, { provide: engine_service_1.Engine, useClass: super_power_engine_service_1.SuperPowerEngine }]
        })
    ], ClassProviderComponent);
    return ClassProviderComponent;
}());
exports.ClassProviderComponent = ClassProviderComponent;
