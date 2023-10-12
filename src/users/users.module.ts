import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserPermissionComponent } from './user-permission/user-permission.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserPermissionComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class UsersModule { }
