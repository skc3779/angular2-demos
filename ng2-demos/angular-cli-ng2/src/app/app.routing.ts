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

const appRoutes: Routes = [
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
  // 게이른 모듈 로딩
  { path: 'lazy', loadChildren: 'app/player-module/player.module#PlayerModule' },
  { path: '**', component: NotFoundComponent}
];

// 라우딩 모듈 등록방법 1
//export const appRoutingProviders: any[] = [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// 라우딩 모듈 등록방법 2
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}

