import { Component, OnInit, Input } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';


@Component({
  selector: 'app-quescomments',
  templateUrl: './quescomments.page.html',
  styleUrls: ['./quescomments.page.scss'],
})
export class QuescommentsPage implements OnInit {
  checkLogin: boolean;
  commentLists: any;
  completeQues: any;
  answer: string;
  showAns: boolean;
  showHideAns: string;
  timer: any;
  @Input("Qid") Qid;
  @Input("Key") Key;

  constructor(private httpcalls: HttpcallsService,  private modalCtrl: ModalController) {
    this.showAns = false;
    this.showHideAns = 'Show Answer';
    this.timer = setInterval(() => {
      this.refreshComments();
    }, 3000);
  }

  ngOnInit() {
  }

  async closeModal() {
    clearInterval(this.timer);
    await this.modalCtrl.dismiss(); // close the modal component
  }

  refreshComments() {
    this.httpcalls.getComments(this.Qid);
    this.commentLists = this.httpcalls.commentList;
  }

  ionViewWillEnter() {
    this.checkLogin = this.httpcalls.loggedIn;
    this.completeQues = this.httpcalls.completeQues;
    this.commentLists = this.httpcalls.commentList;
  }

  showAnswer() {
    this.showAns = !this.showAns;
    this.showHideAns = this.showAns ? 'Hide Answer' : 'Show Answer';
  }

  postAnswer() {
    this.httpcalls.postAnswer(this.answer, this.Qid);
    this.answer = '';

    this.httpcalls.getQuestion(this.Qid);
    this.httpcalls.getComments(this.Qid);

    this.completeQues = this.httpcalls.completeQues;
    this.commentLists = this.httpcalls.commentList;
  }

  refresh(event) {
    setTimeout(() => {
     this.httpcalls.getQuestion(this.Qid);
     this.httpcalls.getComments(this.Qid);

     this.completeQues = this.httpcalls.completeQues;
     this.commentLists = this.httpcalls.commentList;
     event.target.complete();
    }, 2000);
  }

}
