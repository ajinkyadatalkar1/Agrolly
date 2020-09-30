import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { HttpcallsService } from '../services/httpcalls.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  language: any;
  curPassword: string;
  newPassword: string;
  constructor(private route: Router, private platform: Platform, private httpcalls: HttpcallsService) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/tab2');
    });
    this.language = this.httpcalls.languageList;
   }

   ionViewWillEnter() {
    this.language = this.httpcalls.languageList;
   }

  ngOnInit() {
  }

  changepassword() {
    if (this.curPassword.length >= 8 && this.newPassword.length >= 8) {
      this.httpcalls.changepassword(this.curPassword, this.newPassword);
      this.curPassword = undefined;
      this.newPassword = undefined;
    } else {
      // console.log('Password length should be more than 8 characters');
    }
  }
}
