import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {

  id:any
  errorMessage:string ='';
  formGroup: FormGroup;
  errorMessage1:string ='';
 
  nom:string;
  quantite:string;
  qvendue:string;
  date:string;

 produitdetails= []
  
 produitforupdate: AngularFireList<any>
  data = {
    nom : '' ,
    quantite :  '' ,
    qvendue:'',
    date:'',  
   } 
    id1: any;
    
  constructor(private router:Router,private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private produitService: ProduitService) {
    this.route.params.subscribe( params => {
      this.id = params
    });
    this.produitforupdate = this.firebase.list('produit');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
   }


  ngOnInit(): void {
    this.formGroup=new FormGroup({
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
  
    this.produitService.getProduitById(this.id1).subscribe((results) => {
      
      this.getProduit(results)
    
    })

  }

  getProduit(entries){
   
    this.produitdetails = [];
  
    entries.forEach(element => {
       
       
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.produitdetails.push(y as Produit);
      this.data.nom = this.produitdetails[0]['nom'] 
      this.data.quantite = this.produitdetails[0]['quantite']
      this.data.qvendue = this.produitdetails[0]['qvendue']
      this.data.date=this.produitdetails[0]['date'] 
     
   })
   console.log("res");
   console.log(this.data.nom);
   console.log(this.produitdetails);
   }

  onSubmit5() {
  
    let create = 'false';
    
    
     this.produitforupdate.update(this.id1 , {
      nom:this.data.nom  ,
      quantite:this.data.quantite ,
      qvendue:this.data.qvendue ,
      date:this.data.date,
 
    }).then(added =>{
      
      this.router.navigate(['/produit'])

}).catch(error=>{
console.error(error)
this.errorMessage1= error.messaage
console.log('error', error)
console.log(error.message)
})
  
  
  }
}
