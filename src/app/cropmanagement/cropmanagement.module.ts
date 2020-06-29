import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropmanagementPageRoutingModule } from './cropmanagement-routing.module';

import { CropmanagementPage } from './cropmanagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropmanagementPageRoutingModule
  ],
  declarations: [CropmanagementPage]
})
export class CropmanagementPageModule {}
