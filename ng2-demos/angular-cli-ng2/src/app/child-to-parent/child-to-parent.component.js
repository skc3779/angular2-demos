"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChildToParentComponent = (function () {
    function ChildToParentComponent() {
        this.cntClick = 0;
        this.active = false;
    }
    ChildToParentComponent.prototype.outputEvent = function (active) {
        this.cntClick++;
        this.active = active; //자식으로 부터 받은 값
    };
    ChildToParentComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n          \uBD80\uBAA8\uB85C \uC774\uBCA4\uD2B8 \uBA54\uC138\uC9C0 \uBCF4\uB0B4\uAE30\n          <div class=\"resource\"><div class=\"parent\">\uBD80\uBAA8<br>\n              \uD074\uB9AD\uC218 : {{cntClick}}<br>\n              \uC790\uC2DD\uC0C1\uD0DC : {{active}}\n              <child (outputProperty)=\"outputEvent($event)\"></child>\n          </div></div>",
            styles: ["div.parent{border: 2px solid #666;padding:10px;width:400px;height:200px;}"]
        })
    ], ChildToParentComponent);
    return ChildToParentComponent;
}());
exports.ChildToParentComponent = ChildToParentComponent;
