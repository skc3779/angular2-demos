"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CustomAttrDirective = (function () {
    function CustomAttrDirective(el) {
        this.el = el.nativeElement;
        this.el.style.padding = "10px";
    }
    Object.defineProperty(CustomAttrDirective.prototype, "myfontsize", {
        set: function (status) {
            this.el.style.fontSize = status;
        },
        enumerable: true,
        configurable: true
    });
    CustomAttrDirective.prototype.onMouseEnter = function () {
        this.el.style.backgroundColor = this.myBackground;
    };
    CustomAttrDirective.prototype.onMouseLeave = function () {
        this.el.style.backgroundColor = null;
    };
    __decorate([
        core_1.Input('mystyle')
    ], CustomAttrDirective.prototype, "myBackground", void 0);
    __decorate([
        core_1.Input()
    ], CustomAttrDirective.prototype, "myfontsize", null);
    __decorate([
        core_1.HostListener('mouseenter')
    ], CustomAttrDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave')
    ], CustomAttrDirective.prototype, "onMouseLeave", null);
    CustomAttrDirective = __decorate([
        core_1.Directive({
            selector: '[mystyle],[myfontsize]'
        })
    ], CustomAttrDirective);
    return CustomAttrDirective;
}());
exports.CustomAttrDirective = CustomAttrDirective;
