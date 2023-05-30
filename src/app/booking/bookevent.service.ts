import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bookevent } from './bookevent';

@Injectable({
  providedIn: 'root'
})
export class BookEventService {
  formData: any = {};

  private baseUrl = "http://localhost:8080/user/bookTheme";         

  constructor(private httpclient : HttpClient) { }
  getList(): Observable<bookevent[]>{
    return this.httpclient.get<bookevent[]>(`${this.baseUrl}`);
  }

  bookEvent(add :bookevent ): Observable<object>{
    return this.httpclient.post(`${this.baseUrl}`,add);
  }
  
    viewEvent(eventid : number): Observable<bookevent>
  {
    return this.httpclient.get<bookevent>(`${this.baseUrl}/${eventid}`);
  }    

  editEvent(eventid : number, ad : bookevent): Observable<Object>{
    return this.httpclient.put(`${this.baseUrl}/${eventid}`, ad);
  }

  deleteEvent(eventid : number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl}/${eventid}`);
  }

  saveFormData(formData: any) {
    this.formData = formData;
  }

  getFormData() {
    return this.formData;
  }
}
