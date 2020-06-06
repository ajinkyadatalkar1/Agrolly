import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowquestionsPage } from './showquestions.page';

const routes: Routes = [
  {
    path: '',
    component: ShowquestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowquestionsPageRoutingModule {}
