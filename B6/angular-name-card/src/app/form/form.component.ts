import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Form} from "../model/form";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newUser = new FormGroup({
    user: new FormControl<any>('',[Validators.required]),
    password: new FormControl<any>('',[Validators.required ,Validators.pattern("^[a-zA-Z0-9]{6,}")]),
    email: new FormControl(),
    country: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl<any>('',[Validators.required,Validators.pattern("^[0-9]{10}")]),
  })
  @Input() toString: String = "";

  constructor() {
  }

  onSubmit(): void {
    let form = new Form(this.newUser.value.user, this.newUser.value.password, this.newUser.value.email, this.newUser.value.country, this.newUser.value.gender, this.newUser.value.phone);
    this.toString = form.toString();
  }
}
