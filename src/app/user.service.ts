import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //une liste vide dans le firebase 
  userList: AngularFireList<any>

  constructor(private db:AngularFireDatabase ) { 
    //crer un tableau sous le nom users dans le firebase
    this.userList = db.list('users')
  }
  //Ajouter des informations du nouveau user
  
  createUser(user: User) {   
    this.userList.push({
    phone: user.phone ,
    email:user.email,
    firstname: user.firstname ,
    lastname: user.lastname ,
  }).catch(error=>{
  console.error(error)
  })
  }

//Affichage des utilisateurs sur le tableau users
 getUsers() : Observable<any>{
  return this.db.list('users').snapshotChanges();
  }
  //Affichage des utilisateurs selon l'id ....
 getUserById(id) : Observable<any>{
    return this.db.list('users', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  }

  getDataFromDb(id) {
    return this.db.object('/users/'+ id).valueChanges();
   }


  




}