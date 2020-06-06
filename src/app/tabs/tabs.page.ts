import { Component } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  showHomeTab = true;
  showLoginTab = true;
  showRegisterTab = true;
  showMyQuestionsTab = false;
  showAskQuestionsTab = false;
  showFrm1Tab = false;
  showFrm2Tab = false;
  loginStatus = false;

  languageList: any;
  languagesubscriber: Subscription;

  constructor(private httpcallsService: HttpcallsService) {
    this.showHomeTab = this.httpcallsService.showHomeTab;
    this.showLoginTab = this.httpcallsService.showLoginTab;
    this.showRegisterTab = this.httpcallsService.showRegisterTab;
    this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
    this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
    this.showFrm1Tab = false;
    this.showFrm2Tab = false;
    this.checkLogin();
    this.languageSubscriber();
    this.languageList = httpcallsService.languageList;
  }

  languageSubscriber() {
    this.languagesubscriber = this.httpcallsService.languageChange().subscribe((data) => {
      this.languageList = data;
      console.log(data);
    });
  }

  setDefaultTabs() {
    this.showHomeTab = true;
    this.showLoginTab = this.httpcallsService.showLoginTab;
    this.showRegisterTab = this.httpcallsService.showRegisterTab;
    this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
    this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
    this.showFrm1Tab = false;
    this.showFrm2Tab = false;
  }

  checkLogin() {
    if (this.httpcallsService.loggedIn) {
      this.showLoginTab = this.httpcallsService.showLoginTab;
      this.showRegisterTab = this.httpcallsService.showRegisterTab;
      this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
      this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
    }
  }

  onFrm1Clicked() {
    this.showHomeTab = true;
    this.showLoginTab = this.httpcallsService.showLoginTab;
    this.showRegisterTab = this.httpcallsService.showRegisterTab;
    this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
    this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
    this.showFrm1Tab = true;
    this.showFrm2Tab = false;
  }

  onFrm2Clicked() {
    this.showHomeTab = true;
    this.showLoginTab = this.httpcallsService.showLoginTab;
    this.showRegisterTab = this.httpcallsService.showRegisterTab;
    this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
    this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
    this.showFrm1Tab = false;
    this.showFrm2Tab = true;
  }

  onLoginRegisterClicked() {
    this.showHomeTab = true;
    this.showLoginTab = this.httpcallsService.showLoginTab;
    this.showRegisterTab = this.httpcallsService.showRegisterTab;
    this.showMyQuestionsTab = this.httpcallsService.showMyQuestionsTab;
    this.showAskQuestionsTab = this.httpcallsService.showAskQuestionsTab;
    this.showFrm1Tab = false;
  }
}
