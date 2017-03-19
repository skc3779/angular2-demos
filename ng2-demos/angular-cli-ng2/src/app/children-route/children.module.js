"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var children_routing_module_1 = require('./children-routing.module');
var children_component_1 = require('./children.component');
var child1_component_1 = require('./child1.component');
var child2_component_1 = require('./child2.component');
var child3_component_1 = require('./child3.component');
var children_resolve_service_1 = require('./children-resolve.service');
var children_service_1 = require('./children.service');
var angular_2_local_storage_1 = require('angular-2-local-storage');
var ChildrenModule = (function () {
    function ChildrenModule() {
    }
    ChildrenModule = __decorate([
        core_1.NgModule({
            imports: [children_routing_module_1.ChildrenRoutingModule, forms_1.FormsModule, angular_2_local_storage_1.LocalStorageModule.withConfig({
                    prefix: 'app-root',
                    storageType: 'localStorage'
                })],
            declarations: [children_component_1.ChildrenComponent, child1_component_1.Child1Component, child2_component_1.Child2Component, child3_component_1.Child3Component],
            providers: [children_resolve_service_1.ChildrenResolve, children_service_1.ChildrenService]
        })
    ], ChildrenModule);
    return ChildrenModule;
}());
exports.ChildrenModule = ChildrenModule;
