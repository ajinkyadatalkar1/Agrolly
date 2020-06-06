import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { HttpcallsService } from '../services/httpcalls.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-frm2',
  templateUrl: './frm2.page.html',
  styleUrls: ['./frm2.page.scss'],
})
export class Frm2Page implements OnInit {
  showLogoutsubscriber: Subscription;
  showLogout: any;
  constructor(private showHideTabs: TabsPage, private httpcalls: HttpcallsService) {
    this.updateTabs();
   }

  ngOnInit() {
  }


  updateTabs() {
    this.showHideTabs.showLoginTab = false;
    this.showHideTabs.showRegisterTab = false;
    this.showHideTabs.showMyQuestionsTab = this.httpcalls.showMyQuestionsTab;
    this.showHideTabs.showAskQuestionsTab = this.httpcalls.showAskQuestionsTab;
    this.showHideTabs.showFrm2Tab = true;
  }

  ionViewWillEnter() { // Lifecycle event
    this.LogcheckSubscriber();
    this.updateTabs();
  }

  LogcheckSubscriber() { // use subscriber to show and hide logout button
    this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
      this.showLogout = data;
    });
  }

  logout() {
    this.httpcalls.Logout();
    this.LogcheckSubscriber();
    this.showHideTabs.setDefaultTabs();
  }

}
