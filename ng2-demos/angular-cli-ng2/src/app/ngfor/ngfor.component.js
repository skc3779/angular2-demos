"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NgForComponent = (function () {
    function NgForComponent() {
        this.items = [];
        this.items.push({ 'title': '한라산', 'height': '1950' });
        this.items.push({ 'title': '지리산', 'height': '1915' });
        this.items.push({ 'title': '설악산', 'height': '1707.9' });
    }
    NgForComponent = __decorate([
        core_1.Component({
            selector: 'app-ngstyle',
            template: "   \n  <h3>\uD55C\uAD6D\uC5D0\uC11C \uAC00\uC7A5 \uB192\uC740 \uC0B0 TOP3</h3>\n  <div *ngFor=\"let item of items; let i = index\">\n    {{ i+1 }} | {{item.title}} | {{item.height | number}}m\n  </div><br>\n  <h3>\uD55C\uAD6D\uC5D0\uC11C \uAC00\uC7A5 \uB192\uC740 \uC0B0 TOP3</h3>\n  <div *ngFor=\"let item of items; let i = index\">\n    {{ i+1 }} | {{item.title}} | {{item.height | number}}m\n  </div><br>\n\n"
        })
    ], NgForComponent);
    return NgForComponent;
}());
exports.NgForComponent = NgForComponent;
