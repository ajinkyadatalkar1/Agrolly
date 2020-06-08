import { Component, OnInit, Input } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


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

  clickedImage: string = undefined;

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  };

  constructor(private httpcalls: HttpcallsService,  private modalCtrl: ModalController, private camera: Camera) {
    this.showAns = false;
    this.showHideAns = 'Show Answer';
    this.timer = setInterval(() => {
      this.refreshComments();
    }, 3000);
  }

  ngOnInit() {
  }

  captureImage() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }

  removeImage() {
    this.clickedImage = undefined;
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
    if (this.answer !== undefined || this.clickedImage !== undefined ) {
      this.httpcalls.postAnswer(this.answer, this.Qid);
      this.answer = '';
      this.httpcalls.getQuestion(this.Qid);
      this.httpcalls.getComments(this.Qid);
      this.completeQues = this.httpcalls.completeQues;
      this.commentLists = this.httpcalls.commentList;
    } else {
      this.httpcalls.commentPostFailed();
    }
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
