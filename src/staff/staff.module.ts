import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';


@NgModule({
  declarations: [
    AddStaffComponent,
    ManageStaffComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
  ]
})
export class StaffModule { }
