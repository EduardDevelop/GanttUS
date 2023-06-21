import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanttsComponent } from './Components/gantt/gantt.component';
import { TimeLineComponent } from './Components/time-line/time-line.component';

const routes: Routes = [
  {component:GanttsComponent, path:"Gantt"},
  {component:TimeLineComponent, path:"TimeLine"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
