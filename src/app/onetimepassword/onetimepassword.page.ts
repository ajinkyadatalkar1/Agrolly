import { Component, OnInit, Input } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController } from '@ionic/angular';

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
  constructor(private httpcalls: HttpcallsService, private modalCtrl: ModalController) {
    this.language = this.httpcalls.languageList;
  }
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.language = this.httpcalls.languageList;
  }

  setUser() {
    // tslint:disable-next-line: max-line-length
    if (this.page_type_reg === 'yes'  && this.page_type_fgt === 'no' && this.OTP === this.otp) {
        this.httpcalls.register(this.save_email, this.save_password, this.save_name, this.save_country, this.save_state, this.save_city);
        this.OTP = undefined;
        this.closeModal();
    }

    // tslint:disable-next-line: max-line-length
    if (this.page_type_fgt === 'yes' && this.page_type_reg === 'no'  && this.OTP === this.otp) {
      this.httpcalls.forgotPassword(this.save_email, this.save_password);
      this.OTP = undefined;
      this.closeModal();
    }
  }

  async closeModal() {
    await this.modalCtrl.dismiss(); // close the modal component
  }
}
