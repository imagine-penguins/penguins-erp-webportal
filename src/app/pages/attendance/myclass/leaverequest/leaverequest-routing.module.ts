import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaveRequestComponent} from './leaverequest.component';

const routes: Routes = [
  {
    path: '',
    component: LeaveRequestComponent,
    data: {
      breadcrumb: 'Leave Request',
      icon: 'icofont-justify-all bg-c-green',
      breadcrumb_caption: "You can anyone's leave request",
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRequestRoutingModule { }
