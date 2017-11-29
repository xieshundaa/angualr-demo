import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgComponent } from './org.component';
import { OrgMngComponent } from './org-mng/org-mng.component';


const orgRoutes: Routes = [
    {
        path: '',
        component: OrgComponent,
        children: [
          {
            path: '',
            redirectTo: 'orgmng',
            pathMatch: 'full'
          },
          {
            path: 'orgmng',
            component: OrgMngComponent
          }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(
          orgRoutes
        )
      ],
    exports: [
        RouterModule
    ]
})
export class OrgRoutingModule {}
