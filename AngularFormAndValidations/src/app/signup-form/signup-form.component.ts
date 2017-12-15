import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

import { LoginModel } from '../../Models/LoginModel';
import { HttpClient } from 'selenium-webdriver/http';



@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  vmloginModule:LoginModel;
  


  constructor() { }

  ngOnInit() {
  }

  DoLogin(form:NgForm)
  {
  this.vmloginModule.UserName=form.value.UserName;
  this.vmloginModule.Regkey=form.value.Regkey;
  this.vmloginModule.Password=form.value.Password;
 
  //Make HTTP Call to check for the authentication....
  }
}



