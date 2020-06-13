import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController } from '@ionic/angular';
import { QuescommentsPage } from '../quescomments/quescomments.page';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-myquestions',
  templateUrl: './myquestions.page.html',
  styleUrls: ['./myquestions.page.scss'],
})
export class MyquestionsPage implements OnInit {
  lists: any;
  completeQues: any;
  commentLists: any;
  hightlight: any;
  language: any;

  constructor(private httpcalls: HttpcallsService, private modalCtrl: ModalController, private loading: LoadingController,
              private route: Router, private platform: Platform ) {
    this.httpcalls.GetUserQuestions();
    this.lists = this.httpcalls.userQuesList;
    this.language = this.httpcalls.languageList;
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/tab2');
    });
  }

  ionViewWillEnter() { // Lifecycle event
    this.lists = this.httpcalls.userQuesList;
    this.hightlight = this.httpcalls.tapQues;
    this.language = this.httpcalls.languageList;
  }

  setcolor(id: number) {
    if (this.hightlight !== undefined) {
      for (let i =0; i < this.hightlight.length ; i++) {
        if (this.hightlight[i].NotificationId === id) {
          // console.log('setting color success');
          return 'success';
        }
      }
    } else {
      // console.log('setting no success color');
      return null;
    }
    return null;
  }

  ionViewWillLeave() {
    this.lists = undefined;
  }

  ionViewDidEnter() {
/*    if (this.httpcalls.tapQues !== undefined && this.httpcalls.tapQues !== null) {
      this.LoadQuesAndComment(this.httpcalls.tapQues);
    }*/
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
    return await myModal.present();
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

}
