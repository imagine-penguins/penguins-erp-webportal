import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRequestRoutingModule } from './leaverequest-routing.module';
import { LeaveRequestComponent } from './leaverequest.component';
import {SharedModule} from '../../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    LeaveRequestRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [LeaveRequestComponent]
})
export class LeaveRequestModule { }
