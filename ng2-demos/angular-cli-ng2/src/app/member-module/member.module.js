"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var member_list_component_1 = require('./member-list.component');
var highlight_directive_1 = require('./highlight.directive');
var member_routing_module_1 = require('./member-routing.module');
var member_service_1 = require('./member.service');
var MemberModule = (function () {
    function MemberModule() {
    }
    MemberModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, member_routing_module_1.MemberRoutingModule],
            declarations: [member_list_component_1.MemberListComponent, highlight_directive_1.HighlightDirective],
            providers: [member_service_1.MemberService]
        })
    ], MemberModule);
    return MemberModule;
}());
exports.MemberModule = MemberModule;
