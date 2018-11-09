import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormBuilder } from '@angular/forms';

import { UserDataService } from './../user-data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: any;
  arrayIndex: number;
  userData: any[];

  constructor(private route: ActivatedRoute, private router: Router, private userDataService: UserDataService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.userData = this.userDataService.getUserData();
    this.arrayIndex = this.userData.length + 1;
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      id: this.arrayIndex
    });
  }

  addUser() {
    console.log(this.addUserForm);
    if (this.addUserForm.valid) {
      this.userData.push(this.addUserForm.value);
      console.log(this.userData);
      this.router.navigate(['/']);
    }
  }

}
