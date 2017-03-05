import {ModuleWithProviders, NgModule}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { NestedParentComponent } from './parent-to-child/parent.component';
import {ParentToChildInputComponent} from './parent-to-child-input/parent-to-child-input.component';
import {ChildToParentComponent} from './child-to-parent/child-to-parent.component';
import {ViewchildComponent} from './viewchild/viewchild.component';
import {ViewchildrenComponent} from './viewchildren/viewchildren.component';
import {ContentChildComp} from './contentchild/contentchild.component';
import {ContentChildrenComp} from './contentchildren/contentchildren.component';
import {HelloComponent} from './hello-service/hello.component';
import {OopComponent} from './oop-service/oop.component';
import {MockComponent} from './mock-service/mock.component';
import {PromiseComponent} from './promise-serivce/promise.component';
import {ParentComponent} from './shared-service/parent.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AdminComponent} from './admin/admin.component';

/* 제공자 */
import {ValueProviderComponent} from './value-provider/value-provider.component';
import {FactoryProviderComponent} from './factory-provider/factory-provider.component';
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

/* 양방향 바인딩 */
import {TwowayNgmodelComponent} from './twoway-ngmodel/twoway-ngmodel.component';

/*해시기반 주소로 변경 포함*/
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

/*로그인 관련*/
import { loginRoutes, authProviders } from './login.routing';

//해시기반 주소로 변경 설정 --> http://domain/#/path
let hashLocationStrategy: boolean = false;

//컴포넌트와 서비스에 대한 샘플
const basicRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'parent-to-child', component: NestedParentComponent },
  { path: 'parent-to-child-input', component: ParentToChildInputComponent },
  { path: 'child-to-parent', component: ChildToParentComponent },
  { path: 'view-child', component: ViewchildComponent },
  { path: 'view-children', component: ViewchildrenComponent },
  { path: 'content-child', component: ContentChildComp },
  { path: 'content-children', component: ContentChildrenComp },
  { path: 'hello-service', component: HelloComponent },
  { path: 'oop-service', component: OopComponent },
  { path: 'mock-service', component: MockComponent },
  { path: 'promise-service', component: PromiseComponent },
  { path: 'shared-service', component: ParentComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'app-value-provider', component: ValueProviderComponent},
  { path: 'app-factory-provider', component: FactoryProviderComponent},
  { path: 'app-class-provider', component: ClassProviderComponent},
  { path: 'app-alias-provider', component: AliasedClassProviderComponent},
  { path: 'app-inject-decorator', component: OpaqueTokenComponent},
  { path: 'app-optional-decorator', component: OptionalDecoratorComponent},
  { path: 'app-factory', component: FactoryComponent},
  { path: 'app-reflective-injector', component: ReflectiveInjectorComponent},
  { path: 'app-interpolation', component: InterpolationComponent},
  { path: 'app-oneway-expression', component: OnewayExpressionComponent},
  { path: 'app-oneway-statement', component: OnewayStatementComponent},
  { path: 'app-twoway-ngmodel', component: TwowayNgmodelComponent},
  //{ path: '**', component: NotFoundComponent}
];

// 게이른 모듈 로딩
const lazyRoutes: Routes = [
  { path: 'lazy', loadChildren: 'app/player-module/player.module#PlayerModule' }
];

const appRoutes: Routes = [
  // 로그인 라우팅
  ...loginRoutes,
  // 컴포넌트와 서비스에 대한 라우팅
  ...basicRoutes,
  // 게이른 모듈 로딩 라우팅
  ...lazyRoutes
];

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
export const appRoutingProviders: any[] = [
  authProviders
];

//해쉬기반 주소변경 여부
if(hashLocationStrategy){
  appRoutingProviders.push({provide: LocationStrategy, useClass: HashLocationStrategy});
}

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);


