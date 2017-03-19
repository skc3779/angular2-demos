"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TaxiComponent = (function () {
    function TaxiComponent(s) {
        this.s = s;
    }
    TaxiComponent = __decorate([
        core_1.Component({
            selector: 'taxi-component',
            template: "taxi \uCEF4\uD3EC\uB10C\uD2B8 : {{ s.message}} <button (click)=\"s.message='taxi'\">\uC120\uD0DD</button>"
        })
    ], TaxiComponent);
    return TaxiComponent;
}());
exports.TaxiComponent = TaxiComponent;
