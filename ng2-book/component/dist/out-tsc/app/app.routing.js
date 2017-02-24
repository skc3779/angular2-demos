import { RouterModule } from '@angular/router';
import { IntroComponent } from './intro.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { ParentToChildInputsComponent } from './parent-to-child-inputs/parent-to-child-inputs.component';
import { ParentToChildInputComponent } from './parent-to-child-input/parent-to-child-input.component';
import { ComponentStyleComponent } from './component-style/component-style.component';
import { NestedParentComponent } from './nested-component/parent.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { HelloComponent } from './hello/hello.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ContentChildrenComp } from './contentchildren/contentchildren.component';
import { ContentChildComp } from './contentchild/contentchild.component';
var appRoutes = [
    { path: '', component: IntroComponent },
    { path: 'child-to-parent', component: ChildToParentComponent },
    { path: 'parent-to-child-inputs', component: ParentToChildInputsComponent },
    { path: 'parent-to-child-input', component: ParentToChildInputComponent },
    { path: 'component-style', component: ComponentStyleComponent },
    { path: 'nested-component', component: NestedParentComponent },
    { path: 'viewchild', component: ViewchildComponent },
    { path: 'hello', component: HelloComponent },
    { path: 'viewchildren', component: ViewchildrenComponent },
    { path: 'contentchild', component: ContentChildComp },
    { path: 'contentchildren', component: ContentChildrenComp },
];
export var appRoutingProviders = [];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=C:/Sources_m/angular2-domes/ng2-book/component/src/app/app.routing.js.map