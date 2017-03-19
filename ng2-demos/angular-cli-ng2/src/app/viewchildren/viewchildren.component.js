"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChildCmp = (function () {
    function ChildCmp() {
    }
    Object.defineProperty(ChildCmp.prototype, "getName", {
        get: function () {
            return this.childname;
        },
        enumerable: true,
        configurable: true
    });
    ChildCmp.prototype.printName = function () {
        console.log(this.childname);
    };
    __decorate([
        core_1.Input()
    ], ChildCmp.prototype, "childname", void 0);
    ChildCmp = __decorate([
        core_1.Component({
            selector: 'child-cmp',
            template: '{{getName}}'
        })
    ], ChildCmp);
    return ChildCmp;
}());
exports.ChildCmp = ChildCmp;
var ViewchildrenComponent = (function () {
    function ViewchildrenComponent() {
    }
    ViewchildrenComponent.prototype.ngAfterViewInit = function () {
        this.children.toArray().forEach(function (child) { return child.printName(); });
    };
    __decorate([
        core_1.ViewChildren('child1,child2,child3')
    ], ViewchildrenComponent.prototype, "children", void 0);
    ViewchildrenComponent = __decorate([
        core_1.Component({
            selector: 'some-cmp',
            template: "<div class=\"resource\">\n    <child-cmp #child1 [childname]=\"'\uC790\uC2DD1'\"></child-cmp>, {{child1.childname}}, {{child1.getName}}<br>\n    <child-cmp #child2 [childname]=\"'\uC790\uC2DD2'\"></child-cmp>, {{child2.childname}}, {{child2.getName}}<br>\n    <child-cmp #child3 [childname]=\"'\uC790\uC2DD3'\"></child-cmp>, {{child3.childname}}, {{child3.getName}}<br><br>\n    \n    <div *ngFor=\"let i of children\">{{i.childname}}</div>\n    </div>"
        })
    ], ViewchildrenComponent);
    return ViewchildrenComponent;
}());
exports.ViewchildrenComponent = ViewchildrenComponent;
