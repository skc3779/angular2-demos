import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          부모로 이벤트 메세지 보내기
          <div class="resource"><div class="parent">부모<br>
              클릭수 : {{cntClick}}<br>
              자식상태 : {{active}}
              <child (outputProperty)="outputEvent($event)"></child>
          </div></div>`,
  styles: [`div.parent{border: 2px solid #666;padding:10px;width:400px;height:200px;}`]
})
export class ChildToParentComponent {

  cntClick = 0;
  active = false;

  outputEvent(active: boolean) {
    this.cntClick++;
    this.active = active;//자식으로 부터 받은 값
  }

}
