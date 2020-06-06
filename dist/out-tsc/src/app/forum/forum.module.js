import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ForumPage } from './forum.page';
let ForumPageModule = class ForumPageModule {
};
ForumPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([{ path: '', component: ForumPage }])
        ],
        declarations: [ForumPage]
    })
], ForumPageModule);
export { ForumPageModule };
//# sourceMappingURL=forum.module.js.map