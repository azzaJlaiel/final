import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produitList: AngularFireList<any>

  constructor(private db:AngularFireDatabase ) { 
    //crer un tableau sous le nom users dans le firebase
    this.produitList = db.list('produit')
  }
  //Ajouter des informations du nouveau user
  
  createUser(produit :Produit) {   
    this.produitList.push({
    nom:produit.nom,
    quantite:produit.quantite,
    date:produit.date,
    
  }).catch(error=>{
  console.error(error)
  })
  }

//Affichage des utilisateurs sur le tableau users
 getProduit() : Observable<any>{
  return this.db.list('produit').snapshotChanges();
  }
  //Affichage des utilisateurs selon l'id ....
 getProduitById(id) : Observable<any>{
    return this.db.list('produit', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }


}
