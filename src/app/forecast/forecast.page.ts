import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {
  loginStatus: boolean;
  constructor(private httpcalls: HttpcallsService) {
    this.loginStatus = this.httpcalls.loggedIn;
  }

  ngOnInit() {
  }

  ionViewWillEnter() { // Lifecycle event
    this.loginStatus = this.httpcalls.loggedIn;
    if (this.loginStatus) {
      this.httpcalls.getLocation();
    }
  }
}
