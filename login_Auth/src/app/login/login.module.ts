import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClient
  ]
})
export class LoginModule { }
