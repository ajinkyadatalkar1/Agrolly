import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropmanagementPage } from './cropmanagement.page';

const routes: Routes = [
  {
    path: '',
    component: CropmanagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropmanagementPageRoutingModule {}
