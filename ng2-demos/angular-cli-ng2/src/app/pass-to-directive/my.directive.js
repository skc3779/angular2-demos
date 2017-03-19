"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var myDirective = (function () {
    function myDirective(staticValue) {
        this.staticValue = staticValue;
    }
    myDirective.prototype.onMouseClick = function () {
        alert("속성 바인딩 값 : " + this._inputValue + "\n속성 값 : " + this.staticValue);
    };
    Object.defineProperty(myDirective.prototype, "inputValue", {
        set: function (status) {
            this._inputValue = status;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], myDirective.prototype, "inputValue", null);
    myDirective = __decorate([
        core_1.Directive({
            selector: '[myDirective]',
            host: {
                '(click)': 'onMouseClick()'
            }
        }),
        __param(0, core_1.Attribute('staticValue'))
    ], myDirective);
    return myDirective;
}());
exports.myDirective = myDirective;
