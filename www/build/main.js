webpackJsonp([16],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(56);
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
    function FoodItemDetailsPage(navCtrl, serviceProvider, toastCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.serviceProvider = serviceProvider;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = this.navParams.data;
        console.log(this.item);
    }
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    FoodItemDetailsPage.prototype.minusQuantity = function (item) {
        if (item.quantity > 0) {
            item.quantity = item.quantity - 1;
        }
    };
    // Add quantity
    FoodItemDetailsPage.prototype.addQuantity = function (item) {
        if (item.quantity) {
            item.quantity = item.quantity + 1;
        }
        else {
            item.quantity = 0;
            item.quantity = item.quantity + 1;
        }
    };
    FoodItemDetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FoodItemDetailsPage.prototype.AddToCart = function () {
        var myObj = {
            "customer_id": 1,
            "food_id": this.item.id,
            "quantity": this.item.quantity,
            "price_per_item": this.item.price
        };
        //  var addToCart ={
        //    "food_id":item.id,
        //     "quantity":item.quantity,
        //     "pricer_per":item.price
        //  }
        var toast = this.toastCtrl.create({
            message: this.item.slug + ' To Cart Successfully!',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.serviceProvider.postURL("cart", myObj).then(function (data) {
            console.log('success', data);
            toast.present();
        }, function (error) {
            console.log("Oooops!");
        });
    };
    FoodItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-item-details',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\food-item-details\food-item-details.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Food Item Details Page -->\n\n<ion-header>\n  <ion-navbar color="orange">\n    <!-- <ion-buttons start>\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list text-center padding>\n    <img [src]="item.thumbnail" class="thumbnail">\n    <h2>{{ item.title }}</h2>\n    <!-- <h2>Double Cheese Burger (Beef)</h2> -->\n    <ion-badge color="orange" item-center>${{ item.rate_count }}</ion-badge>\n    <!-- <ion-badge color="orange" item-center>2</ion-badge> -->\n    <p>{{ item.title }} </p>\n    <!-- <p>Double Cheese Burger (Beef)</p> -->\n    <ion-row>\n          <ion-col col-3>\n             \n                <ion-badge color="orange">Size:</ion-badge>\n              \n         </ion-col>\n         <ion-col col-3>\n          \n               \n              S  <ion-checkbox color="orange" checked="false"></ion-checkbox>\n           \n         </ion-col>\n         <ion-col col-3>\n           \n              \n              M  <ion-checkbox color="orange" checked="false"></ion-checkbox>\n           \n         </ion-col>\n         <ion-col col-3>\n          \n               \n              L  <ion-checkbox color="orange" checked="false"></ion-checkbox>\n\n         </ion-col>\n      </ion-row>\n    <ion-grid>\n      \n      <ion-row>\n        <ion-col col-2></ion-col>\n        <ion-col col-2>\n          <button ion-button round  color="orange" (click)="minusQuantity(item)">\n            <ion-icon name="remove"></ion-icon>\n         </button>\n        </ion-col>\n        <ion-col col-4 class="panel-qty">\n          <span class="qty">{{item.quantity||\'0\'}}</span>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button round  color="orange" (click)="addQuantity(item)">\n            <!-- <button ion-button color="danger" clear>Danger Clear</button> -->\n            <ion-icon name="add"></ion-icon>\n         </button>\n        </ion-col>\n        <ion-col col-2></ion-col>\n      </ion-row>\n      <ion-row>\n        <button ion-button full round color="orange" (click)="AddToCart()">{{ item.slug }} To Cart</button>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\food-item-details\food-item-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], FoodItemDetailsPage);
    return FoodItemDetailsPage;
}());

//# sourceMappingURL=food-item-details.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		306,
		11
	],
	"../pages/cart/cart.module": [
		313,
		10
	],
	"../pages/contact/contact.module": [
		307,
		9
	],
	"../pages/delivery-confirmation/delivery-confirmation.module": [
		310,
		8
	],
	"../pages/delivery-tracking/delivery-tracking.module": [
		308,
		0
	],
	"../pages/first-landing/first-landing.module": [
		309,
		7
	],
	"../pages/food-categories/food-categories.module": [
		312,
		6
	],
	"../pages/food-category-items/food-category-items.module": [
		311,
		14
	],
	"../pages/food-item-details/food-item-details.module": [
		315,
		13
	],
	"../pages/payment/payment.module": [
		314,
		5
	],
	"../pages/reorder-item/reorder-item.module": [
		319,
		4
	],
	"../pages/second-landing/second-landing.module": [
		316,
		3
	],
	"../pages/settings/settings.module": [
		317,
		2
	],
	"../pages/user-information/user-information.module": [
		318,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodCategoryItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_item_details_food_item_details__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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






var FoodCategoryItemsPage = (function () {
    function FoodCategoryItemsPage(navCtrl, navParams, viewCtrl, loadingCtrl, http, toastCtrl, serviceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.item = this.navParams.data;
        this.categoryName = this.item.title;
        this.foodItems = [];
        this.color = 'red';
    }
    /***
     * --------------------------------------------------------------
     * Lifecycle Event - ionViewDidLoad()
     * --------------------------------------------------------------
     *
     * Fired when the page has loaded
     */
    FoodCategoryItemsPage.prototype.ionViewDidLoad = function () {
        // this.getNavParamsData();
        this.getFoodItems();
    };
    /**
     * --------------------------------------------------------------
     * Get & Set data from NavParams
     * --------------------------------------------------------------
     */
    // async getNavParamsData() {
    //   if (this.navParams.get('category')) {
    //     this.categoryName = this.navParams.get('category');
    //   }
    // }
    /**
     * --------------------------------------------------------------
     * Get All Food Items
     * --------------------------------------------------------------
     */
    FoodCategoryItemsPage.prototype.getFoodItems = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.http.get(this.serviceProvider.BASH_URL + 'foods/bycategory/' + this.item.id).subscribe(function (data) {
            loading.dismiss();
            // this.foodItems = data.FOOD_ITEMS[this.categoryName];
            data.data.forEach(function (element) {
                element.quantity = 1;
                _this.foodItems.push(element);
            });
            //console.log(data.data.prix_fixe_meals);
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
        item.slug = "Add";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__food_item_details_food_item_details__["a" /* FoodItemDetailsPage */], item);
    };
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    FoodCategoryItemsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FoodCategoryItemsPage.prototype.favorite = function () {
        this.ionicColor = "orange";
    };
    FoodCategoryItemsPage.prototype.AddToCart = function (item) {
        console.log(item);
        var myObj = {
            "customer_id": 1,
            "food_id": item.id,
            "quantity": item.quantity,
            "price_per_item": item.price
        };
        //  var addToCart ={
        //    "food_id":item.id,
        //     "quantity":item.quantity,
        //     "pricer_per":item.price
        //  }
        var toast = this.toastCtrl.create({
            message: 'Add To Cart Successfully!',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.serviceProvider.postURL("cart", myObj).then(function (data) {
            console.log('success', data);
            toast.present();
        }, function (error) {
            console.log("Oooops!");
        });
    };
    FoodCategoryItemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-category-items',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\food-category-items\food-category-items.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Food Category Item Page -->\n\n<ion-header no-border>\n  <ion-navbar color="orange">\n    <ion-title>Item List {{ categoryName }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="background">\n    <div class="page-title">\n      <h1>{{categoryName}}</h1>\n    </div>\n  </div>\n\n  <ion-list padding>\n    <ion-item class="animated bounceInLeft" text-wrap *ngFor="let item of foodItems; let i = index">\n    <!-- <ion-item class="animated bounceInLeft"> -->\n    \n      <ion-thumbnail item-start (click)="gotoItemDetails(item)">\n        <img src="{{item.thumbnail}}">\n      </ion-thumbnail>\n\n      <h2 (click)="gotoItemDetails(item)">{{ item.title }}</h2>\n      <!-- <p (click)="gotoItemDetails(item)">{{ item.title }}</p> -->\n      <ion-badge item-end color="orange">{{ item.rate_count }}</ion-badge>\n      <!-- <h2 (click)="gotoItemDetails(item)">Double Cheese Burger (Beef)</h2>\n      <p (click)="gotoItemDetails(item)">Double Cheese Burger (Beef)</p>\n      <ion-badge item-end color="orange">10$</ion-badge>\n       -->\n     \n\n      <ion-grid>\n        <ion-row>\n          \n          <ion-col col-2>\n            <button ion-button clear item-end color="orange" [disabled]="!foodItems[i].quantity" (click)="minusQuantity(item, i)">\n              <ion-icon name="remove" style="zoom:1.8;"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-2 padding-top text-center>\n            <span>{{ item.quantity || \'0\' }}</span>\n          </ion-col>\n          <ion-col col-2>\n            <button ion-button clear item-end color="orange" (click)="addQuantity(item, i)">\n              <ion-icon name="add" style="zoom:1.8;"></ion-icon>\n            </button>\n          </ion-col>       \n        </ion-row>\n       \n      </ion-grid>\n      <ion-grid>\n          <ion-row>\n              <!-- <ion-col col-4></ion-col> -->\n              <ion-col col-8>\n                  <ion-icon name="ios-heart-outline" color="orange"></ion-icon> {{item.favorited_count}}\n              </ion-col>\n              <!-- <ion-col col-2></ion-col> -->\n              <!-- <ion-col col-4>\n                  <ion-badge color="blue">{{item.favorited_count}}</ion-badge>\n              </ion-col> -->\n              <!-- <ion-col col-2></ion-col> -->\n              <ion-col col-4 text-center (click)="AddToCart(item)">\n                  <ion-icon name="ios-cart-outline"  color="orange"></ion-icon>\n              </ion-col>\n              <!-- <ion-col col-4></ion-col> -->\n         </ion-row> \n      </ion-grid>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\food-category-items\food-category-items.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], FoodCategoryItemsPage);
    return FoodCategoryItemsPage;
}());

//# sourceMappingURL=food-category-items.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TranslateLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_admob_free_admob_free__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_service_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_cache__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_food_item_details_food_item_details__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_food_category_items_food_category_items__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { ReorderItemPage } from '../pages/reorder-item/reorder-item';


// By default TranslateLoader will look for translation json files in i18n/
// So change this lool in the src/assets directory.
function TranslateLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_food_item_details_food_item_details__["a" /* FoodItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_food_category_items_food_category_items__["a" /* FoodCategoryItemsPage */]
                // ReorderItemPage,
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    menuType: 'overlay',
                }, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/delivery-tracking/delivery-tracking.module#DeliveryTrackingPageModule', name: 'DeliveryTrackingPage', segment: 'delivery-tracking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first-landing/first-landing.module#FirstLandingPageModule', name: 'FirstLandingPage', segment: 'first-landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/delivery-confirmation/delivery-confirmation.module#DeliveryConfirmationPageModule', name: 'DeliveryConfirmationPage', segment: 'delivery-confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-category-items/food-category-items.module#FoodCategoryItemsPageModule', name: 'FoodCategoryItemsPage', segment: 'food-category-items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-categories/food-categories.module#FoodCategoriesPageModule', name: 'FoodCategoriesPage', segment: 'food-categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-item-details/food-item-details.module#FoodItemDetailsPageModule', name: 'FoodItemDetailsPage', segment: 'food-item-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/second-landing/second-landing.module#SecondLandingPageModule', name: 'SecondLandingPage', segment: 'second-landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-information/user-information.module#UserInformationPageModule', name: 'UserInformationPage', segment: 'user-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reorder-item/reorder-item.module#ReorderItemPageModule', name: 'ReorderItemPage', segment: 'reorder-item', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_ionic_cache__["a" /* CacheModule */].forRoot({ keyPrefix: 'APP_ID' }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (TranslateLoaderFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_food_item_details_food_item_details__["a" /* FoodItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_food_category_items_food_category_items__["a" /* FoodCategoryItemsPage */]
                // ReorderItemPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_11__providers_admob_free_admob_free__["a" /* AdmobFreeProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ReorderItemPage } from '../pages/reorder-item/reorder-item';
// import { AdmobFreeProvider } from '../providers/admob-free/admob-free';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translateService, http) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translateService = translateService;
        this.http = http;
        this.rootPage = 'FoodCategoriesPage';
        this.initializeApp();
        // Default Language
        translateService.setDefaultLang('en');
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.getSidebarList();
            // Show Video Ad After 2 Minutes
            setInterval(function () {
                _this.prepareAdmobVideo();
            }, 120000);
            // Show Interstitial Ad After 1 Minutes
            setInterval(function () {
                _this.prepareInterstitial();
            }, 60000);
        });
    };
    /**
     * --------------------------------------------------------------
     * Get Sidebar List
     * --------------------------------------------------------------
     */
    MyApp.prototype.getSidebarList = function () {
        var _this = this;
        this.http.get('assets/i18n/en.json').subscribe(function (data) {
            _this.pages = data.SIDEBAR_List;
        }, function (error) {
            console.error(error);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page);
    };
    /**
     * Prepare and show admob Video ad
     */
    MyApp.prototype.prepareAdmobVideo = function () {
        // this.admobFree.prepareAdmobVideo();
    };
    /**
     * Prepare and show admob Interstitial Ad
     */
    MyApp.prototype.prepareInterstitial = function () {
        // this.admobFree.prepareInterstitial();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\app\app.html"*/'<ion-menu [content]="content" *ngIf="this.platform.dir()===\'ltr\'" side="left">\n  <ion-header>\n    <ion-toolbar>\n      <img class="logo animated fadeInDown" src="assets/imgs/logo-icon.png">\n    </ion-toolbar>\n  </ion-header>\n  <!-- Side Menu Content Options -->\n  <ion-content>\n    <ion-list no-lines>\n      <ion-item menuClose *ngFor="let page of pages; let i = index" (click)="openPage(page.COMPONENT)">\n        <ion-icon ion-text color="ash" [name]="page.ICON" item-left></ion-icon>\n        <span ion-text color="ash">{{\'SIDEBAR_List.\' + i + \'.NAME\' | translate}}</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu [content]="content" *ngIf="this.platform.dir()!==\'ltr\'" side="right">\n  <ion-header>\n    <ion-toolbar>\n      <img class="logo animated fadeInDown" src="assets/imgs/logo-icon.png">\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-lines>\n      <ion-item menuClose *ngFor="let page of pages; let i = index" (click)="openPage(page.COMPONENT)">\n        <ion-icon ion-text color="ash" [name]="page.ICON" item-left></ion-icon>\n        <span ion-text color="ash">{{\'SIDEBAR_List.\' + i + \'.NAME\' | translate}}</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobFreeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(210);
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This file represents a provider of Admob Free.
 * Native plugin - https://ionicframework.com/docs/native/admob-free/
 * File path - '../../../src/providers/admob-free/admob-free'
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



// import { AdmobConfig } from '../../assets/config/admob';
var AdmobFreeProvider = (function () {
    function AdmobFreeProvider(platform, admobFree) {
        this.platform = platform;
        this.admobFree = admobFree;
        this.bannerPrepared = false;
        this.interstitialPrepared = false;
        this.videoPrepared = false;
        this.bannerAtTop = false;
        this.bannerOverlap = true;
        this.adAutoShow = true;
        this.bannerSizes = [
            {
                android: {
                    BANNER: 'BANNER',
                    IAB_BANNER: 'IAB_BANNER',
                    IAB_LEADERBOARD: 'IAB_LEADERBOARD',
                    IAB_MRECT: 'IAB_MRECT',
                    LARGE_BANNER: 'LARGE_BANNER',
                    SMART_BANNER: 'SMART_BANNER',
                    FLUID: 'FLUID',
                    FULL_BANNER: 'FULL_BANNER',
                    LEADERBOARD: 'LEADERBOARD',
                    MEDIUM_RECTANGLE: 'MEDIUM_RECTANGLE',
                    SEARCH: 'SEARCH',
                    WIDE_SKYSCRAPER: 'WIDE_SKYSCRAPER'
                }
            },
            {
                ios: {
                    BANNER: 'BANNER',
                    IAB_BANNER: 'IAB_BANNER',
                    IAB_LEADERBOARD: 'IAB_LEADERBOARD',
                    IAB_MRECT: 'IAB_MRECT',
                    LARGE_BANNER: 'LARGE_BANNER',
                    SMART_BANNER: 'SMART_BANNER',
                    FLUID: 'FLUID'
                }
            }
        ];
        this.platform.ready().then(function () {
            // For Android
            if (platform.is('android')) {
                // this.admobId = {
                //   banner: AdmobConfig.androidBanner,
                //   interstitial: AdmobConfig.androidInterstitial,
                //   video: AdmobConfig.androidVideo
                // };
                // this.bannerSizeOpts = this.bannerSizes[0]['android'];
            }
            // For iOS
            if (platform.is('ios')) {
                // this.admobId = {
                //   banner: AdmobConfig.iosBanner,
                //   interstitial: AdmobConfig.iosInterstitial,
                //   video: AdmobConfig.iosVideo
                // };
                // this.bannerSizeOpts = this.bannerSizes[1]['ios'];
            }
            // this.init();
        });
    }
    /**
     * AdMob initialising
     */
    AdmobFreeProvider.prototype.init = function () {
        // Not found any Admob
        if (!this.admobFree) {
            console.log("No AdMob?");
            return;
        }
        // Initialise other default config options for banner
        this.bannerConfig = {
            isTesting: false,
            autoShow: this.adAutoShow
        };
        this.admobFree.banner.config(this.bannerConfig);
        // Initialise other default config options for interstitial
        this.interstitialConfig = {
            isTesting: false,
            autoShow: this.adAutoShow
        };
        this.admobFree.interstitial.config(this.interstitialConfig);
        // Initialise other default config options for Video
        this.videoRewardsConfig = {
            isTesting: false,
            autoShow: this.adAutoShow
        };
        this.admobFree.rewardVideo.config(this.videoRewardsConfig);
    };
    /**
     * Prepare Banner
     */
    AdmobFreeProvider.prototype.prepareBanner = function () {
        var _this = this;
        this.bannerConfig.id = this.admobId.banner;
        this.admobFree.banner.config(this.bannerConfig);
        return this.admobFree.banner.prepare()
            .then(function () {
            _this.bannerPrepared = true;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    /**
     * Remove Banner
     */
    AdmobFreeProvider.prototype.removeBanner = function () {
        var _this = this;
        this.admobFree.banner.remove()
            .then(function () {
            _this.bannerPrepared = false;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    /**
     * Prepare Interstitial
     */
    AdmobFreeProvider.prototype.prepareInterstitial = function () {
        var _this = this;
        this.interstitialConfig.id = this.admobId.interstitial;
        this.admobFree.interstitial.config(this.interstitialConfig);
        return this.admobFree.interstitial.prepare()
            .then(function () {
            _this.interstitialPrepared = true;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    /**
     * Prepare Video
     */
    AdmobFreeProvider.prototype.prepareAdmobVideo = function () {
        var _this = this;
        this.videoRewardsConfig.id = this.admobId.video;
        this.admobFree.rewardVideo.config(this.videoRewardsConfig);
        return this.admobFree.rewardVideo.prepare()
            .then(function () {
            _this.videoPrepared = true;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    AdmobFreeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], AdmobFreeProvider);
    return AdmobFreeProvider;
}());

//# sourceMappingURL=admob-free.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = (function () {
    //BASH_URL:string = "http://localhost:8000/api/";
    function ServiceProvider(http) {
        this.http = http;
        this.BASH_URL = "http://www.dev-kiss.coffee.slor-ey.com/api/";
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getURL = function (url) {
        // return new Promise(resolve => {
        //   this.http.get(this.BASH_URL + url, {
        //     // headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
        //     // params: new HttpParams().set('id', '3'),
        //     headers: new HttpHeaders().append('Access-Control-Allow-Origin' , '*')
        //     .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
        //     .append('Accept','application/json')
        //     .append('content-type','application/json'),
        //   })
        //   .subscribe(data => {
        //     return data;
        //   }, err => {
        //     console.log('errors tt',err);
        //   });
        // });
        // return new Promise((resolve, reject) => {
        //   let headers = new Headers();
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Accept', 'application/x-www-form-urlencoded');
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        //   this.http.get(apiUrl + type +'?data='+ JSON.stringify(credentials).toString(), {headers: headers}).subscribe(res => {
        //       resolve(res);
        //     }, (err) => {
        //       reject(err);
        //     });
        // });
        // return $.ajax({
        //   type: "GET",
        //   // url:  this.apiUrl + type + '?APP_ID=' + this.APP_ID,             
        //   url:  this.BASH_URL + url,       
        //   contentType: 'application/json',       
        //   success: function(response){
        //        return response;
        //   },
        //   error: function(res, status, exception) {
        //       console.log(res);
        //   }
        // });
    };
    ServiceProvider.prototype.postURL = function (url, model) {
        // this.http.post(this.BASH_URL + url, JSON.stringify(model), {
        //   // headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
        //   // params: new HttpParams().set('id', '3'),
        // })
        // .subscribe(res => {
        //   return res;
        // }, (err) => {
        //   console.log(err);
        // });
        // return new Promise((resolve, reject) => {
        // let headers = new Headers();
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Accept', 'application/x-www-form-urlencoded');
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        // this.http.post(apiUrl + type ,JSON.stringify(credentials) , {headers: headers}).subscribe(res => {
        //     resolve(res);
        //   }, (err) => {
        //     reject(err);
        //   });
        // });
        return __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            type: "POST",
            // url:  this.apiUrl + type + '?APP_ID=' + this.APP_ID,                        
            url: this.BASH_URL + url,
            data: model,
            success: function (response) {
                // console.log('result', response);
                return response;
            },
            error: function (res, status, exception) {
                console.log(res);
            }
        });
    };
    ServiceProvider.prototype.deleteURL = function (url, model) {
        return __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            type: "DELETE",
            // url:  this.apiUrl + type + '?APP_ID=' + this.APP_ID,                        
            url: this.BASH_URL + url + '?' + __WEBPACK_IMPORTED_MODULE_2_jquery__["param"](model),
            contentType: 'application/x-www-form-urlencoded',
            success: function (response) {
                // console.log('result', response);
                return response;
            },
            error: function (res, status, exception) {
                console.log(res);
            }
        });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map