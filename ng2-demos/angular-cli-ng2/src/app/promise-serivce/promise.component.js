"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var mock_service_1 = require('./mock.service');
var PromiseComponent = (function () {
    function PromiseComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.reqMessage = '';
        this.reqMessage2 = '';
        this.userService.getRequest(true).then(function (reason) { return _this.reqMessage = reason; });
        this.userService.getRequest(false).then(function (reason) { return _this.reqMessage2 = reason; });
        this.userService.getUser().then(function (user) { return _this.listUser = user; });
        this.userService.getUserDelay().then(function (user) { return _this.listUserDelay = user; });
    }
    PromiseComponent = __decorate([
        core_1.Component({
            selector: 'promise',
            template: "\n  <p>\uD504\uB85C\uBBF8\uC2A4\uB97C \uC774\uC6A9\uD574 \uBC14\uB85C \uBC18\uD658\uD558\uB294 \uBC29\uC2DD\uACFC \uBE44\uB3D9\uAE30 \uC0C1\uD669\uC744 \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uAE30 \uC704\uD574 \uC9C0\uC5F0\uD574\uC11C \uBC18\uD658\uD558\uB294 \uBC29\uC2DD.</p>\n  <br/>\n  {{reqMessage}}<br>\n  {{reqMessage2}}<br><br>  \n  <list-component [list]=\"listUser\" [title]=\"'\uC774\uB984 \uCD9C\uB825 (\uC9C0\uC5F0\uC5C6\uC74C)'\"></list-component>\n  <list-component [list]=\"listUserDelay\" [title]=\"'\uC774\uB984 \uCD9C\uB825 (1\uCD08 \uC9C0\uC5F0)'\"></list-component>",
            providers: [mock_service_1.MockService]
        })
    ], PromiseComponent);
    return PromiseComponent;
}());
exports.PromiseComponent = PromiseComponent;
