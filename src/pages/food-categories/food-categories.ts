/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of Food Categories page
 * File path - '../../../../src/pages/food-categories/food-categories'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-food-categories',
  templateUrl: 'food-categories.html',
})
export class FoodCategoriesPage {
  categories: Observable<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private httpClient: HttpClient) {

      this.categories = this.httpClient.get('http://127.0.0.1:8080/kiss-coffee.local/public/api/foods');  

  }


  gotoCategoryItemList(category) {
    const modal = this.modalCtrl.create('FoodCategoryItemsPage', { category: category });
    modal.present();
  }

  gotoCartPage() {
    this.navCtrl.setRoot('CartPage');
  }
}
