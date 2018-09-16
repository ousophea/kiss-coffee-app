webpackJsonp([6],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCategoriesPageModule", function() { return FoodCategoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_categories__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(109);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_categories__["a" /* FoodCategoriesPage */]),
            ],
        })
    ], FoodCategoriesPageModule);
    return FoodCategoriesPageModule;
}());

//# sourceMappingURL=food-categories.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_category_items_food_category_items__ = __webpack_require__(213);
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
    function FoodCategoriesPage(navCtrl, navParams, modalCtrl, serviceProvider, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.listCategories = [];
    }
    FoodCategoriesPage.prototype.ionViewDidLoad = function () {
        this.listCategory();
    };
    FoodCategoriesPage.prototype.gotoCategoryItemList = function (item) {
        // console.log(this.mylblRef.nativeElement.innerText);
        // const modal = this.modalCtrl.create('FoodCategoryItemsPage', { category: category });
        // modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__food_category_items_food_category_items__["a" /* FoodCategoryItemsPage */], item);
    };
    // moveCategoryItemList(category) {
    //   this.navCtrl.push(FoodCategoryItemsPage, category);
    // }
    FoodCategoriesPage.prototype.gotoCartPage = function () {
        this.navCtrl.setRoot('CartPage');
    };
    FoodCategoriesPage.prototype.listCategory = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.http.get(this.serviceProvider.BASH_URL + 'categories').subscribe(function (data) {
            loading.dismiss();
            data.data.forEach(function (element) {
                _this.listCategories.push(element);
            });
        }, function (error) {
            console.error('Error: ', error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mylbl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FoodCategoriesPage.prototype, "mylblRef", void 0);
    FoodCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-categories',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\food-categories\food-categories.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Food Categories Page -->\n\n<ion-header no-border>\n  <ion-navbar color="orange" hideBackButton>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>{{\'FOOD_CATEGORIES.TITLE\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="gotoCartPage()">\n        <ion-icon name="ios-cart-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="background">\n    <div class="page-title">\n      <h1>THE MENU</h1>\n      <p>Easy on time, Full on Flavor</p>\n    </div>\n  </div>\n\n  <ion-list padding>\n    <ion-item class="animated bounceInLeft" *ngFor="let item of listCategories" (click)="gotoCategoryItemList(item)">\n      <ion-thumbnail item-start>   \n        <img [src]="item.thumbnail">\n      </ion-thumbnail>\n      <h2 >{{ item.title }}</h2>\n      <ion-badge color="orange" item-end>{{ item.food_count}}</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\food-categories\food-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_common_http__["a" /* HttpClient */]])
    ], FoodCategoriesPage);
    return FoodCategoriesPage;
}());

//# sourceMappingURL=food-categories.js.map

/***/ })

});
//# sourceMappingURL=6.js.map