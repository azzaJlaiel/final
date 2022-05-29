import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Confirmationdialog2Component } from '../confirmationdialog2/confirmationdialog2.component';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  id:any; 
  errorMessage:string ='';
  errorMessage1:string ='';
   //les attributs des utilisateurs

  nom:string 
  quantite:string
  qvendue:string
  date:string
  
  
  produitforupdate: AngularFireList<any>
  
  data = {
    nom : '' ,
    quantite :  '' ,
    qvendue:'',
    date:'',
    
    } 
    id1: any;

   produitfordelete : AngularFireList<any>; 
   listproduit = [];
   formGroup: FormGroup;
   displayAdd: boolean = false;
   produitList: AngularFireList<any>

   qtt:string = "10";
   futureDate: Date = new Date('01.07.2022');
   currentDate: Date = new Date();
   d:string ;
   f:string;
   /*date1: Date = new Date();
   date2: Date = new Date();*/
   

   constructor(private router:Router, public dialog: MatDialog,
   private firebase: AngularFireDatabase,  private produitService: ProduitService,
   private route: ActivatedRoute , 
    private db:AngularFireDatabase ,private fire:AngularFireAuth
    ) {
   /* this.userService.getUsers.subscribe(this.listuser => {
      this.listUser=listUser;
    })*/
      //tableau des utilisateurs est sous le nom de 'users'
     this.produitList = db.list('produit');
     this.produitfordelete = this.firebase.list('produit');
     this.route.params.subscribe( params => {
     this.id = params
    });
    this.produitforupdate = this.firebase.list('produit');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }
 
  ngOnInit(): void {
    //appel au service user pour afficher le tableau des utilisateurs
    this.produitService.getProduit().subscribe((results) => {  
      this. listProduit(results)  
    })
    this.convertDate();
  }

  //une méthode qui fait parcourir les attributs (name,lastname,..) 
  listProduit(entries){
    this.listproduit = [];
    //parcourir les éléments et donne à chaque utilisateur un clé :key et l'afficher sur la base de données
     entries.forEach(element => {
     let y = element.payload.toJSON()
     y["$key"] = element.key
     this.listproduit.push(y as Produit);
    })
    console.log(this.listproduit);
    console.log(entries);
  }
  openDialog(key): void {
    const dialogRef = this.dialog.open(Confirmationdialog2Component, {
      width: '350px',
      data: "voulez-vous vraiment supprimer ces données?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.produitfordelete.remove(key);
      }
    });   
  } 

  edit(key){
    this.router.navigate(['updateproduit/'+key])
  }

 comaperQantite(){
  if(this.quantite>this.qtt){
    console.log("quantite1 est plus grande que q2")
  }
  return true;
}
convertDate(){
  const d=this.currentDate.toString;
  const f=this.futureDate.toString;
  if   ( this.f<this.d){
    console.log("date1 is before current date")
  }
  return true

  
}
/*compareDates(){
  if(this.futureDate.getTime()<this.d){
    console.log("date1 is before current date")
  }
  return true;
  
}*/
}







