"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by skc37 on 2017-02-12.
 */
var core_1 = require('@angular/core');
var hello_service_1 = require('./hello.service');
var HelloComponent = (function () {
    function HelloComponent(helloService) {
        this.welcome = helloService.sayHello();
    }
    HelloComponent = __decorate([
        core_1.Component({
            selector: 'hello',
            template: "<div class=\"resource\">{{welcome}}</div>",
            providers: [hello_service_1.HelloService]
        })
    ], HelloComponent);
    return HelloComponent;
}());
exports.HelloComponent = HelloComponent;
