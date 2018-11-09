import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
  {
    path: '',
    component: ViewDataComponent,
  },
  {
    path: 'add',
    component: AddUserComponent
  },
  {
    path: 'edit/:id',
    component: EditDataComponent
  }
];

