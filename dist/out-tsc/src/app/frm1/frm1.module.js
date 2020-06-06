import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Frm1Page } from './frm1.page';
let Frm1PageModule = class Frm1PageModule {
};
Frm1PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([{ path: '', component: Frm1Page }])
        ],
        declarations: [Frm1Page]
    })
], Frm1PageModule);
export { Frm1PageModule };
//# sourceMappingURL=frm1.module.js.map