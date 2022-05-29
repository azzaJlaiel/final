import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  errorMessage1:string ='';
  errorMessage:string ='';
  addUserForm: FormGroup;
 

  firstname:string
  lastname:string
  email:string
  phone:string

  userList: AngularFireList<any>
  constructor(private userService : UserService, public router:Router,
    private db:AngularFireDatabase ,private fire:AngularFireAuth,private toastr: ToastrService) { 
      this.userList = db.list('users')
    }

  ngOnInit(): void {
    this.addUserForm=new FormGroup({
      fIrstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      lAstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
     eMail: new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      pHone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ])
    
    });
  }

  onSubmit() {
    let create = 'false';
            this.userList.push({
            firstname: this.firstname ,
            lastname: this.lastname ,
            phone: this.phone,
            email: this.email,
              }).then(added =>{
                this.router.navigate(['/users'])
                this.toastr.success('User added successfully !' );
              
             
        
    }).catch(error=>{
      console.error(error)
      this.errorMessage1= error.messaage
      console.log('error', error)
      console.log(error.message)
      this.toastr.error('Something went wrong !!! ' );
    })
  }  
}