import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeQues2Page } from './practice-ques2.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeQues2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeQues2PageRoutingModule {}
