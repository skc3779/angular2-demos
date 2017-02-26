import {Component} from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('./home.component.css')]
})

export class HomeComponent {

    title = 'Hello World';
    clsBtn = 'btn';

    button(e: any): void {
        alert('btn click!');
        console.log('btn click!', e);
    }
}
