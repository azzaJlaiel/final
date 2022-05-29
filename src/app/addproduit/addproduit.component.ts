import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

 alert:boolean=false;

  errorMessage1:string ='';
  errorMessage:string ='';
  addProduitForm: FormGroup;
 

  nom:string;
  quantite:string;
  qvendue:string;
  date:string;

  produitList: AngularFireList<any>
  constructor(private produitService : ProduitService, public router:Router,
    private db:AngularFireDatabase ,private fire:AngularFireAuth,private toastr: ToastrService) { 
      this.produitList = db.list('produit')
    }

  ngOnInit(): void {
    this.addProduitForm=new FormGroup({
      Nom: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(1)
      ]),
      Quantite: new FormControl('',[
        Validators.required,
        
      ]),
      Qvendue: new FormControl('',[
        Validators.required,
        
      ]),
     Date: new FormControl('',[
        Validators.required,
        
      ]),
    
    });
  }

  onSubmit() {
    let create = 'false';
            this.produitList.push({
            nom: this.nom ,
            quantite: this.quantite ,
            qvendue: this.qvendue ,
            date: this.date,
              }).then(added =>{
                this.router.navigate(['/produit'])
                this.toastr.success('product added successfully !' );
              
             
        
    }).catch(error=>{
      console.error(error)
      this.errorMessage1= error.messaage
      console.log('error', error)
      console.log(error.message)
      this.toastr.error('Something went wrong !!! ' );
    })
    this.alert=true
    this.addProduitForm.reset({})
  }  
  
}