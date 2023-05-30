import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Login';
  name: string="";
  password: string="";
  correct_name:string="Brundha";
  correct_password:string="virtusa";
  // form=[
  //   {name:"",age:""}
  // ];
constructor(private router :Router){}

  submitform()
  {
    console.log(this.name);
    console.log(this.password);
    if(this.password==this.correct_password && this.name==this.correct_name)
    {
    alert("Proceed..");
    }
    // else if(this.password==" " && this.name==" ")
    // {
    //   alert("Enter full details..!")
    // }
    else{
      alert("Try again..!");
    }
    this.router.navigate(['/home']);
  }
}
