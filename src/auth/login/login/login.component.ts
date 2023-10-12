import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  registerForm !: FormGroup;
  submitted = false;

  password:any;

  show = false;

  constructor(
    private form: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.password = 'password';
    this.registerForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    }
    );
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
}
