/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of Food Categories page
 * File path - '../../../../src/pages/food-categories/food-categories'
 */

import { Component,ElementRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import {FoodCategoryItemsPage} from '../food-category-items/food-category-items';
@IonicPage()
@Component({
  selector: 'page-food-categories',
  templateUrl: 'food-categories.html',
})
export class FoodCategoriesPage {
  @ViewChild('mylbl') mylblRef: ElementRef;

  listCategories = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public serviceProvider: ServiceProvider,
    public loadingCtrl: LoadingController,
    private http: HttpClient) {
  }

  ionViewDidLoad(){
    this.listCategory();
  }

  gotoCategoryItemList(item) {
    // console.log(this.mylblRef.nativeElement.innerText);
    // const modal = this.modalCtrl.create('FoodCategoryItemsPage', { category: category });
    // modal.present();
    this.navCtrl.push(FoodCategoryItemsPage, item);
  }
  // moveCategoryItemList(category) {
  //   this.navCtrl.push(FoodCategoryItemsPage, category);
  // }

  gotoCartPage() {
    this.navCtrl.setRoot('CartPage');
  }

  listCategory(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.http.get(this.serviceProvider.BASH_URL + 'categories').subscribe((data: any) => {
      loading.dismiss();

      data.data.forEach(element => {
          this.listCategories.push(element);
      });

      
    }, error => {
      console.error('Error: ', error);
    });
  }
}
