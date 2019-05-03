import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(  private httpClient: HttpClient) {
  }
 /* signUp(obj) {
    this.httpClient.post(`${this.uri}/signup`, obj)
      .subscribe(res => console.log('Done'));
  }
  getQuotes() {
    return this.httpClient.get(`${this.uri}`);
  }*/
 /* /!**
   * LOGIN FUNCTION
   *!/
  login(userName: string, password: string): Observable<any> {
    const body = { userName: userName, password: password };

    return this.httpClient.post<any>(`${this.uri}/login`, body)
      .map(response => {
        const resdata = response;
        if (resdata && resdata.token) {
          localStorage.setItem('cmLocal', JSON.stringify(resdata));
        }
        return resdata;
      });
  };*/

}


