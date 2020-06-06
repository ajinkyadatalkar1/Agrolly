import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ask-ques',
  templateUrl: './ask-ques.page.html',
  styleUrls: ['./ask-ques.page.scss'],
})
export class AskQuesPage implements OnInit {
  question: string;
  source: string;
  qtype: string;
  atype: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  answer: string;

  constructor(private httpCalls: HttpcallsService, private alertCtrl: AlertController) { }
  ExamList = [
    {
      subject: 'Miscellaneous / Off Topic'
    },
    {
      subject: 'Foundations of Risk Management',
    },
    {
      subject: 'Quantitative Analysis',
    },
    {
      subject: 'Financial markets and products',
    },
    {
      subject: 'Valuation and risk models',
    },
    {
      subject: 'Market risk measurement and management',
    },
    {
      subject: 'Credit risk measurement and management',
    },
    {
      subject: 'Operational risk and resiliency',
    },
    {
      subject: 'Liquidity and treasury risk measurement and management',
    },
    {
      subject: 'Risk management and investment management',
    },
    {
      subject: 'Current issues in financial markets',
    },
   ];

  logForm() {

  }

  submitQues() {
   /* console.log(this.httpCalls.name);
    console.log(this.httpCalls.id);
    console.log(this.httpCalls.phone);*/
    if (this.httpCalls.name !== undefined && this.httpCalls.id !== undefined && this.httpCalls.email !== undefined ) {
      if (this.question !== undefined && this.source !== undefined && this.qtype !== undefined && this.atype !== undefined) {
        this.httpCalls.post_question(this.question, this.option1, this.option2, this.option3, this.option4, this.option5,
        this.source, this.qtype, this.atype, this.answer);
        this.question = '';
        this.source = '';
        this.qtype = '';
        this.atype = '';
        this.option1 = '';
        this.option2 = '';
        this.option3 = '';
        this.option4 = '';
        this.option5 = '';
        this.answer = '';
      } else {
        this.alertModalFillFields();
      }
    } else {
        this.alertModalLogin();
    }
  }

  async alertModalLogin() {
    const alert = await this.alertCtrl.create({
      header: 'Alert:',
      message: 'Please Login',
      buttons: ['OK']
    });
    await alert.present();
  }

  async alertModalFillFields() {
    const alert = await this.alertCtrl.create({
      header: 'Alert:',
      message: 'Please fill all the fields.',
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
  }
}
