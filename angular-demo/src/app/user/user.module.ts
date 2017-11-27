import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';


import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserTableComponent } from './user-table/user-table.component';


@NgModule({
  declarations: [
    UserComponent,
    UserTableComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgZorroAntdModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }
