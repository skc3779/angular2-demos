var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChildren, QueryList } from '@angular/core';
export var ChildCmp = (function () {
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
        Input(), 
        __metadata('design:type', String)
    ], ChildCmp.prototype, "childname", void 0);
    ChildCmp = __decorate([
        Component({
            selector: 'child-cmp',
            template: '{{getName}}'
        }), 
        __metadata('design:paramtypes', [])
    ], ChildCmp);
    return ChildCmp;
}());
export var ViewchildrenComponent = (function () {
    function ViewchildrenComponent() {
    }
    ViewchildrenComponent.prototype.ngAfterViewInit = function () {
        this.children.toArray().forEach(function (child) { return child.printName(); });
    };
    __decorate([
        ViewChildren('child1,child2,child3'), 
        __metadata('design:type', (typeof (_a = typeof QueryList !== 'undefined' && QueryList) === 'function' && _a) || Object)
    ], ViewchildrenComponent.prototype, "children", void 0);
    ViewchildrenComponent = __decorate([
        Component({
            selector: 'some-cmp',
            template: "\n    <child-cmp #child1 [childname]=\"'\uC790\uC2DD1'\"></child-cmp>, {{child1.childname}}, {{child1.getName}}<br>\n    <child-cmp #child2 [childname]=\"'\uC790\uC2DD2'\"></child-cmp>, {{child2.childname}}, {{child2.getName}}<br>\n    <child-cmp #child3 [childname]=\"'\uC790\uC2DD3'\"></child-cmp>, {{child3.childname}}, {{child3.getName}}<br><br>\n    \n    <div *ngFor=\"let i of children\">{{i.childname}}</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ViewchildrenComponent);
    return ViewchildrenComponent;
    var _a;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/viewchildren/viewchildren.component.js.map