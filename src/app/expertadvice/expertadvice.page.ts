import { Component, OnInit, Directive } from '@angular/core';
import { HttpcallsService,  } from 'src/app/services/httpcalls.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expertadvice',
  templateUrl: './expertadvice.page.html',
  styleUrls: ['./expertadvice.page.scss'],
})


export class ExpertadvicePage implements OnInit {
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
    this.timer = setInterval(
      () => {
        this.chatlogobj = JSON.parse(JSON.stringify(this.chatlog));
        this.chatnameobj = JSON.parse(JSON.stringify(this.chatname));
        console.log('result:');
      }, 2000
    );
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
      });
      this.query = '';
    }
  }
}
