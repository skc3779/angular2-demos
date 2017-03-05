import { Component } from '@angular/core';
/* 단방향 삽입식 */

@Component({
  selector: 'app-interpolation',
  template: `
  {{1 + 1}} <br>
  {{hello()+" world!"}} <br>
  {{hello()==="hello"?"YES":"NO"}} <br>
  {{basket.items[0]}} <br>
  {{goodbye}} <br>

  <input type="text" value="{{myclass}}">
  <br>
  <input type="text" [value]="myclass">
  <button class="{{myclass}}">{{myclass}}</button>`,
  styles: [`
  .my-italic { font-style: italic; }`]
})
export class InterpolationComponent {

  hello() { return "hello"; }

  basket = {
    items: ['apple', 'grapee', 'orange']
  };

  goodbye: string;
  constructor() {
    let x: string = '굿';
    let y: string = '바이';
    this.goodbye = `${x + y}`;
  }

  myclass = "my-italic";

}
