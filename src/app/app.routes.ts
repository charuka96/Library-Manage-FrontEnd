import { Routes } from '@angular/router';
import { RootDashBordComponent } from './page/root-dash-bord/root-dash-bord.component';
import { AddBookFormComponent } from './page/add-book-form/add-book-form.component';
import { ViewBookComponent } from './page/view-book/view-book.component';
export const routes: Routes = [
  {
    path: '',
    component: RootDashBordComponent,
  },
  {
    path: 'adbook',
    component: AddBookFormComponent,

    // children:[{
    //   path:'viewtable',
    //   component: ViewBookComponent
    // }
    // ]
  },

  {
    path: 'viewtable',
    component: ViewBookComponent,
  },






];
