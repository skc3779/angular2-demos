import { Component } from '@angular/core';

@Component({
  selector: 'app-chaining-pipes',
  template: `
  <div>{{apple|uppercase|lowercase|uppercase|lowercase}}</div>
  <div>{{ (ap | i18nSelect:fruit1) | uppercase }}</div>
  `
})
export class ChainingPipesComponent{
  apple = "APPLE";

  fruit1: any = {
    'ap': 'apple',
    'APPLE': '사과입니다.',
  }
}
