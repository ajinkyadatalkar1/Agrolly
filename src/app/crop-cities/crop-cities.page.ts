import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crop-cities',
  templateUrl: './crop-cities.page.html',
  styleUrls: ['./crop-cities.page.scss'],
})
export class CropCitiesPage implements OnInit {
  city: string;
  language: object;
  constructor(private httpcalls: HttpcallsService, private platform: Platform, private route: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/forecast');
    });

    this.language = this.httpcalls.languageList;
  }

  ionViewWillEnter() {
    this.language = this.httpcalls.languageList;
  }

  ngOnInit() {
  }

}
