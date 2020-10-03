import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAttendanceRoutingModule } from './myattendance-routing.module';
import { MyAttendanceComponent } from './myattendance.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MyAttendanceRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [MyAttendanceComponent]
})
export class MyAttendanceModule { }
