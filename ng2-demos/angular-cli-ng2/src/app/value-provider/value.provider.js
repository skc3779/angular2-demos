"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/**
 * 값 제공자
 * 갓 제공자는 컴포넌트에 값을 제공할 목적으로 사용하는 제공자 입니다
 */
var Config = (function () {
    function Config() {
        this.grade = [];
    }
    Config.prototype.getInfo = function () { };
    Config = __decorate([
        core_1.Injectable()
    ], Config);
    return Config;
}());
exports.Config = Config;
var myConfig = {
    serviceName: '회원관리 서비스',
    grade: ['운영자', '정회원', '준회원'],
    getInfo: function () { return "<b>" + myConfig.serviceName + "</b>\uB294 <b>" + myConfig.grade + "</b> \uB4F1\uAE09\uC81C\uB85C \uC6B4\uC601\uD569\uB2C8\uB2E4."; }
};
exports.ValueProvider = {
    provide: Config,
    useValue: myConfig
};
