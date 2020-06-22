import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnualforecastPageRoutingModule } from './annualforecast-routing.module';

import { AnnualforecastPage } from './annualforecast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnualforecastPageRoutingModule
  ],
  declarations: [AnnualforecastPage]
})
export class AnnualforecastPageModule {}
