import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NestedParentComponent} from './parent-to-child/parent.component';
import {ParentToChildInputComponent} from './parent-to-child-input/parent-to-child-input.component'
import {ChildToParentComponent} from './child-to-parent/child-to-parent.component'
import {ViewchildComponent} from './viewchild/viewchild.component'
import {ViewchildrenComponent} from './viewchildren/viewchildren.component'
import {ContentChildComp} from './contentchild/contentchild.component'
import {ContentChildrenComp} from './contentchildren/contentchildren.component'
import {ComponentStyleComponent} from './component-style/component-style.component'

import {HelloComponent} from './hello/hello.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'parent', component: NestedParentComponent },
    { path: 'parent/input', component: ParentToChildInputComponent },
    { path: 'child/parent', component: ChildToParentComponent },
    { path: 'viewchild', component: ViewchildComponent },
    { path: 'viewchildren', component: ViewchildrenComponent },
    { path: 'contentchild', component: ContentChildComp },
    { path: 'contentchildren', component: ContentChildrenComp },
    { path: 'componentstyle', component: ComponentStyleComponent },
    { path: 'hello', component: HelloComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
