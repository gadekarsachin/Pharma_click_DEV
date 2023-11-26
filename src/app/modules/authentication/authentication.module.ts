
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { AppModule } from 'src/app/app.module';
import { TermsconditionComponent } from './component/termscondition/termscondition.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, ChangePasswordComponent, TermsconditionComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AuthenticationRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
    // AppModule
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthenticationModule { }
