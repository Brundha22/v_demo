import { Component } from '@angular/core';
import { BookEventService } from './bookevent.service';

@Component({
  selector: 'app-root',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookEventService]

})

export class BookingComponent {

  currentPage = 1;

  formData: any = {};

  constructor(private bookEventService: BookEventService) {}

  ngOnInit() {
    this.formData = this.bookEventService.getFormData();
  }

  nextPage() {
    if (this.currentPage < 2) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  saveFormData() {
    this.bookEventService.saveFormData(this.formData);
  }
  submit(BookEvent: any){
    console.log("Form Submitted", BookEvent)
  }

}
 