import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    private _sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this._sharedService.loading$.next(true);
    this._authService
      .login(this.usernameCtrl.value, this.passwordCtrl.value)
      .subscribe(
        (res) => {
          this._sharedService.loading$.next(false);
          this._authService.setToken(res.token);
          this.router.navigateByUrl('/home');
        },
        (error) => {
          this._sharedService.loading$.next(false);
        }
      );
  }

  get usernameCtrl() {
    return this.loginForm.get('username') as FormControl;
  }
  get passwordCtrl() {
    return this.loginForm.get('password') as FormControl;
  }
}
