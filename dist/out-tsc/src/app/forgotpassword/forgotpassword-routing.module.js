import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotpasswordPage } from './forgotpassword.page';
const routes = [
    {
        path: '',
        component: ForgotpasswordPage
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ForgotpasswordPageRoutingModule);
export { ForgotpasswordPageRoutingModule };
//# sourceMappingURL=forgotpassword-routing.module.js.map