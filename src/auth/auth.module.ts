import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import{RegisterpagecomponentComponent} from './registerpage/registerpagecomponent/registerpagecomponent.component'

import{LoginComponent} from './login/login/login.component'
import { BrowserModule } from '@angular/platform-browser';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' // Add this line

  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterpagecomponentComponent
  }
 
 
]

@NgModule({
  
  declarations: [RegisterpagecomponentComponent, LoginComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
