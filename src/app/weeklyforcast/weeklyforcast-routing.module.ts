import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyforcastPage } from './weeklyforcast.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyforcastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyforcastPageRoutingModule {}
