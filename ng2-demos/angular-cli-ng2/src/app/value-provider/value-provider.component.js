"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var value_provider_1 = require('./value.provider');
var ValueProviderComponent = (function () {
    function ValueProviderComponent(config) {
        this.config = config;
    }
    ValueProviderComponent = __decorate([
        core_1.Component({
            selector: 'app-value-provider',
            template: "<div>\uC11C\uBE44\uC2A4\uBA85 : {{config.serviceName}}</div>\n  <div>\uD68C\uC6D0\uB4F1\uAE09 : {{config.grade|json}}</div>\n  <div>\uC815\uBCF4 : <span [innerHTML]=\"config.getInfo()\"></span></div>",
            providers: [value_provider_1.ValueProvider]
        })
    ], ValueProviderComponent);
    return ValueProviderComponent;
}());
exports.ValueProviderComponent = ValueProviderComponent;
