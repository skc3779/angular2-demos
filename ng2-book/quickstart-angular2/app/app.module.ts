// library import
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// main import
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }