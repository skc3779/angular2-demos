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
        this._defaultColor = '#F1F1F1';
        this.el = el.nativeElement;
        this.el.style.fontSize = "30px";
        this.el.style.padding = "10px";
    }
    Object.defineProperty(HighlightDirective.prototype, "defaultColor", {
        set: function (colorName) {
            this._defaultColor = colorName || this._defaultColor;
        },
        enumerable: true,
        configurable: true
    });
    HighlightDirective.prototype.highlight = function (color) {
        this.el.style.backgroundColor = color;
        this.el.style.fontWeight = 'bold';
        this.el.style.border = "2px dotted red";
    };
    HighlightDirective.prototype.onMouseEnter = function () { this.highlight(this.highlightColor || this._defaultColor); };
    HighlightDirective.prototype.onMouseLeave = function () { this.highlight(null); };
    HighlightDirective.prototype.onMouseMove = function () {
        var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        console.log(randomColor + ",");
        this.el.style.color = randomColor;
    };
    __decorate([
        core_1.Input()
    ], HighlightDirective.prototype, "defaultColor", null);
    __decorate([
        core_1.Input('highlight')
    ], HighlightDirective.prototype, "highlightColor", void 0);
    __decorate([
        core_1.HostListener('mouseenter')
    ], HighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave')
    ], HighlightDirective.prototype, "onMouseLeave", null);
    __decorate([
        core_1.HostListener('mousemove')
    ], HighlightDirective.prototype, "onMouseMove", null);
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[highlight]'
        })
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
