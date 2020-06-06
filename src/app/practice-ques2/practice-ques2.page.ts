import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs.page';
import { ModalController } from '@ionic/angular';
import { ShowquestionsPage } from '../showquestions/showquestions.page';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-practice-ques2',
  templateUrl: './practice-ques2.page.html',
  styleUrls: ['./practice-ques2.page.scss'],
})
export class PracticeQues2Page implements OnInit {
  showLogoutsubscriber: Subscription;
  showLogout: any;
  lists: any;

  constructor( private showHideTabs: TabsPage, private httpcalls: HttpcallsService, private storage: Storage, private modalCtrl: ModalController, private loading: LoadingController ) {
    this.httpcalls.GetTopics2();
    this.lists = this.httpcalls.topicList2;
  }

  ngOnInit() {
    this.httpcalls.GetTopics2();
    this.lists = this.httpcalls.topicList2;
  }

  ionViewDidEnter() { // Lifecycle eventopenQues
    this.LogcheckSubscriber();
    this.storage.get('phone').then((val) => {
      // console.log('Your phone is', val);
    });
  }

  LogcheckSubscriber() { // use subscriber to show and hide logout button
    this.showLogoutsubscriber = this.httpcalls.checkLogin().subscribe((data) => {
      this.showLogout = data;
      // console.log('chklogin:' + data);
    });
  }

  logout() {
    this.httpcalls.Logout();
    this.LogcheckSubscriber();
    this.showHideTabs.setDefaultTabs();
    // console.log('logoutval:' + this.showLogout);
  }

  LoadQuestions(topic) {
    this.httpcalls.subjectSelected = topic;
    this.httpcalls.GetSubjectQuestions();
    this.presentLoading();
    setTimeout(() => {
      this.showQuestions(topic);
    }, 2000);
  }

  async presentLoading() {
    const loading = await this.loading.create({
      spinner: 'lines',
      message: 'Please Wait',
      duration: 2000
    });
    await loading.present();
  }

  async showQuestions(topic) {
    const myModal = await this.modalCtrl.create({
      component: ShowquestionsPage,
      componentProps: {topicName: topic}
    });
    return await myModal.present();
  }
}
