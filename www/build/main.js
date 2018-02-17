webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registerCredentials = { username: '', password: '' };
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        //Api connections
        if (this.registerCredentials.username == "User") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }
        else if (this.registerCredentials.username == "Manager") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }
        else {
            console.log("User not valid");
        }
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\login\login.html"*/'\n\n\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  <h2>Enter your credentials :</h2>\n\n\n\n  <form (ngSubmit)="login()" #registerForm="ngForm">\n\n      <ion-item>\n\n        <ion-label fixed>Username</ion-label>\n\n        <ion-input type="text" name="username" [(ngModel)]="registerCredentials.username" required></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label fixed>Password</ion-label>\n\n        <ion-input type="password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n      </ion-item>\n\n    \n\n      <button ion-button block color="primary" type="submit" [disabled]="!registerForm.form.valid">Login</button>\n\n  </form>\n\n\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h2>Accident preventing app</h2>\n    <p>This app can help you to prevent accidents.</p>\n    <p>You will be informed when entering a zone where accidents have happened\n      in the past years, so just turn on the app and let it warn you when needed !</p>\n</ion-content>\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, rest, geolocation, app) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.geolocation = geolocation;
        this.app = app;
        this.timeoutValue = 3000;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.infoWindows = [];
        this.commentsArray = [];
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            // let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            // this.getAccidents([position.coords.latitude, position.coords.longitude]);
            var latLng = new google.maps.LatLng(43.6157998, 7.0724383);
            _this.getAccidents([43.6157998, 7.0724383]);
            var mapOptions = {
                center: latLng,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            setTimeout(function () {
                if (_this.accidents != undefined) {
                    _this.accidents.result.forEach(function (element) {
                        var markerCoords = {
                            lat: parseFloat(element.lat),
                            lng: parseFloat(element.lon)
                        };
                        var infowindow = new google.maps.InfoWindow({
                            content: element.adresse
                        });
                        _this.infoWindows.push(infowindow);
                        var marker = new google.maps.Marker({
                            position: markerCoords,
                            title: "Accident"
                        });
                        marker.addListener('click', function () {
                            _this.selectedAccidentID = element.accidentId;
                            _this.commentsArray = [];
                            _this.infoWindows.forEach(function (window) {
                                window.close();
                            });
                            infowindow.open(_this.map, marker);
                            _this.getComments(element.accidentId);
                            setTimeout(function () {
                                if (_this.comments != undefined) {
                                    _this.comments.result.forEach(function (element) {
                                        _this.commentsArray.push(element.text);
                                    });
                                }
                            }, _this.timeoutValue);
                        });
                        marker.setMap(_this.map);
                    });
                }
                else {
                    console.log('Accidents were not found quick enough');
                }
            }, _this.timeoutValue);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.sendComment = function (newCom) {
        var _this = this;
        if (newCom.value != '' && this.selectedAccidentID != undefined) {
            this.addComment(this.selectedAccidentID, newCom.value, 'User');
            setTimeout(function () {
                // If addComment returns the right comments, update them here
                // console.log(this.updatedComments);
                // Temporary workaround
                _this.getComments(_this.selectedAccidentID);
                setTimeout(function () {
                    if (_this.comments != undefined) {
                        _this.commentsArray.push(_this.comments.result[_this.comments.result.length - 1].text);
                    }
                }, _this.timeoutValue);
            }, this.timeoutValue);
        }
        else {
            console.log('Invalid input');
        }
        newCom.clearTextInput();
    };
    HomePage.prototype.getAccidents = function (coords) {
        var _this = this;
        this.rest.getAccidents(coords)
            .subscribe(function (accidents) { return _this.accidents = accidents; }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.getComments = function (accId) {
        var _this = this;
        this.rest.getComments(accId)
            .subscribe(function (comments) { return _this.comments = comments; }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.addComment = function (accId, text, author) {
        var _this = this;
        this.rest.addComment(accId, text, author)
            .subscribe(function (updatedComments) { return _this.updatedComments = updatedComments; }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.logout = function () {
        //Api Token Logout 
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Accidents around you :</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div #map id="map"></div> \n\n  <h6>Comment list</h6>\n\n  <div id="comments">\n    <ul *ngFor="let c of commentsArray">\n      <li>{{c}}</li>\n    </ul>\n  </div>\n\n  <ion-item>\n    <ion-label>New comment :</ion-label>\n    <ion-input type="text" #newCom></ion-input>\n  </ion-item>\n\n  <ion-buttons end>\n    <button ion-button color="primary" (click)="sendComment(newCom)">Send comment</button>\n    <button ion-button color="primary" (click)="logout()">Logout</button>\n  </ion-buttons>\n\n  <!-- <ion-list>\n    <ion-item *ngFor="let a of accidents | slice:0:3">\n      <h2>{{a}}</h2>\n    </ion-item>\n  </ion-list> -->\n</ion-content>'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getAccidents = function (coords) {
        this.apiUrl1 = 'http://localhost:8000/getRouteByPosition?lat=' + coords[0] + '&lon=' + coords[1];
        console.log(this.apiUrl1);
        return this.http.get(this.apiUrl1)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.getComments = function (accId) {
        this.apiUrl2 = 'http://localhost:8000/getCommentaryById?accidentId=' + accId;
        console.log(this.apiUrl2);
        return this.http.get(this.apiUrl2)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.addComment = function (accId, text, author) {
        this.apiUrl3 = 'http://localhost:8000/addCommentary?text=' + text + '&accidentId=' + accId + '&auteur=' + author;
        console.log(this.apiUrl3);
        return this.http.get(this.apiUrl3)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.extractData = function (res) {
        return res;
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_rest_rest__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* Login */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* Login */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* Login */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map