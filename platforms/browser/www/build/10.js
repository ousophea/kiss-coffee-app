webpackJsonp([10],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(109);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_item_details_food_item_details__ = __webpack_require__(110);
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
    function CartPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, serviceProvider, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.serviceProvider = serviceProvider;
        this.menu = menu;
        this.Card = [];
        this.item = this.navParams.data;
        this.menu.enable(true);
    }
    CartPage.prototype.ionViewDidLoad = function () {
        this.getSartpage();
    };
    CartPage.prototype.gotoDeliveryConfirmPage = function () {
        this.navCtrl.setRoot('DeliveryConfirmationPage');
    };
    CartPage.prototype.RemoveItem = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure remove?',
            // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.processRemove(item);
                    }
                }
            ]
        });
        alert.present();
        // console.log(item);
    };
    CartPage.prototype.processRemove = function (item) {
        var myObj = {
            "cart_id": parseInt(item.cart_id),
            "food_id": parseInt(item.food_id)
        };
        console.log('object delete', myObj);
        this.serviceProvider.deleteURL("cart", myObj).then(function (r) {
            console.log("succes", r);
        });
    };
    CartPage.prototype.minusQuantity = function (item) {
        if (item.quantity > 0) {
            item.quantity = item.quantity - 1;
        }
    };
    CartPage.prototype.addQuantity = function (item) {
        if (item.quantity) {
            item.quantity = item.quantity + 1;
        }
        else {
            item.quantity = item.quantity = 0;
            item.quantity = item.quantity + 1;
        }
    };
    CartPage.prototype.getSartpage = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.http.get(this.serviceProvider.BASH_URL + 'cart').subscribe(function (data) {
            loading.dismiss();
            _this.total = data.data[0].total;
            //console.log(this.total)
            data.data[0].item_to_purchase.forEach(function (element) {
                _this.Card.push(element);
            });
        }, function (error) {
        });
    };
    CartPage.prototype.showItem = function (item) {
        item.food.slug = 'Update';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__food_item_details_food_item_details__["a" /* FoodItemDetailsPage */], item.food);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\cart\cart.html"*/'\n<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Cart Page -->\n\n<ion-header no-border>\n	<ion-navbar color="orange" hideBackButton>\n	  <button ion-button menuToggle>\n		<ion-icon name="menu"></ion-icon>\n	  </button>\n	  <ion-title>{{\'CART.TITLE\' | translate}}</ion-title>\n	</ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n	<ion-list padding>\n	  <ion-item class="animated bounceInLeft" text-wrap *ngFor="let item of Card;let i = index" (click)="showItem(item)">\n		<ion-thumbnail item-start>\n			<!-- <img [src]="assets/imgs/BURGER.png"> -->\n			<img [src]="item.food.thumbnail">\n		</ion-thumbnail>\n		<h2>{{item.food.title}}</h2>\n  \n		<button ion-button clear item-end color="orange" class="clear" (click)="RemoveItem(item)">\n				  <ion-icon name="ios-trash-outline" style="zoom:1.8;"></ion-icon>\n			  </button>\n		<ion-grid>\n		  <ion-row>\n			<ion-col col-2>\n			  <button ion-button clear item-end color="orange" (click)="minusQuantity(item, i)">\n							  <ion-icon name="remove" style="zoom:1.8;"></ion-icon>\n						  </button>\n			</ion-col>\n			<ion-col col-3 padding-top text-center>\n			  <span>{{item.quantity}}</span>\n			</ion-col>\n			<ion-col col-2>\n			  <button ion-button clear item-end color="orange" (click)="addQuantity(item, i)">\n							  <ion-icon name="add" style="zoom:1.8;"></ion-icon>\n						  </button>\n			</ion-col>\n			<ion-col col-5 text-right>\n			  <ion-badge item-end color="orange">{{ item.price_per_item }}.00$</ion-badge>\n			</ion-col>\n		  </ion-row>\n		</ion-grid>\n	  </ion-item>\n	</ion-list>\n	<ion-card padding>\n	  <ion-grid>\n		<ion-row>\n		  <ion-col col-2>\n		  </ion-col>\n		  <ion-col col-4>\n			<p class="total">Total</p>\n		  </ion-col>\n		  <ion-col col-4 text-right>\n			<p class="total-price">{{total}}</p>\n		  </ion-col>\n		  <ion-col col-2>\n		  </ion-col>\n		</ion-row>\n	  </ion-grid>\n	</ion-card>\n  \n	<div text-center>\n	  <button ion-button color="orange" round (click)="gotoDeliveryConfirmPage()">{{\'CART.BUTTON\' | translate}}</button>\n	</div>\n  </ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=10.js.map