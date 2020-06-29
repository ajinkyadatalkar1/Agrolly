import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropCitiesPageRoutingModule } from './crop-cities-routing.module';

import { CropCitiesPage } from './crop-cities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropCitiesPageRoutingModule
  ],
  declarations: [CropCitiesPage]
})
export class CropCitiesPageModule {}
