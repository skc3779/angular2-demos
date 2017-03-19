"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BindingToDirectiveComponent = (function () {
    function BindingToDirectiveComponent() {
        this.msg = "행복한 하루되세요";
        this.msgDirective = "없음";
    }
    BindingToDirectiveComponent.prototype.outputEvent = function (msg) {
        this.msgDirective = msg;
    };
    BindingToDirectiveComponent = __decorate([
        core_1.Component({
            selector: 'app-binding-to-directive',
            template: "    \n  <input type=\"text\" [(ngModel)]=\"msg\">\n  <button alertMsg [inputValue]=\"msg\" (outputProperty)=\"outputEvent($event)\" staticValue=\"\uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBCF4\uB0B8 \uBA54\uC2DC\uC9C0\">\uC778\uC0AC\uB9D0 \uCD9C\uB825</button>\n  <div>{{msgDirective|json}}</div>"
        })
    ], BindingToDirectiveComponent);
    return BindingToDirectiveComponent;
}());
exports.BindingToDirectiveComponent = BindingToDirectiveComponent;
