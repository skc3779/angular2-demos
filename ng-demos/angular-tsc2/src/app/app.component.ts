import {Component, OnInit} from '@angular/core';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/main.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
    /*,
     styles:['div {background-color: #7f7f7f;}']
    */
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
