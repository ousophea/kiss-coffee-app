webpackJsonp([8],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryConfirmationPageModule", function() { return DeliveryConfirmationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_confirmation__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DeliveryConfirmationPageModule = (function () {
    function DeliveryConfirmationPageModule() {
    }
    DeliveryConfirmationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__delivery_confirmation__["a" /* DeliveryConfirmationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__delivery_confirmation__["a" /* DeliveryConfirmationPage */]),
            ],
        })
    ], DeliveryConfirmationPageModule);
    return DeliveryConfirmationPageModule;
}());

//# sourceMappingURL=delivery-confirmation.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of Delivery Confirmation page
 * File path - '../../../../src/pages/delivery-confirmation/delivery-confirmation'
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



var DeliveryConfirmationPage = (function () {
    function DeliveryConfirmationPage(navCtrl, navParams, alertCtrl, formBuilder, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.menu = menu;
        this.menu.enable(true); // Enable sidemenu
    }
    /**
     * Do any initialization
     */
    DeliveryConfirmationPage.prototype.ngOnInit = function () {
        this.formValidation();
    };
    /***
     * --------------------------------------------------------------
     * Form Validation
     * --------------------------------------------------------------
     * @method   formValidation
     */
    DeliveryConfirmationPage.prototype.formValidation = function () {
        this.DeliveryInfoForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            locationAddress1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            locationAddress2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            datetime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    };
    /**
     * --------------------------------------------------------------
     * Go To Menu Category Page
     * --------------------------------------------------------------
     */
    DeliveryConfirmationPage.prototype.gotoPaymentPage = function () {
        this.navCtrl.setRoot('PaymentPage');
    };
    DeliveryConfirmationPage.prototype.sendOrder = function () {
        var alert = this.alertCtrl.create({
            title: 'Thank You!',
            subTitle: 'Your order has been sent,Please wait for 20 minutes!',
            buttons: ['OK']
        });
        alert.present();
    };
    DeliveryConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-delivery-confirmation',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\delivery-confirmation\delivery-confirmation.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Delivery Confirmation Page -->\n\n<ion-header no-border>\n  <ion-navbar color="orange" hideBackButton>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>{{\'DELIVERY_CONFIRMATION.TITLE\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <img class="logo animated fadeInDown" src="assets/imgs/logo-icon.png">\n\n  <form [formGroup]="DeliveryInfoForm" novalidate class="animated zoomInUp">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n\n          <!-- Name -->\n          <ion-item>\n            <ion-input type="text" formControlName="name" placeholder="Name*" [(ngModel)]="DeliveryInfoForm.name"></ion-input>\n          </ion-item>\n\n          <!-- Mobile Number -->\n          <ion-item>\n            <ion-input type="number" formControlName="mobile" placeholder="Mobile Number*" [(ngModel)]="DeliveryInfoForm.mobile"></ion-input>\n          </ion-item>\n\n          <!-- Location Address1  -->\n          <ion-item>\n            <ion-input type="text" formControlName="locationAddress1" placeholder="Location Address 1*" [(ngModel)]="DeliveryInfoForm.locationAddress1"></ion-input>\n          </ion-item>\n\n          <!-- Location Address2  -->\n          <ion-item>\n            <ion-input type="text" formControlName="locationAddress2" placeholder="Location Address 2*" [(ngModel)]="DeliveryInfoForm.locationAddress1"></ion-input>\n          </ion-item>\n\n          <!-- Date Time -->\n          <ion-item>\n            <ion-datetime formControlName="datetime" displayFormat="DD MMM, YYYY (HH:mm a)" placeholder="Date*" [(ngModel)]="DeliveryInfoForm.datetime"></ion-datetime>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <!-- Button  -->\n    <ion-row>\n      <ion-col>\n        <button ion-button round color="orange" (click)="sendOrder()">{{\'DELIVERY_CONFIRMATION.BUTTON\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\delivery-confirmation\delivery-confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], DeliveryConfirmationPage);
    return DeliveryConfirmationPage;
}());

//# sourceMappingURL=delivery-confirmation.js.map

/***/ })

});
//# sourceMappingURL=8.js.map