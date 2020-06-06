import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuescommentsPage } from './quescomments.page';

const routes: Routes = [
  {
    path: '',
    component: QuescommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuescommentsPageRoutingModule {}
