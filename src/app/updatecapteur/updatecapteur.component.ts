import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Capteur } from '../capteur';
import { CapteurService } from '../capteur.service';

@Component({
  selector: 'app-updatecapteur',
  templateUrl: './updatecapteur.component.html',
  styleUrls: ['./updatecapteur.component.css']
})
export class UpdatecapteurComponent implements OnInit {

  id:any
  errorMessage:string ='';
  formGroup: FormGroup;
  errorMessage1:string ='';
 
  nom: string;
  utilite : string;
  quantite: string;

  capteurdetails= []
  
  capteurforupdate: AngularFireList<any>
  data = {
    nom : '' ,
    utilite :  '' ,
    quantite:'',
  } 
    id1: any;
  constructor(private router:Router,private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private capteurService: CapteurService) {
    this.route.params.subscribe( params => {
      this.id = params
    });
    this.capteurforupdate = this.firebase.list('capteur');
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
      Utilite: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(1)
      ]),
     Quantite: new FormControl('',[
        Validators.required,  
      ]),
    });
    this.capteurService.getCapteurById(this.id1).subscribe((results) => {
      
      this.getCapteur(results)
    
    })

  }

  getCapteur(entries){
   
    this.capteurdetails = [];
  
    entries.forEach(element => {
      let z = element.payload.toJSON()
      z["$key"] = element.key
      this.capteurdetails.push (z as Capteur);
      this.data.nom = this.capteurdetails[0]['nom'] 
      this.data.utilite = this.capteurdetails[0]['utilite'] 
      this.data.quantite = this.capteurdetails[0]['quantite'] 
     
   })
   console.log("res");
   console.log(this.data.nom);
   console.log(this.capteurdetails);
   }

  onSubmit9() {
  
    let create = 'false';
    
     this.capteurforupdate.update(this.id1 , {
      nom: this.data.nom ,
      utilite: this.data.utilite ,
      quantite: this.data.quantite,
    }).then(added =>{
      this.router.navigate(['/capteur'])
    

}).catch(error=>{
console.error(error)
this.errorMessage1= error.messaage
console.log('error', error)
console.log(error.message)
})
}
}
