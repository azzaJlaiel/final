//Base elements of angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Home
import { HomeComponent } from './home/home.component';
//User imports
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { CreateComponent } from './create/create.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
//Angular imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

//Design et primeNg 
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationdialogComponent } from './confirmationdialog/confirmationdialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {ButtonModule} from 'primeng/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
  


//QRCODE
import { QRCGeneratorComponent } from './qrc-generator/qrc-generator.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

//Products imports

import { DashComponent } from './dash/dash.component';


import { ProduitComponent } from './produit/produit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
import { Confirmationdialog2Component } from './confirmationdialog2/confirmationdialog2.component';
import { CapteurComponent } from './capteur/capteur.component';
import { AddcapteurComponent } from './addcapteur/addcapteur.component';
import { UpdatecapteurComponent } from './updatecapteur/updatecapteur.component';
import { Confirmationdialog3Component } from './confirmationdialog3/confirmationdialog3.component';

import {CalendarModule} from 'primeng/calendar';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { DatesComponent } from './dates/dates.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    CreateComponent,
    ResetpasswordComponent,
    AdduserComponent,
    ConfirmationdialogComponent,
    UpdateuserComponent,
    QRCGeneratorComponent,
    HomeComponent,
    DashComponent,
    ProduitComponent,
    AddproduitComponent,
    UpdateproduitComponent,
    Confirmationdialog2Component,
    CapteurComponent,
    AddcapteurComponent,
    UpdatecapteurComponent,
    Confirmationdialog3Component,
    CalendrierComponent,
    DatesComponent,
   
    
       
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*des packages pour la formulaire*/ 
    FormsModule,
    ReactiveFormsModule,
    /*Firebase*/
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    QRCodeModule,
    NgxQRCodeModule,
    MatSliderModule,
    ButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    TableModule,
    CardModule,
    MatCardModule,
    MatMenuModule,
    CalendarModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
