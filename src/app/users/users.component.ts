import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationdialogComponent } from '../confirmationdialog/confirmationdialog.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  id:any; 
  errorMessage:string ='';
  errorMessage1:string ='';
   //les attributs des utilisateurs
  Cin:string 
  firstname:string
  lastname:string
  phone:string
  userforupdate: AngularFireList<any>
  
  data = {
    firstname : '' ,
    lastname :  '' ,
    email:'',
    phone :  ''  
    } 
    id1: any;

   userfordelete : AngularFireList<any>; 
   listuser = [];
   formGroup: FormGroup;
   displayAdd: boolean = false;

   addUserForm: FormGroup;
   userList: AngularFireList<any>

   constructor(private router:Router, public dialog: MatDialog,
   private firebase: AngularFireDatabase,  private userService: UserService,
   private route: ActivatedRoute , 
    private db:AngularFireDatabase ,private fire:AngularFireAuth) {
   /* this.userService.getUsers.subscribe(this.listuser => {
      this.listUser=listUser;
    })*/
      //tableau des utilisateurs est sous le nom de 'users'
      this.userList = db.list('users');
    
      //
     this.userfordelete = this.firebase.list('users');
     this.route.params.subscribe( params => {
     this.id = params
    });
    this.userforupdate = this.firebase.list('users');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }
 
  ngOnInit(): void {
    //appel au service user pour afficher le tableau des utilisateurs
    this.userService.getUsers().subscribe((results) => {  
      this. listUser(results)  
    })
  }
  onSubmit() {
    let create = 'false';
            this.userList.push({
            firstname: this.firstname ,
            lastname: this.lastname ,
            phone: this.phone,
          
              }).then(added =>{
                this.router.navigate(['/users'])
              
             
        
    }).catch(error=>{
      console.error(error)
      this.errorMessage1= error.messaage
      console.log('error', error)
      console.log(error.message)
    })
  }

  //une méthode qui fait parcourir les attributs (name,lastname,..) 
  listUser(entries){
    this.listuser = [];
    //parcourir les éléments et donne à chaque utilisateur un clé :key et l'afficher sur la base de données
     entries.forEach(element => {
     let x = element.payload.toJSON()
     x["$key"] = element.key
     this.listuser.push(x as User);
  })
  console.log(this.listuser);
  }


  openDialog(key): void {
    const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
      width: '350px',
      data: "voulez-vous vraiment supprimer ces données?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.userfordelete.remove(key);
      }
    });   
  } 

  edit(key){
    this.router.navigate(['updateuser/'+key])
  }

 


  /*dataFromService() {
    this.userService.getDataFromDb(User.id).subscribe((res: any) => {
      this.result = res;
      })
    }*/



}




