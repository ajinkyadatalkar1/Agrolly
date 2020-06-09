import { Component, OnInit, Input } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { ModalController, LoadingController, AngularDelegate } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


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
  timer: any;
  base64Image: string;
  imageFilename: string;
  length1: string;
  length2: string;
  @Input('Qid') Qid;
  @Input('Key') Key;

  clickedImage: string = undefined;

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  };

  constructor(private httpcalls: HttpcallsService,  private modalCtrl: ModalController, private camera: Camera,
              private transfer: FileTransfer, private loadingCtrl: LoadingController, private photoVwr: PhotoViewer) {
    this.showAns = false;
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

      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = this.base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }

  async transferImage() {
    const loader = await this.loadingCtrl.create({
      message: 'Uploading....',
    });
    await loader.present();

    const fileTransfer: FileTransferObject = this.transfer.create();

    const options: FileUploadOptions = {
      fileKey: 'photo',
      fileName:  this.imageFilename,
      chunkedMode: false,
      mimeType: 'image/jpeg',
      headers: {}
    };

    fileTransfer.upload(this.base64Image, 'http://www.agrolly.tech/commentImages.php', options).then(data => {
      console.log(data['response']);
      loader.dismiss();
      this.clickedImage = undefined;
    }, error => {
      alert('Error uploading image');
      // alert('error' + JSON.stringify(error));
      loader.dismiss();
      this.clickedImage = undefined;
    });
  }

  removeImage() {
    this.clickedImage = undefined;
  }

  showImage(url: string) {
    this.photoVwr.show(url, 'Agrolly', {share: true});
  }

  async closeModal() {
    clearInterval(this.timer);
    await this.modalCtrl.dismiss(); // close the modal component
  }

  refreshComments() {
    this.httpcalls.getComments(this.Qid);
    this.length1 = JSON.stringify(this.commentLists);
    this.length2 = JSON.stringify(this.httpcalls.commentList);
    if (this.length1.length !== this.length2.length) {
      this.commentLists = this.httpcalls.commentList;
    }
  }

  ionViewWillEnter() {
    this.checkLogin = this.httpcalls.loggedIn;
    this.completeQues = this.httpcalls.completeQues;
    this.commentLists = this.httpcalls.commentList;
  }


  postAnswer() {
    if (this.answer !== undefined || this.clickedImage !== undefined ) {
      this.imageFilename = this.httpcalls.name + Date.now() + '.jpg';
      if (this.clickedImage !== undefined) {
        this.transferImage();
        this.httpcalls.postAnswer(this.answer, this.Qid, this.imageFilename);
      } else {
        this.httpcalls.postAnswer(this.answer, this.Qid, 'NaI');
      }
      this.answer = '';
      this.httpcalls.getQuestion(this.Qid);
      this.httpcalls.getComments(this.Qid);
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
