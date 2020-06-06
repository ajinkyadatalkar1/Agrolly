import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController } from '@ionic/angular';
import { QuescommentsPage } from '../quescomments/quescomments.page';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-myquestions',
  templateUrl: './myquestions.page.html',
  styleUrls: ['./myquestions.page.scss'],
})
export class MyquestionsPage implements OnInit {
  lists: any;
  completeQues: any;
  commentLists: any;

  constructor(private httpcalls: HttpcallsService, private modalCtrl: ModalController, private loading: LoadingController) {
    this.httpcalls.GetUserQuestions();
    this.lists = this.httpcalls.userQuesList;
  }

  ionViewWillEnter() { // Lifecycle event
    this.lists = this.httpcalls.userQuesList;
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
      message: 'Please Wait',
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
