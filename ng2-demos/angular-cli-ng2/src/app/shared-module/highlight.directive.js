"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el.nativeElement;
        this.el.style.fontSize = "30px";
    }
    HighlightDirective.prototype.onMouseMove = function () {
        this.el.style.backgroundColor = "red";
        this.el.style.color = "white";
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.el.style.backgroundColor = null;
        this.el.style.color = "black";
    };
    __decorate([
        core_1.HostListener('mousemove')
    ], HighlightDirective.prototype, "onMouseMove", null);
    __decorate([
        core_1.HostListener('mouseleave')
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[highlight]'
        })
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
