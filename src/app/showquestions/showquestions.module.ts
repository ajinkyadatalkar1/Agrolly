import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowquestionsPageRoutingModule } from './showquestions-routing.module';

import { ShowquestionsPage } from './showquestions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowquestionsPageRoutingModule
  ],
  // declarations: [ShowquestionsPage]
})
export class ShowquestionsPageModule {}
