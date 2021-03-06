import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAttendanceRoutingModule } from './viewattendance-routing.module';
import { ViewAttendanceComponent } from './viewattendance.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ViewAttendanceRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [ViewAttendanceComponent]
})
export class ViewAttendanceModule { }
