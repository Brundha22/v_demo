import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookeventComponent } from './bookevent/bookevent.component';
import { BookeventnextComponent } from './bookeventnext/bookeventnext.component';

const routes: Routes = [
  {path:'',component:BookeventComponent},
  {path:'bookevent',component:BookeventComponent},
  {path:'bookeventnext',component:BookeventnextComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
