import { Component, OnInit } from '@angular/core';
import { OnetimepasswordPage } from '../onetimepassword/onetimepassword.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { HttpcallsService } from '../services/httpcalls.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email: string;
  password: string;
  fgtpass: string;
  registerUsr: string;
  otp: string;
  language: string;
  constructor(private otpModal: ModalController, private alert: AlertController, private httpcalls: HttpcallsService, private route: Router,
              private platform: Platform ) {
    this.language = this.httpcalls.languageList;
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/tab2');
    });
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.language = this.httpcalls.languageList;
  }

  async requestOtp() {
    if (this.email !== undefined && this.password !== undefined && this.password.length > 7) {
      this.registerUsr = 'no';
      this.fgtpass = 'yes';
      this.getRandomInt(9999, 1000);
      this.httpcalls.requestOtp(this.otp, this.email);
      const myModal = await this.otpModal.create({
        component: OnetimepasswordPage,
        // tslint:disable-next-line: max-line-length
        componentProps: {save_email: this.email, save_password: this.password, page_type_fgt: this.fgtpass, page_type_reg: this.registerUsr, otp: this.otp}
      });
      this.email = undefined;
      this.password = undefined;
      return await myModal.present();
    } else {
      this.alertModal();
    }
  }

  async alertModal() {
    const alert = await this.alert.create({
      header: 'Alert:',
      message: 'Please fill all the fields',
      buttons: ['OK']
    });
    await alert.present();
  }

  getRandomInt(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.otp = Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
