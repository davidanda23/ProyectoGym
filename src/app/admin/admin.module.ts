import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

<<<<<<< HEAD
=======
import { ChartsModule } from 'ng2-charts';

>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    AdminRoutingModule
=======
    AdminRoutingModule,
    ChartsModule
>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543
  ]
})
export class AdminModule { }
