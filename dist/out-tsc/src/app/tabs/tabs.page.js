import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
let TabsPage = class TabsPage {
    constructor(httpcallsService) {
        this.httpcallsService = httpcallsService;
        this.showHomeTab = true;
        this.showLoginTab = true;
        this.showRegisterTab = true;
        this.showMyQuestionsTab = false;
        this.showAskQuestionsTab = false;
        this.showFrm1Tab = false;
        this.loginStatus = false;
        this.showHomeTab = this.httpcallsService.showHomeTab;
        this.showLoginTab = this.httpcallsService.showLoginTab;
        this.showRegisterTab = this.httpcallsService.showRegisterTab;
        this.showMyQuestionsTab = false;
        this.showAskQuestionsTab = false;
        this.showFrm1Tab = false;
    }
    setDefaultTabs() {
        this.showHomeTab = true;
        this.showLoginTab = this.httpcallsService.showLoginTab;
        this.showRegisterTab = this.httpcallsService.showRegisterTab;
        this.showMyQuestionsTab = false;
        this.showAskQuestionsTab = false;
        this.showFrm1Tab = false;
    }
    checkLogin() {
        if (this.httpcallsService.loggedIn) {
            this.showLoginTab = this.httpcallsService.showLoginTab;
            this.showRegisterTab = this.httpcallsService.showRegisterTab;
        }
    }
    onFrm1Clicked() {
        this.showHomeTab = true;
        this.showLoginTab = this.httpcallsService.showLoginTab;
        this.showRegisterTab = this.httpcallsService.showRegisterTab;
        this.showMyQuestionsTab = false;
        this.showAskQuestionsTab = false;
        this.showFrm1Tab = true;
    }
    onLoginRegisterClicked() {
        this.showHomeTab = true;
        this.showLoginTab = this.httpcallsService.showLoginTab;
        this.showRegisterTab = this.httpcallsService.showRegisterTab;
        this.showMyQuestionsTab = false;
        this.showAskQuestionsTab = false;
        this.showFrm1Tab = false;
    }
};
TabsPage = tslib_1.__decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: 'tabs.page.html',
        styleUrls: ['tabs.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [HttpcallsService])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map