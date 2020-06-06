import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
                    }
                ]
            },
            {
                path: 'frm1',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../frm1/frm1.module').then(m => m.Frm1PageModule)
                    }
                ]
            },
            {
                path: 'forum',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../forum/forum.module').then(m => m.ForumPageModule)
                    }
                ]
            },
            {
                path: 'myques',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../myquestions/myquestions.module').then(m => m.MyquestionsPageModule)
                    }
                ]
            },
            {
                path: 'askques',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../ask-ques/ask-ques.module').then(m => m.AskQuesPageModule)
                    }
                ]
            },
            {
                path: 'pracques',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../practice-ques/practice-ques.module').then(m => m.PracticeQuesPageModule)
                    }
                ]
            },
            {
                path: 'forgotpassword',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
                    }
                ]
            },
            {
                path: 'otp',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../onetimepassword/onetimepassword.module').then(m => m.OnetimepasswordPageModule)
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
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs-routing.module.js.map