import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewAttendanceComponent} from './viewattendance.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAttendanceComponent,
    data: {
      breadcrumb: 'View Attendance',
      icon: 'icofont-justify-all bg-c-green',
      breadcrumb_caption: "You can anyone's view attendance",
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewAttendanceRoutingModule { }
