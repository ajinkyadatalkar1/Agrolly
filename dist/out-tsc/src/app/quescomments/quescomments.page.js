import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController } from '@ionic/angular';
let QuescommentsPage = class QuescommentsPage {
    constructor(httpcalls, modalCtrl) {
        this.httpcalls = httpcalls;
        this.modalCtrl = modalCtrl;
        this.completeQues = this.question;
    }
    ngOnInit() {
        this.completeQues = this.question;
    }
    closeModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss(); // close the modal component
        });
    }
    ionViewDidEnter() {
        this.completeQues = this.question;
    }
    ionViewWillEnter() {
        this.completeQues = this.question;
        this.checkLogin = this.httpcalls.loggedIn;
    }
    refresh(event) {
        setTimeout(() => {
            this.httpcalls.GetUserQuestions();
            this.commentLists = this.httpcalls.commentList;
            event.target.complete();
        }, 2000);
    }
};
tslib_1.__decorate([
    Input("quesId"),
    tslib_1.__metadata("design:type", Object)
], QuescommentsPage.prototype, "quesId", void 0);
tslib_1.__decorate([
    Input("question"),
    tslib_1.__metadata("design:type", Object)
], QuescommentsPage.prototype, "question", void 0);
QuescommentsPage = tslib_1.__decorate([
    Component({
        selector: 'app-quescomments',
        templateUrl: './quescomments.page.html',
        styleUrls: ['./quescomments.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [HttpcallsService, ModalController])
], QuescommentsPage);
export { QuescommentsPage };
//# sourceMappingURL=quescomments.page.js.map