import { Component, OnInit, Directive, ViewChild } from '@angular/core';
import { HttpcallsService,  } from 'src/app/services/httpcalls.service';
import { Subscription } from 'rxjs';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-expertadvice',
  templateUrl: './expertadvice.page.html',
  styleUrls: ['./expertadvice.page.scss'],
})

export class ExpertadvicePage implements OnInit {
  @ViewChild(IonContent, {static: false}) content: IonContent;
  chatlog: string[] = [];
  chatname: string[] = [];

  chatlogobj: object;
  chatnameobj: object;

  query: string;
  responseSubscriber: Subscription;

  timer: any;

  constructor(private httpcalls: HttpcallsService) {
    this.chatlog = this.httpcalls.chatLog;
    this.chatname = this.httpcalls.chatName;

    this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
    this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
  }

  ionViewWillEnter() {
    this.chatlog = this.httpcalls.chatLog;
    this.chatname = this.httpcalls.chatName;
    /*this.timer = setInterval(
      () => {
        this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
        this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
      }, 1000
    );*/
  }

  ionViewWillLeave() {
      clearInterval(this.timer);
  }

  ngOnInit() {
  }

  response() {
    if (this.query !== null && this.query !== undefined && this.query !== '') {
      this.httpcalls.chatName.push('user');
      this.httpcalls.chatLog.push(this.query);
      this.httpcalls.quesAndans(this.query);
      this.responseSubscriber = this.httpcalls.WatsonResposeCheckObserver().subscribe((chatname) => {
      console.log('result:' + chatname);
      this.chatlog = this.httpcalls.chatLog;
      this.chatname = this.httpcalls.chatName;
      this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
      this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
      setTimeout(() => {
        this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
        this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
        setTimeout(() => { this.updateScroll(); }, 500);
      }, 2000);
      });
      this.query = '';
      this.updateScroll();
    }
  }

  updateScroll() {
    this.content.scrollToBottom();
  }
}
