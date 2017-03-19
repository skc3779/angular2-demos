"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Children = (function () {
    function Children(id, name) {
        this.id = id;
        this.name = name;
    }
    return Children;
}());
exports.Children = Children;
var CHILDREN = [
    new Children(1, '첫번째 페이지'),
    new Children(2, '두번째 페이지'),
    new Children(3, '세번째 페이지')
];
exports.childrenPromise = Promise.resolve(CHILDREN);
var core_1 = require('@angular/core');
var ChildrenService = (function () {
    function ChildrenService() {
    }
    ChildrenService.prototype.findById = function (id) {
        return exports.childrenPromise
            .then(function (children) { return children.find(function (children) { return children.id === +id; }); });
    };
    ChildrenService.nextId = 10;
    ChildrenService = __decorate([
        core_1.Injectable()
    ], ChildrenService);
    return ChildrenService;
}());
exports.ChildrenService = ChildrenService;
