"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by skc37 on 2017-02-12
 */
var core_1 = require('@angular/core');
var HelloService = (function () {
    function HelloService() {
    }
    HelloService.prototype.sayHello = function () {
        return "Hello 서비스!";
    };
    HelloService = __decorate([
        core_1.Injectable()
    ], HelloService);
    return HelloService;
}());
exports.HelloService = HelloService;
