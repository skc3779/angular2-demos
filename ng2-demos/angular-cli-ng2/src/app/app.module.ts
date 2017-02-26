import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent } from './app.component';
// 라우딩 모듈 등록방법 1
//import {routing, appRoutingProviders} from './app.routing';
// 라우딩 모듈 등록방법 2
import {AppRoutingModule} from './app.routing';
import {HomeComponent } from './home/home.component';
import {AboutComponent } from './about/about.component';

import {NestedParentComponent } from './parent-to-child/parent.component';
import {NestedChildComponent } from './parent-to-child/child.component';
import {NestedGrandsonComponent } from './parent-to-child/grandson.component';

import {ChildInputComponent} from './parent-to-child-input/child-input.component';
import {ParentToChildInputComponent} from './parent-to-child-input/parent-to-child-input.component';

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

/* 특징 모듈 */
import { MemberModule } from './member-module/member.module';
import { PlayerModule } from './player-module/player.module';

// 해시기반 주소로 변경
//import {LocationStrategy, HashLocationStrategy} from '@angular/common'

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule, // 라우딩 모듈 등록방법 2
    //routing // 라우딩 모듈 등록방법 1
    MemberModule, // 하위모듈
    PlayerModule  // 하위모듈 및 공유
  ],
  //providers: [appRoutingProviders], // 라우딩 모듈 등록방법 1
  //해시기반 주소로 변경 --> http://domain/#/path
  //providers:[{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]

})
export class AppModule { }
