import {Component} from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    //styles: [require('./home.component.css')], -- karma test error 원인 모름
    styles: [`h3 {color: blue; font-weight: 800;}
              .btn {color: red;}`]
})

export class HomeComponent {

    title = 'Hello World';
    clsBtn = 'btn';

    button(e: any): void {
        alert('btn click!');
        console.log('btn click!', e);
    }
}
