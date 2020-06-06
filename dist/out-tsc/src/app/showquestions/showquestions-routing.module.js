import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowquestionsPage } from './showquestions.page';
const routes = [
    {
        path: '',
        component: ShowquestionsPage
    }
];
let ShowquestionsPageRoutingModule = class ShowquestionsPageRoutingModule {
};
ShowquestionsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ShowquestionsPageRoutingModule);
export { ShowquestionsPageRoutingModule };
//# sourceMappingURL=showquestions-routing.module.js.map