var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export var ChildInputComponent = (function () {
    function ChildInputComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ChildInputComponent.prototype, "name1", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ChildInputComponent.prototype, "name2", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ChildInputComponent.prototype, "name3", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], ChildInputComponent.prototype, "name4", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ChildInputComponent.prototype, "name5", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], ChildInputComponent.prototype, "name6", void 0);
    ChildInputComponent = __decorate([
        Component({
            selector: 'child-input',
            template: "<div>\n        \uC790\uC2DD<br>\n        name1 : {{name1}}<br>\n        name2 : {{name2}}<br>\n        name3 : <span *ngFor=\"let i of name3\"> {{i}}</span><br>\n        name4 : {{name4}}<br>\n        name5 : {{name5}}<br>\n        name6 : {{name6}}<br>\n        </div>",
            styles: ["div{border: 2px dotted #666;padding:10px;margin-top:5px;width:90%;height:75%;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ChildInputComponent);
    return ChildInputComponent;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/parent-to-child-input/child-input.component.js.map