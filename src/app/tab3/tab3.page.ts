import { Component, OnInit } from '@angular/core';
import { ModalController, AngularDelegate } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { OnetimepasswordPage } from '../onetimepassword/onetimepassword.page';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpcallsService } from '../services/httpcalls.service';
import { Countries } from '../Country/countries';
import { States } from '../States/states';

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
  fgtpass: string;
  registerUsr: string;
  otp: string;
  showLogoutsubscriber: Subscription;
  countries: any;
  states: any;
  showStates: boolean;
  language: any;

  constructor(private otpmodal: ModalController, private router: Router,
              private alert: AlertController, private httpcalls: HttpcallsService, private country: Countries, private state: States) {
                this.countries = this.country.Country;
                this.countrySelectedIcon = '../../assets/icon/earth.svg';
                this.showStates = false;
                this.language = this.httpcalls.languageList;
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
      this.countrySelected = '../../assets/icon/earth.svg';
      this.stateSelected = '../../assets/icon/earth.svg';
      this.otp = undefined;
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
  }

  async showDev() {
    const alert = await this.alert.create({
      header: 'Developer Info:',
      message: 'Developed by Ajinkya Datalkar and Manoela Morais.',
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
  }

  LogcheckSubscriber() { // use subscriber to show and hide logout button
    this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('');
      }
    });
  }
}
