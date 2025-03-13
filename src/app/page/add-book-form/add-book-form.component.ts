import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../model/Book';

@Component({
  selector: 'app-add-book-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.css'
})
export class AddBookFormComponent {
  public book : Book = new Book(0, "","", "","");

  


}
