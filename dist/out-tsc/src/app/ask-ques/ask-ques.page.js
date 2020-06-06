import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { AlertController } from '@ionic/angular';
let AskQuesPage = class AskQuesPage {
    constructor(httpCalls, alertCtrl) {
        this.httpCalls = httpCalls;
        this.alertCtrl = alertCtrl;
        this.ExamList = [
            {
                subject: 'Miscellaneous / Off Topic'
            },
            {
                subject: 'Quantitative Analysis',
            },
            {
                subject: 'Financial markets and products',
            },
            {
                subject: 'Valuation and risk models',
            },
            {
                subject: 'Market risk measurement and management',
            },
            {
                subject: 'Credit risk measurement and management',
            },
            {
                subject: 'Operational risk and resiliency',
            },
            {
                subject: 'Liquidity and treasury risk measurement and management',
            },
            {
                subject: 'Risk management and investment management',
            },
            {
                subject: 'Current issues in financial markets',
            }
        ];
    }
    logForm() {
    }
    submitQues() {
        console.log(this.httpCalls.name);
        console.log(this.httpCalls.id);
        console.log(this.httpCalls.phone);
        if (this.httpCalls.name !== undefined && this.httpCalls.id !== undefined && this.httpCalls.phone !== undefined) {
            if (this.question !== undefined && this.source !== undefined && this.qtype !== undefined && this.atype !== undefined) {
                this.httpCalls.post_question(this.question, this.source, this.qtype, this.atype);
                this.question = '';
                this.source = '';
                this.qtype = '';
                this.atype = '';
            }
            else {
                this.alertModalFillFields();
            }
        }
        else {
            this.alertModalLogin();
        }
    }
    alertModalLogin() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Alert:',
                message: 'Please Login',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    alertModalFillFields() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Alert:',
                message: 'Please fill all the fields.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ngOnInit() {
    }
};
AskQuesPage = tslib_1.__decorate([
    Component({
        selector: 'app-ask-ques',
        templateUrl: './ask-ques.page.html',
        styleUrls: ['./ask-ques.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [HttpcallsService, AlertController])
], AskQuesPage);
export { AskQuesPage };
//# sourceMappingURL=ask-ques.page.js.map