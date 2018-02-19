import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  registerAccident = { address: '', department: '', gravity: '' };

  constructor(public navCtrl: NavController) {

  }

  submit() {
    var geocoder = new google.maps.Geocoder();
    const addressToCode = this.registerAccident.address + ' ' + this.registerAccident.department;
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
          this.addComment();
        } else {
          console.log('Invalid address');
        }
    });
  }

  addComment() {
    // this.rest.addComment(accId, text, author)
    //   .subscribe(
    //   updatedComments => this.updatedComments = updatedComments,
    //   error => this.errorMessage = <any>error);
  }

}
