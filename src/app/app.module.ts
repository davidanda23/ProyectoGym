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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NgxQRCodeModule,
    NoopAnimationsModule,
    ComentariosRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,CanEditGuard,CanAdminGuard,CanSuscriptorGuard,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
