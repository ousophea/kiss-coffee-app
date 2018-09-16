/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of Food Item Details page
 * File path - '../../../../src/pages/food-item-details/food-item-details'
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-food-item-details',
  templateUrl: 'food-item-details.html',
})
export class FoodItemDetailsPage {

  item = this.navParams.data;

  constructor(
    public navCtrl: NavController, 
    public serviceProvider: ServiceProvider,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    private viewCtrl: ViewController) {
    
      console.log(this.item);
  }

  /**
   * Dismiss function
   * This function dismiss the popup modal
   */
  minusQuantity(item) {
    if (item.quantity > 0) {
      item.quantity = item.quantity - 1;
    }
  }

  // Add quantity
  addQuantity(item) {
    if (item.quantity) {
      item.quantity = item.quantity + 1;
    } else {
      item.quantity = 0;
      item.quantity = item.quantity + 1;
    }
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }


  AddToCart()
  {
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


    let toast = this.toastCtrl.create({
      message: this.item.slug + ' To Cart Successfully!',
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
