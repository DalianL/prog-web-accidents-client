import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  infoWindows: any[];
  coordinates: any;
  accidents: any;
  selectedAccidentID: any;
  comments: any;
  updatedComments: any;
  commentsArray: any[];
  errorMessage: string;
  timeoutValue: number = 3000;

  constructor(public navCtrl: NavController, public rest: RestProvider, public geolocation: Geolocation, public app: App) {

  }

  ionViewDidLoad() {
    this.infoWindows = [];
    this.commentsArray = [];
    this.loadMap();
  }
  
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      // let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      // this.getAccidents([position.coords.latitude, position.coords.longitude]);
      let latLng = new google.maps.LatLng(43.6157998, 7.0724383);
      this.getAccidents([43.6157998, 7.0724383]);
 
      let mapOptions = {
        center: latLng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      setTimeout(() => {
        if (this.accidents != undefined) {
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
              this.infoWindows.forEach(window => {
                window.close();
              });
              infowindow.open(this.map, marker);
              this.getComments(element.accidentId);

              setTimeout(() => {
                if (this.comments != undefined) {
                  this.comments.result.forEach(element => {
                    this.commentsArray.push(element.text);
                  });
                }
              }, this.timeoutValue);
            });
  
            marker.setMap(this.map);
            
          });
        } else {
          console.log('Accidents were not found quick enough');
        }
      }, this.timeoutValue);
 
    }, (err) => {
      console.log(err);
    });
 
  }

  sendComment(newCom: any) {
    if (newCom.value != '' && this.selectedAccidentID != undefined) {
      this.addComment(this.selectedAccidentID, newCom.value, 'User');

      setTimeout(() => {
        // If addComment returns the right comments, update them here
        // console.log(this.updatedComments);
        // Temporary workaround
        this.getComments(this.selectedAccidentID);
  
        setTimeout(() => {
          if (this.comments != undefined) {
            this.commentsArray.push(this.comments.result[this.comments.result.length - 1].text);
          }
        }, this.timeoutValue);
      }, this.timeoutValue);
    } else {
      console.log('Invalid input');
    }
    newCom.clearTextInput();
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
    //Api Token Logout 
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}