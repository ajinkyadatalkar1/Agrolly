import { Component, OnInit } from '@angular/core';
import { ModalController, AngularDelegate } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { OnetimepasswordPage } from '../onetimepassword/onetimepassword.page';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpcallsService } from '../services/httpcalls.service';
import { Countries } from '../Country/countries';
import { States } from '../States/states';
import { Sums } from '../Sums/sums';
import { Platform } from '@ionic/angular';

import { TabsPage } from '../tabs/tabs.page';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Language } from '../language/language';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  name: string;
  email: string;
  password: string;
  stateSelected: string;
  countrySelected: string;
  countrySelectedIcon: string;
  citySelected: string;
  fgtpass: string;
  registerUsr: string;
  otp: string;
  showLogoutsubscriber: Subscription;
  otpSubscriber: Subscription;
  requestOtpInterval: any;
  countries: any;
  states: any;
  cities: any;
  showStates: boolean;
  showCities: boolean;
  language: any;
  brazilCities: object;


  constructor(private otpmodal: ModalController, private router: Router,
              private alert: AlertController, private httpcalls: HttpcallsService, private country: Countries, private state: States,
              private city: Sums, private platform: Platform,
              private storage: Storage, private Toast: ToastController,  private lang: Language, private showHideTabs: TabsPage) {
                this.countries = this.country.Country;
                this.countrySelectedIcon = '../../assets/icon/earth.svg';
                this.showStates = false;
                this.showCities = false;
                this.language = this.httpcalls.languageList;
                this.brazilCities = this.httpcalls.cityList;


                this.platform.backButton.subscribeWithPriority(10, () => {
                  this.router.navigateByUrl('/tabs/tab2');
                });
              }
  ngOnInit() {
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


  register() {
    // tslint:disable-next-line: max-line-length
    if (this.name !== undefined && this.email !== undefined && this.password !== undefined && this.password.length > 7 &&
         this.countrySelected !== undefined && this.stateSelected !== undefined) {
      this.presentModal();
      this.name = undefined;
      this.email = undefined;
      this.password = undefined;
      this.countrySelectedIcon = '../../assets/icon/earth.svg';
      this.showStates = false;
      this.countrySelected = undefined;
      this.stateSelected = undefined;
      this.otp = undefined;
      this.citySelected = undefined;
    } else {
      this.alertModal();
    }
  }

  forgotpsd() {
    this.router.navigateByUrl('/tabs/forgotpassword');
  }

  showCountryIcon() {
    this.countrySelectedIcon = '../../assets/icon/' + this.countrySelected + '.svg';
    this.stateSelected = '';
    this.showStates = true;
    this.states = this.state.list[this.countrySelected];
    this.showCities = false;
    // this.citySelected = null;
  }

  showCity() {
    if (this.countrySelected === 'Mongolia' && (this.stateSelected === 'Dornod' || this.stateSelected === 'Sukhbaatar' ||
         this.stateSelected === 'Khentii')) {
      this.showCities = true;
      this.cities = undefined;
      if (this.stateSelected === 'Dornod') {
        this.cities = this.city.cities[0].Dornod;
      } else if (this.stateSelected === 'Sukhbaatar') {
        this.cities = this.city.cities[0].Sukhbaatar;
      } else if (this.stateSelected === 'Khentii') {
        this.cities = this.city.cities[0].Khentii;
      } else {
        this.showCities = false;
      }
    } else if (this.countrySelected === 'Brazil') {
      this.showCities = true;
    } else {
      this.showCities = false;
      this.citySelected = null;
    }
  }

  async showDev() {
    const alert = await this.alert.create({
      header: 'Developer Info:',
      message: 'Developed by Ajinkya Datalkar, Chimka and Manoela Morais.',
      buttons: ['Close']
    });
    await alert.present();
  }

  presentModal() {
    this.registerUsr = 'yes';
    this.fgtpass = 'no';
    this.getRandomInt(9999, 1000);
    this.httpcalls.requestOtp(this.otp, this.email, 'register');
    let save_name1 = this.name;
    let save_email1 = this.email;
    let save_password1 = this.password;
    let save_country1 = this.countrySelected;
    let save_state1 = this.stateSelected;
    let save_city1 = this.citySelected;
    let page_type_fgt1 = this.fgtpass;
    let page_type_reg1 = this.registerUsr;
    let otp1 = this.otp;

    this.requestOtpInterval = setInterval(() => {
    this.otpSubscriber = this.httpcalls.checkRequestStatus().subscribe(async data => {
      if (data) {
        const myModal = await this.otpmodal.create({
          component: OnetimepasswordPage,
          componentProps: {
            save_name: save_name1,
            save_email: save_email1,
            save_password: save_password1,
            save_country: save_country1,
            save_state: save_state1,
            save_city: save_city1,
            page_type_fgt: page_type_fgt1,
            page_type_reg: page_type_reg1,
            otp: otp1
          }
        });
        clearInterval(this.requestOtpInterval);
        return await myModal.present();
      } else if (data === false && data !== null) {
        clearInterval(this.requestOtpInterval);
      }
    });
    }, 500);
  }

  async alertModal() {
    const alert = await this.alert.create({
      header: 'Alert:',
      message: 'Please fill all the fields.',
      buttons: ['OK']
    });
    await alert.present();
  }

  getRandomInt(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.otp = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ionViewWillEnter() {
    this.LogcheckSubscriber();
    this.language = this.httpcalls.languageList;
    this.showStates = false;
    this.showCities = false;
    this.countrySelected = '';
    this.countrySelectedIcon = '../../assets/icon/earth.svg';
    this.brazilCities = this.httpcalls.cityList;
  }

  ionViewDidEnter() { // Lifecycle event
    this.LogcheckSubscriber();
    this.language = this.httpcalls.languageList;
    this.showStates = false;
    this.showCities = false;
    this.countrySelected = '';
    this.countrySelectedIcon = '../../assets/icon/earth.svg';
    this.brazilCities = this.httpcalls.cityList;
  }

  LogcheckSubscriber() { // use subscriber to show and hide logout button
    this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('');
      }
    });
  }
}
