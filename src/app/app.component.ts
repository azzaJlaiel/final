import { Component } from '@angular/core'; 
import firebase from 'firebase';
import { AuthService } from './auth.service';
import {MatDialog,} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isAuth: boolean;
  
  constructor(private authservice :AuthService, private dialog: MatDialog){
    var firebaseConfig = {
      apiKey: "AIzaSyB3vPNCi0MxrS95q-fIij7o4QKgvaK3ugw",
      authDomain: "gestiondeproduit-525ee.firebaseapp.com",
      databaseURL: "https://gestiondeproduit-525ee-default-rtdb.firebaseio.com",
      projectId: "gestiondeproduit-525ee",
      storageBucket: "gestiondeproduit-525ee.appspot.com",
      messagingSenderId: "861232692448",
      appId: "1:861232692448:web:d4c19730a3fad69ac12485",
      measurementId: "G-47GPZSD0PZ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    }
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth=true;
        } else {
          this.isAuth=false;
        }
      }
    );
  }

  onSignOut() {
    this.authservice.signOutUser();
  }
}

