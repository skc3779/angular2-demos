"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TemplateNgforComponent = (function () {
    function TemplateNgforComponent() {
        this.items = [];
        this.items.push({ 'title': '나일강', 'length': '6600' });
        this.items.push({ 'title': '아마존강', 'length': '6400' });
        this.items.push({ 'title': '미시시피강', 'length': '6200' });
    }
    TemplateNgforComponent = __decorate([
        core_1.Component({
            selector: 'app-template-ngfor',
            template: "\n  <h3>\uC138\uACC4\uC5D0\uC11C \uAC00\uC7A5 \uAE34 \uAC15 TOP3</h3>\n  <div template=\"ngFor let item of items; let i = index\">\n    {{i+1}}\uC704 | {{item.title}} | {{item.length | number }}km\n  </div><br>\n    \n  <template ngFor let-item [ngForOf]=\"items\" let-i=\"index+1\">\n    <div>\n    {{i}}\uC704 | {{item.title}} | {{item.length | number }}km\n    </div>\n  </template>"
        })
    ], TemplateNgforComponent);
    return TemplateNgforComponent;
}());
exports.TemplateNgforComponent = TemplateNgforComponent;
