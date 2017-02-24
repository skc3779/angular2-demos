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
export var ChildToParentComponent = (function () {
    function ChildToParentComponent() {
        this.cntClick = 0;
        this.active = false;
    }
    ChildToParentComponent.prototype.outputEvent = function (active) {
        this.cntClick++;
        this.active = active; //자식으로 부터 받은 값
    };
    ChildToParentComponent = __decorate([
        Component({
            selector: 'app-root',
            template: "<div>\uBD80\uBAA8<br>\n              \uD074\uB9AD\uC218 : {{cntClick}}<br>\n              \uC790\uC2DD\uC0C1\uD0DC : {{active}}\n              <child (outputProperty)=\"outputEvent($event)\"></child>\n          </div>",
            styles: ["div{border: 2px solid #666;padding:10px;width:400px;height:200px;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ChildToParentComponent);
    return ChildToParentComponent;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/child-to-parent/child-to-parent.component.js.map