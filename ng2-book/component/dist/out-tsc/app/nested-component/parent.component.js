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
export var NestedParentComponent = (function () {
    function NestedParentComponent() {
    }
    NestedParentComponent = __decorate([
        Component({
            selector: 'nested-parent',
            template: "\n  <div>\uBD80\uBAA8\n    <nested-child></nested-child>\n  </div>",
            styles: ['div{border: 2px solid #666;padding:10px;width:400px;height:200px;}']
        }), 
        __metadata('design:paramtypes', [])
    ], NestedParentComponent);
    return NestedParentComponent;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/nested-component/parent.component.js.map