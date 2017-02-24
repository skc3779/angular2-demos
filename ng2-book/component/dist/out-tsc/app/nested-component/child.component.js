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
export var NestedChildComponent = (function () {
    function NestedChildComponent() {
    }
    NestedChildComponent = __decorate([
        Component({
            selector: 'nested-child',
            template: "<div>\uC790\uC2DD\n    <nested-grandson></nested-grandson>\n  </div>",
            styles: ["div{border: 2px dotted #666;padding:10px;margin-top:5px;width:75%;height:75%;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], NestedChildComponent);
    return NestedChildComponent;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/nested-component/child.component.js.map