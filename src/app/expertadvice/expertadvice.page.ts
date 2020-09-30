import { Component, OnInit, Directive, ViewChild } from '@angular/core';
import { HttpcallsService, } from 'src/app/services/httpcalls.service';
import { Subscription } from 'rxjs';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-expertadvice',
  templateUrl: './expertadvice.page.html',
  styleUrls: ['./expertadvice.page.scss'],
})

export class ExpertadvicePage implements OnInit {
  // @ViewChild(IonContent, { static: false }) responses: IonContent;
  @ViewChild(IonContent, {read: IonContent, static: false}) responses: IonContent;
  chatlog: string[] = [];
  chatname: string[] = [];
  suggestionsObj: string[][] = [];
  watsonChatRefresh: any;

  chatlogobj: object;
  chatnameobj: object;
  query: string;
  responseSubscriber: Subscription;
  timer: any;

  constructor(private httpcalls: HttpcallsService) {
    this.chatlog = this.httpcalls.chatLog;
    this.chatname = this.httpcalls.chatName;
    this.suggestionsObj = this.httpcalls.suggestionLog;
    this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
    this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
  }

  ionViewWillEnter() {
    this.chatlog = this.httpcalls.chatLog;
    this.chatname = this.httpcalls.chatName;
    this.suggestionsObj = this.httpcalls.suggestionLog;

    this.timer = setInterval(
      () => {
        this.chatlog = this.httpcalls.chatLog;
        this.chatname = this.httpcalls.chatName;
        this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
        this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
        this.suggestionsObj = this.httpcalls.suggestionLog;
      }, 50
    );
    this.updateScroll();
  }

  ionViewWillLeave() {
    clearInterval(this.timer);
  }

  ngOnInit() {
  }


  response() {
    this.updateScroll();
    if (this.query !== null && this.query !== undefined && this.query !== '') {
      this.httpcalls.chatName.push('user');
      this.httpcalls.chatLog.push(this.query);
      this.httpcalls.quesAndans(this.query);
      this.suggestionsObj = this.httpcalls.suggestionLog;

      this.watsonChatRefresh = setInterval(() => {
        this.responseSubscriber = this.httpcalls.WatsonResposeCheckObserver().subscribe((chatname) => {
          // console.log('result:' + chatname);
          this.chatlog = this.httpcalls.chatLog;
          this.chatname = this.httpcalls.chatName;
          this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
          this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
          this.suggestionsObj = this.httpcalls.suggestionLog;
          if (chatname === this.chatname) {
            this.chatname = this.httpcalls.chatName;
            this.suggestionsObj = this.httpcalls.suggestionLog;
            clearInterval(this.watsonChatRefresh);
          }
        });
        this.updateScroll();
      }, 3000);

      this.query = '';
    }
  }

  autoRespond(responseValue: string) {
    this.query = responseValue;
    this.response();
  }

  updateScroll(): void {
    this.responses.scrollToBottom(100);

    setTimeout(() => {
    this.responses.scrollToBottom(100);
    }, 1000);
  }
}
