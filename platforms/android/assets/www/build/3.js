webpackJsonp([3],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondLandingPageModule", function() { return SecondLandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second_landing__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SecondLandingPageModule = (function () {
    function SecondLandingPageModule() {
    }
    SecondLandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__second_landing__["a" /* SecondLandingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__second_landing__["a" /* SecondLandingPage */]),
            ],
        })
    ], SecondLandingPageModule);
    return SecondLandingPageModule;
}());

//# sourceMappingURL=second-landing.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondLandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(104);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of Second Landing page
 * File path - '../../../../src/pages/second-landing/second-landing'
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




var SecondLandingPage = (function () {
    function SecondLandingPage(navCtrl, navParams, menu, http, platform, translateService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.http = http;
        this.platform = platform;
        this.translateService = translateService;
        this.menu.enable(false); // Disable sidemenu
    }
    /** Do any initialization */
    SecondLandingPage.prototype.ngOnInit = function () {
        this.getAllLanguages();
    };
    /**
     * -------------------------------------------------------------------
     * Get All Languages
     * -------------------------------------------------------------------
     * @method getAllLanguages
     */
    SecondLandingPage.prototype.getAllLanguages = function () {
        var _this = this;
        this.http.get('assets/i18n/en.json').subscribe(function (languages) {
            _this.languages = languages.LANGUAGES;
        }, function (error) {
            console.error('Error: ' + error);
        });
    };
    /**
     * -------------------------------------------------------------------
     * Choose Language
     * -------------------------------------------------------------------
     * @method chooseLanguage
     * @param language      Selected Language
     *
     * When language code 'ar' then the platform direction will be 'rtl' otherwise platform direction 'ltr'
     */
    SecondLandingPage.prototype.chooseLanguage = function (language) {
        if (language === 'ar') {
            this.platform.setDir('rtl', true);
            this.translateService.setDefaultLang(language);
        }
        else {
            this.platform.setDir('ltr', true);
            this.translateService.setDefaultLang(language);
        }
    };
    /**
     * -------------------------------------------------------------------
     * Go To User Information Page
     * -------------------------------------------------------------------
     * @method gotoUserInfoPage     This function goto user information page and collect user Info's from user.
     */
    SecondLandingPage.prototype.gotoUserInfoPage = function () {
        this.navCtrl.setRoot('UserInformationPage');
    };
    SecondLandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-second-landing',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\second-landing\second-landing.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Second Landing Page -->\n\n<ion-content>\n  <div class="background">\n    <div class="contents">\n      <div class="animated fadeInUp">\n        <p>{{\'SECOND_LANDING_PAGE.TITLE\' | translate}}</p>\n        <ion-item class="select-box" color="orange">\n          <ion-label>{{\'SECOND_LANDING_PAGE.DROPDOWN_LABEL\' | translate}}</ion-label>\n          <ion-select [(ngModel)]="language" (ionChange)="chooseLanguage(language)">\n            <ion-option [selected]="language.ID == \'en\'" *ngFor="let language of languages; let i=index" [value]="\'LANGUAGES.\' + i + \'.ID\' | translate">{{\'LANGUAGES.\' + i + \'.VALUE\' | translate}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button round color="orange" (click)="gotoUserInfoPage()">{{\'SECOND_LANDING_PAGE.BUTTON\' | translate}}</button>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\second-landing\second-landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], SecondLandingPage);
    return SecondLandingPage;
}());

//# sourceMappingURL=second-landing.js.map

/***/ })

});
//# sourceMappingURL=3.js.map