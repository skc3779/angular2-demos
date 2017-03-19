"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var UpperLower2Component = (function () {
    function UpperLower2Component() {
        this.str = "abcDEF";
    }
    UpperLower2Component = __decorate([
        core_1.Component({
            selector: 'app-upper-lower',
            template: "<div>    \n    <input [(ngModel)]=\"str\" type=\"text\">\n    <p>\uC18C\uBB38\uC790 : {{str | lowercase}}</p>\n    <p>\uB300\uBB38\uC790 : {{str | uppercase}}</p>\n  </div>"
        })
    ], UpperLower2Component);
    return UpperLower2Component;
}());
exports.UpperLower2Component = UpperLower2Component;
