



import { Component, OnInit } from '@angular/core';
import { Addmenu } from './addmenu';
import { Router } from '@angular/router';
import { AddmenuserviceService } from '../addmenuservice.service';



@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {


  add(){
    this.router.navigate(['Addaddmenu']);
  }

  addmenus: Addmenu[] = [];

  constructor(private router:Router, private addmenuService: AddmenuserviceService){}

  ngOnInit(): void {
      this.getAddmenus();
  }


  private getAddmenus(){
    this.addmenuService.getAddMenu().subscribe(data => {
      console.log(data)
      this.addmenus = data;
    });
  }

  updateFoodMenu(foodMenuID: number){
    this.router.navigate(['Updateaddmenu',foodMenuID]);
  }

  deleteFoodMenu(foodMenuID: number){
    this.addmenuService.deleteAddMenu(foodMenuID).subscribe( data => {
      this.getAddmenus();
    })
  }

  

}
