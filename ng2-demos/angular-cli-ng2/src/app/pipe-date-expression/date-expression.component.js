"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DateExpressionComponent = (function () {
    function DateExpressionComponent() {
        this.todayUTC = Date.now(); // UTC 방식
        this.todayDateObject = new Date(); //Dateobject 방식
        this.todayISO = (new Date()).toISOString(); // ISO 방식
    }
    DateExpressionComponent = __decorate([
        core_1.Component({
            selector: 'app-date-expression',
            template: "\n            <p>01 - {{todayUTC}}</p>\n            <p>02 - {{todayDateObject}}</p>\n            <p>03 - {{todayISO}}</p>\n            <p>04 - {{todayUTC | date}}</p>\n            <p>05 - {{todayDateObject | date}}</p>\n            <p>06 - {{todayISO | date}}</p>"
        })
    ], DateExpressionComponent);
    return DateExpressionComponent;
}());
exports.DateExpressionComponent = DateExpressionComponent;
