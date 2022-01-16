import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  public superHeroId: any;
  superHerorURL = 'https://akabab.github.io/superhero-api/api/all.json';
  constructor(private httpClient: HttpClient) { }


  getSuperHerorDetailsFromAPI() {
    return this.httpClient.get(this.superHerorURL);
  }

  setSuperHeroID(id) {
    this.superHeroId = id;
  }

  getSuperHeroId() {
    return this.superHeroId;
  }

}
