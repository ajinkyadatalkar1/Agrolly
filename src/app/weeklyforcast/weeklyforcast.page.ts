import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weeklyforcast',
  templateUrl: './weeklyforcast.page.html',
  styleUrls: ['./weeklyforcast.page.scss'],
})
export class WeeklyforcastPage implements OnInit {
  loginStatus: boolean;
  forecast: any;
  days: any;
  maxTemp: object;
  minTemp: object;
  icon: object;
  narration: object;
  language: any;
  constructor(private httpcalls: HttpcallsService, private platform: Platform, private route: Router) {
    this.days = this.httpcalls.weekDays;
    this.maxTemp = this.httpcalls.maxTemp;
    this.minTemp = this.httpcalls.minTemp;
    this.icon = this.httpcalls.weatherIcon;
    this.narration = this.httpcalls.narration;
    this.language = this.httpcalls.languageList;

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/forecast');
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.days = this.httpcalls.weekDays;
    this.maxTemp = this.httpcalls.maxTemp;
    this.minTemp = this.httpcalls.minTemp;
    this.icon = this.httpcalls.weatherIcon;
    this.narration = this.httpcalls.narration;
    this.language = this.httpcalls.languageList;
  }
}
