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
 /* deleteQuote(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
  getVersion() {

    const url = this.versionuri;
    return this.http.get(url, { responseType: 'text' as 'json' });
  }*/
}
