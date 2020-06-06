import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs.page';
let PracticeQuesPage = class PracticeQuesPage {
    constructor(showHideTabs, httpcalls, storage) {
        this.showHideTabs = showHideTabs;
        this.httpcalls = httpcalls;
        this.storage = storage;
        this.httpcalls.GetTopics();
        this.lists = this.httpcalls.topicList;
    }
    ngOnInit() {
        this.httpcalls.GetTopics();
        this.lists = this.httpcalls.topicList;
    }
    ionViewDidEnter() {
        this.LogcheckSubscriber();
        this.storage.get('phone').then((val) => {
            console.log('Your phone is', val);
        });
    }
    LogcheckSubscriber() {
        this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
            this.showLogout = data;
            console.log('chklogin:' + data);
        });
    }
    logout() {
        this.httpcalls.Logout();
        this.LogcheckSubscriber();
        this.showHideTabs.setDefaultTabs();
        console.log('logoutval:' + this.showLogout);
    }
};
PracticeQuesPage = tslib_1.__decorate([
    Component({
        selector: 'app-practice-ques',
        templateUrl: './practice-ques.page.html',
        styleUrls: ['./practice-ques.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [TabsPage, HttpcallsService, Storage])
], PracticeQuesPage);
export { PracticeQuesPage };
//# sourceMappingURL=practice-ques.page.js.map