import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';

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
  constructor(private httpcalls: HttpcallsService) {
    this.days = this.httpcalls.weekDays;
    this.maxTemp = this.httpcalls.maxTemp;
    this.minTemp = this.httpcalls.minTemp;
    this.icon = this.httpcalls.weatherIcon;
    this.narration = this.httpcalls.narration;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.forecast = this.httpcalls.weekDays;
    this.maxTemp = this.httpcalls.maxTemp;
    this.minTemp = this.httpcalls.minTemp;
    this.icon = this.httpcalls.weatherIcon;
    this.narration = this.httpcalls.narration;
  }
}
