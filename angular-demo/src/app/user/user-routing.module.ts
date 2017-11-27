import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserTableComponent } from './user-table/user-table.component';


const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
          {
            path: '',
            redirectTo: 'usertable',
            pathMatch: 'full'
          },
          {
            path: 'usertable',
            component: UserTableComponent
          }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(
          userRoutes
        )
      ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {}
