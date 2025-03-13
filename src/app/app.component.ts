import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RootDashBordComponent } from "./page/root-dash-bord/root-dash-bord.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RootDashBordComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LibraryManageFrontEnd';
}
