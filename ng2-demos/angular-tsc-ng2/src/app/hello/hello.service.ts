/**
 * Created by skc37 on 2017-02-12.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
    sayHello(){
        return "Hello 서비스!";
    }
    constructor() {}
}
