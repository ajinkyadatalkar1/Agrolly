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

import { Language } from './language/language';
import { Countries } from './Country/countries';
import { States } from './States/states';

import { OnetimepasswordPage } from './onetimepassword/onetimepassword.page';
import { QuescommentsPage } from './quescomments/quescomments.page';
import { FormsModule } from '@angular/forms';
import { ShowquestionsPage } from './showquestions/showquestions.page';

@NgModule({
  declarations: [AppComponent, OnetimepasswordPage, QuescommentsPage, ShowquestionsPage],
  entryComponents: [OnetimepasswordPage, QuescommentsPage, ShowquestionsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot(), FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Language,
    Countries,
    States
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
