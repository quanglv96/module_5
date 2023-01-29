export class Form {
  user:string;
  password:string;
  email:string;
  country:string;
  gender:string;
  phone:string;

  constructor(user: string, password: string, email: string, country: string, gender: string, phone: string) {
    this.user = user;
    this.password = password;
    this.email = email;
    this.country = country;
    this.gender = gender;
    this.phone = phone;
  }

  toString(){
    return `name=${this.user}, phone=${this.phone}`
  }
}
