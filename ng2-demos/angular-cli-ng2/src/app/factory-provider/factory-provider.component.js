"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var car_service_provider_1 = require('./car.service.provider');
var FactoryProviderComponent = (function () {
    function FactoryProviderComponent(carService) {
        this.carService = carService;
    }
    FactoryProviderComponent = __decorate([
        core_1.Component({
            selector: 'app-factory-provider',
            template: "\n  <div>\uC5D4\uC9C4\uC774\uB984 : {{carService.engine.name}}</div>\n  <div>\uD604\uC7AC\uC18D\uB3C4 : {{carService.speedmeter.speed}} km/h</div>\n  <div>\uCD5C\uB300\uC18D\uB3C4 : {{carService.speedmeter.maxSpeed}} km/h</div>",
            providers: [car_service_provider_1.FactoryProvider]
        })
    ], FactoryProviderComponent);
    return FactoryProviderComponent;
}());
exports.FactoryProviderComponent = FactoryProviderComponent;
