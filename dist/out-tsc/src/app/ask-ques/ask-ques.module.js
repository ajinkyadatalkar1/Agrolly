import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AskQuesPage } from './ask-ques.page';
import { RouterModule } from '@angular/router';
let AskQuesPageModule = class AskQuesPageModule {
};
AskQuesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([{ path: '', component: AskQuesPage }])
        ],
        declarations: [AskQuesPage]
    })
], AskQuesPageModule);
export { AskQuesPageModule };
//# sourceMappingURL=ask-ques.module.js.map