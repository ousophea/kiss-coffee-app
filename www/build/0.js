webpackJsonp([0],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryTrackingPageModule", function() { return DeliveryTrackingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_tracking__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DeliveryTrackingPageModule = (function () {
    function DeliveryTrackingPageModule() {
    }
    DeliveryTrackingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__delivery_tracking__["a" /* DeliveryTrackingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__delivery_tracking__["a" /* DeliveryTrackingPage */]),
            ],
        })
    ], DeliveryTrackingPageModule);
    return DeliveryTrackingPageModule;
}());

//# sourceMappingURL=delivery-tracking.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryTrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_config_map_style__ = __webpack_require__(327);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of Delivery Tracking page
 * File path - '../../../../src/pages/delivery-tracking/delivery-tracking'
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeliveryTrackingPage = (function () {
    function DeliveryTrackingPage(navCtrl, navParams, geolocation, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.platform = platform;
    }
    DeliveryTrackingPage.prototype.ionViewDidLoad = function () {
        this.loadmap();
    };
    DeliveryTrackingPage.prototype.loadmap = function () {
        var user1Latlng = new google.maps.LatLng(23.7554464, 90.3856283);
        var user2Latlng = new google.maps.LatLng(23.7636971, 90.3706906);
        // Define Direction Service
        var directionsService = new google.maps.DirectionsService;
        var lineSymbol = {
            path: google.maps.SymbolPath.CIRCLE,
            fillOpacity: 1,
            scale: 3
        };
        var polylineOptionsActual = new google.maps.Polyline({
            strokeColor: '#d0330f',
            strokeWeight: 5,
            icons: [{
                    icon: lineSymbol,
                    offset: '0',
                    repeat: '10px'
                }],
            strokeOpacity: 0,
            fillOpacity: 0,
        });
        var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true, polylineOptions: polylineOptionsActual });
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 5,
            center: user1Latlng,
            styles: __WEBPACK_IMPORTED_MODULE_3__assets_config_map_style__["a" /* MapStyle */]
        });
        directionsDisplay.setMap(this.map);
        var icons = {
            start: {
                icon: 'assets/imgs/user1.png',
                name: 'Sinthia'
            },
            end: {
                icon: 'assets/imgs/user2.png',
                name: 'Mark'
            }
        };
        this.addMarker(user1Latlng, icons.start, 'start');
        this.addMarker(user2Latlng, icons.end, 'end');
        directionsService.route({
            origin: user1Latlng,
            destination: user2Latlng,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    DeliveryTrackingPage.prototype.addMarker = function (latlng, info, title) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            icon: info.icon,
            title: title,
            position: latlng
        });
        var content = info.name;
        this.addInfoWindow(marker, content);
    };
    DeliveryTrackingPage.prototype.addInfoWindow = function (marker, content) {
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        infoWindow.open(this.map, marker);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DeliveryTrackingPage.prototype, "mapElement", void 0);
    DeliveryTrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-delivery-tracking',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\delivery-tracking\delivery-tracking.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Delivery Tracking Page -->\n\n<ion-header no-border>\n  <ion-navbar color="orange" hideBackButton>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>{{\'DELIVERY_TRACKING.TITLE\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="google-v1">\n  <div id="order-info">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2 text-center>\n          <ion-fab edge>\n            <button ion-fab mini color="dark"><ion-icon name="checkmark"></ion-icon></button>\n          </ion-fab>\n        </ion-col>\n        <ion-col col-2 text-center [ngClass]="this.platform.dir()===\'ltr\'? \'dot-left\': \'dot-right\'">\n          <span>  ..... </span>\n        </ion-col>\n        <ion-col col-2 text-center>\n          <ion-fab edge>\n            <button ion-fab mini color="dark"><ion-icon name="checkmark"></ion-icon></button>\n          </ion-fab>\n        </ion-col>\n        <ion-col col-2 text-center [ngClass]="this.platform.dir()===\'ltr\'? \'dot-left\': \'dot-right\'">\n          <span>  ..... </span>\n        </ion-col>\n        <ion-col col-2 text-center>\n          <ion-fab edge>\n            <button ion-fab mini color="light"><ion-icon name="checkmark"></ion-icon></button>\n          </ion-fab>\n        </ion-col>\n      </ion-row>\n      <ion-row class="custom-row">\n        <ion-col col-4 text-center>\n          Delivery\n        </ion-col>\n        <ion-col col-4 text-center>\n          Confirm\n        </ion-col>\n        <ion-col col-4 text-center>\n          Received\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div id="track-info">\n    <p class="track-title">Order Confirmed!</p>\n    <p class="track-des">Mark is on the way with your order.</p>\n  </div>\n  <div #map id="map"></div>\n  <div id="delivery-details">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 class="left">\n          <p class="title">Delivery Address</p>\n          <address>\n            395 Middleville Road<br> Los Angeles, CA<br> California\n          </address>\n        </ion-col>\n        <ion-col col-6 class="right">\n          <p><b>Order ID:  #123123</b></p>\n          <p>Mark Rich</p>\n          <p>626-451-3030</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\delivery-tracking\delivery-tracking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], DeliveryTrackingPage);
    return DeliveryTrackingPage;
}());

//# sourceMappingURL=delivery-tracking.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapStyle; });
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This File Represents Style of Google Map .
 * File path - '../../src/config/map-style'
 */
var MapStyle = [{
        "elementType": "geometry",
        "stylers": [{
                "color": "#f5f5f5"
            }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
                "visibility": "off"
            }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
                "color": "#616161"
            }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
                "color": "#f5f5f5"
            }]
    }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
                "color": "#bdbdbd"
            }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
                "color": "#eeeeee"
            }]
    }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
                "color": "#757575"
            }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
                "color": "#e5e5e5"
            }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
                "color": "#9e9e9e"
            }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
                "color": "#ffffff"
            }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
                "color": "#757575"
            }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
                "color": "#dadada"
            }]
    }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
                "color": "#616161"
            }]
    }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
                "color": "#9e9e9e"
            }]
    }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
                "color": "#e5e5e5"
            }]
    }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
                "color": "#eeeeee"
            }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
                "color": "#c9c9c9"
            }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
                "color": "#9e9e9e"
            }]
    }];
//# sourceMappingURL=map-style.js.map

/***/ })

});
//# sourceMappingURL=0.js.map