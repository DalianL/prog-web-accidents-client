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
      // Checks if address is likely to be correct
      if (this.registerAccident.address.split(' ').length > 2) {
        // Checks if departement has a valid number first
        if (/^\d+$/.test(this.registerAccident.department.split(' ')[0])) {
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
    
              let elem = <HTMLElement>document.querySelector(".feedback");
              elem.style.display = 'block';
              setTimeout(() => {
                elem.style.display = 'none';
              }, 2000);
            } else {
              console.log('Geocode did not function properly');
            }
          });
        } else {
          console.log('Invalid department');  
        }
      } else {
        console.log('Invalid address');
      }
    } else {
      console.log('Missing fields');
    }
  }

  addComment(add: any, dep: any, coord: any, grav: any) {
    this.rest.addAccident(add, dep, coord, grav)
      .subscribe(
      result => this.result = result,
      error => this.errorMessage = <any>error);
  }

  emptyFields(add: any, dep: any, grav: any) {
    setTimeout(() => {
      add.clearTextInput();
      dep.clearTextInput();
      grav.clearTextInput();
    }, 2000);
  }
}
