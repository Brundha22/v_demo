import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookEventService {
  formData: any = {};

  saveFormData(formData: any) {
    this.formData = formData;
  }

  getFormData() {
    return this.formData;
  }
}
