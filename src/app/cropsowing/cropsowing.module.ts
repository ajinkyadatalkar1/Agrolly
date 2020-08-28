import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropsowingPageRoutingModule } from './cropsowing-routing.module';

import { CropsowingPage } from './cropsowing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropsowingPageRoutingModule
  ],
  declarations: [CropsowingPage]
})
export class CropsowingPageModule {}
