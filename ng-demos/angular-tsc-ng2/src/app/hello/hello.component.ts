/**
 * Created by skc37 on 2017-02-12.
 */
import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
    selector: 'hello',
    template: `<div class="resource">{{welcome}}</div>`,
    providers: [HelloService]
})
export class HelloComponent {
    welcome: string;

    constructor(helloService: HelloService) {
        this.welcome = helloService.sayHello();

    }
}
