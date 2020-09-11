import { Component } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { timeout, catchError } from 'rxjs/operators';



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
  constructor(private httpcalls: HttpcallsService, private router: Router, private platform: Platform) {
    this.language = this.httpcalls.languageList;
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('/tabs/tab2');
    });
  }

  login() {
      // tslint:disable-next-line: no-unused-expression
      new Promise (() => {
        this.httpcalls.GetLogin(this.username, this.password);
      });
      this.username = '';
      this.password = '';
      this.router.navigateByUrl('/tabs/tab1');
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
