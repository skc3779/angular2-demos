import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  template: `<button my-click2> onClick() </button>`
})
export class CustomDirectiveCmp {
  constructor() { }
}
