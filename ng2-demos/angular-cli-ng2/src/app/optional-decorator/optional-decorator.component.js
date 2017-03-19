"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
/**
 * 선택적 장식자를 이요한 의존성 주입
 * 선택적(@Optional) 장식자 활용해 Provider 속성이 없어 제공자가 제공되지 않을 때 입력 객체를 null 값으로 처리함으로써
 * 애플리케이션이 중단되지 않게 합니다
 */
var Engine = (function () {
    function Engine() {
        this.name = "엔진";
    }
    Engine = __decorate([
        core_1.Injectable()
    ], Engine);
    return Engine;
}());
exports.Engine = Engine;
var OptionalDecoratorComponent = (function () {
    // 제공자(providers)가 제공되지 않을 때 선택적(@Optional)를 사용해서
    // 입력개체를 null값으로 처리함으로 애플리케이션 중단 방지
    function OptionalDecoratorComponent(engine) {
        this.engine = engine;
        if (this.engine === null) {
            this.msg = "null입니다.";
        }
        else {
            this.msg = "의존주입 성공 : " + this.engine.name;
        }
    }
    OptionalDecoratorComponent = __decorate([
        core_1.Component({
            selector: 'app-optional-decorator',
            template: "{{msg}}",
        }),
        __param(0, core_1.Optional())
    ], OptionalDecoratorComponent);
    return OptionalDecoratorComponent;
}());
exports.OptionalDecoratorComponent = OptionalDecoratorComponent;
