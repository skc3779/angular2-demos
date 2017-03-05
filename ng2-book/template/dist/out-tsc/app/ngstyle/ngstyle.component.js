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
export var NgstyleComponent = (function () {
    function NgstyleComponent() {
        this.text = '안녕하세요';
        this.weight = 'normal';
        this.style = 'normal';
    }
    NgstyleComponent.prototype.changeWeight = function ($event) {
        this.weight = $event.target.checked ? 'bold' : 'normal';
    };
    NgstyleComponent = __decorate([
        Component({
            selector: 'app-ngstyle',
            template: "   \n  <div>\n    <input type=\"text\" [value]=\"text\" [(ngModel)]=\"text\">\n    <select [value]=\"style\" [(ngModel)]=\"style\">        \n      <option value=\"normal\">\uBC18\uB4EF\uD55C \uAE00\uC790</option>\n      <option value=\"italic\">\uAE30\uC6B8\uC5B4\uC9C4 \uAE00\uC790</option>        \n    </select>\n    <label>\uBCFC\uB4DC\uCCB4<input type=\"checkbox\" (change)=\"changeWeight($event)\"></label>\n  </div>\n  <h2 [ngStyle]=\"{'font-style': style, 'font-weight': weight}\">{{text}}</h2>      \n  <h1 [style.font-style]=\"style\" [style.font-weight]=\"weight\">{{text}}</h1>" }), 
        __metadata('design:paramtypes', [])
    ], NgstyleComponent);
    return NgstyleComponent;
}());
//# sourceMappingURL=/Users/seokangchun/githubProjects/angular2-demos/ng2-book/template/src/app/ngstyle/ngstyle.component.js.map