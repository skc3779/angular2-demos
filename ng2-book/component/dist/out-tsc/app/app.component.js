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
export var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            template: "\n  <div class=\"left-menu\">\n      <div class=\"menu\">\n        <a routerLink=\"/\">\n          <h1>\uCEF4\uD3EC\uB10C\uD2B8</h1>\n        </a>\n        <ol class=\"tree-list\">\n        <li><a routerLink=\"/hello\" routerLinkActive=\"active\">hello \uCEF4\uD3EC\uB10C\uD2B8</a></li>\n        <li><a routerLink=\"/nested-component\" routerLinkActive=\"active\">\uC911\uCCA9 \uCEF4\uD3EC\uB10C\uD2B8</a></li>        \n        <li><a routerLink=\"/parent-to-child-inputs\" routerLinkActive=\"active\">\uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uB370\uC774\uD130 \uC804\uB2EC (inputs \uC18D\uC131)</a></li>\n        <li><a routerLink=\"/parent-to-child-input\" routerLinkActive=\"active\">\uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uB370\uC774\uD130 \uC804\uB2EC (input \uC7A5\uC2DD\uC790)</a></li>\n        <li><a routerLink=\"/child-to-parent/\" routerLinkActive=\"active\">\uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uB370\uC774\uD130 \uC804\uB2EC</a></li>\n        <li><a routerLink=\"/viewchild\" routerLinkActive=\"active\">viewchild \uC7A5\uC2DD\uC790</a></li>\n        <li><a routerLink=\"/viewchildren\" routerLinkActive=\"active\">viewchildren \uC7A5\uC2DD\uC790</a></li>          \n        <li><a routerLink=\"/contentchild\" routerLinkActive=\"active\">contentchild \uC7A5\uC2DD\uC790</a></li>\n        <li><a routerLink=\"/contentchildren\" routerLinkActive=\"active\">contentchildren \uC7A5\uC2DD\uC790</a></li>\n        <li><a routerLink=\"/component-style\" routerLinkActive=\"active\">\uCEF4\uD3EC\uB10C\uD2B8 \uC2A4\uD0C0\uC77C</a></li>          \n        </ol>\n    </div>     \n  </div>\n  <div class=\"play-box\">\n    <router-outlet></router-outlet>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/app.component.js.map