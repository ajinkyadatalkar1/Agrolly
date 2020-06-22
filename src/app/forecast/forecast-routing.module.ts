import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastPage } from './forecast.page';

const routes: Routes = [
  {
    path: '',
    component: ForecastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastPageRoutingModule {}
