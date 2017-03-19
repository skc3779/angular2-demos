"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CustomStructuralDirectiveCmp = (function () {
    function CustomStructuralDirectiveCmp() {
        this.status = true;
    }
    CustomStructuralDirectiveCmp = __decorate([
        core_1.Component({
            selector: 'app-custom-structural-directive',
            template: "\n  <button (click)=\"status=!status\">{{status?'\uB2EB\uAE30':'\uC5F4\uAE30'}}</button>\n  <p *myIf=\"status\">\n    \uCEE4\uC2A4\uD140 \uAD6C\uC870 \uC9C0\uC2DC\uC790 : myIf\n  </p>   \n  <p *ngIf=\"status\">\n    \uB0B4\uC7A5 \uAD6C\uC870 \uC9C0\uC2DC\uC790 : ngIf (template \uC0DD\uB7B5)\n  </p>"
        })
    ], CustomStructuralDirectiveCmp);
    return CustomStructuralDirectiveCmp;
}());
exports.CustomStructuralDirectiveCmp = CustomStructuralDirectiveCmp;
