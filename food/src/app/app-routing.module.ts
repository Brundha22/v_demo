import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddaddmenuComponent } from './addaddmenu/addaddmenu.component';
import { UpdateaddmenuComponent } from './updateaddmenu/updateaddmenu.component';

const routes: Routes = [
  {path: 'addmenus', component:AddmenuComponent},
  {path: '',redirectTo:'addmenus', pathMatch: 'full'},
  {path:'Addaddmenu', component: AddaddmenuComponent},
  {path: "Updateaddmenu/:foodMenuID", component: UpdateaddmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
