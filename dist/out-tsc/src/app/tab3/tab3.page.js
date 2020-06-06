import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { OnetimepasswordPage } from '../onetimepassword/onetimepassword.page';
import { Router } from '@angular/router';
import { HttpcallsService } from '../services/httpcalls.service';
let Tab3Page = class Tab3Page {
    constructor(otpmodal, router, alert, httpcalls) {
        this.otpmodal = otpmodal;
        this.router = router;
        this.alert = alert;
        this.httpcalls = httpcalls;
    }
    register() {
        // tslint:disable-next-line: max-line-length
        if (this.name !== undefined && this.phone !== undefined && this.password !== undefined && this.university !== undefined && this.phone.toString().length === 10 && this.password.length > 7) {
            this.presentModal();
        }
        else {
            this.alertModal();
        }
    }
    forgotpsd() {
        this.router.navigateByUrl('/tabs/forgotpassword');
    }
    showDev() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Developer Info:',
                message: 'Developed by Ajinkya Datalkar and Manoela Morais.',
                buttons: ['Close']
            });
            yield alert.present();
        });
    }
    presentModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.registerUsr = 'yes';
            this.fgtpass = 'no';
            this.getRandomInt(9999, 1000);
            const myModal = yield this.otpmodal.create({
                component: OnetimepasswordPage,
                // tslint:disable-next-line: max-line-length
                componentProps: { save_name: this.name, save_phone: this.phone, save_password: this.password, save_university: this.university, page_type_fgt: this.fgtpass, page_type_reg: this.registerUsr, otp: this.otp }
            });
            return yield myModal.present();
        });
    }
    alertModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alert.create({
                header: 'Alert:',
                message: 'Please fill all the fields.',
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
    ionViewDidEnter() {
        this.LogcheckSubscriber();
    }
    LogcheckSubscriber() {
        this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
            if (data) {
                this.router.navigateByUrl('');
            }
        });
    }
};
Tab3Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab3',
        templateUrl: 'tab3.page.html',
        styleUrls: ['tab3.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController, Router, AlertController, HttpcallsService])
], Tab3Page);
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map