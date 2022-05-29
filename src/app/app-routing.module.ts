//declaration of routers
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

//user
import { AdduserComponent } from './adduser/adduser.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UsersComponent } from './users/users.component';

//QRCode
import { QRCGeneratorComponent } from './qrc-generator/qrc-generator.component';

//products

import { DashComponent } from './dash/dash.component';
import { ProduitComponent } from './produit/produit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { UpdateproduitComponent } from './updateproduit/updateproduit.component';
//Sensors
import { CapteurComponent } from './capteur/capteur.component';
import { AddcapteurComponent } from './addcapteur/addcapteur.component';
import { UpdatecapteurComponent } from './updatecapteur/updatecapteur.component';


import { CalendrierComponent } from './calendrier/calendrier.component';
import { DatesComponent } from './dates/dates.component';





const routes: Routes = [
  {path:'',component:LoginComponent},
  {path : 'home',component:HomeComponent},
  //users path
  
  //{path:'', component:QRCGeneratorComponent},
  {path: 'users',component:UsersComponent},
  {path: 'register', component: CreateComponent},
  {path :'resetpassword', component:ResetpasswordComponent},
  {path : 'adduser',component :AdduserComponent},
  {path :'updateuser/:id', component:UpdateuserComponent},

//Products path
 
  {path : 'qrc-generator', component:QRCGeneratorComponent},
  {path : 'dash', component:DashComponent},
 { path : 'produit',component: ProduitComponent},
 {path : 'addproduit',component:AddproduitComponent},
 {path :'updateproduit/:id',component:UpdateproduitComponent },
 { path: 'capteur', component: CapteurComponent},
 {path : 'addcapteur', component:AddcapteurComponent},
 {path: 'updatecapteur/:id', component:UpdatecapteurComponent},


 { path :'calendrier',component:CalendrierComponent},
{path: 'dates',component:DatesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
