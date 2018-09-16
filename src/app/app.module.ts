import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';
import { AdMobFree } from '@ionic-native/admob-free';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { AdmobFreeProvider } from '../providers/admob-free/admob-free';
import { ServiceProvider } from '../providers/service/service';
import { CacheModule } from "ionic-cache";

// import { ReorderItemPage } from '../pages/reorder-item/reorder-item';
import { FoodItemDetailsPage } from '../pages/food-item-details/food-item-details';
import { FoodCategoryItemsPage } from '../pages/food-category-items/food-category-items';

// By default TranslateLoader will look for translation json files in i18n/
// So change this lool in the src/assets directory.
export function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    FoodItemDetailsPage,
    FoodCategoryItemsPage
    // ReorderItemPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay',
      
    }),
    CacheModule.forRoot({ keyPrefix: 'APP_ID' }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (TranslateLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FoodItemDetailsPage,
    FoodCategoryItemsPage
    // ReorderItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AdMobFree,
    Geolocation,
    AdmobFreeProvider,
    ServiceProvider
    

  ]
})
export class AppModule { }
