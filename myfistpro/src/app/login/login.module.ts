import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ]
})
export class AppModule { }