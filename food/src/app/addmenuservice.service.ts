


import { Injectable } from '@angular/core';
import { Addmenu } from './addmenu/addmenu';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddmenuserviceService {

  private baseURL = "http://localhost:8080/foodmenus";

  constructor(private httpClinet : HttpClient) { }

  getAddMenu(): Observable<Addmenu[]>{
    return this.httpClinet.get<Addmenu[]>(`${this.baseURL}`);
  }

  addAddMenu(addmenu : Addmenu): Observable<Object>{
    return this.httpClinet.post(`${this.baseURL}`,addmenu);
  }

  getAddmenuById(foodMenuID: number):Observable<Addmenu>{
    return this.httpClinet.get<Addmenu>(`${this.baseURL}/${foodMenuID}`);
  }

  updateAddmenu(foodMenuID: number,addmenu : Addmenu):Observable<Object>{
    return this.httpClinet.put(`${this.baseURL}/${foodMenuID}`,addmenu);
  }

  deleteAddMenu(foodMenuID: number): Observable<Object>{
    return this.httpClinet.delete(`${this.baseURL}/${foodMenuID}`);
  }

}
