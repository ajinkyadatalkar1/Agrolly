import { Component, OnInit } from '@angular/core';
import { OnetimepasswordPage } from '../onetimepassword/onetimepassword.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { HttpcallsService } from '../services/httpcalls.service';


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
  constructor(private otpModal: ModalController, private alert: AlertController, private httpcalls: HttpcallsService) { }
  ngOnInit() {
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
        componentProps: {save_phone: this.email, save_password: this.password, page_type_fgt: this.fgtpass, page_type_reg: this.registerUsr, otp: this.otp}
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
