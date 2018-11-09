import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Response } from '@angular/http';

import { UserDataService } from './../user-data.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  constructor(private userDataService: UserDataService) { }

  userDatas: any;

  userData: any;

  searchText = '';

  val: number;

  ngOnInit() {
    if (!this.userDataService.userData) {
      this.userDataService.getData().subscribe(
        (response) =>  {
          console.log(response);
          this.userDatas = response;
          this.userData = this.userDatas.names;
          this.userDataService.setData(this.userData);
          console.log(this.userData);
        },
        (error) => console.log(error)
      );
    } else {
      this.userData = this.userDataService.userData;
    }
  }

  removeData(id) {
    console.log(id);
    this.val = this.userData.findIndex(t => t.id === id);
    console.log(this.val);
    this.userData.splice(this.val, 1);
    console.log(this.userData);
    this.userDataService.setData(this.userData);
  }

}
