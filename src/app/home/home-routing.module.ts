import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
