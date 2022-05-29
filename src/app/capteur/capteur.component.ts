import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Capteur } from '../capteur';
import { CapteurService } from '../capteur.service';
import { Confirmationdialog3Component } from '../confirmationdialog3/confirmationdialog3.component';

@Component({
  selector: 'app-capteur',
  templateUrl: './capteur.component.html',
  styleUrls: ['./capteur.component.css']
})
export class CapteurComponent implements OnInit {

  id:any; 
  errorMessage:string ='';
  errorMessage1:string ='';
   //les attributs des utilisateurs
   nom: string;
   utilite : string;
   quantite: string;
  capteurforupdate: AngularFireList<any>
  
  data = {
    nom : '' ,
    utilite :  '' ,
    quantite:'',
    
    } 
    id1: any;

    capteurfordelete : AngularFireList<any>; 
   listcapteur = [];
   formGroup: FormGroup;
   displayAdd: boolean = false;

   addCapteurForm: FormGroup;
   capteurList: AngularFireList<any>

   constructor(private router:Router, public dialog: MatDialog,
   private firebase: AngularFireDatabase,  private capteurService: CapteurService,
   private route: ActivatedRoute , 
    private db:AngularFireDatabase ,private fire:AngularFireAuth) {
   /* this.userService.getUsers.subscribe(this.listuser => {
      this.listUser=listUser;
    })*/
      //tableau des utilisateurs est sous le nom de 'users'
      this.capteurList = db.list('capteur');
    
      //
     this.capteurfordelete = this.firebase.list('capteur');
     this.route.params.subscribe( params => {
     this.id = params
    });
    this.capteurforupdate = this.firebase.list('capteur');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }
 
  ngOnInit(): void {
    //appel au service user pour afficher le tableau des utilisateurs
    this.capteurService.getCapteur().subscribe((results) => {  
      this. listCapteur(results)  
    })
  }
 /* onSubmit() {
    let create = 'false';
            this.capteurList.push({
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
*/
  //une méthode qui fait parcourir les attributs (name,lastname,..) 
  listCapteur(entries){
    this.listcapteur = [];
    //parcourir les éléments et donne à chaque utilisateur un clé :key et l'afficher sur la base de données
     entries.forEach(element => {
     let x = element.payload.toJSON()
     x["$key"] = element.key
     this.listcapteur.push(x as Capteur);
  })
  console.log(this.listcapteur);
  }


  openDialog(key): void {
    const dialogRef = this.dialog.open(Confirmationdialog3Component, {
      width: '350px',
      data: "voulez-vous vraiment supprimer ces données?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.capteurfordelete.remove(key);
      }
    });   
  } 

  edit(key){
    this.router.navigate(['updatecapteur/'+key])
  }

 


  /*dataFromService() {
    this.userService.getDataFromDb(User.id).subscribe((res: any) => {
      this.result = res;
      })
    }*/



}




