import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Router } from '@angular/router';
let Tab2Page = class Tab2Page {
    constructor(httpcalls, router) {
        this.httpcalls = httpcalls;
        this.router = router;
    }
    login() {
        // tslint:disable-next-line: no-unused-expression
        new Promise(() => {
            this.httpcalls.GetLogin(this.username, this.password);
        });
        this.username = '';
        this.password = '';
    }
    ionViewDidEnter() {
        this.LogcheckSubscriber();
    }
    LogcheckSubscriber() {
        this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
            if (data) {
                this.router.navigateByUrl('');
            }
        });
    }
};
Tab2Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab2',
        templateUrl: 'tab2.page.html',
        styleUrls: ['tab2.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [HttpcallsService, Router])
], Tab2Page);
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map