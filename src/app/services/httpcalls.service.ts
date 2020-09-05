import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToastController, NavController, AngularDelegate } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Language } from '../language/language';
import { FCM } from '@ionic-native/fcm/ngx';
import { StoreNotifications } from '../notificationStore/storenotifications';

@Injectable({
  providedIn: 'root'
})
export class HttpcallsService {
  // for login, register and logout
  name: string;
  email: string;
  id: string;
  password: string;
  country: string;
  state: string;
  city: string;
  latitude: string;
  longitude: string;
  locationIq: string;
  weeklyWeatherUrl: string;
  hourlyWeatherUrl: string;
  annualWeatherUrl: string;
  annualforecast: any;

  poPlaces: object;
  poValue: object;

  /* Crops variables */
  cropsPlaces: string;
  cropsList: string;
  cropsPlacesData: object;
  cropsListData: object;


  // change tabs based on login
  showHomeTab = true;
  showLoginTab = true;
  showRegisterTab = true;
  showMyQuestionsTab = false;
  showAskQuestionsTab = false;
  loggedIn = false;

  // for forum or misc or off topic questions
  forumList: any;

  // for my questions list
  userQuesList: any;

  // when you click on a question in the list
  commentList: any;
  completeQues: any;

  // Weekly Forecast
  weeklyforecast: object;
  weekDays: object;
  minTemp: object;
  maxTemp: object;
  weatherIcon: object;
  narration: object;

  // Hourly Forecast
  currentForecast: object;
  currentForecast6: object;
  currentForecast12: object;
  currentForecast18: object;

  // Annual Forecast
  annualForecast: object;

  // Language lists
  languageList: any;

  // notification
  tapQues: any;

