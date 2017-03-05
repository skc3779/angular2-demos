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
var Country = (function () {
    function Country(code, name) {
        this.code = code;
        this.name = name;
    }
    return Country;
}());
export var TemplateInputVariablesComponent = (function () {
    function TemplateInputVariablesComponent() {
        this.Countries = [
            new Country(82, '대한민국'),
            new Country(1, '미국'),
            new Country(81, '일본')
        ];
    }
    TemplateInputVariablesComponent = __decorate([
        Component({
            selector: 'app-template-input-variables',
            template: "\n  <h3> \uAD6D\uAC00\uBC88\uD638 </h3>\n  <ul>\n    <li *ngFor=\"let country of Countries;let i=index;\">\n      {{ (i+1) + \" \" + country.name+\"(\"+country.code+\")\" }}\n    </li>\n  </ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], TemplateInputVariablesComponent);
    return TemplateInputVariablesComponent;
}());
//# sourceMappingURL=/Users/seokangchun/githubProjects/angular2-demos/ng2-book/template/src/app/template-input-variables/template-input-variables.component.js.map