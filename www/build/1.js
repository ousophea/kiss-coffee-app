webpackJsonp([1],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationPageModule", function() { return UserInformationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_information__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserInformationPageModule = (function () {
    function UserInformationPageModule() {
    }
    UserInformationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_information__["a" /* UserInformationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_information__["a" /* UserInformationPage */]),
            ],
        })
    ], UserInformationPageModule);
    return UserInformationPageModule;
}());

//# sourceMappingURL=user-information.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of User Information page
 * File path - '../../../../src/pages/user-information/user-information'
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



var UserInformationPage = (function () {
    function UserInformationPage(navCtrl, navParams, formBuilder, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.menu = menu;
        this.menu.enable(true); // Enable sidemenu
    }
    /**
     * Do any initialization
     */
    UserInformationPage.prototype.ngOnInit = function () {
        this.formValidation();
    };
    /***
     * --------------------------------------------------------------
     * Form Validation
     * --------------------------------------------------------------
     * @method   formValidation
     */
    UserInformationPage.prototype.formValidation = function () {
        this.UserInfoForm = this.formBuilder.group({
            fullname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            time: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            locationAddress: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    };
    /**
     * --------------------------------------------------------------
     * Go To Menu Category Page
     * --------------------------------------------------------------
     */
    UserInformationPage.prototype.gotoMenuCategoryPage = function () {
        this.navCtrl.setRoot('FoodCategoriesPage');
    };
    UserInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-information',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\user-information\user-information.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- User Information Page -->\n\n<ion-header no-border>\n  <ion-navbar color="orange" hideBackButton>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>{{\'USER_INFORMATION.TITLE\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <img class="logo animated fadeInDown" src="assets/imgs/logo-icon.png">\n  <div class="animated fadeInUp">\n    <p class="title1">{{\'USER_INFORMATION.WELCOME\' | translate}}</p>\n    <p class="title2">{{\'USER_INFORMATION.SUBTITLE\' | translate}}</p>\n  </div>\n\n  <form [formGroup]="UserInfoForm" novalidate class="animated zoomInUp">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n\n          <!-- Full Name -->\n          <ion-item>\n            <ion-input type="text" formControlName="fullname" placeholder="Full Name*" [(ngModel)]="UserInfoForm.fullname"></ion-input>\n          </ion-item>\n\n          <!-- Email Address -->\n          <ion-item>\n            <ion-input type="email" formControlName="email" placeholder="Email Address*" [(ngModel)]="UserInfoForm.email"></ion-input>\n          </ion-item>\n\n          <!-- Mobile Number -->\n          <ion-item>\n            <ion-input type="number" formControlName="mobile" placeholder="Mobile Number*" [(ngModel)]="UserInfoForm.mobile"></ion-input>\n          </ion-item>\n\n          <!-- Time -->\n          <ion-item>\n            <ion-datetime formControlName="time" displayFormat="h:mm:a" placeholder="Time*" [(ngModel)]="UserInfoForm.time"></ion-datetime>\n          </ion-item>\n\n          <!-- Date  -->\n          <ion-item>\n            <ion-datetime formControlName="date" displayFormat="DDDD MMM, YYYY" placeholder="Date*" [(ngModel)]="UserInfoForm.date"></ion-datetime>\n          </ion-item>\n\n          <!-- Location Address  -->\n          <ion-item>\n            <ion-input type="text" formControlName="locationAddress" placeholder="Location Address*" [(ngModel)]="UserInfoForm.locationAddress"></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button round color="orange" (click)="gotoMenuCategoryPage()">{{\'SECOND_LANDING_PAGE.BUTTON\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\user-information\user-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], UserInformationPage);
    return UserInformationPage;
}());

//# sourceMappingURL=user-information.js.map

/***/ })

});
//# sourceMappingURL=1.js.map