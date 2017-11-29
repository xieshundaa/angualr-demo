import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzTreeModule } from 'ng-tree-antd';
import { NgZorroAntdModule } from 'ng-zorro-antd';


import { OrgComponent } from './org.component';
import { OrgRoutingModule } from './org-routing.module';
import { OrgMngComponent } from './org-mng/org-mng.component';


@NgModule({
  declarations: [
    OrgComponent,
    OrgMngComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NzTreeModule,
    NgZorroAntdModule,
    OrgRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class OrgModule { }
