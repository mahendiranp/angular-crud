import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { routes  } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { HttpClient } from 'selenium-webdriver/http';
import { FilterPipe } from './filter.pipe';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDataComponent,
    EditDataComponent,
    DeleteDataComponent,
    FilterPipe,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
