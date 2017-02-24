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
export var ChildInputsComponent = (function () {
    function ChildInputsComponent() {
    }
    ChildInputsComponent = __decorate([
        Component({
            selector: 'child-inputs',
            template: "<div>\uC790\uC2DD<br><br>\n        inputs \uD504\uB85C\uD37C\uD2F0\uB85C \uBC1B\uC740 \uAC12 : {{name1}}, {{name2}}</div>",
            styles: ["div{border: 2px dotted #666;padding:10px;margin-top:5px;width:90%;height:75%;}"],
            inputs: ['name1', 'name2']
        }), 
        __metadata('design:paramtypes', [])
    ], ChildInputsComponent);
    return ChildInputsComponent;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/parent-to-child-inputs/child-inputs.component.js.map