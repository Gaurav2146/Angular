import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { FloorComponent } from './floor/floor.component';

const routes: Routes = [
  {path:"",component:FloorComponent},
  {path:"parent",component:ParentComponent},
  {path:"child",component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
