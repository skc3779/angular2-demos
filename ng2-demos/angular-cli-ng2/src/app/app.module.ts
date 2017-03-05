import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent } from './app.component';

//해시기반 주소로 변경
//import {LocationStrategy, HashLocationStrategy} from '@angular/common'

// 라우딩 모듈 등록방법 1과 2번
import {AppRoutingModule, appRoutingProviders} from './app.routing';
import {HomeComponent } from './home/home.component';
import {AboutComponent } from './about/about.component';

/* 부모에서 자식확장 */
import {NestedParentComponent } from './parent-to-child/parent.component';
import {NestedChildComponent } from './parent-to-child/child.component';
import {NestedGrandsonComponent } from './parent-to-child/grandson.component';

import {ChildInputComponent} from './parent-to-child-input/child-input.component';
import {ParentToChildInputComponent} from './parent-to-child-input/parent-to-child-input.component';

/* 자식에서 부모으로 */
import {ChildComponent} from './child-to-parent/child.component';
import {ChildToParentComponent} from './child-to-parent/child-to-parent.component';

import {ViewchildComponent, Item, ItemComponent} from './viewchild/viewchild.component';
import {ViewchildrenComponent, ChildCmp} from './viewchildren/viewchildren.component';

import {ContentChildComp,GroupTitle,ButtonGroup,ChildButtonCmp} from './contentchild/contentchild.component';
import {ContentChildrenComp, Word, WordGroup} from './contentchildren/contentchildren.component';

import {HelloComponent} from './hello-service/hello.component';
import {OopComponent} from './oop-service/oop.component';
import {MockComponent} from './mock-service/mock.component';

import {PromiseComponent} from './promise-serivce/promise.component';
import {ListComponent} from './promise-serivce/list.component';
import {CarComponent} from './shared-service/car.component';
import {TaxiComponent} from './shared-service/taxi.component';
import {ParentComponent} from './shared-service/parent.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';

/* 특징 모듈 */
import { MemberModule } from './member-module/member.module';
import { PlayerModule } from './player-module/player.module';

/* 로그인 */
import { LoginComponent } from './login.component';

/* 라우팅 */
import { ChildrenModule } from './children-route/children.module';

/* 제공자 */
import {ValueProviderComponent} from './value-provider/value-provider.component';
import {FactoryProviderComponent} from './factory-provider/factory-provider.component';
import {Engine, Speedmeter} from './factory-provider/car.service';
import {ClassProviderComponent} from './class-provider/class-provider.component';
import {AliasedClassProviderComponent} from './class-provider/aliased-class-provider.component';

/* 불투명 토큰 제공자 */
import {OpaqueTokenComponent} from './opaque-token/opaque-token.component';

/*선택적 장식자를 이요한 의존성 주입*/
import {OptionalDecoratorComponent} from './optional-decorator/optional-decorator.component';

/*팩토리 패턴을 이용한 객체 주입*/
import {FactoryComponent} from './factory/factory.component';

/*주입기를 이용한 객체 생성*/
import {ReflectiveInjectorComponent} from './reflective-injector/reflective-injector.component';

/* 바인딩 단방향 삽입식 */
import {InterpolationComponent} from './interpolation/interpolation.component';

/* 바인딩 단방향 바인딩 표현식 */
import {OnewayExpressionComponent} from './oneway-expression/oneway-expression.component';

/* 어트리뷰트, 클래스 스타일 이벤트 바인딩 */
import {OnewayStatementComponent} from './oneway-statement/oneway-statement.component';
import {ContactComponent} from './oneway-statement/contact.component';
import {MyClickDirective} from './oneway-statement/my-click.directive';

/* 양방향 바인딩 */
import {TwowayNgmodelComponent} from './twoway-ngmodel/twoway-ngmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NestedChildComponent,
    NestedParentComponent,
    NestedGrandsonComponent,
    ChildInputComponent,
    ParentToChildInputComponent,
    ChildComponent,
    ChildToParentComponent,
    ViewchildComponent, Item, ItemComponent,
    ViewchildrenComponent, ChildCmp,
    ContentChildComp,GroupTitle,ButtonGroup,ChildButtonCmp,
    ContentChildrenComp, Word, WordGroup,
    HelloComponent,
    OopComponent,
    MockComponent,
    PromiseComponent,
    ListComponent,
    CarComponent,
    TaxiComponent,
    ParentComponent,
    NotFoundComponent,
    LoginComponent,
    AdminComponent,
    ValueProviderComponent,
    FactoryProviderComponent,
    ClassProviderComponent,
    AliasedClassProviderComponent,
    OpaqueTokenComponent,
    OptionalDecoratorComponent,
    FactoryComponent,
    ReflectiveInjectorComponent,
    InterpolationComponent,
    OnewayExpressionComponent,
    OnewayStatementComponent,
    ContactComponent,
    MyClickDirective,
    TwowayNgmodelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule, // 라우딩 모듈 등록방법 1과 3번
    MemberModule, // 하위모듈
    PlayerModule,  // 하위모듈 및 공유
    //가드(guard) : 라우팅시 접근을 제어하는 방법
    ChildrenModule
  ],
  providers: [appRoutingProviders,
    Engine, Speedmeter], // 라우딩 모듈 등록방법 1과 3번
  //해시기반 주소로 변경 --> http://domain/#/path
  //providers:[{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]

})
export class AppModule { }
