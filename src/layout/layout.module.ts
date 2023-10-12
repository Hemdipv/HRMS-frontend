import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CDBFreeModule } from 'ng-cdbangular';
import { AlertModule, ButtonModule } from 'ng-cdbangular';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
      
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
        RouterModule.forChild(routes),
        CDBFreeModule,
        AlertModule,
    ButtonModule,
  ],
  exports: [SidebarComponent]

})
export class LayoutModule { }
