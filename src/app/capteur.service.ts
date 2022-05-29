import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Capteur } from './capteur';

@Injectable({
  providedIn: 'root'
})
export class CapteurService {

  capteurList: AngularFireList<any>

  constructor(private db:AngularFireDatabase ) { 
    //crer un tableau sous le nom users dans le firebase
    this.capteurList = db.list('capteur')
  }
  //Ajouter des informations du nouveau user
  
  createCapteur(capteur:Capteur) {   
    this.capteurList.push({
      nom:capteur.nom,
      utilite:capteur.utilite,
      quantite:capteur.quantite,
   
  }).catch(error=>{
  console.error(error)
  })
  }

//Affichage des utilisateurs sur le tableau users
 getCapteur() : Observable<any>{
  return this.db.list('capteur').snapshotChanges();
  }
  //Affichage des utilisateurs selon l'id ....
 getCapteurById(id) : Observable<any>{
    return this.db.list('capteur', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }



  




}
