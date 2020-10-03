import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyAttendanceComponent} from './myattendance.component';

const routes: Routes = [
  {
    path: '',
    component: MyAttendanceComponent,
    data: {
      breadcrumb: 'My Attendance',
      icon: 'icofont-justify-all bg-c-green',
      breadcrumb_caption: '',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAttendanceRoutingModule { }
