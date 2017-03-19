"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = (this.authService.isLogin ? this.authService.userId + '님 로그인이 되었습니다.' : '로그인을 진행해주세요 (ID는 1부터 3까지 허용)');
    };
    LoginComponent.prototype.doLogin = function () {
        this.setMessage();
        if (this.authService.isLogin) {
            var redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
            var navigationExtras = {
                preserveQueryParams: true,
                preserveFragment: true
            };
            this.router.navigate([redirect], navigationExtras);
        }
        else {
            alert('로그인을 할 수 없습니다.');
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.userId) {
            alert('id를 입력해주세요');
            return;
        }
        this.message = '로그인을 진행해주세요';
        return this.authService.checkId(this.userId).then(function (children) {
            if (children) {
                _this.authService.login(_this.userId).subscribe(function () { return _this.doLogin(); });
            }
            else {
                alert('아이디가 없습니다');
            }
            _this.setMessage();
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        // this.setMessage();
        // this.router.navigate(['/login']);
        console.log('logout', this.authService.isLogin);
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: "\n    <h3>LOGIN</h3> {{message}}\n    <p>\n      <input type=\"text\" [(ngModel)]=\"userId\" placeholder=\"\uC0AC\uC6A9\uC790 \uC544\uC774\uB514\" *ngIf=\"!authService.isLogin\">\n      <button (click)=\"login()\"  *ngIf=\"!authService.isLogin\">\uB85C\uADF8\uC778</button>\n      <button (click)=\"logout()\" *ngIf=\"authService.isLogin\">\uB85C\uADF8\uC544\uC6C3</button>\n    </p>"
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
