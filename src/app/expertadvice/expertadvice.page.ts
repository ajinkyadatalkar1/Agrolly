import { Component, OnInit, Directive, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpcallsService, } from 'src/app/services/httpcalls.service';
import { Subscription } from 'rxjs';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-expertadvice',
  templateUrl: './expertadvice.page.html',
  styleUrls: ['./expertadvice.page.scss'],
})

export class ExpertadvicePage implements OnInit {
  @ViewChild(IonContent, { read: IonContent, static: false }) responses: IonContent;

  chatlog: string[] = [];
  chatname: string[] = [];
  suggestionsObj: string[][] = [];
  suggestionTitle: string[] = [];
  watsonChatRefresh: any;

  watsonReplyOption: string[][] = [];

  chatlogobj: object;
  chatnameobj: object;
  query: string;
  responseSubscriber: Subscription;
  timer: any;

  constructor(private httpcalls: HttpcallsService) {
    this.chatlog = this.httpcalls.chatLog;
    this.chatname = this.httpcalls.chatName;
    this.suggestionsObj = this.httpcalls.suggestionLog;
    this.suggestionTitle = this.httpcalls.suggestionTitle;

    this.watsonReplyOption = JSON.parse(JSON.stringify(this.httpcalls.watsonReplyOptions));
    this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
    this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
  }

  ionViewWillEnter() {
    this.chatlog = this.httpcalls.chatLog;
    this.chatname = this.httpcalls.chatName;
    this.suggestionsObj = this.httpcalls.suggestionLog;
    this.suggestionTitle = this.httpcalls.suggestionTitle;
    this.watsonReplyOption = this.httpcalls.watsonReplyOptions;

    this.timer = setInterval(
      () => {
        this.chatlog = this.httpcalls.chatLog;
        this.chatname = this.httpcalls.chatName;
        this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
        this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
        this.suggestionsObj = this.httpcalls.suggestionLog;
        this.suggestionTitle = this.httpcalls.suggestionTitle;
        this.watsonReplyOption = JSON.parse(JSON.stringify(this.httpcalls.watsonReplyOptions));
      }, 2500
    );
    this.updateScroll();
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
      this.chatlog = this.httpcalls.chatLog;
      this.chatname = this.httpcalls.chatName;
      this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
      this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
      this.updateScroll();

      this.suggestionsObj = this.httpcalls.suggestionLog;
      this.suggestionTitle = this.httpcalls.suggestionTitle;
      this.watsonReplyOption = JSON.parse(JSON.stringify(this.httpcalls.watsonReplyOptions));
      this.watsonChatRefresh = setInterval(() => {
        this.responseSubscriber = this.httpcalls.WatsonResposeCheckObserver().subscribe((chatname) => {
          // console.log('result:' + chatname);
          this.chatlog = this.httpcalls.chatLog;
          this.chatname = this.httpcalls.chatName;
          this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
          this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
          this.suggestionsObj = this.httpcalls.suggestionLog;
          this.suggestionTitle = this.httpcalls.suggestionTitle;
          this.watsonReplyOption = JSON.parse(JSON.stringify(this.httpcalls.watsonReplyOptions));
          if (chatname === this.chatname) {
            this.chatname = this.httpcalls.chatName;
            this.suggestionsObj = this.httpcalls.suggestionLog;
            this.suggestionTitle = this.httpcalls.suggestionTitle;
            this.watsonReplyOption = JSON.parse(JSON.stringify(this.httpcalls.watsonReplyOptions));
            this.updateScroll();
            clearInterval(this.watsonChatRefresh);
          }
        });
      }, 1000);

      this.query = '';
    }
  }

  autoRespond(responseValue: string) {
    this.query = responseValue;
    this.response();
  }

  updateScroll(): void {
    let scrollTimer = setTimeout(() => {
      this.responses.scrollToBottom(300);
      clearTimeout(scrollTimer);
    }, 500);
  }
}
