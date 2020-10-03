import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyClassRoutingModule } from './myclass-routing.module';
import { MyClassComponent } from './myclass.component';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MyClassRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [MyClassComponent]
})
export class MyClassModule { }
