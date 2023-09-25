import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    lastName: '',
    firstName: '',
    age: null,
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  
  
  onSubmit() {
    // Xử lý dữ liệu đăng ký ở đây, kiểm tra password và confirmPassword nếu cần
    if (this.user.password !== this.user.confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }

    console.log('Dữ liệu đăng ký:', this.user.lastName, this.user.firstName, this.user.age, this.user.address, this.user.phoneNumber, this.user.email, this.user.password);
  }
}
