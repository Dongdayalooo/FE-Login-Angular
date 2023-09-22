import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user = {
    hoTen: '',
    tuoi: null,
    queQuan: '',
    ngonNgu: []
  };

  queQuanOptions = [
    { label: 'Hà Nội', value: 'Hà Nội' },
    { label: 'Hải Phòng', value: 'Hải Phòng' },
    { label: 'Tp.Hồ Chí Minh', value: 'Tp.Hồ Chí Minh' }
  ];

  ngonNguOptions = [
    { label: 'C#', value: 'C#' },
    { label: 'Nodejs', value: 'Nodejs' },
    { label: 'Angular 2++', value: 'Angular 2++' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Thực hiện xử lý khi form hợp lệ (đã nhập đúng dữ liệu)
      console.log('Form submitted:', form.value);
    } else {
      // Xử lý khi form không hợp lệ
      console.log('Form is invalid. Please check your input.');
    }
  }
}
