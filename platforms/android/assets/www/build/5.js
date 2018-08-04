webpackJsonp([5],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCategoryItemsPageModule", function() { return FoodCategoryItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_category_items__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FoodCategoryItemsPageModule = (function () {
    function FoodCategoryItemsPageModule() {
    }
    FoodCategoryItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__food_category_items__["a" /* FoodCategoryItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_category_items__["a" /* FoodCategoryItemsPage */]),
            ],
        })
    ], FoodCategoryItemsPageModule);
    return FoodCategoryItemsPageModule;
}());

//# sourceMappingURL=food-category-items.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodCategoryItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_item_details_food_item_details__ = __webpack_require__(207);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 *
 * This file represents a component of Food Category Item page
 * File path - '../../../../src/pages/food-category-items/food-category-items'
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FoodCategoryItemsPage = (function () {
    function FoodCategoryItemsPage(navCtrl, navParams, viewCtrl, http, modalCtrl, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.serviceProvider = serviceProvider;
    }
    /***
     * --------------------------------------------------------------
     * Lifecycle Event - ionViewDidLoad()
     * --------------------------------------------------------------
     *
     * Fired when the page has loaded
     */
    FoodCategoryItemsPage.prototype.ionViewDidLoad = function () {
        this.getNavParamsData();
        this.getFoodItems();
    };
    /**
     * --------------------------------------------------------------
     * Get & Set data from NavParams
     * --------------------------------------------------------------
     */
    FoodCategoryItemsPage.prototype.getNavParamsData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.navParams.get('category')) {
                    this.categoryName = this.navParams.get('category');
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * --------------------------------------------------------------
     * Get All Food Items
     * --------------------------------------------------------------
     */
    FoodCategoryItemsPage.prototype.getFoodItems = function () {
        var _this = this;
        this.http.get(this.serviceProvider.BASH_URL + 'foods').subscribe(function (data) {
            // this.foodItems = data.FOOD_ITEMS[this.categoryName];
            _this.foodItems = data;
        }, function (error) {
            console.error('Error: ' + error);
        });
    };
    // Remove quantity
    FoodCategoryItemsPage.prototype.minusQuantity = function (item, index) {
        if (this.foodItems[index].quantity > 0) {
            this.foodItems[index].quantity = this.foodItems[index].quantity - 1;
        }
    };
    // Add quantity
    FoodCategoryItemsPage.prototype.addQuantity = function (item, index) {
        if (this.foodItems[index].quantity) {
            this.foodItems[index].quantity = this.foodItems[index].quantity + 1;
        }
        else {
            this.foodItems[index].quantity = 0;
            this.foodItems[index].quantity = this.foodItems[index].quantity + 1;
        }
    };
    /**
     * --------------------------------------------------------------
     * GoTO Item Details Page
     * --------------------------------------------------------------
     */
    FoodCategoryItemsPage.prototype.gotoItemDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__food_item_details_food_item_details__["a" /* FoodItemDetailsPage */], item);
    };
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    FoodCategoryItemsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FoodCategoryItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-category-items',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\food-category-items\food-category-items.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Food Category Item Page -->\n\n<ion-header no-border>\n  <ion-navbar color="orange" hideBackButton>\n    <ion-buttons start>\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{\'FOOD_ITEMS.TITLE\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="background">\n    <div class="page-title">\n      <h1>{{categoryName}}</h1>\n    </div>\n  </div>\n\n  <ion-list padding>\n    <!-- <ion-item class="animated bounceInLeft" text-wrap *ngFor="let item of foodItems; let i = index"> -->\n    <ion-item class="animated bounceInLeft">\n    \n      <ion-thumbnail item-start (click)="gotoItemDetails(item=null)">\n        <img src="assets/imgs/BURGER.png">\n      </ion-thumbnail>\n\n      <!-- <h2 (click)="gotoItemDetails(item)">{{item.title }}</h2>\n      <p (click)="gotoItemDetails(item)">{{ item.title }}</p>\n      <ion-badge item-end color="orange">{{ item.rate_count }}</ion-badge> -->\n      <h2 (click)="gotoItemDetails(item)">Double Cheese Burger (Beef)</h2>\n      <p (click)="gotoItemDetails(item)">Double Cheese Burger (Beef)</p>\n      <ion-badge item-end color="orange">10$</ion-badge>\n      \n     \n\n      <ion-grid>\n        <ion-row>\n          \n          <ion-col col-2>\n            <button ion-button clear item-end color="orange" [disabled]="1" (click)="minusQuantity(item, i)">\n              <ion-icon name="remove" style="zoom:1.8;"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-2 padding-top text-center>\n            <span>1</span>\n          </ion-col>\n          <ion-col col-2>\n            <button ion-button clear item-end color="orange" (click)="addQuantity(item, i)">\n              <ion-icon name="add" style="zoom:1.8;"></ion-icon>\n            </button>\n          </ion-col>       \n        </ion-row>\n       \n      </ion-grid>\n      <ion-grid>\n          <ion-row>\n              <!-- <ion-col col-4></ion-col> -->\n              <ion-col col-2>\n                  <ion-icon ios="ios-heart" md="md-heart"  color="orange"></ion-icon>\n              </ion-col>\n              <ion-col col-2></ion-col>\n              <ion-col col-4>\n                  <ion-badge color="blue">10k</ion-badge>\n              </ion-col>\n              <ion-col col-2></ion-col>\n              <ion-col col-2>\n                  <ion-icon name="cart"  color="orange"></ion-icon>\n              </ion-col>\n              <!-- <ion-col col-4></ion-col> -->\n         </ion-row> \n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\food-category-items\food-category-items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], FoodCategoryItemsPage);
    return FoodCategoryItemsPage;
}());

//# sourceMappingURL=food-category-items.js.map

/***/ })

});
//# sourceMappingURL=5.js.map