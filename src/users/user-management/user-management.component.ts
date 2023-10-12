import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  registerForm !: FormGroup;
  submitted = false;
  confirmSubmitted = false;

  password:any;
  confirmPassword:any;

  show = false;
  confirmShow = false;

  constructor(
    private form: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.password = 'password';
    this.confirmPassword = 'password'; // Add this line
    this.registerForm = this.form.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  

  
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.table(this.registerForm.value);
      this.router.navigate([ '/dashboard' ])
      this.registerForm.reset();
      this.submitted = false;
    }
    else{
    }
  }




  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  confirmOnClick() {
    this.confirmShow = !this.confirmShow;

  }
}
