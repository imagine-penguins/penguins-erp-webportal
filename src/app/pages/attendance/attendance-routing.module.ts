import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Attendance',
      status: false
    },
    children: [
      {
        path: 'myattendance',
        loadChildren: () => import('./myattendance/myattendance.module').then(m => m.MyAttendanceModule)
      }, {
        path: 'myclass',
        loadChildren: () => import('./myclass/myclass.module').then(m => m.MyClassModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
