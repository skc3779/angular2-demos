/**
 * Created by skc37 on 2017-02-12.
 */

import {Component} from '@angular/core'

@Component({
    selector:'nested-parent',
    template: require('./parent.component.html'),
    styles:[`div.parent {border: 2px solid #666;padding:10px;width:400px;height:200px;}
`]
})

export class NestedParentComponent {

}
