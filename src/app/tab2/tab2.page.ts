import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { HttpcallsService } from '../services/httpcalls.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { timeout, catchError } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Language } from '../language/language';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  username: string;
  password: string;
  showLogoutsubscriber: Subscription;
  language: any;
  constructor(private showHideTabs: TabsPage, private httpcalls: HttpcallsService, private router: Router, private platform: Platform,
              private storage: Storage, private Toast: ToastController,  private lang: Language) {
    this.language = this.httpcalls.languageList;
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('/tabs/tab2');
    });
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

  mandarin() {
    this.httpcalls.languageList = this.lang.Mandarin[0];
    this.language = this.httpcalls.languageList;
    this.showHideTabs.languageSubscriber();
    this.saveLanguagePreferance('Mandarin');
  }

  saveLanguagePreferance(setLang) {
    this.storage.set('language', setLang);
    this.langToast();
    this.httpcalls.getForecast();
    this.httpcalls.getForecastHourly();
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

  login() {
    // tslint:disable-next-line: no-unused-expression
    new Promise(() => {
      this.httpcalls.GetLogin(this.username, this.password);
    });
    this.username = '';
    this.password = '';
  }

  forgotpsd() {
    this.router.navigateByUrl('/tabs/forgotpassword');
  }

  ionViewDidEnter() { // Lifecycle event
    this.LogcheckSubscriber();
    this.language = this.httpcalls.languageList;
  }

  LogcheckSubscriber() { // use subscriber to show and hide logout button
    this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('');
      }
    });
  }
}
