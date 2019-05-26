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

// for admin 

 /* signUp(obj) {
    this.httpClient.post(`${this.uri}/signup`, obj)
      .subscribe(res => console.log('Done'));
  }
 */

 /* /!**
   * LOGIN FUNCTION
   *!/
  login(userName: string, password: string): Observable<any> {
    const body = { userName: userName, password: password };

    return this.httpClient.post<any>(`${this.uri}/login`, body)
      .map(response => {
         return response;
  });*/

}


