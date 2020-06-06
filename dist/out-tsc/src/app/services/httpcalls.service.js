import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
let HttpcallsService = class HttpcallsService {
    constructor(http, route, Toast, storage) {
        // Or to get a key/value pair
        this.http = http;
        this.route = route;
        this.Toast = Toast;
        this.storage = storage;
        this.showHomeTab = true;
        this.showLoginTab = true;
        this.showRegisterTab = true;
        this.showMyQuestionsTab = false;
        this.showAskQuestionsTab = false;
        this.showFrm1Tab = false;
        this.loggedIn = false;
        this.httpOptionsGet = {
            headers: new HttpHeaders({
                'Content-type': 'text/html',
            })
        };
        this.httpOptionsPost = {
            headers: new HttpHeaders({
                'Content-type': 'application/x-www-form-urlencoded',
            })
        };
        storage.get('id').then((val) => {
            if (val !== '' && val !== null && val !== undefined) {
                this.id = val;
                this.GetUserQuestions(); // call when login available
                console.log("id is:" + this.id);
            }
            else {
                storage.remove('id');
            }
        });
        storage.get('phone').then((val) => {
            if (val !== '' && val !== null && val !== undefined) {
                this.loggedIn = true;
                this.showLoginTab = false;
                this.showRegisterTab = false;
                this.phone = val;
            }
            else {
                storage.remove('phone');
            }
        });
        storage.get('name').then((val) => {
            if (val !== '' && val !== null && val !== undefined) {
                this.name = val;
                console.log("name is:" + this.name);
            }
            else {
                storage.remove('name');
            }
        });
        this.GetTopics();
        this.GetForumQuestions();
    }
    /* Login methods */
    checkLogin() {
        return new Observable(observer => {
            observer.next(this.loggedIn);
        });
    }
    GetLogin(phoneno, password) {
        const postData = {
            userphoneno: phoneno,
            userpassword: password
        };
        this.http.post('http://localhost/login.php', postData, this.httpOptionsPost).subscribe((result) => {
            if (result['result'] === 'successful') {
                console.log(result);
                this.showLoginTab = false;
                this.showRegisterTab = false;
                this.showMyQuestionsTab = true;
                this.showAskQuestionsTab = true;
                this.loggedIn = true;
                this.route.navigateByUrl('');
                this.name = result['name'];
                this.id = result['user_id'];
                this.phone = phoneno;
                this.LoginToast();
                this.storage.set('phone', phoneno);
                this.storage.set('name', this.name);
                this.storage.set('id', this.id);
                this.GetUserQuestions();
            }
            else {
                console.log(result);
                this.showHomeTab = true;
                this.showLoginTab = true;
                this.showRegisterTab = true;
                this.showMyQuestionsTab = false;
                this.showAskQuestionsTab = false;
                this.showFrm1Tab = false;
                this.loggedIn = false;
            }
        });
    }
    Logout() {
        this.loggedIn = false;
        this.showHomeTab = true;
        this.showLoginTab = true;
        this.showRegisterTab = true;
        this.showMyQuestionsTab = false;
        this.showAskQuestionsTab = false;
        this.showFrm1Tab = false;
        this.loggedIn = false;
        this.storage.remove('phone');
        this.storage.remove('name');
        this.storage.remove('id');
        this.name = undefined;
        this.id = undefined;
        this.phone = undefined;
        this.LogoutToast();
    }
    LoginToast() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.Toast.create({
                message: 'Logged In',
                duration: 2000,
                position: 'top',
                translucent: true
            });
            toast.present();
        });
    }
    LogoutToast() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.Toast.create({
                message: 'You have been logged out successfully',
                duration: 2000,
                position: 'top',
                translucent: true
            });
            toast.present();
        });
    }
    /* Load topics for practice questions */
    GetTopics() {
        this.http.get('http://localhost/topics.php', this.httpOptionsGet).subscribe((result) => {
            this.topicList = result;
        });
    }
    /* Ask Questions Page */
    post_question(question, source, qtype, atype) {
        if (this.name !== 'null' || this.name !== undefined) {
            const postQuesData = {
                postquestion: question,
                postsource: source,
                postqtype: qtype,
                postatype: atype,
                postuid: this.id,
                postname: this.name
            };
            this.http.post('http://localhost/submitquestion.php', postQuesData, this.httpOptionsPost).subscribe((result) => {
                if (result['result'] === 'successful') {
                    this.quesPostSuccessful();
                }
                else {
                    this.quesPostFailed();
                }
            });
        }
    }
    quesPostSuccessful() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.Toast.create({
                message: 'Question successfully posted',
                duration: 2000,
                position: 'top',
                translucent: true
            });
            toast.present();
        });
    }
    quesPostFailed() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.Toast.create({
                message: 'Failed to post your question',
                duration: 2000,
                position: 'top',
                translucent: true
            });
            toast.present();
        });
    }
    /* Get Forum Questions */
    GetForumQuestions() {
        this.http.get('http://localhost/forum.php', this.httpOptionsGet).subscribe((result) => {
            this.forumList = result;
        });
    }
    /* Get User Questions */
    GetUserQuestions() {
        if (this.name !== 'null' || this.name !== undefined) {
            const postQuesData = {
                uid: this.id
            };
            this.http.post('http://localhost/myquestions.php', postQuesData, this.httpOptionsPost).subscribe((result) => {
                this.userQuesList = result;
                console.log(result);
            });
        }
    }
    /* Load Questions and Comments */
    getQuestion(id) {
        this.http.get('http://localhost/quesComm.php?what=question&id=' + id, this.httpOptionsGet).subscribe((result) => {
            this.completeQues = result;
        });
    }
    getComments(id) {
        this.http.get('http://localhost/quesComm.php?what=comment&id=' + id, this.httpOptionsGet).subscribe((result) => {
            this.commentList = result;
        });
    }
    /* Load questions subject wise */
    getSubQues() {
    }
};
HttpcallsService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, Router, ToastController, Storage])
], HttpcallsService);
export { HttpcallsService };
//# sourceMappingURL=httpcalls.service.js.map