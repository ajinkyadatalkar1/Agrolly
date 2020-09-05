import { Component, OnInit } from '@angular/core';
import { HttpcallsService,  } from 'src/app/services/httpcalls.service';


@Component({
  selector: 'app-expertadvice',
  templateUrl: './expertadvice.page.html',
  styleUrls: ['./expertadvice.page.scss'],
})
export class ExpertadvicePage implements OnInit {
  chatlog: string[][] = [];
  chatlogObj: object;
  constructor(private httpcalls: HttpcallsService) {
    this.chatlog = this.httpcalls.chatLog;
    this.chatlogObj = JSON.parse(JSON.stringify(this.httpcalls.chatLogObj));
  }

  ionViewWillEnter() {
    this.chatlog = this.httpcalls.chatLog;
    this.chatlogObj = JSON.parse(JSON.stringify(this.httpcalls.chatLogObj));
  }

  ngOnInit() {
  }

}
