import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { HttpcallsService } from '../services/httpcalls.service';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-frm1',
  templateUrl: './frm1.page.html',
  styleUrls: ['./frm1.page.scss'],
})
export class Frm1Page implements OnInit {
  showLogoutsubscriber: Subscription;
  showLogout: any;
  constructor(private showHideTabs: TabsPage, private httpcalls: HttpcallsService, private storage: Storage) {
    this.updateTabs();
  }

  ngOnInit() {
  }

  updateTabs() {
    this.showHideTabs.showLoginTab = false;
    this.showHideTabs.showRegisterTab = false;
    this.showHideTabs.showMyQuestionsTab = this.httpcalls.showMyQuestionsTab;
    this.showHideTabs.showAskQuestionsTab = this.httpcalls.showAskQuestionsTab;
    this.showHideTabs.showFrm1Tab = true;
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
