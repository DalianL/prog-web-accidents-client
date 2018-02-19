import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AddPage } from '../pages/add/add';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ManagerPage } from '../pages/homeManager/homeManager';
import { Login } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsManager } from '../pages/tabsManager/tabsManager';

import { RestProvider } from '../providers/rest/rest';
import { Geolocation } from '@ionic-native/geolocation';
import { Toast } from '@ionic-native/toast';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AddPage,
    ContactPage,
    HomePage,
    ManagerPage,
    TabsPage,
    TabsManager,
    Login
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddPage,
    ContactPage,
    HomePage,
    ManagerPage,
    TabsPage,
    TabsManager,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    RestProvider,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
