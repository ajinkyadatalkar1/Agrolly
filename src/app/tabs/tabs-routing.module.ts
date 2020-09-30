import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'weeklyforcast',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../weeklyforcast/weeklyforcast.module').then(m => m.WeeklyforcastPageModule)
          }
        ]
      },
      {
        path: 'annualforecast',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../annualforecast/annualforecast.module').then(m => m.AnnualforecastPageModule)
          }
        ]
      },
      {
        path: 'forecast',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../forecast/forecast.module').then(m => m.ForecastPageModule)
          }
        ]
      },
      {
        path: 'cropmanagement',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cropmanagement/cropmanagement.module').then(m => m.CropmanagementPageModule)
          }
        ]
      },
      {
        path: 'expertadvice',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../expertadvice/expertadvice.module').then(m => m.ExpertadvicePageModule)
          }
        ]
      },
      {
        path: 'organizer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../organizer/organizer.module').then(m => m.OrganizerPageModule)
          }
        ]
      },
      {
        path: 'cropsowing',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cropsowing/cropsowing.module').then(m => m.CropsowingPageModule)
          }
        ]
      },
      {
        path: 'forum',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../forum/forum.module').then(m => m.ForumPageModule)
          }
        ]
      },
      {
        path: 'myques',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../myquestions/myquestions.module').then(m => m.MyquestionsPageModule)
          }
        ]
      },
      {
        path: 'askques',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ask-ques/ask-ques.module').then(m => m.AskQuesPageModule)
          }
        ]
      },
      {
        path: 'forgotpassword',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
          }
        ]
      },
      {
        path: 'otp',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../onetimepassword/onetimepassword.module').then(m => m.OnetimepasswordPageModule)
          }
        ]
      },
      {
        path: 'changepassword',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../changepassword/changepassword.module').then(m => m.ChangepasswordPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
