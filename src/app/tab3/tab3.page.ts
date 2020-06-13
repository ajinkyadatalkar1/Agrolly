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
  countries: any;
  states: any;
  cities: any;
  showStates: boolean;
  showCities: boolean;
  language: any;

  constructor(private otpmodal: ModalController, private router: Router,
              private alert: AlertController, private httpcalls: HttpcallsService, private country: Countries, private state: States,
              private city: Sums, private platform: Platform) {
                this.countries = this.country.Country;
                this.countrySelectedIcon = '../../assets/icon/earth.svg';
                this.showStates = false;
                this.showCities = false;
                this.language = this.httpcalls.languageList;

                this.platform.backButton.subscribeWithPriority(10, () => {
                  this.router.navigateByUrl('/tabs/tab2');
                });
              }
  ngOnInit() {
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

  async presentModal() {
    this.registerUsr = 'yes';
    this.fgtpass = 'no';
    this.getRandomInt(9999, 1000);
    this.httpcalls.requestOtp(this.otp, this.email);
    const myModal = await this.otpmodal.create({
      component: OnetimepasswordPage,
      componentProps: {
        save_name: this.name,
        save_email: this.email,
        save_password: this.password,
        save_country: this.countrySelected,
        save_state: this.stateSelected,
        save_city: this.citySelected,
        page_type_fgt: this.fgtpass,
        page_type_reg: this.registerUsr,
        otp: this.otp
      }
    });
    return await myModal.present();
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

  ionViewDidEnter() { // Lifecycle event
    this.LogcheckSubscriber();
    this.language = this.httpcalls.languageList;
    this.showStates = false;
    this.showCities = false;
    this.countrySelectedIcon = '../../assets/icon/earth.svg';
  }

  LogcheckSubscriber() { // use subscriber to show and hide logout button
    this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('');
      }
    });
  }
}
