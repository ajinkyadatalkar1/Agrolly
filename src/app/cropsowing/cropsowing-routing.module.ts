import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropsowingPage } from './cropsowing.page';

const routes: Routes = [
  {
    path: '',
    component: CropsowingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropsowingPageRoutingModule {}
