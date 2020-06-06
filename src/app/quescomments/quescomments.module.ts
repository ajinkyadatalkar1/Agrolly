import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuescommentsPageRoutingModule } from './quescomments-routing.module';

import { QuescommentsPage } from './quescomments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuescommentsPageRoutingModule
  ],
  // declarations: [QuescommentsPage]
})
export class QuescommentsPageModule {}
