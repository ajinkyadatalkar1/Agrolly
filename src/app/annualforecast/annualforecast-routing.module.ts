import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnualforecastPage } from './annualforecast.page';

const routes: Routes = [
  {
    path: '',
    component: AnnualforecastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnualforecastPageRoutingModule {}
