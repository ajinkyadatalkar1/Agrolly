import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertadvicePageRoutingModule } from './expertadvice-routing.module';

import { ExpertadvicePage } from './expertadvice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertadvicePageRoutingModule
  ],
  declarations: [ExpertadvicePage]
})
export class ExpertadvicePageModule {}
