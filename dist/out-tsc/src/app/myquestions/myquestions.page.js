import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
let MyquestionsPage = class MyquestionsPage {
    constructor(httpcalls) {
        this.httpcalls = httpcalls;
        this.httpcalls.GetUserQuestions();
        this.lists = this.httpcalls.userQuesList;
    }
    ionViewWillEnter() {
        this.lists = this.httpcalls.userQuesList;
    }
    refresh(event) {
        setTimeout(() => {
            this.httpcalls.GetUserQuestions();
            this.lists = this.httpcalls.userQuesList;
            event.target.complete();
        }, 2000);
    }
    ngOnInit() {
    }
};
MyquestionsPage = tslib_1.__decorate([
    Component({
        selector: 'app-myquestions',
        templateUrl: './myquestions.page.html',
        styleUrls: ['./myquestions.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [HttpcallsService])
], MyquestionsPage);
export { MyquestionsPage };
//# sourceMappingURL=myquestions.page.js.map