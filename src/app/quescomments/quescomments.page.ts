import { Component, OnInit, Input } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController, LoadingController, AngularDelegate } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-quescomments',
  templateUrl: './quescomments.page.html',
  styleUrls: ['./quescomments.page.scss'],
})
export class QuescommentsPage implements OnInit {
  checkLogin: boolean;
  commentLists: any;
  commentListsUpdated: any;
  completeQues: any;
  answer: string;
  showAns: boolean;
  timer: any;
  base64Image: string;
  imageFilename: string;
  length1: string;
  length2: string;
  @Input('Qid') Qid;
  @Input('Key') Key;
  language: any;
  clickedImage: string = undefined;
  uid: string;
  showEditor: boolean;
  updatedQues: string;

  options: CameraOptions = {
    quality: 80,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  };

  constructor(private httpcalls: HttpcallsService,  private modalCtrl: ModalController, private camera: Camera,
              private transfer: FileTransfer, private loadingCtrl: LoadingController, private photoVwr: PhotoViewer,
              private storage: Storage, private http: HttpClient) {
    this.showAns = false;
    this.language = this.httpcalls.languageList;
    this.commentLists = this.httpcalls.commentList;
    this.commentListsUpdated =  this.httpcalls.commentList;

    this.showEditor = false;
    this.updatedQues = undefined;

    this.timer = setInterval(() => {
      this.refreshComments();
    }, 1000);
  }

  httpOptionsGet = {
    headers: new HttpHeaders({
      'Content-type': 'text/html',
    })
  };

  ngOnInit() {
  }

  captureImage() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):

      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = this.base64Image;
    }, (err) => {
      // console.log(err);
      // Handle error
    });
  }

  async transferImage() {
    const loader = await this.loadingCtrl.create({
      message: this.httpcalls.languageList.uploading,
    });
    await loader.present();
    clearInterval(this.timer);
    const fileTransfer: FileTransferObject = this.transfer.create();

    const options: FileUploadOptions = {
      fileKey: 'photo',
      fileName:  this.imageFilename,
      chunkedMode: false,
      mimeType: 'image/jpeg',
      headers: {}
    };

    fileTransfer.upload(this.base64Image, 'http://www.agrolly.tech/commentImages.php', options).then(data => {
      // console.log(data['response']);
      loader.dismiss();
      this.clickedImage = undefined;
      this.timer = setInterval(() => {
        this.refreshComments();
      }, 3000);
    }, error => {
      alert('Error uploading image');
      // alert('error' + JSON.stringify(error));
      loader.dismiss();
      this.clickedImage = undefined;
      this.timer = setInterval(() => {
        this.refreshComments();
      }, 3000);
    });
  }

  removeImage() {
    this.clickedImage = undefined;
  }

  showImage(url: string) {
    this.photoVwr.show(url, 'Agrolly', {share: true});
  }

  delete_ques(id) {
    this.httpcalls.deletePost(id);
    this.closeModal();
  }

  edit_ques() {
    this.showEditor = !this.showEditor;
  }

  update_ques() {
    this.httpcalls.update_ques(this.Qid, this.updatedQues);
    this.showEditor = !this.showEditor;
  }

  delete_comment(id) {
    this.httpcalls.deleteComment(id);
  }

  async closeModal() {
    clearInterval(this.timer);
    this.commentLists = undefined;
    this.httpcalls.commentList = undefined;
    this.commentListsUpdated = undefined;
    for (let i =0 ; i < this.httpcalls.tapQues.length ; i++) {
      if (this.Qid === this.httpcalls.tapQues[i].NotificationId) {
        this.httpcalls.tapQues[i].NotificationId = undefined;
      }
    }
    await this.modalCtrl.dismiss(); // close the modal component
  }

  refreshComments() {
    this.http.get('http://agrolly.tech/quesComm.php?what=comment&id=' + this.Qid, this.httpOptionsGet).pipe(timeout(2000), catchError(e => {
      // console.log('Comments timed out');
      return null;
    })).subscribe(
      (result) => {
        this.commentListsUpdated = result;
    });

   // this.httpcalls.getComments(this.Qid);
    this.length1 = JSON.stringify(this.commentLists);
    this.length2 = JSON.stringify(this.commentListsUpdated);
    if (this.length1.length !== this.length2.length && this.commentLists.qid === this.commentListsUpdated.qid) {
      this.commentLists = undefined;
      this.commentLists = this.commentListsUpdated;
    }
  }

  ionViewWillEnter() {
    this.checkLogin = this.httpcalls.loggedIn;
    this.completeQues = this.httpcalls.completeQues;
    this.commentLists = this.httpcalls.commentList;
    this.language = this.httpcalls.languageList;
    this.uid = this.httpcalls.id;
  }


  postAnswer() {
    if (this.answer !== undefined || this.answer !== null || this.answer !== '' || this.clickedImage !== undefined ) {
      this.imageFilename = this.httpcalls.name + Date.now() + '.jpg';
      if (this.clickedImage !== undefined) {
        this.transferImage();
        this.httpcalls.postAnswer(this.answer, this.Qid, this.imageFilename);
      } else {
        this.httpcalls.postAnswer(this.answer, this.Qid, 'NaI');
      }
      this.answer = '';
      this.httpcalls.getQuestion(this.Qid);
      // this.httpcalls.getComments(this.Qid);
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
    }, 3000);
  }

}
