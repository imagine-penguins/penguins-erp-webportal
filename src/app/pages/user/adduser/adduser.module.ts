import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './adduser-routing.module';
import { AddUserComponent } from './adduser.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AddUserRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [AddUserComponent]
})
export class AddUserModule { }
