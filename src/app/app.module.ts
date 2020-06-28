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
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, SendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
<<<<<<< HEAD
=======
    NgxQRCodeModule,
    NoopAnimationsModule,
    MaterialModule
>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543
  ],
  providers: [AuthService,CanEditGuard,CanAdminGuard,CanSuscriptorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
