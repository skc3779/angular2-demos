import { NgModule } from '@angular/core';

import { SharedModule } from '../shared-module/shared.module';
import { PlayerRoutingModule } from './player-routing.module';
import { PlayerListComponent } from './player-list.component';

@NgModule({
  imports: [ PlayerRoutingModule, SharedModule],
  declarations: [PlayerListComponent],
  providers: []
})
export class PlayerModule { }
