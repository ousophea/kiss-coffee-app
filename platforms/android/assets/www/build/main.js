webpackJsonp([13],{

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		293,
		11
	],
	"../pages/cart/cart.module": [
		294,
		10
	],
	"../pages/contact/contact.module": [
		295,
		9
	],
	"../pages/delivery-confirmation/delivery-confirmation.module": [
		296,
		8
	],
	"../pages/delivery-tracking/delivery-tracking.module": [
		297,
		0
	],
	"../pages/first-landing/first-landing.module": [
		299,
		7
	],
	"../pages/food-categories/food-categories.module": [
		298,
		6
	],
	"../pages/food-category-items/food-category-items.module": [
		300,
		5
	],
	"../pages/food-item-details/food-item-details.module": [
		301,
		12
	],
	"../pages/payment/payment.module": [
		302,
		4
	],
	"../pages/second-landing/second-landing.module": [
		303,
		3
	],
	"../pages/settings/settings.module": [
		304,
		2
	],
	"../pages/user-information/user-information.module": [
		305,
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(271);
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
    // BASH_URL:string = "http://localhost:8000/api/";
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
        return __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            type: "GET",
            // url:  this.apiUrl + type + '?APP_ID=' + this.APP_ID,             
            url: this.BASH_URL + url,
            contentType: 'application/json',
            success: function (response) {
                return response;
            },
            error: function (res, status, exception) {
                console.log(res);
            }
        });
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
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
        this.item = this.navParams.data;
        console.log(this.item);
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
            selector: 'page-food-item-details',template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\pages\food-item-details\food-item-details.html"*/'<!-- \n  - @author    Ionic Bucket <ionicbucket@gmail.com>\n  - @copyright Copyright (c) 2017\n  - @license   Fulcrumy\n-->\n<!-- Food Item Details Page -->\n\n<ion-header>\n  <ion-navbar color="orange">\n    <!-- <ion-buttons start>\n      <button ion-button color="default" clear (click)="dismiss()">\n        <ion-icon name="close" style="zoom:2.0;"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list text-center padding>\n    <img src="assets/imgs/food.jpg">\n    <!-- <h2>{{ item.title }}</h2> -->\n    <h2>Double Cheese Burger (Beef)</h2>\n    <!-- <ion-badge color="orange" item-center>${{ item.rate_count }}</ion-badge> -->\n    <ion-badge color="orange" item-center>2</ion-badge>\n    <!-- <p>{{ item.title }} </p> -->\n    <p>Double Cheese Burger (Beef)</p>\n    <ion-row>\n          <ion-col col-4>\n             \n                <ion-badge color="orange">Size:</ion-badge>\n              \n         </ion-col>\n         <ion-col col-2>\n          \n               \n              S  <ion-icon ios="ios-checkbox" md="md-checkbox"  color="orange"></ion-icon>\n           \n         </ion-col>\n         <ion-col col-2>\n           \n              \n              M  <ion-icon ios="ios-checkbox" md="md-checkbox"  color="orange"></ion-icon>\n           \n         </ion-col>\n         <ion-col col-2>\n          \n               \n              L  <ion-icon ios="ios-checkbox" md="md-checkbox"  color="orange"></ion-icon>\n\n         </ion-col>\n      </ion-row>\n    <ion-grid>\n      \n      <ion-row>\n        <ion-col col-2></ion-col>\n        <ion-col col-2>\n          <button ion-button round class=\'qtyminus\' color="orange">\n            <ion-icon name="remove"></ion-icon>\n         </button>\n        </ion-col>\n        <ion-col col-4>\n          <ion-input type=\'number\' name=\'quantity\' text-center value="1" class=\'qty\'></ion-input>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button round class=\'qtyminus\' color="orange">\n            <ion-icon name="add"></ion-icon>\n         </button>\n        </ion-col>\n        <ion-col col-2></ion-col>\n      </ion-row>\n      <ion-row>\n        <button ion-button full round color="orange">{{\'ITEM_DETAILS.BUTTON\' | translate}}</button>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\pages\food-item-details\food-item-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], FoodItemDetailsPage);
    return FoodItemDetailsPage;
}());

//# sourceMappingURL=food-item-details.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TranslateLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_admob_free_admob_free__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_service_service__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_food_item_details_food_item_details__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














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
                __WEBPACK_IMPORTED_MODULE_13__pages_food_item_details_food_item_details__["a" /* FoodItemDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    menuType: 'overlay'
                }, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/delivery-confirmation/delivery-confirmation.module#DeliveryConfirmationPageModule', name: 'DeliveryConfirmationPage', segment: 'delivery-confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/delivery-tracking/delivery-tracking.module#DeliveryTrackingPageModule', name: 'DeliveryTrackingPage', segment: 'delivery-tracking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-categories/food-categories.module#FoodCategoriesPageModule', name: 'FoodCategoriesPage', segment: 'food-categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first-landing/first-landing.module#FirstLandingPageModule', name: 'FirstLandingPage', segment: 'first-landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-category-items/food-category-items.module#FoodCategoryItemsPageModule', name: 'FoodCategoryItemsPage', segment: 'food-category-items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-item-details/food-item-details.module#FoodItemDetailsPageModule', name: 'FoodItemDetailsPage', segment: 'food-item-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/second-landing/second-landing.module#SecondLandingPageModule', name: 'SecondLandingPage', segment: 'second-landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-information/user-information.module#UserInformationPageModule', name: 'UserInformationPage', segment: 'user-information', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (TranslateLoaderFactory),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_food_item_details_food_item_details__["a" /* FoodItemDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
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

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { AdmobFreeProvider } from '../providers/admob-free/admob-free';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translateService, http) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translateService = translateService;
        this.http = http;
        this.rootPage = 'FirstLandingPage';
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Project\Ionic\KissCoffee\src\app\app.html"*/'<ion-menu [content]="content" *ngIf="this.platform.dir()===\'ltr\'" side="left">\n  <ion-header>\n    <ion-toolbar>\n      <img class="logo animated fadeInDown" src="assets/imgs/logo-icon.png">\n    </ion-toolbar>\n  </ion-header>\n  <!-- Side Menu Content Options -->\n  <ion-content>\n    <ion-list no-lines>\n      <ion-item menuClose *ngFor="let page of pages; let i = index" (click)="openPage(page.COMPONENT)">\n        <ion-icon ion-text color="ash" [name]="page.ICON" item-left></ion-icon>\n        <span ion-text color="ash">{{\'SIDEBAR_List.\' + i + \'.NAME\' | translate}}</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu [content]="content" *ngIf="this.platform.dir()!==\'ltr\'" side="right">\n  <ion-header>\n    <ion-toolbar>\n      <img class="logo animated fadeInDown" src="assets/imgs/logo-icon.png">\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-lines>\n      <ion-item menuClose *ngFor="let page of pages; let i = index" (click)="openPage(page.COMPONENT)">\n        <ion-icon ion-text color="ash" [name]="page.ICON" item-left></ion-icon>\n        <span ion-text color="ash">{{\'SIDEBAR_List.\' + i + \'.NAME\' | translate}}</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Project\Ionic\KissCoffee\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobFreeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(205);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], AdmobFreeProvider);
    return AdmobFreeProvider;
}());

//# sourceMappingURL=admob-free.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map