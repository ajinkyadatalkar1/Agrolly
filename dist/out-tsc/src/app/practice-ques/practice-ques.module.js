import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PracticeQuesPage } from './practice-ques.page';
import { RouterModule } from '@angular/router';
let PracticeQuesPageModule = class PracticeQuesPageModule {
};
PracticeQuesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([{ path: '', component: PracticeQuesPage }])
        ],
        declarations: [PracticeQuesPage]
    })
], PracticeQuesPageModule);
export { PracticeQuesPageModule };
//# sourceMappingURL=practice-ques.module.js.map