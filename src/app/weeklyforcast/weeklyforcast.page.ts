import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { HttpcallsService } from '../services/httpcalls.service';

@Component({
  selector: 'app-weeklyforcast',
  templateUrl: './weeklyforcast.page.html',
  styleUrls: ['./weeklyforcast.page.scss'],
})
export class WeeklyforcastPage implements OnInit {
  loginStatus: boolean;
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
    this.showHideTabs.weeklyForcastTab = true;
  }

  ionViewWillEnter() { // Lifecycle event
    this.updateTabs();
    this.loginStatus = this.httpcalls.loggedIn;
    if (this.loginStatus) {
      this.httpcalls.getLocation();
    }
  }
}
