import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

declare var google;

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  registerAccident = { address: '', department: '', gravity: '' };
  errorMessage: string;
  result: any;

  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  submit() {
    var geocoder = new google.maps.Geocoder();
    const addressToCode = this.registerAccident.address + ' ' + this.registerAccident.department;
    if (this.registerAccident.address != '' && this.registerAccident.department != '' && this.registerAccident.gravity != '') {
      geocoder.geocode({'address': addressToCode}, (results, status) => {
        if (status === 'OK') {
          const addressToSend = this.registerAccident.address;
          let departmentToSend = this.registerAccident.department.substring(0,2);
          if (departmentToSend[0] == "0") {
            departmentToSend = departmentToSend.substring(1,2);
          }
          const coordToSend = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          }
          this.addComment(addressToSend, departmentToSend, coordToSend, this.registerAccident.gravity);
        } else {
          console.log('Invalid address');
        }
      });
    }
  }

  addComment(add: any, dep: any, coord: any, grav: any) {
    this.rest.addAccident(add, dep, coord, grav)
      .subscribe(
      result => this.result = result,
      error => this.errorMessage = <any>error);
  }

}
