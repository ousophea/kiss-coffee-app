import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  // private apiUrl = 'https://restcountries.eu/rest/v2/all';
  // private apiUrlFoods = 'https://restcountries.eu/rest/v2/all';
  apiUrl = 'http://www.dev-kiss.coffee.slor-ey.com/api/foods';
  // apiUrl = 'https://jsonplaceholder.typicode.com';

  token ='dIMf6WD79CdbeEfgjLAk1+a6AsV2l/4j/IdGyol66wY=';
  constructor(public http: HttpClient) {
    // console.log('Hello RestServiceProvider Provider');
    this.getUsers();
    let headers = new Headers({ 'Content-Type': 'application/json' });
  }

  getUsers(): Promise<any> {
    let headers = new Headers(); 
    headers.append('Content-Type', 'application/json'); 

    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + '/users',{headers: headers})
        .subscribe(
          data => {
            resolve(data);
          }, err => {
            console.log("Error in server-communication.ts: Getting objects failed: ");
            console.log(err);
            reject(err);
          }
        );
    });
  }

  getHttpHeader() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization','Bearer ' + this.token);

    // let options = new RequestOptions({ headers: headers });
    return headers;
  }

  // getUsers() {

  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl + '/users').subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }
  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/users', JSON.stringify(data), {
        headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
        params: new HttpParams().set('id', '3'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
