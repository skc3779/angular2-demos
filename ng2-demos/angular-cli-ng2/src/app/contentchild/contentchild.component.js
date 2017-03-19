"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var GroupTitle = (function () {
    function GroupTitle() {
    }
    __decorate([
        core_1.Input()
    ], GroupTitle.prototype, "value", void 0);
    GroupTitle = __decorate([
        core_1.Directive({ selector: 'GroupTitle' })
    ], GroupTitle);
    return GroupTitle;
}());
exports.GroupTitle = GroupTitle;
var ChildButtonCmp = (function () {
    function ChildButtonCmp() {
    }
    Object.defineProperty(ChildButtonCmp.prototype, "buttonValue", {
        get: function () { return this.value; },
        enumerable: true,
        configurable: true
    });
    ChildButtonCmp.prototype.hello = function () { alert('hello-service! ' + this.value); };
    __decorate([
        core_1.Input()
    ], ChildButtonCmp.prototype, "value", void 0);
    ChildButtonCmp = __decorate([
        core_1.Component({
            selector: 'my-button',
            template: "<button (click)=\"hello()\">{{buttonValue}}</button>"
        })
    ], ChildButtonCmp);
    return ChildButtonCmp;
}());
exports.ChildButtonCmp = ChildButtonCmp;
var ButtonGroup = (function () {
    function ButtonGroup() {
    }
    Object.defineProperty(ButtonGroup.prototype, "getTitle", {
        get: function () { return this.groupTitle.value; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ContentChild(GroupTitle)
    ], ButtonGroup.prototype, "groupTitle", void 0);
    ButtonGroup = __decorate([
        core_1.Component({
            selector: 'button-group',
            template: "<div class=\"resource\">\n    <div>{{getTitle}}</div>\n    <my-button value=\"\uBC84\uD2BC1\"></my-button>\n    <my-button value=\"\uBC84\uD2BC2\"></my-button>\n    <my-button value=\"\uBC84\uD2BC3\"></my-button></div>"
        })
    ], ButtonGroup);
    return ButtonGroup;
}());
exports.ButtonGroup = ButtonGroup;
var ContentChildComp = (function () {
    function ContentChildComp() {
    }
    ContentChildComp = __decorate([
        core_1.Component({
            selector: 'app-contentchild',
            template: "\n    <button-group>\n      <GroupTitle value=\"\uBC84\uD2BC \uADF8\uB8F9\"></GroupTitle>\n    </button-group>"
        })
    ], ContentChildComp);
    return ContentChildComp;
}());
exports.ContentChildComp = ContentChildComp;
