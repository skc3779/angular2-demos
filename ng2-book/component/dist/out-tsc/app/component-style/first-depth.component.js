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
export var FirstDepthComponent = (function () {
    function FirstDepthComponent() {
    }
    FirstDepthComponent = __decorate([
        Component({
            selector: 'first-depth',
            template: "\n  <div class=\"first\">1\uBC88\uC9F8 \uAE4A\uC774</div>\n  <second-depth></second-depth>\n  <button>host-context</button>",
            styles: ["\n  :host{\n    display: block;\n    border: 5px dotted black;\n  }\n  :host(.active){    \n    display: block;\n    border: 5px solid blue;\n    width:270px;\n    padding:10px;\n    margin-top:5px;\n  }\n  :host-context(.first-group) button{\n    font-weight:bold;\n  }"]
        }), 
        __metadata('design:paramtypes', [])
    ], FirstDepthComponent);
    return FirstDepthComponent;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/component-style/first-depth.component.js.map