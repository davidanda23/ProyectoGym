import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

<<<<<<< HEAD
import { ChartsModule } from 'ng2-charts';

=======
<<<<<<< HEAD
=======
import { ChartsModule } from 'ng2-charts';

>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    AdminRoutingModule,
    ChartsModule
=======
<<<<<<< HEAD
    AdminRoutingModule
=======
    AdminRoutingModule,
    ChartsModule
>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543
>>>>>>> 109815b27124bb46d4c0b64eb1da8147e9f5fd1e
  ]
})
export class AdminModule { }
