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
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-food-categories',
  templateUrl: 'food-categories.html',
})
export class FoodCategoriesPage {
  users: any;
  errorMessage: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private httpClient: HttpClient,
    public rest: RestProvider 
  ) {
    
      
  }
  ionViewDidLoad() {
    this.getUsers();
  }

  getUsers() {
    this.rest.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  gotoCategoryItemList(category) {
    const modal = this.modalCtrl.create('FoodCategoryItemsPage', { category: category });
    modal.present();
  }

  gotoCartPage() {
    this.navCtrl.setRoot('CartPage');
  }
}
