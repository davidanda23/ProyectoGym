<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentariosComponent } from './comentarios.component';

const routes: Routes = [{ path: '', component: ComentariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentariosComponent } from './comentarios.component';

const routes: Routes = [{ path: '', component: ComentariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
>>>>>>> 25b39681f4a3bbce1c1eceb563ebefd002298ac4
export class ComentariosRoutingModule { }