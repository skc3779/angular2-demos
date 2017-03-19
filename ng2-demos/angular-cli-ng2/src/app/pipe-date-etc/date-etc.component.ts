import { Component } from '@angular/core';

@Component({
  selector: 'app-date-etc',
  template: `
<p>01 - 시대(era) : {{today | date:'G'}} &rarr; {{today | date:'GGGG'}}</p>
<p>02 - 요일(weekday) : {{today | date:'E'}} &rarr; {{today | date:'EEEE'}}</p>
<p>03 - 타임존(태평양 표준시간 {{today | date:'z'}} &rarr; {{today | date:'Z'}}</p>
<p>04 - 타임존(GMT-8:00){{today | date:'yy년 MM월 dd일 HH시 mm분 ss초'}}</p>
<p>05 - {{today}}</p>
<p>06 - {{childrensDay}}</p>
<p>07 - {{childrensDay | date:'yyyy년 MM월 dd일'}}</p>
<p>08 - {{liberationDay | date:'y-MM-dd'}}</p>

`
})
export class DateEtcComponent {
  today: number = Date.now();
  childrensDay: Date = new Date(2017, 4, 5, 12, 13, 14, 123);// 2017-05-05 12:13:14 123(밀리세컨드)
  liberationDay: Date = new Date("2017-08-15 12:13:14"); // 2017-08-15 12:13:14
}
