import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuescommentsPage } from '../quescomments/quescomments.page';
import { LoadingController } from '@ionic/angular';
import { HttpcallsService } from '../services/httpcalls.service';

@Component({
  selector: 'app-showquestions',
  templateUrl: './showquestions.page.html',
  styleUrls: ['./showquestions.page.scss'],
})
export class ShowquestionsPage implements OnInit {
  @Input('topicName') topicName;
  lists: any;
  completeQues: any;
  commentLists: any;

  constructor(private httpcalls: HttpcallsService, private modalCtrl: ModalController, private loading: LoadingController) {
  }

  ngOnInit() {
  }

  refresh(event) {
    setTimeout(() => {
      this.httpcalls.GetSubjectQuestions();
      this.lists = this.httpcalls.subjectQuestionList;
      event.target.complete();
    }, 2000);
  }

  ionViewWillEnter() {
    this.lists = this.httpcalls.subjectQuestionList;
  }

  LoadQuesAndComment(id, key) {
    this.httpcalls.getQuestion(id);
    this.httpcalls.getComments(id);
    this.presentLoading();
    setTimeout(() => {
      this.openQues(id, key);
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

  async openQues(id, key) {
    const myModal = await this.modalCtrl.create({
      component: QuescommentsPage,
      componentProps: { Qid: id, Key: key }
    });
    return await myModal.present();
  }


  async closeModal() {
    await this.modalCtrl.dismiss(); // close the modal component
  }

}
