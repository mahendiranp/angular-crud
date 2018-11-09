import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  configUrl =  './assets/db.json';

  userData: any;



  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.configUrl);
  }

  setData(data) {
    console.log(data);
    return this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

}
