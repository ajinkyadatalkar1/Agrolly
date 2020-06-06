import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { HttpcallsService,  } from 'src/app/services/httpcalls.service';
import { Subscription } from 'rxjs';
import { Language } from '../language/language';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showLogoutsubscriber: Subscription;
  showLogout: any;
  language: any;
  // tslint:disable-next-line: max-line-length
  constructor( private showHideTabs: TabsPage, private httpcalls: HttpcallsService, private lang: Language, private storage: Storage, private Toast: ToastController) {
    this.LogcheckSubscriber();
    this.language = this.httpcalls.languageList;
  }

  changeTabs() {
    this.showHideTabs.showLoginTab = this.httpcalls.showLoginTab;
    this.showHideTabs.showRegisterTab = this.httpcalls.showRegisterTab;
    this.showHideTabs.showMyQuestionsTab = this.httpcalls.showMyQuestionsTab;
    this.showHideTabs.showAskQuestionsTab = this.httpcalls.showAskQuestionsTab;
    this.showHideTabs.showFrm1Tab = false;
  }

  english() {
    this.httpcalls.languageList = this.lang.English[0];
    this.language = this.httpcalls.languageList;
    this.showHideTabs.languageSubscriber();
    this.saveLanguagePreferance('English');
  }

  mongolian() {
    this.httpcalls.languageList = this.lang.Mongolian[0];
    this.language = this.httpcalls.languageList;
    this.showHideTabs.languageSubscriber();
    this.saveLanguagePreferance('Mongolian');
  }

  portuguese() {
    this.httpcalls.languageList = this.lang.Portuguese[0];
    this.language = this.httpcalls.languageList;
    this.showHideTabs.languageSubscriber();
    this.saveLanguagePreferance('Portuguese');
  }

  saveLanguagePreferance(setLang) {
    this.storage.set('language', setLang);
    this.langToast();
  }

  async langToast() {
    const toast = await this.Toast.create({
      message: this.language.language_save_message,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  ionViewWillEnter() { // Lifecycle event
    setTimeout(() => {
      this.LogcheckSubscriber();
      this.changeTabs();
      this.language = this.httpcalls.languageList;
      this.showHideTabs.languageSubscriber();
    }, 50);
  }

  LogcheckSubscriber() { // use subscriber to show and hide logout button
    this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
      this.showLogout = data;
    });
  }

  logout() {
    this.httpcalls.Logout();
    this.LogcheckSubscriber();
    this.showHideTabs.setDefaultTabs();
  }
}
