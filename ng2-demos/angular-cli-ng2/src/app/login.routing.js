"use strict";
var auth_guard_service_1 = require('./guard/auth-guard.service');
var can_deactivate_guard_service_1 = require("./guard/can-deactivate-guard.service");
var auth_service_1 = require('./guard/auth.service');
var login_component_1 = require('./login.component');
//로그인 라우팅
exports.loginRoutes = [
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.authProviders = [
    auth_guard_service_1.AuthGuard,
    can_deactivate_guard_service_1.CanDeactivateGuard,
    auth_service_1.AuthService
];
