import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './Component/add-user/add-user.component';
import {HttpClientModule} from '@angular/common/http'
import { UsersService } from './users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
