"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Child3Component = (function () {
    function Child3Component(route) {
        this.route = route;
    }
    Child3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.editName = data.childrenResolve.name;
            _this.children = data.childrenResolve;
            console.log('child3 children', _this.children);
        });
    };
    Child3Component = __decorate([
        core_1.Component({
            selector: 'child3',
            template: "\n  <h3>\uC790\uC2DD3</h3>\n  <input type=\"text\" [(ngModel)]=\"editName\"> {{editName}}\n  "
        })
    ], Child3Component);
    return Child3Component;
}());
exports.Child3Component = Child3Component;
