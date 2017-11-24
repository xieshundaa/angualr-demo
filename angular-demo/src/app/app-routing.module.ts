import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkSpaceComponent } from './work-space/work-space.component';


const appRoutes: Routes = [
  { path: 'workspace', component: WorkSpaceComponent },
  { path: '',   redirectTo: '/workspace', pathMatch: 'full' },
  { path: '**', component: WorkSpaceComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
