import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Book } from '../../model/Book';

@Component({
  selector: 'app-add-book-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.css',
})
export class AddBookFormComponent {
  public book: Book = new Book(0, '', '', '', 0, '', new Date());

  constructor(private Http: HttpClient) {}

  public addBook() {
    console.log(this.book);

    try {
      this.Http.post(
        'http://localhost:8080/book/add-book',
        this.book
      ).subscribe((data) => {
        console.log(data);
      });
      alert("success");
    } catch (error) {
      console.log(error);
    }
  }

  public cancelBook() {
    this.book.authorId = 0;
    this.book.authorName = '';
    this.book.bookId = '';
    this.book.category = '';
    this.book.title = '';
    this.book.price = 0;
    this.book.isbn = '';
    this.book.title = '';
  }
}
