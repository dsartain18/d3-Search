import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {d3TreeComponent} from './d3-tree/d3-tree.component'


@NgModule({
  declarations: [
    AppComponent,
    d3TreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
