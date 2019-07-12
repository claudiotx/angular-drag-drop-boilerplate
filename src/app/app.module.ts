import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragComponent } from './drag/drag.component';
import { Drop1Component } from './drop1/drop1.component';
import { Drop2Component } from './drop2/drop2.component';
import { Drag1Component } from './drag1/drag1.component';

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    Drop1Component,
    Drop2Component,
    Drag1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
