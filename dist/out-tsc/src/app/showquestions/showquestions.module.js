import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShowquestionsPageRoutingModule } from './showquestions-routing.module';
import { ShowquestionsPage } from './showquestions.page';
let ShowquestionsPageModule = class ShowquestionsPageModule {
};
ShowquestionsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ShowquestionsPageRoutingModule
        ],
        declarations: [ShowquestionsPage]
    })
], ShowquestionsPageModule);
export { ShowquestionsPageModule };
//# sourceMappingURL=showquestions.module.js.map