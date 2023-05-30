import { Component, OnInit } from '@angular/core';
import { BookEventService } from './bookevent.service';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookEventService]

})

export class BookingComponent implements OnInit{

  dropdownList:any= [];
  selectedItems:any= [];
  dropdownSettings:any={};
  currentPage = 1;

  formData: any = {};

  constructor(private bookEventService: BookEventService) {}

  ngOnInit(): void {
    this.formData = this.bookEventService.getFormData();
    this.dropdownList = [
      { item_id:1,item_text:"brundha"},
      { item_id:2,item_text:"shyam"},
      { item_id:3,item_text:"surya"},
      
    ];
    this.selectedItems = [
      { item_id:1,item_text:'brundha'}
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(ev:any){

  }
  onSelectAll(ev:any): void{
    
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
  // submit(BookEvent: any){
  //   console.log("Form Submitted", BookEvent)
  //   alert("booked");
  // }
  submit(Bookevent:any)
  {
    console.log(this.formData)
    alert("booked");
    this.bookEventService.bookEvent(this.formData).subscribe(data =>{
        console.log("booked");
  })
}
}