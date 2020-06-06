import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyquestionsPage } from './myquestions.page';
import { RouterModule } from '@angular/router';
let MyquestionsPageModule = class MyquestionsPageModule {
};
MyquestionsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([{ path: '', component: MyquestionsPage }])
        ],
        declarations: [MyquestionsPage]
    })
], MyquestionsPageModule);
export { MyquestionsPageModule };
//# sourceMappingURL=myquestions.module.js.map