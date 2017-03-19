"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var parent_service_1 = require('./parent.service');
var child_service_1 = require('./child.service');
var OopComponent = (function () {
    function OopComponent(firstChild, secondChild) {
        this.firstChildData = firstChild.getData();
        this.secondChildData = secondChild.getData();
    }
    OopComponent = __decorate([
        core_1.Component({
            selector: 'oop-cmp',
            template: "\n      <b>\uC0DD\uC131\uC790 \uC8FC\uC785\uBC29\uC2DD</b><br>\n      {{firstChildData | json}}<br><br>\n      <b>\uC0C1\uC18D\uBC29\uC2DD</b><br>\n      {{secondChildData | json}}",
            providers: [parent_service_1.Parent, child_service_1.FirstChild, child_service_1.SecondChild]
        })
    ], OopComponent);
    return OopComponent;
}());
exports.OopComponent = OopComponent;
