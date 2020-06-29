import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropCitiesPage } from './crop-cities.page';

const routes: Routes = [
  {
    path: '',
    component: CropCitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropCitiesPageRoutingModule {}
