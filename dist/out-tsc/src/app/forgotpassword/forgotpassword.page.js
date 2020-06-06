import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OnetimepasswordPage } from '../onetimepassword/onetimepassword.page';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(otpModal, alert) {
        this.otpModal = otpModal;
        this.alert = alert;
    }
    ngOnInit() {
    }
    requestOtp() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.phoneno !== undefined && this.password !== undefined && this.password.length > 7 && this.phoneno.toString().length === 10) {
                this.registerUsr = 'no';
                this.fgtpass = 'yes';
                this.getRandomInt(9999, 1000);
                const myModal = yield this.otpModal.create({
                    component: OnetimepasswordPage,
                    // tslint:disable-next-line: max-line-length
                    componentProps: { save_phone: this.phoneno, save_password: this.password, page_type_fgt: this.fgtpass, page_type_reg: this.registerUsr, otp: this.otp }
                });
                return yield myModal.present();
            }
            else {
                this.alertModal();
            }
        });
    }
    alertModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Alert:',
                message: 'Please fill all the fields',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    getRandomInt(max, min) {
        min = Math.ceil(min);
        max = Math.floor(max);
        this.otp = Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
ForgotpasswordPage = tslib_1.__decorate([
    Component({
        selector: 'app-forgotpassword',
        templateUrl: './forgotpassword.page.html',
        styleUrls: ['./forgotpassword.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController, AlertController])
], ForgotpasswordPage);
export { ForgotpasswordPage };
//# sourceMappingURL=forgotpassword.page.js.map