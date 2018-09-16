/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of Cart page
 * File path - '../../../../src/pages/cart/cart'
 */


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController  } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ServiceProvider } from '../../providers/service/service';
import { FoodItemDetailsPage } from '../food-item-details/food-item-details';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  Card=[];
  total:object;
  item = this.navParams.data;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http:HttpClient,
    public alertCtrl: AlertController,
    public serviceProvider:ServiceProvider,
    private menu: MenuController) {
    this.menu.enable(true);
  }
  ionViewDidLoad()
  {
    this.getSartpage();
  }

  gotoDeliveryConfirmPage() {
    this.navCtrl.setRoot('DeliveryConfirmationPage');
  }
  RemoveItem(item)
  {
    let alert = this.alertCtrl.create({
      title: 'Are you sure remove?',
      // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.processRemove(item);
          }
        }
      ]
    }); 
    alert.present();
    // console.log(item);
  }

  processRemove(item){
    var myObj  = {
      "cart_id": parseInt(item.cart_id),
      "food_id": parseInt(item.food_id)
    }

    console.log('object delete', myObj);
    this.serviceProvider.deleteURL("cart", myObj).then(r =>{
      console.log("succes",r);
    });
    
  }

  minusQuantity(item)
  {
    if(item.quantity>0)
    {
      item.quantity = item.quantity -1;
    }
  }
  addQuantity(item)
  {
    if(item.quantity)
    {
      item.quantity = item.quantity +1
    }else{
      item.quantity= item.quantity = 0;
      item.quantity = item.quantity +1;
    }
  }
  getSartpage()
  {
    this.http.get(this.serviceProvider.BASH_URL+'cart').subscribe((data:any)=>{
      this.total=data.data[0].total;
      //console.log(this.total)
      data.data[0].item_to_purchase.forEach(element => {
        this.Card.push(element);
      });
    }, error =>{

    });
    
  }

  showItem(item){
    item.food.slug = 'Update';
    this.navCtrl.push(FoodItemDetailsPage, item.food);
  }
}
