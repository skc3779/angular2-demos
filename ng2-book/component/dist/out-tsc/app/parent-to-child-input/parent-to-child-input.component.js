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
export var ParentToChildInputComponent = (function () {
    function ParentToChildInputComponent() {
        this.fruit1 = "사과";
        this.fruit3 = ['딸기', '포도', '참외'];
    }
    ParentToChildInputComponent.prototype.fruit2 = function () {
        return "배";
    };
    Object.defineProperty(ParentToChildInputComponent.prototype, "fruit6", {
        get: function () {
            return ParentToChildInputComponent.fruit5;
        },
        enumerable: true,
        configurable: true
    });
    ParentToChildInputComponent.fruit5 = "수박"; // static 형은 곧바로 전달 불가    
    ParentToChildInputComponent = __decorate([
        Component({
            selector: 'parent-to-child-input',
            template: "<div>\uBD80\uBAA8\n              <child-input [name1]=\"fruit1\" [name2]=\"fruit2()\" [name3]=\"fruit3\" [name4]=\"1+1\" [name5]=\"fruit5\" [name6]=\"fruit6\"></child-input>\n          </div>",
            styles: ["div{border: 2px solid #666;padding:10px;width:400px;height:250px;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ParentToChildInputComponent);
    return ParentToChildInputComponent;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/parent-to-child-input/parent-to-child-input.component.js.map