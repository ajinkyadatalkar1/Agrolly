import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { IonReorderGroup } from '@ionic/angular';


import { Language } from './language/language';
import { Countries } from './Country/countries';
import { States } from './States/states';
import { Sums } from './Sums/sums';
import { StoreNotifications } from './notificationStore/storenotifications';

import { OnetimepasswordPage } from './onetimepassword/onetimepassword.page';
import { QuescommentsPage } from './quescomments/quescomments.page';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, OnetimepasswordPage, QuescommentsPage],
  entryComponents: [OnetimepasswordPage, QuescommentsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot(),
     FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    FCM,
    Camera,
    FileTransfer,
    IonReorderGroup,
    PhotoViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Language,
    Countries,
    States,
    Sums,
    StoreNotifications,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
