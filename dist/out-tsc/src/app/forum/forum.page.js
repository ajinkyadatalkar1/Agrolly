import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController } from '@ionic/angular';
import { QuescommentsPage } from '../quescomments/quescomments.page';
let ForumPage = class ForumPage {
    constructor(httpcalls, modalCtrl) {
        this.httpcalls = httpcalls;
        this.modalCtrl = modalCtrl;
        this.httpcalls.GetForumQuestions();
        this.lists = this.httpcalls.forumList;
    }
    refresh(event) {
        setTimeout(() => {
            this.httpcalls.GetForumQuestions();
            this.lists = this.httpcalls.forumList;
            event.target.complete();
        }, 2000);
    }
    openQues(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.completeQues = undefined;
            this.httpcalls.getQuestion(id);
            this.completeQues = this.httpcalls.completeQues;
            /*
            this.httpcalls.getComments(id);
            this.commentLists = this.httpcalls.commentList;
            */
            const myModal = yield this.modalCtrl.create({
                component: QuescommentsPage,
                componentProps: { quesId: id, question: this.completeQues }
            });
            return yield myModal.present();
        });
    }
    ngOnInit() {
        this.httpcalls.GetForumQuestions();
        this.lists = this.httpcalls.forumList;
    }
};
ForumPage = tslib_1.__decorate([
    Component({
        selector: 'app-forum',
        templateUrl: './forum.page.html',
        styleUrls: ['./forum.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [HttpcallsService, ModalController])
], ForumPage);
export { ForumPage };
//# sourceMappingURL=forum.page.js.map