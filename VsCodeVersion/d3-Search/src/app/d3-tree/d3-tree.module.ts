import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { d3TreeComponent } from './d3-tree.component';


@NgModule({
  declarations: [
    d3TreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [d3TreeComponent]
})
export class d3TreeModule { }
