"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DateEtcComponent = (function () {
    function DateEtcComponent() {
        this.today = Date.now();
        this.childrensDay = new Date(2017, 4, 5, 12, 13, 14, 123); // 2017-05-05 12:13:14 123(밀리세컨드)
        this.liberationDay = new Date("2017-08-15 12:13:14"); // 2017-08-15 12:13:14
    }
    DateEtcComponent = __decorate([
        core_1.Component({
            selector: 'app-date-etc',
            template: "\n<p>01 - \uC2DC\uB300(era) : {{today | date:'G'}} &rarr; {{today | date:'GGGG'}}</p>\n<p>02 - \uC694\uC77C(weekday) : {{today | date:'E'}} &rarr; {{today | date:'EEEE'}}</p>\n<p>03 - \uD0C0\uC784\uC874(\uD0DC\uD3C9\uC591 \uD45C\uC900\uC2DC\uAC04 {{today | date:'z'}} &rarr; {{today | date:'Z'}}</p>\n<p>04 - \uD0C0\uC784\uC874(GMT-8:00){{today | date:'yy\uB144 MM\uC6D4 dd\uC77C HH\uC2DC mm\uBD84 ss\uCD08'}}</p>\n<p>05 - {{today}}</p>\n<p>06 - {{childrensDay}}</p>\n<p>07 - {{childrensDay | date:'yyyy\uB144 MM\uC6D4 dd\uC77C'}}</p>\n<p>08 - {{liberationDay | date:'y-MM-dd'}}</p>\n\n"
        })
    ], DateEtcComponent);
    return DateEtcComponent;
}());
exports.DateEtcComponent = DateEtcComponent;
