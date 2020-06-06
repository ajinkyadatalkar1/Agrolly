import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { HttpcallsService, } from '../services/httpcalls.service';
import { Storage } from '@ionic/storage';
let Tab1Page = class Tab1Page {
    constructor(showHideTabs, httpcalls, storage) {
        this.showHideTabs = showHideTabs;
        this.httpcalls = httpcalls;
        this.storage = storage;
    }
    changeTabs() {
        this.showHideTabs.showLoginTab = this.httpcalls.showLoginTab;
        this.showHideTabs.showRegisterTab = this.httpcalls.showRegisterTab;
        this.showHideTabs.showMyQuestionsTab = false;
        this.showHideTabs.showAskQuestionsTab = false;
        this.showHideTabs.showFrm1Tab = true;
    }
    ionViewDidEnter() {
        this.LogcheckSubscriber();
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
Tab1Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab1',
        templateUrl: 'tab1.page.html',
        styleUrls: ['tab1.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [TabsPage, HttpcallsService, Storage])
], Tab1Page);
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map