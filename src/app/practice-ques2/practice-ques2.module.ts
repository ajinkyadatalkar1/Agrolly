import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeQues2PageRoutingModule } from './practice-ques2-routing.module';

import { PracticeQues2Page } from './practice-ques2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeQues2PageRoutingModule
  ],
  declarations: [PracticeQues2Page]
})
export class PracticeQues2PageModule {}
