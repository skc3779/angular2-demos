"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var parent_service_1 = require('./parent.service');
var FirstChild = (function () {
    function FirstChild(parent) {
        this.parent = parent;
    }
    FirstChild.prototype.getData = function () {
        return [
            { Child: 'FirstChild 서비스' },
            { parent: this.parent.getName() }
        ];
    };
    FirstChild = __decorate([
        core_1.Injectable()
    ], FirstChild);
    return FirstChild;
}());
exports.FirstChild = FirstChild;
var SecondChild = (function (_super) {
    __extends(SecondChild, _super);
    function SecondChild() {
        _super.apply(this, arguments);
    }
    SecondChild.prototype.getData = function () {
        return [
            { Child: 'SecondChild 서비스' },
            { parent: _super.prototype.getName.call(this) }
        ];
    };
    SecondChild = __decorate([
        core_1.Injectable()
    ], SecondChild);
    return SecondChild;
}(parent_service_1.Parent));
exports.SecondChild = SecondChild;
