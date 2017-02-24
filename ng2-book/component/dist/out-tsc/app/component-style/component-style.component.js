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
export var ComponentStyleComponent = (function () {
    function ComponentStyleComponent() {
    }
    ComponentStyleComponent = __decorate([
        Component({
            selector: 'app-component-style',
            template: "\n  \uBD80\uBAA8 <br>\n  <div class=\"first-group\">\n    <first-depth></first-depth>\n  </div>  \n  <first-depth class=\"active\"></first-depth>",
            styles: ["\n  :host {\n    display: block;\n    border: 5px dotted black;\n    width:300px;\n    padding:10px;\n  }\n  :host(:hover){    \n    font-style:italic;\n  }\n  :host /deep/ div.first{\n    color:red;\n    font-size:30px;\n  }  \n  :host /deep/ div.second{\n    text-decoration: line-through;\n    font-size:20px;\n  }"]
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentStyleComponent);
    return ComponentStyleComponent;
}());
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/component-style/component-style.component.js.map