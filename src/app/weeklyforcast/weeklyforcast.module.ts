import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyforcastPageRoutingModule } from './weeklyforcast-routing.module';

import { WeeklyforcastPage } from './weeklyforcast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyforcastPageRoutingModule
  ],
  declarations: [WeeklyforcastPage]
})
export class WeeklyforcastPageModule {}
