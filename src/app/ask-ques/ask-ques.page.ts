import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-ques',
  templateUrl: './ask-ques.page.html',
  styleUrls: ['./ask-ques.page.scss'],
})
export class AskQuesPage implements OnInit {
  question: string;
  clickedImage: string = undefined;
  base64Image: string;
  imageFilename: string;
  language: any;


  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true
  };

  constructor(private httpCalls: HttpcallsService, private alertCtrl: AlertController, private camera: Camera,
              private transfer: FileTransfer, private loadingCtrl: LoadingController, private platform: Platform, private route: Router) {
                this.language = this.httpCalls.languageList;
                this.platform.backButton.subscribeWithPriority(10, () => {
                  this.route.navigateByUrl('/tabs/tab1');
                });
                this.language = this.httpCalls.languageList;
               }
  logForm() {

  }

  ionViewWillEnter() {
    this.language = this.httpCalls.languageList;
  }

  submitQues() {
    if (this.httpCalls.name !== undefined && this.httpCalls.id !== undefined && this.httpCalls.email !== undefined ) {
      if (this.question !== undefined && this.question !== null  && this.question !== '') {
        this.imageFilename = this.httpCalls.name + Date.now() + '.jpg';
        if (this.clickedImage !== undefined) {
          this.httpCalls.post_question(this.question, this.imageFilename);
          this.transferImage();
        } else {
          this.httpCalls.post_question(this.question, 'NaI');
        }
        this.question = '';
      } else {
        this.alertModalFillFields();
      }
    } else {
        this.alertModalLogin();
    }
    this.httpCalls.GetForumQuestions();
    this.httpCalls.GetUserQuestions();
  }

  captureImage() {
    this.clickedImage = undefined;
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
      message: this.httpCalls.languageList.uploading,
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

    fileTransfer.upload(this.base64Image, 'http://www.agrolly.tech/questionImages.php', options).then(data => {
      // console.log(data['response']);
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

  async alertModalLogin() {
    const alert = await this.alertCtrl.create({
      header: this.httpCalls.languageList.alert,
      message: this.httpCalls.languageList.please_login,
      buttons: [this.httpCalls.languageList.ok]
    });
    await alert.present();
  }

  async alertModalFillFields() {
    const alert = await this.alertCtrl.create({
      header: this.httpCalls.languageList.alert,
      message: this.httpCalls.languageList.fill_all_fields,
      buttons: [this.httpCalls.languageList.ok]
    });
    await alert.present();
  }

  ngOnInit() {
  }


}
