import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertadvicePageRoutingModule } from './expertadvice-routing.module';

import { ExpertadvicePage } from './expertadvice.page';
import { FormatComponent } from '../chatBlock/format/format.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertadvicePageRoutingModule,
  ],
  declarations: [ExpertadvicePage, FormatComponent]
})
export class ExpertadvicePageModule {}
