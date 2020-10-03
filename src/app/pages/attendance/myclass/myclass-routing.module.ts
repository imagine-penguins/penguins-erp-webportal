import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'My Class',
      status: false
    },
    children: [
      {
        path: 'takeattendance',
        loadChildren: () => import('./takeattendance/takeattendance.module').then(m => m.TakeAttendanceModule)
      }, {
        path: 'viewattendance',
        loadChildren: () => import('./viewattendance/viewattendance.module').then(m => m.ViewAttendanceModule)
      }, {
        path: 'leaverequest',
        loadChildren: () => import('./leaverequest/leaverequest.module').then(m => m.LeaveRequestModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyClassRoutingModule { }
