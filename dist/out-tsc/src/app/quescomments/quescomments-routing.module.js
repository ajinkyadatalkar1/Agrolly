import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuescommentsPage } from './quescomments.page';
const routes = [
    {
        path: '',
        component: QuescommentsPage
    }
];
let QuescommentsPageRoutingModule = class QuescommentsPageRoutingModule {
};
QuescommentsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], QuescommentsPageRoutingModule);
export { QuescommentsPageRoutingModule };
//# sourceMappingURL=quescomments-routing.module.js.map