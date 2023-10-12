import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    // loadChildren: () => import('./registerpage/registerpage.module').then(m => m.RegisterpageModule)
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  { 
    path: '',
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)
  },
  { 
    path: '',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  { 
    path: '',
    loadChildren: () => import('./hr/hr.module').then(m => m.HrModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
