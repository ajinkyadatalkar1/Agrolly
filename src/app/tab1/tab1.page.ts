import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { HttpcallsService, } from 'src/app/services/httpcalls.service';
import { Subscription } from 'rxjs';
import { Language } from '../language/language';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showLogoutsubscriber: Subscription;
  showCropDataLoadingSubscriber: Subscription;
  cropdataretriveInterval: any;
  cropLoaded = false;
  cropLoadingMessage: string;
  showLogout: any;
  language: any;
  menuIcon: string;
  // tslint:disable-next-line: max-line-length
  constructor(private showHideTabs: TabsPage, private httpcalls: HttpcallsService, private lang: Language, private storage: Storage,
    private Toast: ToastController, private route: Router, private menu: MenuController, private loading: LoadingController) {
    this.LogcheckSubscriber();
    this.cropDataSubscriber();
    this.language = this.httpcalls.languageList;
    this.menuIcon = 'menu';
    this.greeting_call();
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    this.menuIcon = 'close';
  }

  closeMenu() {
    this.menuIcon = 'menu';
  }

  changepasswordpage() {
    if (this.showLogout) {
      this.menu.close('first');
      this.route.navigateByUrl('/tabs/changepassword');
    }
  }

  profile() {
    if (this.showLogout) {
      this.menu.close('first');
      this.route.navigateByUrl('/tabs/profile');
    }
  }

  organizer() {
    if (this.showLogout) {
      this.menu.close('first');
      this.route.navigateByUrl('/tabs/organizer');
    }
  }

  changeTabs() {
    this.showHideTabs.showHomeTab = this.httpcalls.showHomeTab;
    this.showHideTabs.showLoginTab = this.httpcalls.showLoginTab;
    this.showHideTabs.showRegisterTab = this.httpcalls.showRegisterTab;
    this.showHideTabs.showMyQuestionsTab = this.httpcalls.showMyQuestionsTab;
    this.showHideTabs.showAskQuestionsTab = this.httpcalls.showAskQuestionsTab;
  }

  greeting_call() {
    this.httpcalls.greetingApiCall();
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

  ionViewWillEnter() { // Lifecycle event
    setTimeout(() => {
      this.LogcheckSubscriber();
      this.cropDataSubscriber();
      this.changeTabs();
      this.language = this.httpcalls.languageList;
      this.showHideTabs.languageSubscriber();
    }, 500);

    this.httpcalls.GetForumQuestions();
  }

  async cropDataSubscriber() {
    if (this.showLogout && this.cropLoaded === false && this.httpcalls.annualForecast === undefined) {
      this.cropLoadingMessage = 'Loading crop data and annual weather forecast, please wait...';
      const loader = await this.loading.create({
        message: this.cropLoadingMessage,
      });
      await loader.present();
      let counter = 0;

      this.cropdataretriveInterval = setInterval(() => {
        this.showCropDataLoadingSubscriber = this.httpcalls.checkAnnualForecast().subscribe((data) => {
          counter++;
          // this.cropDataSubscriber();
          if (data !== undefined) {
            this.cropLoaded = true;
            loader.dismiss();
            clearInterval(this.cropdataretriveInterval);
          }

          if (counter % 100 === 0) {
            this.cropLoadingMessage = 'Data is taking longer to load due to poor internet connectivity. Retrying...';
            loader.setAttribute('message', this.cropLoadingMessage);
            this.httpcalls.getForecastAnnual();
          }
        });
      }, 100);
    } else {
      this.cropLoaded = false;
    }
  }

  LogcheckSubscriber() { // use subscriber to show and hide logout button
    this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
      this.showLogout = data;
    });
  }

  logout() {
    this.menu.close('first');
    this.httpcalls.Logout();
    this.LogcheckSubscriber();
    this.showHideTabs.setDefaultTabs();
    this.route.navigateByUrl('/tabs/tab2');
    this.storage.clear();
  }
}
