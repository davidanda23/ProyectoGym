import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

import{AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { AuthService } from './auth/services/auth.service';
import { CanEditGuard } from './auth/can-edit.guard';
import {CanAdminGuard} from './auth/can-admin.guard';
import {CanSuscriptorGuard} from './auth/can-suscriptor.guard';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComentariosRoutingModule} from './comentarios/comentarios-routing-module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFirestore} from '@angular/fire/firestore';
import { from } from 'rxjs';
import { ClasesComponent } from './clases/clases.component';


//import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, SendEmailComponent, ComentariosComponent, ClasesComponent
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, SendEmailComponent
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
    NgxQRCodeModule,
    NoopAnimationsModule,
    ComentariosRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,CanEditGuard,CanAdminGuard,CanSuscriptorGuard,AngularFirestore],
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
    NgxQRCodeModule,
    NoopAnimationsModule,
    MaterialModule
>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543
  ],
  providers: [AuthService,CanEditGuard,CanAdminGuard,CanSuscriptorGuard],
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
  bootstrap: [AppComponent]
})
export class AppModule { }
