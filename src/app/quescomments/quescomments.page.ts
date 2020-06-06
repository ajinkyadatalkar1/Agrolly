import { Component, OnInit, Input } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController } from '@ionic/angular';


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

  @Input("Qid") Qid;
  @Input("Key") Key;

  constructor(private httpcalls: HttpcallsService,  private modalCtrl: ModalController) {
    this.showAns = false;
    this.showHideAns = 'Show Answer';
  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss(); // close the modal component
  }


  ionViewWillEnter() {
    this.checkLogin = this.httpcalls.loggedIn;
    this.completeQues = this.httpcalls.completeQues;
    this.commentLists = this.httpcalls.commentList;
    // console.log(this.completeQues);
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

    // console.log(this.answer);
  }

  refresh(event) {
    setTimeout(() => {
     this.httpcalls.getQuestion(this.Qid);
     this.httpcalls.getComments(this.Qid);

     this.completeQues = this.httpcalls.completeQues;
     this.commentLists = this.httpcalls.commentList;
     event.target.complete();
    }, 4000);
  }

}
