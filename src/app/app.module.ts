import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragComponent } from './drag/drag.component';
import { Drop1Component } from './drop1/drop1.component';
import { Drop2Component } from './drop2/drop2.component';
import { Drag1Component } from './drag1/drag1.component';

import { ComponentResolverService } from './component-resolver.service';
import { FancyElementComponent } from './fancy-element/fancy-element.component';
import { PrettyElementComponent } from './pretty-element/pretty-element.component';
import { ComponentWrapperComponent } from './component-wrapper/component-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    Drop1Component,
    Drop2Component,
    Drag1Component,
    FancyElementComponent,
    PrettyElementComponent,
    ComponentWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [ComponentResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
