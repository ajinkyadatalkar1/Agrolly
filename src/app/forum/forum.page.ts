import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController } from '@ionic/angular';
import { QuescommentsPage } from '../quescomments/quescomments.page';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  lists: any;
  completeQues: any;
  commentLists: any;
  language: any;
  country: string;

  constructor(private httpcalls: HttpcallsService, private modalCtrl: ModalController, private loading: LoadingController,
              private route: Router, private platform: Platform) {
    this.httpcalls.GetForumQuestions();
    this.lists = this.httpcalls.forumList;
    this.language = this.httpcalls.languageList;

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/tab2');
    });

    this.setCountry();
  }

  ionViewWillEnter() {
    this.lists = this.httpcalls.forumList;
    this.language = this.httpcalls.languageList;
    this.setCountry();
  }

  setCountry() {
    if (this.httpcalls.country !== undefined || this.httpcalls.country !== null || this.httpcalls.country !== '') {
      this.country = this.httpcalls.country;
    } else {
      this.country = 'Mongolia';
    }
  }

  refresh(event) {
    setTimeout(() => {
      this.httpcalls.GetForumQuestions();
      this.lists = this.httpcalls.forumList;
      event.target.complete();
    }, 2000);
  }

  LoadQuesAndComment(id) {
    this.httpcalls.getQuestion(id);
    this.httpcalls.getComments(id);
    this.presentLoading();
    setTimeout(() => {
      this.openQues(id);
    }, 2000);
  }

  async presentLoading() {
    const loading = await this.loading.create({
      spinner: 'lines',
      message: this.httpcalls.languageList.please_wait,
      duration: 2000
    });
    await loading.present();
  }

  async openQues(id) {
    const myModal = await this.modalCtrl.create({
      component: QuescommentsPage,
      componentProps: { Qid: id }
    });
    myModal.onDidDismiss().then(() => {
      this.lists = this.httpcalls.forumList;
    });
    return await myModal.present();
  }



  ngOnInit() {
    this.httpcalls.GetForumQuestions();
    this.lists = this.httpcalls.forumList;
  }
}
