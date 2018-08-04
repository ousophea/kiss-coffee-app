webpackJsonp([2],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(104);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of Settings page
 * File path - '../../../../src/pages/settings/settings'
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




var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, http, platform, translateService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.platform = platform;
        this.translateService = translateService;
    }
    /** Do any initialization */
    SettingsPage.prototype.ngOnInit = function () {
        this.getAllLanguages();
    };
    /**
     * -------------------------------------------------------------------
     * Get All Languages
     * -------------------------------------------------------------------
     * @method getAllLanguages
     */
    SettingsPage.prototype.getAllLanguages = function () {
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
    SettingsPage.prototype.chooseLanguage = function (language) {
        if (language === 'ar') {
            this.platform.setDir('rtl', true);
            this.translateService.setDefaultLang(language);
        }
        else {
            this.platform.setDir('ltr', true);
            this.translateService.setDefaultLang(language);
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\settings\settings.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Settings Page -->\n\n<ion-header no-border>\n  <ion-navbar color="orange" hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'SETTINGS.TITLE\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list radio-group>\n    <div class="animated fadeInUp">\n      <p class="tag">{{\'SECOND_LANDING_PAGE.TITLE\' | translate}}</p>\n      <ion-item class="select-box">\n        <ion-label>{{\'SECOND_LANDING_PAGE.DROPDOWN_LABEL\' | translate}}</ion-label>\n        <ion-select [(ngModel)]="language" (ionChange)="chooseLanguage(language)">\n          <ion-option [selected]="language.ID == \'en\'" *ngFor="let language of languages; let i=index" [value]="\'LANGUAGES.\' + i + \'.ID\' | translate">{{\'LANGUAGES.\' + i + \'.VALUE\' | translate}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n  </ion-list>\n\n  <br>\n\n  <ion-list>\n    <p class="tag">Notification</p>\n    <ion-item text-wrap>\n      <ion-label>Receive special offers</ion-label>\n      <ion-toggle color="orange" checked="true"></ion-toggle>\n    </ion-item>\n    <ion-item text-wrap>\n      <ion-label>Get update on your order status</ion-label>\n      <ion-toggle color="orange" checked="false"></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <br>\n\n  <ion-list no-lines>\n    <p class="tag">Support Us</p>\n    <button ion-item>\n    Rate Us\n    </button>\n    <button ion-item>\n    Share with friends\n    </button>\n    <button ion-item>\n    Feedback\n    </button>\n    <button ion-item>\n    Privacy Policy\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=2.js.map