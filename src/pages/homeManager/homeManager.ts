import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-manager',
  templateUrl: 'homeManager.html'
})
export class ManagerPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  infoWindows: any[];
  coordinates: any;
  accidents: any;
  updatedAccidents: any;
  selectedAccidentID: any;
  comments: any;
  updatedComments: any;
  commentsArray: any[];
  commentsId: any[];
  errorMessage: string;
  warned: any;
  checkInterval: number = 200;
  loadTimeoutId: any;

  constructor(public navCtrl: NavController, public rest: RestProvider, public geolocation: Geolocation, public app: App) {

  }

  ionViewDidLoad() {
    this.infoWindows = [];
    this.commentsArray = [];
    this.loadMap();
  }
  
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {

      let latPos = position.coords.latitude;
      let lngPos = position.coords.longitude;
 
      let latLng = new google.maps.LatLng(latPos, lngPos);
      // let latLng = new google.maps.LatLng(43.6157998, 7.0724383);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.loadAccidents(latPos, lngPos);

    }, (err) => {
      console.log(err);
    });
  }

  loadAccidents(latPos: any, lngPos: any) {
    this.getAccidents([latPos, lngPos]);
    // this.getAccidents([43.6157998, 7.0724383]);

    const interval1 = setInterval(() => {
      if (this.accidents != undefined) {
        if (this.warned == undefined) {
          if ((<any>window).cordova) {
            // this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
            //   toast => {
            //     console.log(toast);
            //   }
            // );
          } else {
            alert("ACCIDENT ZONE DETECTED\nBe careful !");
          }
          this.warned = true;
        }

        clearInterval(interval1);

        this.accidents.result.forEach(element => {
          let markerCoords = {
            lat: parseFloat(element.lat),
            lng: parseFloat(element.lon)
          };

          var infowindow = new google.maps.InfoWindow({
            content: element.adresse
          });

          this.infoWindows.push(infowindow);

          let marker = new google.maps.Marker({
            position: markerCoords,
            title: "Accident"
          });

          marker.addListener('click', () => {
            this.selectedAccidentID = element.accidentId;
            this.commentsArray = [];
            this.commentsId = [];
            this.infoWindows.forEach(window => {
              window.close();
            });
            infowindow.open(this.map, marker);
            this.getComments(element.accidentId);

            let elemList = <any>document.querySelectorAll(".accDefined");
            elemList.forEach(element => {
              element.style.display = 'block';
            });

            const interval2 = setInterval(() => {
              if (this.comments != undefined) {
                // console.log("Comments loaded");
                clearInterval(interval2);
                this.comments.result.forEach(element => {
                  this.commentsArray.push(element.text);
                  this.commentsId.push(element._id);
                });
              }
            }, this.checkInterval);
          });

          marker.setMap(this.map);
          
        });
      }
    }, this.checkInterval);

    this.loadTimeoutId = setTimeout(() => {
      this.loadAccidents(latPos, lngPos);
    }, 10000);

  }

  sendComment(newCom: any) {
    if (newCom.value != '' && this.selectedAccidentID != undefined) {
      this.commentsArray.push(newCom.value);
      this.addComment(this.selectedAccidentID, newCom.value, 'User');
    } else {
      console.log('Invalid input');
    }
    newCom.clearTextInput();
  }

  deleteComment(index: number) {
    const idToRemove = this.commentsId[index];
    this.commentsArray.splice(index, 1);
    this.rest.deleteComment(idToRemove, this.selectedAccidentID)
    .subscribe(
      updatedComments => this.updatedComments = updatedComments,
      error => this.errorMessage = <any>error);
  }

  deleteAccident() {
    for (let i = 0; i < this.accidents.result.length; i++) {
      if (this.accidents.result[i].accidentId == this.selectedAccidentID) {
        this.accidents.result.splice(i, 1);
        break;
      }
    }
    this.rest.deleteAccident(this.selectedAccidentID)
    .subscribe(
      accidents => this.updatedAccidents = accidents,
      error => this.errorMessage = <any>error);
  }

  getAccidents(coords: any) {
    this.rest.getAccidents(coords)
      .subscribe(
      accidents => this.accidents = accidents,
      error => this.errorMessage = <any>error);
  }

  getComments(accId: any) {
    this.rest.getComments(accId)
      .subscribe(
      comments => this.comments = comments,
      error => this.errorMessage = <any>error);
  }

  addComment(accId: any, text: any, author: any) {
    this.rest.addComment(accId, text, author)
      .subscribe(
      updatedComments => this.updatedComments = updatedComments,
      error => this.errorMessage = <any>error);
  }

  logout() {
    clearTimeout(this.loadTimeoutId);
    // Api Token Logout 
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}