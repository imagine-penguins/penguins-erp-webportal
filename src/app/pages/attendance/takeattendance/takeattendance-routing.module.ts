import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TakeAttendanceComponent} from './takeattendance.component';

const routes: Routes = [
  {
    path: '',
    component: TakeAttendanceComponent,
    data: {
      breadcrumb: 'Take Attendance',
      icon: 'icofont-justify-all bg-c-green',
      breadcrumb_caption: 'You can take attendance by switching classes',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeAttendanceRoutingModule { }
