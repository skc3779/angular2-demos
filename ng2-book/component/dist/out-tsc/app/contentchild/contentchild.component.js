var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild, Directive, Input } from '@angular/core';
export var GroupTitle = (function () {
    function GroupTitle() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], GroupTitle.prototype, "value", void 0);
    GroupTitle = __decorate([
        Directive({ selector: 'GroupTitle' }), 
        __metadata('design:paramtypes', [])
    ], GroupTitle);
    return GroupTitle;
}());
export var childButtonCmp = (function () {
    function childButtonCmp() {
    }
    Object.defineProperty(childButtonCmp.prototype, "buttonValue", {
        get: function () { return this.value; },
        enumerable: true,
        configurable: true
    });
    childButtonCmp.prototype.hello = function () { alert('hello!'); };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], childButtonCmp.prototype, "value", void 0);
    childButtonCmp = __decorate([
        Component({
            selector: 'my-button',
            template: "<button (click)=\"hello()\">{{buttonValue}}</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], childButtonCmp);
    return childButtonCmp;
}());
export var ButtonGroup = (function () {
    function ButtonGroup() {
    }
    Object.defineProperty(ButtonGroup.prototype, "getTitle", {
        get: function () { return this.groupTitle.value; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ContentChild(GroupTitle), 
        __metadata('design:type', GroupTitle)
    ], ButtonGroup.prototype, "groupTitle", void 0);
    ButtonGroup = __decorate([
        Component({
            selector: 'button-group',
            template: "\n    <div>{{getTitle}}</div>\n    <my-button value=\"\uBC84\uD2BC1\"></my-button>\n    <my-button value=\"\uBC84\uD2BC2\"></my-button>\n    <my-button value=\"\uBC84\uD2BC3\"></my-button>"
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonGroup);
    return ButtonGroup;
}());
export var ContentChildComp = (function () {
    function ContentChildComp() {
    }
    ContentChildComp = __decorate([
        Component({
            selector: 'app-contentchild',
            template: "\n    <button-group>\n      <GroupTitle value=\"\uBC84\uD2BC \uADF8\uB8F9\"></GroupTitle>\n    </button-group>"
        }), 
        __metadata('design:paramtypes', [])
    ], ContentChildComp);
    return ContentChildComp;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/contentchild/contentchild.component.js.map