import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule ,routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponentComponent } from './home-component/home-component.component';
// import { RouterModule } from '@angular/router';
// import { Routes } from '@angular/router';

// const routes : Routes = [
//   {
//     path:'',
//     component : AppComponent
//   },
//   {
//     path:'/home',
//     component : HomeComponentComponent
//   }
// ];
@NgModule({
  declarations: [
    // AppComponent,
    // HomeComponentComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule                                                                
  ],            
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
