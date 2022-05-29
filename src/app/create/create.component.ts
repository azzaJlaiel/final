import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  registerForm:FormGroup
  errorMessage: any;

  constructor(private fb:FormBuilder,private Authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.registerForm=this.fb.group({
      firstname:new FormControl('', [
        Validators.required,
      
       
      ]),
      lastname:new FormControl('', [
        Validators.required,
      
       
      ]),
      cin:new FormControl('', [
        Validators.required,
      
       
      ]),
      phone:new FormControl('', [
        Validators.required,
      
       
      ]),
      email:new FormControl('', [
        Validators.required,
        Validators.email
       
      ]),
    
      password:new FormControl('', [
        Validators.required,
      
        Validators.minLength(3)
      ]),
      repeatPassword:new FormControl('', [
      Validators.required
      ]),

    }

    )
  }

  saveUser(){
    const email=this.registerForm.get('email').value;
    const password=this.registerForm.get('password').value;
    this.Authservice.signUpUser(email,password).then(
    () =>{
      this.router.navigate(['/'])
    },
    (error) =>{
      this.errorMessage=error;
      alert("connexion invalide");
      
    }
    )
  }

}
