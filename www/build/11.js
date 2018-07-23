webpackJsonp([11],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartPageModule = (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of Cart page
 * File path - '../../../../src/pages/cart/cart'
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


var CartPage = (function () {
    function CartPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu.enable(true);
    }
    CartPage.prototype.gotoDeliveryConfirmPage = function () {
        this.navCtrl.setRoot('DeliveryConfirmationPage');
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\cart\cart.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Cart Page -->\n\n<ion-header no-border>\n	<ion-navbar color="orange" hideBackButton>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>{{\'CART.TITLE\' | translate}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list padding>\n		<ion-item class="animated bounceInLeft" text-wrap>\n			<ion-thumbnail item-start>\n				<img src="assets/imgs/BURGER.png">\n			</ion-thumbnail>\n			<h2>{{\'FOOD_ITEMS.BURGER\'+ \'.\' + 0 + \'.NAME\' | translate}}</h2>\n\n			<button ion-button clear item-end color="orange">\n                <ion-icon name="close" style="zoom:1.8;"></ion-icon>\n            </button>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-2>\n						<button ion-button clear item-end color="orange">\n                            <ion-icon name="remove" style="zoom:1.8;"></ion-icon>\n                        </button>\n					</ion-col>\n					<ion-col col-2 padding-top text-center>\n						<span>4</span>\n					</ion-col>\n					<ion-col col-2>\n						<button ion-button clear item-end color="orange">\n                            <ion-icon name="add" style="zoom:1.8;"></ion-icon>\n                        </button>\n					</ion-col>\n					<ion-col col-6 text-right>\n						<ion-badge item-end color="orange">{{\'FOOD_ITEMS.BURGER\' + \'.\' + 0 + \'.PRICE\' | translate}}</ion-badge>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-item>\n		<ion-item class="animated bounceInLeft" text-wrap>\n			<ion-thumbnail item-start>\n				<img src="assets/imgs/CHINESS.png">\n			</ion-thumbnail>\n			<h2>{{\'FOOD_ITEMS.CHINESS\' + \'.\' + 0 + \'.NAME\' | translate}}</h2>\n\n			<button ion-button clear item-end color="orange">\n                <ion-icon name="close" style="zoom:1.8;"></ion-icon>\n            </button>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-2>\n						<button ion-button clear item-end color="orange">\n                            <ion-icon name="remove" style="zoom:1.8;"></ion-icon>\n                        </button>\n					</ion-col>\n					<ion-col col-2 padding-top text-center>\n						<span>1</span>\n					</ion-col>\n					<ion-col col-2>\n						<button ion-button clear item-end color="orange">\n                            <ion-icon name="add" style="zoom:1.8;"></ion-icon>\n                        </button>\n					</ion-col>\n					<ion-col col-6 text-right>\n						<ion-badge item-end color="orange">{{\'FOOD_ITEMS.CHINESS\' + \'.\' + 0 + \'.PRICE\' | translate}}</ion-badge>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-item>\n		<ion-item class="animated bounceInLeft" text-wrap>\n			<ion-thumbnail item-start>\n				<img src="assets/imgs/SALADS.png">\n			</ion-thumbnail>\n			<h2>{{\'FOOD_ITEMS.SALADS\' + \'.\' + 0 + \'.NAME\' | translate}}</h2>\n\n			<button ion-button clear item-end color="orange">\n                <ion-icon name="close" style="zoom:1.8;"></ion-icon>\n            </button>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-2>\n						<button ion-button clear item-end color="orange">\n                            <ion-icon name="remove" style="zoom:1.8;"></ion-icon>\n                        </button>\n					</ion-col>\n					<ion-col col-2 padding-top text-center>\n						<span>2</span>\n					</ion-col>\n					<ion-col col-2>\n						<button ion-button clear item-end color="orange">\n                            <ion-icon name="add" style="zoom:1.8;"></ion-icon>\n                        </button>\n					</ion-col>\n					<ion-col col-6 text-right>\n						<ion-badge item-end color="orange">{{\'FOOD_ITEMS.SALADS\' + \'.\' + 0 + \'.PRICE\' | translate}}</ion-badge>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-item>\n	</ion-list>\n	<ion-card padding>\n		<ion-grid>\n			<ion-row>\n				<ion-col col-2>\n				</ion-col>\n				<ion-col col-4>\n					<p class="total">Total</p>\n				</ion-col>\n				<ion-col col-4 text-right>\n					<p class="total-price">$700</p>\n				</ion-col>\n				<ion-col col-2>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-card>\n\n	<div text-center>\n		<button ion-button color="orange" round (click)="gotoDeliveryConfirmPage()">{{\'CART.BUTTON\' | translate}}</button>\n	</div>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=11.js.map