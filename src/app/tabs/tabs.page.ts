import { Component } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  showHomeTab = false;
  showLoginTab = true;
  showRegisterTab = true;
  showMyQuestionsTab = false;
  showAskQuestionsTab = false;
  loginStatus = false;
  languageList: any;
  languagesubscriber: Subscription;

  constructor(private httpcallsService: HttpcallsService, private route: Router) {
    this.showHomeTab = this.httpcallsService.showHomeTab;
    this.showLoginTab = this.httpcallsService.showLoginTab;
    this.showRegisterTab = this.httpcallsService.showRegisterTab;
    this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
    this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
    this.checkLogin();
    this.languageSubscriber();
    this.languageList = httpcallsService.languageList;
  }

  languageSubscriber() {
    this.languagesubscriber = this.httpcallsService.languageChange().subscribe((data) => {
      this.languageList = data;
  });
}

  setDefaultTabs() {
    this.showHomeTab = this.httpcallsService.showHomeTab;
    this.showLoginTab = this.httpcallsService.showLoginTab;
    this.showRegisterTab = this.httpcallsService.showRegisterTab;
    this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
    this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
  }

  checkLogin() {
    if (this.httpcallsService.loggedIn) {
      this.showHomeTab = this.httpcallsService.showHomeTab;
      this.showLoginTab = this.httpcallsService.showLoginTab;
      this.showRegisterTab = this.httpcallsService.showRegisterTab;
      this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
      this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
    }
  }

  onWeeklyForcastClicked() {
    this.showHomeTab = this.httpcallsService.showHomeTab;
    this.showLoginTab = this.httpcallsService.showLoginTab;
    this.showRegisterTab = this.httpcallsService.showRegisterTab;
    this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
    this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
  }

  onFrm2Clicked() {
    this.showHomeTab = this.httpcallsService.showHomeTab;
    this.showLoginTab = this.httpcallsService.showLoginTab;
    this.showRegisterTab = this.httpcallsService.showRegisterTab;
    this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
    this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
  }

  onLoginRegisterClicked() {
    this.showHomeTab = this.httpcallsService.showHomeTab;
    this.showLoginTab = this.httpcallsService.showLoginTab;
    this.showRegisterTab = this.httpcallsService.showRegisterTab;
    this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
    this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
  }
}
