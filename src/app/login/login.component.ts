import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.user === 'admin' && this.password === '123') {
      this.router.navigate(['/user']); // Chuyển hướng đến trang dashboard nếu đăng nhập thành công
    } else {
      this.loginFailed = true;
    }
  }
}
