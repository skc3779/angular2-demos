import { Directive } from '@angular/core';

@Directive({
  selector: '[my-click2]',
  host: { '(click)': 'onClick()' }
})
export class MyClick2Directive {
  onClick() {
    alert('hello');
  }
}
