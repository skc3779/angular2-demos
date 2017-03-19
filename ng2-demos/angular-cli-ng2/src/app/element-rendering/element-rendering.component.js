"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var MyElementRef = (function () {
    function MyElementRef(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.el.nativeElement.style.backgroundColor = 'orange';
    }
    MyElementRef = __decorate([
        core_2.Directive({ selector: '[my-elment-ref]' })
    ], MyElementRef);
    return MyElementRef;
}());
exports.MyElementRef = MyElementRef;
var MyRenderer = (function () {
    function MyRenderer(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        renderer.setElementStyle(el.nativeElement, 'background', 'aqua');
    }
    MyRenderer = __decorate([
        core_2.Directive({ selector: '[my-renderer]' })
    ], MyRenderer);
    return MyRenderer;
}());
exports.MyRenderer = MyRenderer;
var ElementRendering = (function () {
    function ElementRendering() {
    }
    ElementRendering = __decorate([
        core_1.Component({
            selector: 'app-element-rendering',
            template: "\n  <div my-elment-ref>1. nativeElement \uBC29\uC2DD</div>\n  <div my-renderer>2. Renderer \uBC29\uC2DD </div>"
        })
    ], ElementRendering);
    return ElementRendering;
}());
exports.ElementRendering = ElementRendering;
