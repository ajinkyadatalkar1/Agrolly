import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'quescomments',
    loadChildren: () => import('./quescomments/quescomments.module').then( m => m.QuescommentsPageModule)
  },
  {
    path: 'showquestions',
    loadChildren: () => import('./showquestions/showquestions.module').then( m => m.ShowquestionsPageModule)
  },
  {
    path: 'frm2',
    loadChildren: () => import('./frm2/frm2.module').then( m => m.Frm2PageModule)
  },
  {
    path: 'practice-ques2',
    loadChildren: () => import('./practice-ques2/practice-ques2.module').then( m => m.PracticeQues2PageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
