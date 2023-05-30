import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'myfistpro';
  username!: string;
  password!:string;
  errormessage:string="";

  constructor(private http: HttpClient,private router: Router)
  {

  }
  submit()
  {
    const apiurl='https://reqres.in/api/login';
    const reqdata={
      username:this.username,
      password:this.password
    }
    this.http.post(apiurl,reqdata).subscribe(
      data => {
        console.log(data)
        alert("Login success");
        localStorage.setItem('key',JSON.stringify(data));
        const storeddata=localStorage.getItem('key');
        console.log(storeddata);
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.errormessage=error.error.error;
        this.router.navigate(['']);
      }
    );
    // if(this.username=="Brundha" && this.password=="shyam")
    // {
    //   alert("Login Success");
    // }
    // else if(this.username=="" && this.password=="") 
    // {
    //   alert("Fill the form correctly..!");
    // }
    // else{
    //   alert("Login not Success");
    // }
  }
}
