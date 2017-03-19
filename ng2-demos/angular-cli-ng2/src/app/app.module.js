"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
//해시기반 주소로 변경
//import {LocationStrategy, HashLocationStrategy} from '@angular/common'
// 라우딩 모듈 등록방법 1과 2번
var app_routing_1 = require('./app.routing');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
/* 부모에서 자식확장 */
var parent_component_1 = require('./parent-to-child/parent.component');
var child_component_1 = require('./parent-to-child/child.component');
var grandson_component_1 = require('./parent-to-child/grandson.component');
var child_input_component_1 = require('./parent-to-child-input/child-input.component');
var parent_to_child_input_component_1 = require('./parent-to-child-input/parent-to-child-input.component');
/* 자식에서 부모으로 */
var child_component_2 = require('./child-to-parent/child.component');
var child_to_parent_component_1 = require('./child-to-parent/child-to-parent.component');
var viewchild_component_1 = require('./viewchild/viewchild.component');
var viewchildren_component_1 = require('./viewchildren/viewchildren.component');
var contentchild_component_1 = require('./contentchild/contentchild.component');
var contentchildren_component_1 = require('./contentchildren/contentchildren.component');
var hello_component_1 = require('./hello-service/hello.component');
var oop_component_1 = require('./oop-service/oop.component');
var mock_component_1 = require('./mock-service/mock.component');
var promise_component_1 = require('./promise-serivce/promise.component');
var list_component_1 = require('./promise-serivce/list.component');
var car_component_1 = require('./shared-service/car.component');
var taxi_component_1 = require('./shared-service/taxi.component');
var parent_component_2 = require('./shared-service/parent.component');
var not_found_component_1 = require('./not-found/not-found.component');
var admin_component_1 = require('./admin/admin.component');
/* 특징 모듈 */
var member_module_1 = require('./member-module/member.module');
var player_module_1 = require('./player-module/player.module');
/* 로그인 */
var login_component_1 = require('./login.component');
/* 라우팅 */
var children_module_1 = require('./children-route/children.module');
/* 제공자 */
var value_provider_component_1 = require('./value-provider/value-provider.component');
var factory_provider_component_1 = require('./factory-provider/factory-provider.component');
var car_service_1 = require('./factory-provider/car.service');
var class_provider_component_1 = require('./class-provider/class-provider.component');
var aliased_class_provider_component_1 = require('./class-provider/aliased-class-provider.component');
/* 불투명 토큰 제공자 */
var opaque_token_component_1 = require('./opaque-token/opaque-token.component');
/*선택적 장식자를 이요한 의존성 주입*/
var optional_decorator_component_1 = require('./optional-decorator/optional-decorator.component');
/*팩토리 패턴을 이용한 객체 주입*/
var factory_component_1 = require('./factory/factory.component');
/*주입기를 이용한 객체 생성*/
var reflective_injector_component_1 = require('./reflective-injector/reflective-injector.component');
/* 바인딩 단방향 삽입식 */
var interpolation_component_1 = require('./interpolation/interpolation.component');
/* 바인딩 단방향 바인딩 표현식 */
var oneway_expression_component_1 = require('./oneway-expression/oneway-expression.component');
/* 어트리뷰트, 클래스 스타일 이벤트 바인딩 */
var oneway_statement_component_1 = require('./oneway-statement/oneway-statement.component');
var contact_component_1 = require('./oneway-statement/contact.component');
var my_click_directive_1 = require('./oneway-statement/my-click.directive');
/* 양방향 바인딩 */
var twoway_ngmodel_component_1 = require('./twoway-ngmodel/twoway-ngmodel.component');
/* 9.4 속성지시자 */
var ngclass_component_1 = require('./ngclass/ngclass.component');
var ngstyle_component_1 = require('./ngstyle/ngstyle.component');
/* 9.5 구조지시자 */
var ngif_component_1 = require('./ngif/ngif.component');
var ngswitch_component_1 = require('./ngswitch/ngswitch.component');
var ngfor_component_1 = require('./ngfor/ngfor.component');
/* 9.6 템플릿 지시자 */
var template_ngfor_component_1 = require('./template-ngfor/template-ngfor.component');
/* 9.6.2 템플릿 입력변수 */
var template_input_variables_component_1 = require('./template-input-variables/template-input-variables.component');
/* 9.6.3 템플릿 참조변수 */
var template_reference_variables_component_1 = require('./template-reference-variables/template-reference-variables.component');
/* 10.2.1 커스텀 지시자 */
var custom_directive_component_1 = require('./custom-directive/custom-directive.component');
var my_click2_directive_1 = require('./custom-directive/my-click2.directive');
/* 10.2.4 ElementRef와 Renderer */
var element_rendering_component_1 = require('./element-rendering/element-rendering.component');
/* 10.3.1 지시자에 값 넘기기 */
var pass_to_directive_component_1 = require('./pass-to-directive/pass-to-directive.component');
var my_directive_1 = require('./pass-to-directive/my.directive');
/* 10.3.2 지시자로부터 응답받기 */
var binding_to_directive_component_1 = require('./binding-to-directive/binding-to-directive.component');
var alert_directive_1 = require('./binding-to-directive/alert.directive');
/* 10.3.3 커스텀 속성 지시자 */
var custom_attr_directive_component_1 = require('./custom-attr-directive/custom-attr-directive.component');
var custom_attr_directive_1 = require('./custom-attr-directive/custom-attr.directive');
/* 10.3.4 커스텀 구조 지시자 */
var custom_structural_directive_component_1 = require('./custom-structural-directive/custom-structural-directive.component');
var myif_directive_1 = require('./custom-structural-directive/myif.directive');
/* 10.3.5 하이라이트 지시자 */
var highlight_component_1 = require('./highlight-directive/highlight.component');
var highlight_directive_1 = require('./highlight-directive/highlight.directive');
/* 11.2.1 날짜 파이프*/
var date_expression_component_1 = require('./date-expression/date-expression.component');
/* 11.2.1 날짜 파이트 포멧 */
var date_formats_component_1 = require('./date-formats/date-formats.component');
var date_etc_component_1 = require('./date-etc/date-etc.component');
/* 11.2.2 대소문자파이프 */
var upper_lower2_component_1 = require('./upper-lower/upper-lower2.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                child_component_1.NestedChildComponent,
                parent_component_1.NestedParentComponent,
                grandson_component_1.NestedGrandsonComponent,
                child_input_component_1.ChildInputComponent,
                parent_to_child_input_component_1.ParentToChildInputComponent,
                child_component_2.ChildComponent,
                child_to_parent_component_1.ChildToParentComponent,
                viewchild_component_1.ViewchildComponent, viewchild_component_1.Item, viewchild_component_1.ItemComponent,
                viewchildren_component_1.ViewchildrenComponent, viewchildren_component_1.ChildCmp,
                contentchild_component_1.ContentChildComp, contentchild_component_1.GroupTitle, contentchild_component_1.ButtonGroup, contentchild_component_1.ChildButtonCmp,
                contentchildren_component_1.ContentChildrenComp, contentchildren_component_1.Word, contentchildren_component_1.WordGroup,
                hello_component_1.HelloComponent,
                oop_component_1.OopComponent,
                mock_component_1.MockComponent,
                promise_component_1.PromiseComponent,
                list_component_1.ListComponent,
                car_component_1.CarComponent,
                taxi_component_1.TaxiComponent,
                parent_component_2.ParentComponent,
                not_found_component_1.NotFoundComponent,
                login_component_1.LoginComponent,
                admin_component_1.AdminComponent,
                value_provider_component_1.ValueProviderComponent,
                factory_provider_component_1.FactoryProviderComponent,
                class_provider_component_1.ClassProviderComponent,
                aliased_class_provider_component_1.AliasedClassProviderComponent,
                opaque_token_component_1.OpaqueTokenComponent,
                optional_decorator_component_1.OptionalDecoratorComponent,
                factory_component_1.FactoryComponent,
                reflective_injector_component_1.ReflectiveInjectorComponent,
                interpolation_component_1.InterpolationComponent,
                oneway_expression_component_1.OnewayExpressionComponent,
                oneway_statement_component_1.OnewayStatementComponent,
                contact_component_1.ContactComponent,
                my_click_directive_1.MyClickDirective,
                twoway_ngmodel_component_1.TwowayNgmodelComponent,
                ngclass_component_1.NgclassComponent,
                ngstyle_component_1.NgstyleComponent,
                ngif_component_1.NgifComponent,
                ngswitch_component_1.NgswitchComponent,
                ngfor_component_1.NgForComponent,
                template_ngfor_component_1.TemplateNgforComponent,
                template_input_variables_component_1.TemplateInputVariablesComponent,
                template_reference_variables_component_1.TemplateReferenceVariablesComponent,
                custom_directive_component_1.CustomDirectiveCmp, my_click2_directive_1.MyClick2Directive,
                element_rendering_component_1.ElementRendering, element_rendering_component_1.MyElementRef, element_rendering_component_1.MyRenderer,
                pass_to_directive_component_1.PassToDirectiveComponent, my_directive_1.myDirective,
                binding_to_directive_component_1.BindingToDirectiveComponent, alert_directive_1.AlertDirective,
                custom_attr_directive_component_1.CustomAttrDirectiveCmp, custom_attr_directive_1.CustomAttrDirective,
                custom_structural_directive_component_1.CustomStructuralDirectiveCmp, myif_directive_1.MyIfDirective,
                highlight_component_1.HighlightComponent, highlight_directive_1.HighlightDirective,
                date_expression_component_1.DateExpressionComponent,
                date_formats_component_1.DateFormatsComponent,
                date_etc_component_1.DateEtcComponent,
                upper_lower2_component_1.UpperLower2Component
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.AppRoutingModule,
                member_module_1.MemberModule,
                player_module_1.PlayerModule,
                //가드(guard) : 라우팅시 접근을 제어하는 방법
                children_module_1.ChildrenModule
            ],
            providers: [app_routing_1.appRoutingProviders,
                car_service_1.Engine, car_service_1.Speedmeter],
            //해시기반 주소로 변경 --> http://domain/#/path
            //providers:[{provide:LocationStrategy, useClass:HashLocationStrategy}],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
