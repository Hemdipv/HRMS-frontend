import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/layout/layout.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
      
    children: [
      {
        path: 'add-staff',
        component: AddStaffComponent
      },
      {
        path: 'manage-staff',
        component: ManageStaffComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
