import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;
  registerForm: FormGroup;
  constructor(private authService: AuthService,private auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
    this.registerForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      repeatPassword: ["", Validators.required]
    });
  }
  onLogin() {
    this.authService.onLogin(this.formLogin.value);
    this.router.navigateByUrl('/account');
  }

  onRegister() {
    const { email, password, repeatPassword } = this.registerForm.value;

    if (password == repeatPassword) {
      this.auth
        .onRegister({ email, password })
        .then(res => {
          console.log(res);
          this.router.navigateByUrl('/account');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert("Mat khau *eo trung!");
    }
  }
}
