import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from './adduser.component';

const routes: Routes = [
  {
    path: '',
    component: AddUserComponent,
    data: {
      breadcrumb: 'Add User',
      icon: 'icofont-justify-all bg-c-green',
      breadcrumb_caption: 'You can add more users (Employee, Student and Parents)',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUserRoutingModule { }
