import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor() {
  }
  infoLogin=new FormGroup({
    user: new FormControl(),
    password: new FormControl()
  })
  checkLogin(){
    if(this.infoLogin.value.user=="admin"){
      if(this.infoLogin.value.password=="123456"){
        alert("Đăng nhập thành công")
      }else {
        alert("mk sai")
      }
    }else {
      alert("tên dăng nhập sai")
    }
  }
}
