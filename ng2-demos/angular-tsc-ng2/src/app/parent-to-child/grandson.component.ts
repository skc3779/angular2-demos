/**
 * Created by skc37 on 2017-02-12.
 */

import {Component} from '@angular/core'

@Component({
    selector:'nested-grandson',
    template: require('./grandson.component.html'),
    styles:[`div.grandson{border: 2px dotted #666;padding:10px;margin-top:5px;width:65%;height:65%;}
`]
})

export class NestedGrandsonComponent {

}
