import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookevent',
  templateUrl: './bookevent.component.html',
  styleUrls: ['./bookevent.component.css']
})
export class BookeventComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  constructor(private router:Router){}
  next()
  {
    alert("move to next page");
    this.router.navigate(['bookeventnext']);
  }
  
}
