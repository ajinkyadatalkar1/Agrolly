import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frm2Page } from './frm2.page';

const routes: Routes = [
  {
    path: '',
    component: Frm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frm2PageRoutingModule {}
