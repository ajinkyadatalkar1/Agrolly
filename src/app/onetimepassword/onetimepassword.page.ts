import { Component, OnInit, Input } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController } from '@ionic/angular';
import { element } from 'protractor';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-onetimepassword',
  templateUrl: './onetimepassword.page.html',
  styleUrls: ['./onetimepassword.page.scss'],
})
export class OnetimepasswordPage implements OnInit {
  @Input("save_name") save_name;
  @Input("save_email") save_email;
  @Input("save_password") save_password;
  @Input("save_country") save_country;
  @Input("save_state") save_state;
  @Input("save_city") save_city;
  @Input("page_type_fgt") page_type_fgt;
  @Input("page_type_reg") page_type_reg;
  @Input("otp") otp;

  OTP: number;
  language: any;
  otpArray: number[] = [];
  constructor(private httpcalls: HttpcallsService, private modalCtrl: ModalController, private Toast: ToastController) {
    this.language = this.httpcalls.languageList;
    this.otpArray.push(this.otp);
  }
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.language = this.httpcalls.languageList;
    console.log(this.save_email, this.save_password, this.save_name, this.save_country, this.save_state, this.save_city, this.otp);
  }

  setUser() {
    // tslint:disable-next-line: max-line-length
    if (this.page_type_reg === 'yes'  && this.page_type_fgt === 'no') {
      if (this.iterateOtp()) {
        this.httpcalls.register(this.save_email, this.save_password, this.save_name, this.save_country, this.save_state, this.save_city);
        this.OTP = undefined;
        this.closeModal();
      } else {
        this.showError();
      }
    }

    // tslint:disable-next-line: max-line-length
    if (this.page_type_fgt === 'yes' && this.page_type_reg === 'no') {
      if (this.iterateOtp()) {
        this.httpcalls.forgotPassword(this.save_email, this.save_password);
        this.OTP = undefined;
        this.closeModal();
      } else {
        this.showError();
      }
    }
  }

  async showError() {
    const toast = await this.Toast.create({
      message: 'Incorrect one time password',
      duration: 4000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  iterateOtp() {
    let checkEqual = null;
    this.otpArray.forEach((element: number) => {
      if (this.OTP === element) {
        checkEqual = true;
      }
    });
    if (checkEqual) {
      return true;
    } else {
      return false;
    }
  }

  resend() {
    this.getRandomInt(9999, 1000);
    this.httpcalls.requestOtp(this.otpArray[this.otpArray.length - 1], this.save_email, 'resend');
  }

  getRandomInt(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.otpArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }


  async closeModal() {
    this.otpArray = [];
    await this.modalCtrl.dismiss(); // close the modal component
  }
}
