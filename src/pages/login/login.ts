import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TabsManager } from '../tabsManager/tabsManager';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  registerCredentials = { username: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){
    //Api connections
    if (this.registerCredentials.username == "User" && this.registerCredentials.password == "pass") {
      this.navCtrl.push(TabsPage);
    } else if (this.registerCredentials.username == "Manager" && this.registerCredentials.password == "pass") {
      this.navCtrl.push(TabsManager);
    } else {
      console.log("User not valid");
    }
  }
}
