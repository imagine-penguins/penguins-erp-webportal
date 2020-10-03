import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeAttendanceRoutingModule } from './takeattendance-routing.module';
import { TakeAttendanceComponent } from './takeattendance.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TakeAttendanceRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [TakeAttendanceComponent]
})
export class TakeAttendanceModule { }
