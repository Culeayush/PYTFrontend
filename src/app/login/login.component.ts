import { Component, OnInit } from '@angular/core';
import { loginValidator } from 'backendService/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){

  var email = document.querySelector('#usermail') as HTMLInputElement

  var password = document.querySelector('#password') as HTMLInputElement

  var button = document.querySelector('#submitButton')  

  console.log(loginValidator(email.value,password.value))
  }
}
