import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizerPageRoutingModule } from './organizer-routing.module';

import { OrganizerPage } from './organizer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizerPageRoutingModule
  ],
  declarations: [OrganizerPage]
})
export class OrganizerPageModule {}
