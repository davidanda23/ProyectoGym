<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './contacto.component';

const routes: Routes = [{ path: '', component: ContactoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './contacto.component';

const routes: Routes = [{ path: '', component: ContactoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
export class ContactoRoutingModule { }