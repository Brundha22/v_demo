import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

import { HttpClient } from '@angular/common/http';
                                 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LocalStorageService]
})
export class LoginComponent {
  username!:string;
  password!:string;
  role!:string;
  
  constructor(private http: HttpClient,private router :Router,private localStorageService : LocalStorageService) {}         
  login()        
  {
    const apiurl='https://reqres.in/api/login';
    const reqdata={
      username:this.username,
      password:this.password
    }
    this.http.post(apiurl,reqdata).subscribe(
      data => {
          alert("success");
          console.log(data);
          localStorage.setItem('key',JSON.stringify(data));
          const storeddata=localStorage.getItem('key');
          console.log(storeddata);
          this.role="admin";
          if(this.role=="user")
          {
              this.router.navigate(['/home'])        
          }
          if(this.role=="admin")
          {
              this.router.navigate(['/admin'])
          }
          // this.router.navigate(['/home'])                                                      
       },
       error => {                                                            
        // console.log(error);
        alert("not success")
        // this.errormessage=error.error.error;
        this.router.navigate(['/login']);
      }
    );
         
  }
 
}
