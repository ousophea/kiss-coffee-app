/**
 * @author    Ionic Bucket <ionicbucket@gmail.com>
 * @copyright Copyright (c) 2017
 * @license   Fulcrumy
 * 
 * This file represents a component of reorder-item page
 * File path - '../../../../src/pages/reorder-item/reorder-item'
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the ReorderItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reorder-item',
  templateUrl: 'reorder-item.html',
})
export class ReorderItemPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private menu: MenuController) {
      this.menu.enable(true);
  }
  gotoDeliveryConfirmPage() {
    this.navCtrl.setRoot('DeliveryConfirmationPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReorderItemPage');
  }

}
