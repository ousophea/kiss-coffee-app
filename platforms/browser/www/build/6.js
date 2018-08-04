webpackJsonp([6],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCategoriesPageModule", function() { return FoodCategoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_categories__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FoodCategoriesPageModule = (function () {
    function FoodCategoriesPageModule() {
    }
    FoodCategoriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__food_categories__["a" /* FoodCategoriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_categories__["a" /* FoodCategoriesPage */]),
            ],
        })
    ], FoodCategoriesPageModule);
    return FoodCategoriesPageModule;
}());

//# sourceMappingURL=food-categories.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_common_http__ = __webpack_require__(54);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of Food Categories page
 * File path - '../../../../src/pages/food-categories/food-categories'
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




var FoodCategoriesPage = (function () {
    function FoodCategoriesPage(navCtrl, navParams, modalCtrl, serviceProvider, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.serviceProvider = serviceProvider;
        this.http = http;
    }
    FoodCategoriesPage.prototype.ionViewDidLoad = function () {
        this.listCategory();
    };
    FoodCategoriesPage.prototype.gotoCategoryItemList = function (category) {
        var modal = this.modalCtrl.create('FoodCategoryItemsPage', { category: category });
        modal.present();
    };
    FoodCategoriesPage.prototype.gotoCartPage = function () {
        this.navCtrl.setRoot('CartPage');
    };
    FoodCategoriesPage.prototype.listCategory = function () {
        // this.http.get(this.serviceProvider.BASH_URL + 'foodList').subscribe((data: any) => {
        //   console.log(data);
        // }, error => {
        //   console.error('Error: ', error);
        // });
    };
    FoodCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-categories',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\food-categories\food-categories.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Food Categories Page -->\n\n<ion-header no-border>\n  <ion-navbar color="orange" hideBackButton>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>{{\'FOOD_CATEGORIES.TITLE\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="gotoCartPage()">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="background">\n    <div class="page-title">\n      <h1>THE MENU</h1>\n      <p>Easy on time, Full on Flavor</p>\n    </div>\n  </div>\n  <ion-list padding>\n    <ion-item class="animated bounceInLeft" (click)="gotoCategoryItemList(\'BURGER\')">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/BURGER.png">\n      </ion-thumbnail>\n      <h2>{{\'FOOD_CATEGORIES.BURGER\' | translate}}</h2>\n    </ion-item>\n    <ion-item class="animated bounceInRight" (click)="gotoCategoryItemList(\'CHINESS\')">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/CHINESS.png">\n      </ion-thumbnail>\n      <h2>{{\'FOOD_CATEGORIES.CHINESS\' | translate}}</h2>\n    </ion-item>\n    <ion-item class="animated bounceInLeft" (click)="gotoCategoryItemList(\'COFFEE\')">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/COFFEE.png">\n      </ion-thumbnail>\n      <h2>{{\'FOOD_CATEGORIES.COFFEE\' | translate}}</h2>\n    </ion-item>\n    <ion-item class="animated bounceInRight" (click)="gotoCategoryItemList(\'DESSERTS\')">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/DESSERTS.png">\n      </ion-thumbnail>\n      <h2>{{\'FOOD_CATEGORIES.DESSERTS\' | translate}}</h2>\n    </ion-item>\n    <ion-item class="animated bounceInLeft" (click)="gotoCategoryItemList(\'ICECREAMS\')">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/ICECREAMS.png">\n      </ion-thumbnail>\n      <h2>{{\'FOOD_CATEGORIES.ICECREAMS\' | translate}}</h2>\n    </ion-item>\n    <ion-item class="animated bounceInRight" (click)="gotoCategoryItemList(\'PIZZA\')">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/PIZZA.png">\n      </ion-thumbnail>\n      <h2>{{\'FOOD_CATEGORIES.PIZZA\' | translate}}</h2>\n    </ion-item>\n    <ion-item class="animated bounceInLeft" (click)="gotoCategoryItemList(\'SALADS\')">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/SALADS.png">\n      </ion-thumbnail>\n      <h2>{{\'FOOD_CATEGORIES.SALADS\' | translate}}</h2>\n    </ion-item>\n    <ion-item class="animated bounceInRight" (click)="gotoCategoryItemList(\'SNACKS\')">\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/SNACKS.png">\n      </ion-thumbnail>\n      <h2>{{\'FOOD_CATEGORIES.SNACKS\' | translate}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\food-categories\food-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_common_http__["a" /* HttpClient */]])
    ], FoodCategoriesPage);
    return FoodCategoriesPage;
}());

//# sourceMappingURL=food-categories.js.map

/***/ })

});
//# sourceMappingURL=6.js.map