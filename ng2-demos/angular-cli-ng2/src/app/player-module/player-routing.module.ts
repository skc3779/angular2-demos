import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlayerListComponent } from './player-list.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'player-list', pathMatch: 'full' }, // 게으른 모듈 로딩을 위한 리다이렉트
    { path: 'player', redirectTo: 'player-list', pathMatch: 'full' },
    { path: 'player-list', component: PlayerListComponent }
  ])],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
