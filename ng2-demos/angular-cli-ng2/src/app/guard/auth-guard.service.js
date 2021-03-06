"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        console.log('canActive', url);
        //return true;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        console.log('canActivateChild');
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        console.log('canLoad');
        var url = "/" + route.path;
        if (window.confirm("자식 라우트가 모두 로드 되었습니다. 진행하시겠습니까?")) {
            return this.checkLogin(url);
        }
        else {
            return false;
        }
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLogin) {
            return true;
        }
        this.authService.redirectUrl = url;
        var sessionId = 1234;
        var navigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };
        this.router.navigate(['/login'], navigationExtras);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable()
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
