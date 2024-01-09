import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { FloorComponent } from './floor/floor.component';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    PdfViewerComponent,
    FloorComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
