import { Component, TemplateRef } from '@angular/core';

@Component({

  selector: 'app-oneway-expression',
  template: `
  <h3>바인딩 단방향 바인딩 표현식</h3>
  {{greeting}}<br>
  <input type="text" [value]="greeting">
  <input type="text" bind-value="greeting">
  <input type="text" [attr.value]="greeting">`
})
export class OnewayExpressionComponent {

  greeting: string="hello";

}
