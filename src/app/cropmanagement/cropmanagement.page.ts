import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cropmanagement',
  templateUrl: './cropmanagement.page.html',
  styleUrls: ['./cropmanagement.page.scss'],
})
export class CropmanagementPage implements OnInit {
  cropsPlacesData: object;
  cropsListData: object;
  constructor(private httpcalls: HttpcallsService, private platform: Platform, private route: Router) {
    this.cropsPlacesData = this.httpcalls.cropsPlacesData;
    this.cropsListData = this.httpcalls.cropsListData;
  }

  ionViewWillEnter() {
    this.cropsPlacesData = this.httpcalls.cropsPlacesData;
    this.cropsListData = this.httpcalls.cropsListData;
  }

  ngOnInit() {
  }

}
