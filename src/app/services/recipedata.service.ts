import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipedataService {

  uri = 'http://localhost:8080/recipe';
  versionuri = 'http://localhost:8080/getversion';

  constructor(private http: HttpClient) { }
  getRecipes() {
    return this .http.get(`${this.uri}`);
  }
  deleteRecipe(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
  getVersion() {

    const url = this.versionuri;
    return this.http.get(url, { responseType: 'text' as 'json' });
  }
}