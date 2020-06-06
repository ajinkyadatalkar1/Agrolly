import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OnetimepasswordPage } from './onetimepassword.page';
import { RouterModule } from '@angular/router';
let OnetimepasswordPageModule = class OnetimepasswordPageModule {
};
OnetimepasswordPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([{ path: '', component: OnetimepasswordPage }])
        ]
    })
], OnetimepasswordPageModule);
export { OnetimepasswordPageModule };
//# sourceMappingURL=onetimepassword.module.js.map