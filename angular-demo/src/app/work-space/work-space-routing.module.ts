import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkSpaceComponent } from './work-space.component';


const workSpaceRoutes: Routes = [
  {
    path: 'workspace',
    component: WorkSpaceComponent,
    children: [
      { path: '', redirectTo: 'org', pathMatch: 'full' },
      {
        path: 'user',
        loadChildren: '../user/user.module#UserModule'
       },
       {
         path: 'org',
         loadChildren: '../org/org.module#OrgModule'
       }
    ]



  }
  // { path: '',   redirectTo: '/workspace', pathMatch: 'full' },
  // { path: '**', component: WorkSpaceComponent }
];

@NgModule({
  imports: [
      RouterModule.forChild(
        workSpaceRoutes
      )
    ],
  exports: [
      RouterModule
  ]
})
export class WorkSpaceRoutingModule {}
