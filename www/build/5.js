webpackJsonp([5],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodItemDetailsPageModule", function() { return FoodItemDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_item_details__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FoodItemDetailsPageModule = (function () {
    function FoodItemDetailsPageModule() {
    }
    FoodItemDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__food_item_details__["a" /* FoodItemDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_item_details__["a" /* FoodItemDetailsPage */]),
            ],
        })
    ], FoodItemDetailsPageModule);
    return FoodItemDetailsPageModule;
}());

//# sourceMappingURL=food-item-details.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of Food Item Details page
 * File path - '../../../../src/pages/food-item-details/food-item-details'
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


var FoodItemDetailsPage = (function () {
    function FoodItemDetailsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    FoodItemDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FoodItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-item-details',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\food-item-details\food-item-details.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Food Item Details Page -->\n\n<ion-header>\n  <ion-navbar color="orange">\n    <ion-buttons start>\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list text-center padding>\n    <img src="assets/imgs/food.jpg">\n    <h2>Double Cheese Burger (Beef)</h2>\n    <ion-badge color="orange" item-center>$200</ion-badge>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard\n      dummy text ever since the 1500s.\n    </p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2></ion-col>\n        <ion-col col-2>\n          <button ion-button round class=\'qtyminus\' color="orange">\n            <ion-icon name="remove"></ion-icon>\n         </button>\n        </ion-col>\n        <ion-col col-4>\n          <ion-input type=\'number\' name=\'quantity\' text-center value="1" class=\'qty\'></ion-input>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button round class=\'qtyminus\' color="orange">\n            <ion-icon name="add"></ion-icon>\n         </button>\n        </ion-col>\n        <ion-col col-2></ion-col>\n      </ion-row>\n      <ion-row>\n        <button ion-button full round color="orange">{{\'ITEM_DETAILS.BUTTON\' | translate}}</button>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\food-item-details\food-item-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], FoodItemDetailsPage);
    return FoodItemDetailsPage;
}());

//# sourceMappingURL=food-item-details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map