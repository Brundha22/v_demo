import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
username:any;

constructor()
{
   this.username=localStorage.getItem('user');
   console.log(this.username)
}



}