  // watson chat
  chatLog: string[][] = [];
  chatLogObj: object;


  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private route: Router, private Toast: ToastController, private storage: Storage, private screenOrientation: ScreenOrientation, private lang: Language,
              private fcm: FCM, private ngZone: NgZone, private navCtrl: NavController, private notificationId: StoreNotifications) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.latitude = undefined;
    this.longitude = undefined;
    this.getCropsList();
    this.getPoValue();
    this.getPoPlaces();

    this.tapQues = this.notificationId.Notifications;
    this.languageList = this.lang.English[0];
    storage.get('language').then((val) => {
      if (val === 'Mongolian') {
        this.languageList = this.lang.Mongolian[0];
      } else if (val === 'Portuguese') {
        this.languageList = this.lang.Portuguese[0];
      } else {
        this.languageList = this.lang.English[0];
      }
    });

    // Or to get a key/value pair
    storage.get('id').then((val) => {
      if (val !== '' && val !== null && val !== undefined) {
        this.id = val;
        this.GetUserQuestions(); // call when login available
      } else {
        storage.remove('id');
      }
    });

    storage.get('email').then((val) => {
      if (val !== '' && val !== null && val !== undefined) {
        this.loggedIn = true;
        this.showLoginTab = false;
        this.showRegisterTab = false;
        this.showMyQuestionsTab = true;
        this.showAskQuestionsTab = true;
        this.email = val;
      } else {
        storage.remove('email');
      }
    });

    storage.get('name').then((val) => {
      if (val !== '' && val !== null && val !== undefined) {
        this.name = val;
        // console.log("name is:" + this.name);
      } else {
        storage.remove('name');
      }
    });

    storage.get('country').then((val) => {
      if (val !== '' && val !== null && val !== undefined) {
        this.country = val;
        // console.log("name is:" + this.name);
      } else {
        storage.remove('country');
      }
    });

    storage.get('state').then((val) => {
      if (val !== '' && val !== null && val !== undefined) {
        this.state = val;
        // console.log("name is:" + this.name);
      } else {
        storage.remove('state');
      }
      this.getLocation();
    });

    storage.get('city').then((val) => {
      if (val !== '' && val !== null && val !== undefined) {
        this.city = val;
        // console.log("city is:" + this.city);
      } else {
        storage.remove('city');
      }
      this.getLocation();
    });

    /*********** firebase cloud messaging ****************/

    this.initFireBase();

    /**************** FCM *****************************/

    this.GetForumQuestions();
  }

  httpOptionsGet = {
    headers: new HttpHeaders({
      'Content-type': 'text/html',
    })
  };

  httpOptionsGetWeather = {
    headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
    })
  };


  httpOptionsGetLocation = {
    // headers: new HttpHeaders({
      async: 'true',
      crossDomain: 'true',
    // })
  };

  httpOptionsPost = {
    headers: new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded', // 'application/json', try different formats if you keep receiving error
    })
  };

  /* Notifications */
  initFireBase() {
    this.fcm.getToken().then(token => {
      this.setToken(token);
      // console.log(token);
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      this.setToken(token);
      // console.log(token);
    });

    this.fcm.onNotification().subscribe(data => {
      // console.log(data);
      // console.log('No of notifications: ' + this.tapQues.length);
      if (data.wasTapped) {
        // this.ngZone.run(() => this.route.navigateByUrl('/tabs/myques')).then();
        for (let i = 0 ; i < this.tapQues.length ; i++) {
          if (this.tapQues[i].NotificationId === undefined) {
            this.tapQues[i].NotificationId = data.qid;
            // console.log(this.tapQues[i].NotificationId);
            break;
          }
        }
        this.notification();
      } else {
        for (let i = 0 ; i < this.tapQues.length ; i++ ) {
          if (this.tapQues[i].NotificationId === undefined) {
            this.tapQues[i].NotificationId = data.qid;
            // console.log(this.tapQues[i].NotificationId);
            break;
          }
        }
        this.notification();
      }
    });
  }

  async notification() {
    const toast = await this.Toast.create({
      message: this.languageList.comment_notification,
      duration: 2000,
      position: 'top',
      translucent: true,
    });
    toast.present();
  }

  setToken(token: string) {
    this.checkLogin();
    const postData = {
      uid: this.id,
      utoken: token,
      type: 'setToken',
    };
    if (this.loggedIn && (this.id !== null || this.id !== undefined)) {
      this.http.post('http://agrolly.tech/notify.php', postData, this.httpOptionsPost).subscribe(
        (result) => {
          // console.log('Result is:' + result['result']);
          if (result['result'] === 'successful') {
            // console.log('Successful');
          } else {
            // console.log('unuccessful');
          }
        }
      );
    }
  }

  removeTokenOnLogout() {
    const postData = {
      uid: this.id,
      type: 'unsetToken',
    };
    this.http.post('http://agrolly.tech/notify.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
        // console.log('Result is:' + result['result']);
        if (result['result'] === 'successful') {
          // console.log('Successful');
        } else {
          // console.log('unsuccessful');
        }
      }
    );
  }


  /* Language List */
  languageChange() {
    return new Observable(observer => {
      observer.next(this.languageList);
    });
  }

  /* Login methods */

  checkLogin() {
    return new Observable(observer => {
      observer.next(this.loggedIn);
      this.getForecast();
      this.getForecastHourly();
      this.getForecastAnnual();
    });
  }

  GetLogin(email, password) {
    const postData = {
      useremail: email,
      userpassword: password
    };
    this.http.post('http://agrolly.tech/login.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
        if (result['result'] === 'successful') {
          // console.log(result);
          this.showLoginTab = false;
          this.showRegisterTab = false;
          this.showMyQuestionsTab = true;
          this.showAskQuestionsTab = true;
          this.loggedIn = true;
          this.route.navigateByUrl('');
          this.name = result['name'];
          this.id = result['user_id'];
          this.email = email;
          this.country = result['country'];
          this.state = result['state'];
          this.city = result['city'];
          this.LoginToast();
          this.storage.set('email', email);
          this.storage.set('name', this.name);
          this.storage.set('id', this.id);
          this.storage.set('country', this.country);
          this.storage.set('state', this.state);
          this.storage.set('city', this.city);
          this.GetUserQuestions();
          this.initFireBase();
          this.getLocation();
          this.getForecast();

        } else {
          // console.log(result);
          this.LoginFailed();
          this.showHomeTab = true;
          this.showLoginTab = true;
          this.showRegisterTab = true;
          this.showMyQuestionsTab = false;
          this.showAskQuestionsTab = false;
          this.loggedIn = false;
        }
      });
  }


  Logout() {
    this.removeTokenOnLogout();
    this.loggedIn = false;
    this.showHomeTab = true;
    this.showLoginTab = true;
    this.showRegisterTab = true;
    this.showMyQuestionsTab = false;
    this.showAskQuestionsTab = false;
    this.loggedIn = false;
    this.storage.remove('email');
    this.storage.remove('name');
    this.storage.remove('id');
    this.name = undefined;
    this.id = undefined;
    this.email = undefined;
    this.LogoutToast();
  }

  async LoginToast() {
    const toast = await this.Toast.create({
      message: this.languageList.login_successful_message,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  async LoginFailed() {
    const toast = await this.Toast.create({
      message: this.languageList.login_failed_message,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  async LogoutToast() {
    const toast = await this.Toast.create({
      message: this.languageList.logout_message,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }
  /* Register User */
  register(email: string, password: string, name: string, country: string, state: string, city: string) {
    const postData = {
      useremail: email,
      userpassword: password,
      username: name,
      usercountry: country,
      userstate: state,
      usercity: city
    };
    this.http.post('http://agrolly.tech/register.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
        if (result['result'] === 'successful') {
          this.route.navigateByUrl('/tabs/tab2');
          this.registerSuccessful();
        } else {
          this.registerFailed();
          this.route.navigateByUrl('/tabs/tab3');
        }
      });
  }

  async registerSuccessful() {
    const toast = await this.Toast.create({
      message: this.languageList.registeration_successful_message,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  async registerFailed() {
    const toast = await this.Toast.create({
      message: this.languageList.registeration_failed_message,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }


  /* Forgot Password */
  forgotPassword(email: string, password: string) {
    const postData = {
      useremail: email,
      userpassword: password
    };
    this.http.post('http://agrolly.tech/forgotpassword.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
        if (result['result'] === 'successful') {
          this.route.navigateByUrl('/tabs/tab2');
          this.passwordChanged();
        } else {
          this.route.navigateByUrl('/tabs/tab3');
          this.passwordChangefailed();
        }
      });
  }

  async passwordChanged() {
    const toast = await this.Toast.create({
      message: this.languageList.password_changed_success,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  async passwordChangefailed() {
    const toast = await this.Toast.create({
      message: this.languageList.password_changed_failed,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  /* Request One time password */
  requestOtp(otp, email) {
    // tslint:disable-next-line: max-line-length
    const postData = {
      useremail: email,
      onetimepassword: otp
    };
    this.http.post('http://agrolly.tech/mail.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
        // console.log(result);
      });
  }


  /* Ask Questions Page */
  post_question(question: string, imageName: string) {
    if (this.name !== 'null' || this.name !== undefined) {
      const postQuesData = {
        postquestion: question,
        postuid: this.id,
        postname: this.name,
        postFile: imageName
      };

      this.http.post('http://agrolly.tech/submitquestion.php', postQuesData, this.httpOptionsPost).subscribe(
        (result) => {
          if (result['result'] === 'successful') {
            this.quesPostSuccessful();
          } else {
            this.quesPostFailed();
          }
        }, error => {
          // console.log(error);
          this.quesPostFailed();
        }
        );
    }
  }

  async quesPostSuccessful() {
    const toast = await this.Toast.create({
      message: this.languageList.question_post_success,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  async quesPostFailed() {
    const toast = await this.Toast.create({
      message: this.languageList.question_post_failed,
      // message: error,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  /* Get Forum Questions */
  GetForumQuestions() {
    this.http.get('http://agrolly.tech/forum2.php', this.httpOptionsGet).subscribe(
      (result) => {
        this.forumList = result;
      });
  }

  /* Get User Questions */
  GetUserQuestions() {
      if (this.name !== 'null' || this.name !== undefined) {
        const postQuesData = {
          uid: this.id
        };
        this.http.post('http://agrolly.tech/myquestions.php', postQuesData, this.httpOptionsPost).subscribe(
          (result) => {
            this.userQuesList = result;
            // console.log(result);
          });
      }
  }

  /* Load Questions and Comments */
  getQuestion(id) {
    this.http.get('http://agrolly.tech/quesComm.php?what=question&id=' + id, this.httpOptionsGet).subscribe(
      (result) => {
        this.completeQues = result;
      });
  }

  getComments(id) {
    this.http.get('http://agrolly.tech/quesComm.php?what=comment&id=' + id, this.httpOptionsGet).subscribe(
      (result) => {
        this.commentList = result;
      });
  }

  postAnswer(answer: string, Qid: string, imageFileName: string) {
    const postQuesData = {
      uid: this.id,
      name: this.name,
      text: answer,
      qid: Qid,
      filename: imageFileName
    };
    this.http.post('http://agrolly.tech/postAnswer.php', postQuesData, this.httpOptionsPost).subscribe(
      (result) => {
        // console.log(result['user_id']);
        // console.log(result['token']);
        if (result['success'] === 1) {
          this.commentPostSuccessful();
        } else {
          this.commentPostFailed();
        }
      }, error => {
        // console.log(error);
        this.commentPostFailed();
      }
      );
  }

  async commentPostSuccessful() {
    const toast = await this.Toast.create({
      message: this.languageList.comment_post_successful,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  async commentPostFailed() {
    const toast = await this.Toast.create({
      message: this.languageList.comment_post_failed,
      // message: error,
      duration: 2000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  /* delete post */
  async deletePost(id) {
    const postData = {
      qid: id,
      what: 'question'
    };
    this.http.post('http://agrolly.tech/deletePost.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
        if (result['result'] === 'successful') {
          this.GetForumQuestions();
          this.showToast(this.languageList.post_deleted);
        } else {
          this.showToast(this.languageList.post_delete_unsuccess);
        }
      });
  }

  async deleteComment(id) {
    const postData = {
      cid: id,
      what: 'comment'
    };
    this.http.post('http://agrolly.tech/deletePost.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
        if (result['result'] === 'successful') {
          this.GetForumQuestions();
          this.showToast(this.languageList.comment_deleted);
        } else {
          this.showToast(this.languageList.comment_delete_unsuccessful);
        }
      });
  }

  /* change password */
  async changepassword(curPassword, newPassword) {
    const postData = {
      cur_password: curPassword,
      new_password: newPassword,
      uid: this.id,
      uemail: this.email
    };
    this.http.post('http://agrolly.tech/changepassword.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
        if (result['result'] === 'successful') {
          this.showToast(this.languageList.password_changed);
        } else {
          this.showToast(this.languageList.password_change_failed);
        }
      });
  }

  /* Update Profile */

  async update_profile(name, city, state, country, password) {
    const postData = {
      upassword: password,
      uid: this.id,
      uemail: this.email,
      ucity: city,
      ustate: state,
      ucountry: country,
      uname: name
    };
    this.http.post('http://agrolly.tech/profile.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
        if (result['result'] === 'successful') {
          this.showToast(this.languageList.profile_update_successful);
          this.name = name;
          this.city = city;
          this.state = state;
          this.country = country;
          this.storage.set('name', name);
          this.storage.set('city', city);
          this.storage.set('state', state);
          this.storage.set('country', country);
          this.route.navigateByUrl('/tabs/tab1');
          this.getLocation();
          this.getForecastHourly();
          this.getForecast(); // weekly
          this.getForecastAnnual();
        } else {
          this.showToast(this.languageList.profile_update_failed);
        }
      });
  }

  /* Update question */
  async update_ques(qid, question) {
    const postData = {
      uid: this.id,
      uqid: qid,
      uquestion: question
    };
    this.http.post('http://agrolly.tech/updatequestion.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
        if (result['result'] === 'successful') {
          this.getQuestion(qid);
          this.showToast(this.languageList.post_update_successful);
        } else {
          this.showToast(this.languageList.post_update_failed);
        }
      });
  }

  /* weekly forcast */
  async getLocation() {
    // console.log(this.city);
    if (this.city !== '' && this.city !== undefined && this.city !== null) {
      this.locationIq = 'https://us1.locationiq.com/v1/search.php?key=pk.b96df78962921345a1f13e31a76f7c7f'
      + this.city + ',' + this.state + ','
      + this.country + '&format=json';
    } else {
      this.locationIq = 'https://us1.locationiq.com/v1/search.php?key=pk.b96df78962921345a1f13e31a76f7c7f' + this.state + ','
      + this.country + '&format=json';
    }

    this.http.get(this.locationIq).subscribe(
      (result) => {
        this.latitude = result[0]['lat'];
        this.longitude = result[0]['lon'];
        setTimeout(() => {
          this.getForecast();
          this.getForecastHourly();
        }, 500);
    });
  }

  async getForecast() { // weekly
    this.weeklyWeatherUrl = 'https://api.weather.com/v3/wx/forecast/daily/5day?geocode='
      + this.latitude + ',' + this.longitude + '&format=json&units=m&language=' + this.languageList.code
      + '&apiKey=da328055e2e940d8b28055e2e9e0d851';
    this.http.get(this.weeklyWeatherUrl).subscribe(
      (result) => {
        // console.log(result);
        this.weekDays = result['dayOfWeek'];
        this.maxTemp = result['temperatureMax'];
        this.minTemp = result['temperatureMin'];
        this.weatherIcon = result['daypart'][0]['iconCode'];
        this.narration = result['daypart'][0]['narrative'];
      });
  }

  async getForecastHourly() {
    this.hourlyWeatherUrl = 'https://api.weather.com/v1/geocode/' + this.latitude + '/' + this.longitude +
    '/forecast/intraday/3day.json?units=m&language=' + this.languageList.code + '&apiKey=da328055e2e940d8b28055e2e9e0d851';
    this.http.get(this.hourlyWeatherUrl).subscribe(
      (result) => {
        this.currentForecast = result['forecasts'][0];
        // console.log(result['forecasts']);
        this.currentForecast6 = result['forecasts'][1];
        this.currentForecast12 = result['forecasts'][2];
        this.currentForecast18 = result['forecasts'][3];
      });
  }

  async getForecastAnnual() {
    this.annualWeatherUrl = 'http://www.agrolly.tech/annualForecast.php';
    this.http.get(this.annualWeatherUrl).subscribe(
      (result) => {
        this.annualForecast = result;
        // console.log('Annual: ' + this.annualForecast[0]['Date.fcst']);
      });
  }

  /* Crops */
  async getCropsPlaces() {
    this.cropsPlaces = 'http://www.agrolly.tech/crop_places.php';
    this.http.get(this.cropsPlaces).subscribe(
      (result) => {
        this.cropsPlacesData = result;
      });
  }

  async getCropsList() {
    this.cropsList = 'http://www.agrolly.tech/cropdata.php';
    this.http.get(this.cropsList).subscribe(
      (result) => {
        this.cropsListData = result;
      });
  }

  async getPoValue() {
    this.cropsList = 'http://www.agrolly.tech/po_value.php';
    this.http.get(this.cropsList).subscribe(
      (result) => {
        this.poValue = result;
      });
  }

  async getPoPlaces() {
    this.cropsList = 'http://www.agrolly.tech/po_places.php';
    this.http.get(this.cropsList).subscribe(
      (result) => {
        this.poPlaces = result[0];
      });
  }

  /* Toast */
  async showToast(msg: string) {
    const toast = await this.Toast.create({
      message: msg,
      duration: 3000,
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  /* IBM Watson Assistant API calls */

  async greetingApiCall() {
    const postData = {
      greetings: history,
    };

    this.http.post('http://agrolly.tech/watsonApi.php', postData, this.httpOptionsPost).subscribe(
      (result) => {
          this.chatLog.push(result[0]['text']);
          this.chatLogObj = this.chatLog.map((response) => {
            return {
              name: 'watson',
              msg : response,
            };
          });
          console.log('result: ' + JSON.stringify(this.chatLogObj));
      });
  }
}
