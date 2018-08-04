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
import { ServiceProvider } from '../../providers/service/service';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-food-categories',
  templateUrl: 'food-categories.html',
})
export class FoodCategoriesPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public serviceProvider: ServiceProvider,
    private http: HttpClient) {
  }

  ionViewDidLoad(){
    this.listCategory();
  }

  gotoCategoryItemList(category) {
    const modal = this.modalCtrl.create('FoodCategoryItemsPage', { category: category });
    modal.present();
  }

  gotoCartPage() {
    this.navCtrl.setRoot('CartPage');
  }

  listCategory(){
    // this.http.get(this.serviceProvider.BASH_URL + 'foodList').subscribe((data: any) => {
    //   console.log(data);
    // }, error => {
    //   console.error('Error: ', error);
    // });
  }
}
