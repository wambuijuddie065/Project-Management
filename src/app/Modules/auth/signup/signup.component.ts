import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.signUpForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }
  onSignUp(){
    
  }

}
