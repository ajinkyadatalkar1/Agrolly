import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frm2PageRoutingModule } from './frm2-routing.module';

import { Frm2Page } from './frm2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frm2PageRoutingModule
  ],
  declarations: [Frm2Page]
})
export class Frm2PageModule {}
