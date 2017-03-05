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
export var TemplateReferenceVariablesComponent = (function () {
    function TemplateReferenceVariablesComponent() {
    }
    Object.defineProperty(TemplateReferenceVariablesComponent.prototype, "init", {
        get: function () {
            return { num1: 10, num2: 20 };
        },
        enumerable: true,
        configurable: true
    });
    TemplateReferenceVariablesComponent = __decorate([
        Component({
            selector: 'app-template-reference-variables',
            template: "\n  <input #num1 type=\"number\" value=\"{{init.num1}}\" (input)=\"0\">  + \n  <input #num2 type=\"number\" value=\"{{init.num2}}\" (input)=\"0\">\n  = {{num1.valueAsNumber + num2.valueAsNumber}}<br>\n\n  <input ref-number1 type=\"number\" value=\"{{init.num1}}\" (input)=\"0\">  + \n  <input ref-number2 type=\"number\" value=\"{{init.num2}}\" (input)=\"0\">\n  = {{number1.valueAsNumber + number2.valueAsNumber}}"
        }), 
        __metadata('design:paramtypes', [])
    ], TemplateReferenceVariablesComponent);
    return TemplateReferenceVariablesComponent;
}());
//# sourceMappingURL=/Users/seokangchun/githubProjects/angular2-demos/ng2-book/template/src/app/template-reference-variables/template-reference-variables.component.js.map