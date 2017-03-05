var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OnewayStatementComponent } from './oneway-statement/oneway-statement.component';
import { ContactComponent } from './oneway-statement/contact.component';
import { MyClickDirective } from './oneway-statement/my-click.directive';
import { OnewayExpressionComponent } from './oneway-expression/oneway-expression.component';
import { TwowayNgmodelComponent } from './twoway-ngmodel/twoway-ngmodel.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgForComponent } from './ngfor/ngfor.component';
import { TemplateInputVariablesComponent } from './template-input-variables/template-input-variables.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TemplateNgforComponent } from './template-ngfor/template-ngfor.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent, IntroComponent, InterpolationComponent,
                OnewayStatementComponent,
                ContactComponent, MyClickDirective,
                OnewayExpressionComponent, TwowayNgmodelComponent,
                NgclassComponent, NgstyleComponent, NgifComponent, NgswitchComponent, NgForComponent,
                TemplateInputVariablesComponent, TemplateReferenceVariablesComponent,
                TemplateNgforComponent
            ],
            imports: [
                BrowserModule,
                CommonModule,
                FormsModule,
                routing
            ],
            providers: [
                appRoutingProviders
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/seokangchun/githubProjects/angular2-demos/ng2-book/template/src/app/app.module.js.map