import { Component } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  username: string;
  password: string;
  showLogoutsubscriber: Subscription;
  language: any;
  constructor(private httpcalls: HttpcallsService, private router: Router) {
    this.language = this.httpcalls.languageList;
  }

  login() {
      // tslint:disable-next-line: no-unused-expression
      new Promise (() => {
        this.httpcalls.GetLogin(this.username, this.password);
      });
      this.username = '';
      this.password = '';
  }

  forgotpsd() {
    this.router.navigateByUrl('/tabs/forgotpassword');
  }

  ionViewDidEnter() { // Lifecycle event
    this.LogcheckSubscriber();
    this.language = this.httpcalls.languageList;
  }

  LogcheckSubscriber() { // use subscriber to show and hide logout button
    this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('');
      }
    });
  }
}
