"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var children_component_1 = require('./children.component');
var child1_component_1 = require('./child1.component');
var child2_component_1 = require('./child2.component');
var child3_component_1 = require('./child3.component');
var can_deactivate_guard_service_1 = require('../guard/can-deactivate-guard.service');
var children_resolve_service_1 = require('./children-resolve.service');
var auth_guard_service_1 = require('../guard/auth-guard.service');
var ChildrenRoutingModule = (function () {
    function ChildrenRoutingModule() {
    }
    ChildrenRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild([
                    {
                        path: 'children', component: children_component_1.ChildrenComponent,
                        children: [{
                                path: '',
                                component: child1_component_1.Child1Component,
                                children: [
                                    {
                                        path: '',
                                        canActivate: [auth_guard_service_1.AuthGuard],
                                        component: child2_component_1.Child2Component
                                    },
                                    {
                                        path: ':id',
                                        component: child3_component_1.Child3Component,
                                        canDeactivate: [can_deactivate_guard_service_1.CanDeactivateGuard],
                                        resolve: {
                                            childrenResolve: children_resolve_service_1.ChildrenResolve
                                        }
                                    }
                                ]
                            }]
                    },
                    {
                        path: 'active', component: children_component_1.ChildrenComponent,
                        children: [{
                                path: '',
                                canActivateChild: [auth_guard_service_1.AuthGuard],
                                children: [
                                    { path: 'child1', component: child1_component_1.Child1Component },
                                    { path: 'child2', component: child3_component_1.Child3Component },
                                    { path: '', component: child1_component_1.Child1Component }
                                ]
                            }]
                    }
                ])],
            exports: [router_1.RouterModule]
        })
    ], ChildrenRoutingModule);
    return ChildrenRoutingModule;
}());
exports.ChildrenRoutingModule = ChildrenRoutingModule;
