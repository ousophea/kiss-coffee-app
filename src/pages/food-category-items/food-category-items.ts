/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of Food Category Item page
 * File path - '../../../../src/pages/food-category-items/food-category-items'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController  } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ServiceProvider } from '../../providers/service/service';
import { FoodItemDetailsPage } from '../food-item-details/food-item-details';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-food-category-items',
  templateUrl: 'food-category-items.html',
})

export class FoodCategoryItemsPage {
  item = this.navParams.data;
  ionicColor:string;
  categoryName: string = this.item.title;
  foodItems = [];
  color:string = 'red';
  ItemObject:object;
  

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    private http: HttpClient,
    private toastCtrl: ToastController,
    public serviceProvider: ServiceProvider) {

  }

  /***
   * --------------------------------------------------------------
   * Lifecycle Event - ionViewDidLoad()
   * --------------------------------------------------------------
   * 
   * Fired when the page has loaded
   */
  ionViewDidLoad() {

    // this.getNavParamsData();
    this.getFoodItems();

  }

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
  getFoodItems() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.http.get(this.serviceProvider.BASH_URL + 'foods/bycategory/'+ this.item.id).subscribe((data: any) => {
      loading.dismiss();
      // this.foodItems = data.FOOD_ITEMS[this.categoryName];
      data.data.forEach(element => {
        element.quantity = 1;
        this.foodItems.push(element);
      });
     //console.log(data.data.prix_fixe_meals);
    }, error => {
      console.error('Error: ' + error);
    });
  }

  // Remove quantity
  minusQuantity(item, index) {
    if (this.foodItems[index].quantity > 0) {
      this.foodItems[index].quantity = this.foodItems[index].quantity - 1;
    }
  }

  // Add quantity
  addQuantity(item, index) {
    if (this.foodItems[index].quantity) {
      this.foodItems[index].quantity = this.foodItems[index].quantity + 1;
    } else {
      this.foodItems[index].quantity = 0;
      this.foodItems[index].quantity = this.foodItems[index].quantity + 1;
    }
  }

  /**
   * --------------------------------------------------------------
   * GoTO Item Details Page
   * --------------------------------------------------------------
   */
  gotoItemDetails(item) {
    item.slug = "Add";
    this.navCtrl.push(FoodItemDetailsPage, item);
  }
  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
  favorite(){
    this.ionicColor="orange";
  }
  AddToCart(item)
  {
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


    let toast = this.toastCtrl.create({
      message: 'Add To Cart Successfully!',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    this.serviceProvider.postURL("cart", myObj).then(data => {
         console.log('success', data);
         toast.present();
       }, error => {
       console.log("Oooops!");
       });
  }
}
