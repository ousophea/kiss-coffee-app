webpackJsonp([12],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutUsPageModule = (function () {
    function AboutUsPageModule() {
    }
    AboutUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_us__["a" /* AboutUsPage */]),
            ],
        })
    ], AboutUsPageModule);
    return AboutUsPageModule;
}());

//# sourceMappingURL=about-us.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of About Us page
 * File path - '../../../../src/pages/about-us/about-us'
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


var AboutUsPage = (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\about-us\about-us.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- About Us Page -->\n\n<ion-header no-border>\n  <ion-navbar color="orange" hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'ABOUTUS.TITLE\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="background">\n    <div class="page-title">\n      <h1>ABOUT US</h1>\n      <p>Lorem Ipsum is simply dummy text!</p>\n    </div>\n  </div>\n  <div padding class="contents">\n    <strong>What is IonicBucket?</strong>\n    <br>\n    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard\n      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n      book.\n    </p>\n    <br>\n    <strong>IonicBucket Online Experience</strong>\n    <br>\n    <p>\n      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by\n      injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of\n      Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum\n      generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the\n      Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate\n      Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,\n      or non-characteristic words etc.\n    </p>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ })

});
//# sourceMappingURL=12.js.map