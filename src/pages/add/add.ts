import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  registerAccident = { address: '', department: '', gravity: '' };

  constructor(public navCtrl: NavController) {

  }

  submit() {
    console.log('Submiting : ', this.registerAccident.address, this.registerAccident.department, this.registerAccident.gravity);
  }

}
