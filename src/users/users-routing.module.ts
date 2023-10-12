import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/layout/layout.component';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
      
    children: [
      {
        path: 'user-permission',
        component: UserPermissionComponent
      },
      {
        path: 'user-management',
        component: UserManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
