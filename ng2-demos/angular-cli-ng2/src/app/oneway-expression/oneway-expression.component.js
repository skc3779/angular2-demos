"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var OnewayExpressionComponent = (function () {
    function OnewayExpressionComponent() {
        this.greeting = "hello";
    }
    OnewayExpressionComponent = __decorate([
        core_1.Component({
            selector: 'app-oneway-expression',
            template: "\n  <h3>\uBC14\uC778\uB529 \uB2E8\uBC29\uD5A5 \uBC14\uC778\uB529 \uD45C\uD604\uC2DD</h3>\n  {{greeting}}<br>\n  <input type=\"text\" [value]=\"greeting\">\n  <input type=\"text\" bind-value=\"greeting\">\n  <input type=\"text\" [attr.value]=\"greeting\">"
        })
    ], OnewayExpressionComponent);
    return OnewayExpressionComponent;
}());
exports.OnewayExpressionComponent = OnewayExpressionComponent;
