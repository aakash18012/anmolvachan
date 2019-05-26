import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  uri = 'quotes';

  constructor(private http: HttpClient) { }
  getQuotes(quoteType) {
    return this .http.get(`${this.uri}/get/${quoteType}`);
  }
  
  // for admin 
 /* deleteQuote(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }*/

}
