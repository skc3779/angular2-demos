import { Component } from '@angular/core';

@Component({
  selector: 'player-list',
  template: `
  <p>지시자와 파이프를 공유 모듈화</p>
  <div highlight>{{player|myupper}}</div>
`
})
export class PlayerListComponent {
  player: string = 'player!';
}
