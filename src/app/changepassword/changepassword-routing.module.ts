import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangepasswordPage } from './changepassword.page';

const routes: Routes = [
  {
    path: '',
    component: ChangepasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangepasswordPageRoutingModule {}
