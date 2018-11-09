import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilder } from '@angular/forms';

import { UserDataService } from './../user-data.service';


@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  editUser: any;
  userData: any;

  editUserForm: any;

  val: number;
  arrayIndex: number;

  constructor(private route: ActivatedRoute, private router: Router, private userDataService: UserDataService,
    private fb: FormBuilder) { }



  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      // this.editData = this.userDataService.editData(params['id']);
      // console.log(this.editData);
      // this.editData = this.userDataService.getUserData();
      // console.log(this.editData);
      // this.userData = this.userDataService.userData;
      // console.log('dfg' + this.userData);
      // this.editData = this.userData
      this.userData = this.userDataService.getUserData();
      this.val = Number(params['id']);
      this.editUser = this.userData.find(t => t.id === this.val);
      console.log(this.editUser);
      });
      this.editUserForm = this.fb.group({
        name: [this.editUser.name, Validators.required],
        surname: [this.editUser.surname, Validators.required],
        birthDate: [this.editUser.birthDate, Validators.required],
        phone: [this.editUser.phone, Validators.required],
        city: [this.editUser.city, Validators.required],
        street: [this.editUser.street, Validators.required],
        number: [this.editUser.number, Validators.required]
      });
    }

    updateName() {
      console.log(this.editUserForm.value);
      if (this.editUserForm.valid) {
        this.arrayIndex = this.userData.findIndex(t => t.id === this.val);
        console.log(this.arrayIndex);
        this.userData[this.arrayIndex].name = this.editUserForm.value.name;
        this.userData[this.arrayIndex].surname = this.editUserForm.value.surname;
        this.userData[this.arrayIndex].birthDate = this.editUserForm.value.birthDate;
        this.userData[this.arrayIndex].phone = this.editUserForm.value.phone;
        this.userData[this.arrayIndex].city = this.editUserForm.value.city;
        this.userData[this.arrayIndex].street = this.editUserForm.value.street;
        this.userData[this.arrayIndex].number = this.editUserForm.value.number;
        console.log(this.userData);
        this.userDataService.setData(this.userData);
        this.router.navigate(['/']);
      }
    }


}

