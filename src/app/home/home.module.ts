import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

<<<<<<< HEAD
=======
import { MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    HomeRoutingModule
=======
    HomeRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule
>>>>>>> ef1853e44a6a0f8843f92faa117df829b4914543
  ]
})
export class HomeModule { }
