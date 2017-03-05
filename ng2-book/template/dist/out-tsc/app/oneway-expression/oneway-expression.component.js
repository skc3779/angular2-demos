var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var OnewayExpressionComponent = (function () {
    function OnewayExpressionComponent() {
        this.greeting = "hello";
    }
    OnewayExpressionComponent = __decorate([
        Component({
            selector: 'app-oneway-expression',
            template: "\n  {{greeting}}<br>\n  <input type=\"text\" [value]=\"greeting\">\n  <input type=\"text\" bind-value=\"greeting\">\n  <input type=\"text\" [attr.value]=\"greeting\">"
        }), 
        __metadata('design:paramtypes', [])
    ], OnewayExpressionComponent);
    return OnewayExpressionComponent;
}());
//# sourceMappingURL=/Users/seokangchun/githubProjects/angular2-demos/ng2-book/template/src/app/oneway-expression/oneway-expression.component.js.map