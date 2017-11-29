import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { WorkSpaceRoutingModule } from './work-space-routing.module';
import { WorkSpaceComponent } from './work-space.component';
import { LeftNavComponent } from '../left-nav/left-nav.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';

import { EventBusService } from '../common/services/event-bus.service';

@NgModule({
  declarations: [
    WorkSpaceComponent,
    LeftNavComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    WorkSpaceRoutingModule
  ],
  providers: [EventBusService],
  bootstrap: []
})
export class WorkspaceModule { }
