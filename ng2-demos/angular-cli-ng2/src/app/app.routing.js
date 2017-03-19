"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var parent_component_1 = require('./parent-to-child/parent.component');
var parent_to_child_input_component_1 = require('./parent-to-child-input/parent-to-child-input.component');
var child_to_parent_component_1 = require('./child-to-parent/child-to-parent.component');
var viewchild_component_1 = require('./viewchild/viewchild.component');
var viewchildren_component_1 = require('./viewchildren/viewchildren.component');
var contentchild_component_1 = require('./contentchild/contentchild.component');
var contentchildren_component_1 = require('./contentchildren/contentchildren.component');
var hello_component_1 = require('./hello-service/hello.component');
var oop_component_1 = require('./oop-service/oop.component');
var mock_component_1 = require('./mock-service/mock.component');
var promise_component_1 = require('./promise-serivce/promise.component');
var parent_component_2 = require('./shared-service/parent.component');
var admin_component_1 = require('./admin/admin.component');
/* 제공자 */
var value_provider_component_1 = require('./value-provider/value-provider.component');
var factory_provider_component_1 = require('./factory-provider/factory-provider.component');
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
/* 양방향 바인딩 */
var twoway_ngmodel_component_1 = require('./twoway-ngmodel/twoway-ngmodel.component');
/*해시기반 주소로 변경 포함*/
var common_1 = require('@angular/common');
/*로그인 관련*/
var login_routing_1 = require('./login.routing');
//해시기반 주소로 변경 설정 --> http://domain/#/path
var hashLocationStrategy = false;
/* 9.4 속성지시자 */
var ngclass_component_1 = require('./ngclass/ngclass.component');
var ngstyle_component_1 = require('./ngstyle/ngstyle.component');
/* 9.5 구조지시자 */
var ngif_component_1 = require('./ngif/ngif.component');
var ngswitch_component_1 = require('./ngswitch/ngswitch.component');
var ngfor_component_1 = require('./ngfor/ngfor.component');
/* 9.6 템플릿 지시자 */
var template_ngfor_component_1 = require('./template-ngfor/template-ngfor.component');
var template_input_variables_component_1 = require('./template-input-variables/template-input-variables.component');
var template_reference_variables_component_1 = require('./template-reference-variables/template-reference-variables.component');
/* 10.2.1 커스텀 지시자 */
var custom_directive_component_1 = require('./custom-directive/custom-directive.component');
/* 10.2.4 ElementRef와 Renderer */
var element_rendering_component_1 = require('./element-rendering/element-rendering.component');
/* 10.3.1 지시자에 값 넘기기 */
var pass_to_directive_component_1 = require('./pass-to-directive/pass-to-directive.component');
/* 10.3.2 지시자로부터 응답받기 */
var binding_to_directive_component_1 = require('./binding-to-directive/binding-to-directive.component');
/* 10.3.3 커스텀 속성 지시자 */
var custom_attr_directive_component_1 = require('./custom-attr-directive/custom-attr-directive.component');
/* 10.3.4 커스텀 구조 지시자 */
var custom_structural_directive_component_1 = require('./custom-structural-directive/custom-structural-directive.component');
/* 10.3.5 하이라이트 지시자 */
var highlight_component_1 = require('./highlight-directive/highlight.component');
/* 11.2.1 날짜 파이프*/
var date_expression_component_1 = require('./date-expression/date-expression.component');
/* 11.2.2 날짜 파이트 포멧 */
var date_formats_component_1 = require('./date-formats/date-formats.component');
var date_etc_component_1 = require('./date-etc/date-etc.component');
/* 11.2.2 대소문자파이프 */
var upper_lower2_component_1 = require('./upper-lower/upper-lower2.component');
//컴포넌트와 서비스에 대한 샘플
var basicRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'parent-to-child', component: parent_component_1.NestedParentComponent },
    { path: 'parent-to-child-input', component: parent_to_child_input_component_1.ParentToChildInputComponent },
    { path: 'child-to-parent', component: child_to_parent_component_1.ChildToParentComponent },
    { path: 'view-child', component: viewchild_component_1.ViewchildComponent },
    { path: 'view-children', component: viewchildren_component_1.ViewchildrenComponent },
    { path: 'content-child', component: contentchild_component_1.ContentChildComp },
    { path: 'content-children', component: contentchildren_component_1.ContentChildrenComp },
    { path: 'hello-service', component: hello_component_1.HelloComponent },
    { path: 'oop-service', component: oop_component_1.OopComponent },
    { path: 'mock-service', component: mock_component_1.MockComponent },
    { path: 'promise-service', component: promise_component_1.PromiseComponent },
    { path: 'shared-service', component: parent_component_2.ParentComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'app-value-provider', component: value_provider_component_1.ValueProviderComponent },
    { path: 'app-factory-provider', component: factory_provider_component_1.FactoryProviderComponent },
    { path: 'app-class-provider', component: class_provider_component_1.ClassProviderComponent },
    { path: 'app-alias-provider', component: aliased_class_provider_component_1.AliasedClassProviderComponent },
    { path: 'app-inject-decorator', component: opaque_token_component_1.OpaqueTokenComponent },
    { path: 'app-optional-decorator', component: optional_decorator_component_1.OptionalDecoratorComponent },
    { path: 'app-factory', component: factory_component_1.FactoryComponent },
    { path: 'app-reflective-injector', component: reflective_injector_component_1.ReflectiveInjectorComponent },
    { path: 'app-interpolation', component: interpolation_component_1.InterpolationComponent },
    { path: 'app-oneway-expression', component: oneway_expression_component_1.OnewayExpressionComponent },
    { path: 'app-oneway-statement', component: oneway_statement_component_1.OnewayStatementComponent },
    { path: 'app-twoway-ngmodel', component: twoway_ngmodel_component_1.TwowayNgmodelComponent },
    { path: 'app-ngclass', component: ngclass_component_1.NgclassComponent },
    { path: 'app-ngstyle', component: ngstyle_component_1.NgstyleComponent },
    { path: 'app-ngif', component: ngif_component_1.NgifComponent },
    { path: 'app-ngswitch', component: ngswitch_component_1.NgswitchComponent },
    { path: 'app-ngfor', component: ngfor_component_1.NgForComponent },
    { path: 'app-template-ngfor', component: template_ngfor_component_1.TemplateNgforComponent },
    { path: 'app-template-input-variables', component: template_input_variables_component_1.TemplateInputVariablesComponent },
    { path: 'app-template-reference-variables', component: template_reference_variables_component_1.TemplateReferenceVariablesComponent },
    { path: 'app-custom-directive', component: custom_directive_component_1.CustomDirectiveCmp },
    { path: 'app-element-rendering', component: element_rendering_component_1.ElementRendering },
    { path: 'app-pass-to-directive', component: pass_to_directive_component_1.PassToDirectiveComponent },
    { path: 'app-binding-to-directive', component: binding_to_directive_component_1.BindingToDirectiveComponent },
    { path: 'app-custom-attr-directive', component: custom_attr_directive_component_1.CustomAttrDirectiveCmp },
    { path: 'app-custom-structural-directive', component: custom_structural_directive_component_1.CustomStructuralDirectiveCmp },
    { path: 'app-highlight-directive', component: highlight_component_1.HighlightComponent },
    { path: 'app-date-expression', component: date_expression_component_1.DateExpressionComponent },
    { path: 'app-date-formats', component: date_formats_component_1.DateFormatsComponent },
    { path: 'app-date-etc', component: date_etc_component_1.DateEtcComponent },
    { path: 'app-upper-lower', component: upper_lower2_component_1.UpperLower2Component },
];
// 게이른 모듈 로딩
var lazyRoutes = [
    { path: 'lazy', loadChildren: 'app/player-module/player.module#PlayerModule' }
];
var appRoutes = login_routing_1.loginRoutes.concat(basicRoutes, lazyRoutes);
// 라우딩 모듈 등록방법 1
//export const appRoutingProviders: any[] = [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
// 라우딩 모듈 등록방법 2
// @NgModule({
//   imports:[RouterModule.forRoot(appRoutes)],
//   exports:[RouterModule]
// })
//라우딩 모듈 등록방법 3번 --> 1번 확장
//Guard 추가
exports.appRoutingProviders = [
    login_routing_1.authProviders
];
//해쉬기반 주소변경 여부
if (hashLocationStrategy) {
    exports.appRoutingProviders.push({ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy });
}
exports.AppRoutingModule = router_1.RouterModule.forRoot(appRoutes);
