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
		291,
		12
	],
	"../pages/cart/cart.module": [
		292,
		11
	],
	"../pages/contact/contact.module": [
		293,
		10
	],
	"../pages/delivery-confirmation/delivery-confirmation.module": [
		294,
		9
	],
	"../pages/delivery-tracking/delivery-tracking.module": [
		295,
		0
	],
	"../pages/first-landing/first-landing.module": [
		296,
		8
	],
	"../pages/food-categories/food-categories.module": [
		297,
		7
	],
	"../pages/food-category-items/food-category-items.module": [
		298,
		6
	],
	"../pages/food-item-details/food-item-details.module": [
		299,
		5
	],
	"../pages/payment/payment.module": [
		300,
		4
	],
	"../pages/second-landing/second-landing.module": [
		301,
		3
	],
	"../pages/settings/settings.module": [
		302,
		2
	],
	"../pages/user-information/user-information.module": [
		303,
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobFreeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_config_admob__ = __webpack_require__(290);
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




var AdmobFreeProvider = (function () {
    function AdmobFreeProvider(platform, admobFree) {
        var _this = this;
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
                _this.admobId = {
                    banner: __WEBPACK_IMPORTED_MODULE_3__assets_config_admob__["a" /* AdmobConfig */].androidBanner,
                    interstitial: __WEBPACK_IMPORTED_MODULE_3__assets_config_admob__["a" /* AdmobConfig */].androidInterstitial,
                    video: __WEBPACK_IMPORTED_MODULE_3__assets_config_admob__["a" /* AdmobConfig */].androidVideo
                };
                _this.bannerSizeOpts = _this.bannerSizes[0]['android'];
            }
            // For iOS
            if (platform.is('ios')) {
                _this.admobId = {
                    banner: __WEBPACK_IMPORTED_MODULE_3__assets_config_admob__["a" /* AdmobConfig */].iosBanner,
                    interstitial: __WEBPACK_IMPORTED_MODULE_3__assets_config_admob__["a" /* AdmobConfig */].iosInterstitial,
                    video: __WEBPACK_IMPORTED_MODULE_3__assets_config_admob__["a" /* AdmobConfig */].iosVideo
                };
                _this.bannerSizeOpts = _this.bannerSizes[1]['ios'];
            }
            _this.init();
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

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TranslateLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_admob_free_admob_free__ = __webpack_require__(205);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
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
                        { loadChildren: '../pages/first-landing/first-landing.module#FirstLandingPageModule', name: 'FirstLandingPage', segment: 'first-landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-categories/food-categories.module#FoodCategoriesPageModule', name: 'FoodCategoriesPage', segment: 'food-categories', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_11__providers_admob_free_admob_free__["a" /* AdmobFreeProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_admob_free_admob_free__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translateService, http, admobFree) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translateService = translateService;
        this.http = http;
        this.admobFree = admobFree;
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
        this.admobFree.prepareAdmobVideo();
    };
    /**
     * Prepare and show admob Interstitial Ad
     */
    MyApp.prototype.prepareInterstitial = function () {
        this.admobFree.prepareInterstitial();
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
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__providers_admob_free_admob_free__["a" /* AdmobFreeProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmobConfig; });
/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This file represents admob configuration.
 * File path - '../src/assets/config/admob'
 */
var AdmobConfig = {
    "androidBanner": "ca-app-pub-6408755120961153/4003028692",
    "androidInterstitial": "ca-app-pub-6408755120961153/1321025031",
    "androidVideo": "ca-app-pub-6408755120961153/3339440447",
    "iosBanner": "ca-app-pub-6408755120961153/3182160799",
    "iosInterstitial": "ca-app-pub-6408755120961153/2377588851",
    "iosVideo": "ca-app-pub-6408755120961153/9047950740"
};
//# sourceMappingURL=admob.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map