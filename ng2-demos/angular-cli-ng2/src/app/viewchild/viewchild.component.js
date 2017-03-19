"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Item = (function () {
    function Item() {
    }
    __decorate([
        core_1.Input()
    ], Item.prototype, "status", void 0);
    Item = __decorate([
        core_1.Directive({ selector: 'item' })
    ], Item);
    return Item;
}());
exports.Item = Item;
var ItemComponent = (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.display = function () {
        alert('ItemComponent입니다');
    };
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'item-component',
            template: '<button class="btn">알림창</button>'
        })
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
var ViewchildComponent = (function () {
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
        core_1.ViewChild(Item)
    ], ViewchildComponent.prototype, "item", null);
    __decorate([
        core_1.ViewChild(ItemComponent)
    ], ViewchildComponent.prototype, "itemComponent", void 0);
    ViewchildComponent = __decorate([
        core_1.Component({
            selector: 'app-view-child',
            template: "<div class=\"resource\">\n    <item status=\"false\" *ngIf=\"isShow==false\"></item>\n    <item status=\"true\" *ngIf=\"isShow==true\"></item>    \n    <button (click)=\"toggle()\" class=\"btn\">\uC120\uD0DD</button><br>\n    isShow : {{isShow}}<br>\n    status : {{status}}<br>    \n    <item-component (click)=\"display()\" ></item-component></div>"
        })
    ], ViewchildComponent);
    return ViewchildComponent;
}());
exports.ViewchildComponent = ViewchildComponent;
