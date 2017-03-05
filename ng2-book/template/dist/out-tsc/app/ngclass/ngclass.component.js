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
export var NgclassComponent = (function () {
    function NgclassComponent() {
        this.isActive = false;
        this.myclass = "active";
    }
    NgclassComponent = __decorate([
        Component({
            selector: 'app-ngclass',
            template: "\n  <button class=\"button\" [ngClass]=\"{active: isActive}\"\n  (click)=\"isActive=!isActive;\">{{isActive?'\uD65C\uC131\uD654':'\uBE44 \uD65C\uC131\uD654'}}</button><br>\n\n  <button [ngClass]=\"myclass\">\uBC84\uD2BC1</button>\n  <button [ngClass]=\"'active'\">\uBC84\uD2BC2</button>\n  <button bind-ngClass=\"myclass\">\uBC84\uD2BC3</button><br>\n\n  <button [attr.class]=\"myclass\">\uBC84\uD2BC4</button>\n  <button [class.active]=\"true\">\uBC84\uD2BC5</button>\n  ",
            styles: ["\n  button {\n      width: 100px; padding: 10px;\n      margin-bottom: 10px;\n      text-align:center;   \n      border: 1px dotted #666;           \n  }\n  button.active {\n      background-color: #CFD7EB; border: 1px solid #666;\n  }"]
        }), 
        __metadata('design:paramtypes', [])
    ], NgclassComponent);
    return NgclassComponent;
}());
//# sourceMappingURL=/Users/seokangchun/githubProjects/angular2-demos/ng2-book/template/src/app/ngclass/ngclass.component.js.map