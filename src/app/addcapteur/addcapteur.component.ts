import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CapteurService } from '../capteur.service';

@Component({
  selector: 'app-addcapteur',
  templateUrl: './addcapteur.component.html',
  styleUrls: ['./addcapteur.component.css']
})
export class AddcapteurComponent implements OnInit {

  errorMessage1:string ='';
  errorMessage:string ='';
  addCapteurForm: FormGroup;
 

  nom: string;
  utilite : string;
  quantite: string;

  capteurList: AngularFireList<any>
  constructor(private capteurService : CapteurService, public router:Router,
    private db:AngularFireDatabase ,private fire:AngularFireAuth,private toastr: ToastrService) { 
      this.capteurList = db.list('capteur')
    }

  ngOnInit(): void {
    this.addCapteurForm=new FormGroup({
      Nom: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(1)
      ]),
      Utilite: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(1)
      ]),
     Quantite: new FormControl('',[
        Validators.required,  
      ]),
    });
  }

  onSubmit() {
    let create = 'false';
            this.capteurList.push({
            nom: this.nom ,
            utilite: this.utilite ,
            quantite: this.quantite,
              }).then(added =>{
                this.router.navigate(['/capteur'])
                this.toastr.success('Sensor added successfully !' );
              
             
        
    }).catch(error=>{
      console.error(error)
      this.errorMessage1= error.messaage
      console.log('error', error)
      console.log(error.message)
      this.toastr.error('Something went wrong !!! ' );
    })
  }  
}