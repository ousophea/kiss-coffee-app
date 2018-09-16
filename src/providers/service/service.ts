import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as $ from 'jquery'

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  BASH_URL:string = "http://www.dev-kiss.coffee.slor-ey.com/api/";
  //BASH_URL:string = "http://localhost:8000/api/";

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  

  getURL(url){
    // return new Promise(resolve => {
    //   this.http.get(this.BASH_URL + url, {
    //     // headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    //     // params: new HttpParams().set('id', '3'),
    //     headers: new HttpHeaders().append('Access-Control-Allow-Origin' , '*')
    //     .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
    //     .append('Accept','application/json')
    //     .append('content-type','application/json'),
    //   })
    //   .subscribe(data => {
    //     return data;
    //   }, err => {
    //     console.log('errors tt',err);
    //   });
    // });
    // return new Promise((resolve, reject) => {
    //   let headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Accept', 'application/x-www-form-urlencoded');
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        
    //   this.http.get(apiUrl + type +'?data='+ JSON.stringify(credentials).toString(), {headers: headers}).subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });

    // return $.ajax({
    //   type: "GET",
    //   // url:  this.apiUrl + type + '?APP_ID=' + this.APP_ID,             
    //   url:  this.BASH_URL + url,       
    //   contentType: 'application/json',       
    //   success: function(response){
    //        return response;
    //   },
    //   error: function(res, status, exception) {
    //       console.log(res);
    //   }
    // });
  }

  postURL(url, model){
    // this.http.post(this.BASH_URL + url, JSON.stringify(model), {
    //   // headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    //   // params: new HttpParams().set('id', '3'),
    // })
    // .subscribe(res => {
    //   return res;
    // }, (err) => {
    //   console.log(err);
    // });
    // return new Promise((resolve, reject) => {
      // let headers = new Headers();
      // headers.append('Access-Control-Allow-Origin', '*');
      // headers.append('Accept', 'application/x-www-form-urlencoded');
      // headers.append('Content-Type', 'application/x-www-form-urlencoded');
      // headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

      // this.http.post(apiUrl + type ,JSON.stringify(credentials) , {headers: headers}).subscribe(res => {
      //     resolve(res);
      //   }, (err) => {
      //     reject(err);
      //   });
     
    // });
    return $.ajax({
      type: "POST",
      // url:  this.apiUrl + type + '?APP_ID=' + this.APP_ID,                        
      url:  this.BASH_URL + url,                        
      data: model,                  
      success: function(response){
            // console.log('result', response);
           return response;
      },
      error: function(res, status, exception) {
          console.log(res);
      }
    });

  }

  

  deleteURL(url, model){
    return $.ajax({
      type: "DELETE",
      // url:  this.apiUrl + type + '?APP_ID=' + this.APP_ID,                        
      url:  this.BASH_URL + url + '?' + $.param(model),
      contentType: 'application/x-www-form-urlencoded',                       
      success: function(response){
            // console.log('result', response);
           return response;
      },
      error: function(res, status, exception) {
          console.log(res);
      }
    });

  }
}
