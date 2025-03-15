import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RootDashBordComponent } from "./page/root-dash-bord/root-dash-bord.component";
import { ViewBookComponent } from './page/view-book/view-book.component';
import { AddBookFormComponent } from './page/add-book-form/add-book-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RootDashBordComponent,RouterLink,ViewBookComponent,AddBookFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LibraryManageFrontEnd';
}
