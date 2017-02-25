import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

import {NestedGrandsonComponent} from './parent-to-child/grandson.component';
import {NestedChildComponent} from './parent-to-child/child.component';
import {NestedParentComponent} from './parent-to-child/parent.component';

import {ChildInputComponent} from './parent-to-child-input/child-input.component'
import {ParentToChildInputComponent} from './parent-to-child-input/parent-to-child-input.component'

import {ChildComponent} from './child-to-parent/child.component'
import {ChildToParentComponent} from './child-to-parent/child-to-parent.component'
import {ViewchildComponent, Item, ItemComponent} from './viewchild/viewchild.component'
import {ViewchildrenComponent, ChildCmp} from './viewchildren/viewchildren.component'

import {ContentChildComp,GroupTitle,ButtonGroup,ChildButtonCmp} from './contentchild/contentchild.component'
import {ContentChildrenComp, Word, WordGroup} from './contentchildren/contentchildren.component'

import {ComponentStyleComponent} from './component-style/component-style.component'
import {FirstDepthComponent} from './component-style/first-depth.component'
import {SecondDepthComponent} from './component-style/second-depth.component'

//service
import {HelloComponent} from './hello/hello.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        NestedGrandsonComponent,
        NestedChildComponent,
        NestedParentComponent,
        ChildInputComponent,
        ParentToChildInputComponent,
        ChildComponent,
        ChildToParentComponent,
        ViewchildComponent, Item, ItemComponent,
        ViewchildrenComponent, ChildCmp,
        ContentChildComp,GroupTitle,ButtonGroup,ChildButtonCmp,
        ContentChildrenComp, Word, WordGroup,
        ComponentStyleComponent,
        FirstDepthComponent,
        SecondDepthComponent,
        HelloComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
