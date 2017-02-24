var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, Input, ViewChild } from '@angular/core';
export var Item = (function () {
    function Item() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], Item.prototype, "status", void 0);
    Item = __decorate([
        Directive({ selector: 'item' }), 
        __metadata('design:paramtypes', [])
    ], Item);
    return Item;
}());
export var ItemComponent = (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.display = function () {
        alert('ItemComponent입니다');
    };
    ItemComponent = __decorate([
        Component({
            selector: 'item-component',
            template: '<button>알림창</button>'
        }), 
        __metadata('design:paramtypes', [])
    ], ItemComponent);
    return ItemComponent;
}());
export var ViewchildComponent = (function () {
    function ViewchildComponent() {
        this.isShow = true;
    }
    Object.defineProperty(ViewchildComponent.prototype, "item", {
        set: function (v) {
            var _this = this;
            setTimeout(function () { _this.status = v.status; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    ViewchildComponent.prototype.toggle = function () {
        this.isShow = !this.isShow;
    };
    ViewchildComponent.prototype.display = function () {
        this.itemComponent.display();
    };
    __decorate([
        ViewChild(Item), 
        __metadata('design:type', Item), 
        __metadata('design:paramtypes', [Item])
    ], ViewchildComponent.prototype, "item", null);
    __decorate([
        ViewChild(ItemComponent), 
        __metadata('design:type', ItemComponent)
    ], ViewchildComponent.prototype, "itemComponent", void 0);
    ViewchildComponent = __decorate([
        Component({
            selector: 'app-view-child',
            template: "\n    <item status=\"false\" *ngIf=\"isShow==false\"></item>\n    <item status=\"true\" *ngIf=\"isShow==true\"></item>    \n    <button (click)=\"toggle()\">\uC120\uD0DD</button><br>\n    isShow : {{isShow}}<br>\n    status : {{status}}<br>    \n    <item-component (click)=\"display()\"></item-component>"
        }), 
        __metadata('design:paramtypes', [])
    ], ViewchildComponent);
    return ViewchildComponent;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/viewchild/viewchild.component.js.map