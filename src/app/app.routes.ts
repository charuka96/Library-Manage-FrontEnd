import { Routes } from '@angular/router';
import { RootDashBordComponent } from './page/root-dash-bord/root-dash-bord.component';
import { AddBookFormComponent } from './page/add-book-form/add-book-form.component';

export const routes: Routes = [

  {
    path: '',
    component:RootDashBordComponent
  }
  ,{
    path:'adbook',
    component:AddBookFormComponent
  }
  
];
