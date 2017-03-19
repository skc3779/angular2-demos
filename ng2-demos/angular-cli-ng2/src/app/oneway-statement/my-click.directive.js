"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MyClickDirective = (function () {
    function MyClickDirective(el) {
        var _this = this;
        this.toggle = false;
        this.clicks = new core_1.EventEmitter();
        el.nativeElement.addEventListener('click', function (event) {
            _this.toggle = !_this.toggle;
            _this.clicks.emit(_this.toggle ? '선택했습니다.' : '해제했습니다.');
        });
    }
    __decorate([
        core_1.Output('myClick')
    ], MyClickDirective.prototype, "clicks", void 0);
    MyClickDirective = __decorate([
        core_1.Directive({ selector: '[myClick]' })
    ], MyClickDirective);
    return MyClickDirective;
}());
exports.MyClickDirective = MyClickDirective;
