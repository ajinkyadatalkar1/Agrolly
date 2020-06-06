import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { HttpcallsService } from '../services/httpcalls.service';
import { Storage } from '@ionic/storage';
let Frm1Page = class Frm1Page {
    constructor(showHideTabs, httpcalls, storage) {
        this.showHideTabs = showHideTabs;
        this.httpcalls = httpcalls;
        this.storage = storage;
    }
    ngOnInit() {
    }
    updateTabs() {
        this.showHideTabs.showLoginTab = false;
        this.showHideTabs.showRegisterTab = false;
        this.showHideTabs.showMyQuestionsTab = this.httpcalls.showMyQuestionsTab;
        this.showHideTabs.showAskQuestionsTab = this.httpcalls.showAskQuestionsTab;
        this.showHideTabs.showFrm1Tab = true;
    }
    ionViewDidEnter() {
        this.LogcheckSubscriber();
        this.updateTabs();
    }
    LogcheckSubscriber() {
        this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
            this.showLogout = data;
        });
    }
    logout() {
        this.httpcalls.Logout();
        this.LogcheckSubscriber();
        this.showHideTabs.setDefaultTabs();
    }
};
Frm1Page = tslib_1.__decorate([
    Component({
        selector: 'app-frm1',
        templateUrl: './frm1.page.html',
        styleUrls: ['./frm1.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [TabsPage, HttpcallsService, Storage])
], Frm1Page);
export { Frm1Page };
//# sourceMappingURL=frm1.page.js.map