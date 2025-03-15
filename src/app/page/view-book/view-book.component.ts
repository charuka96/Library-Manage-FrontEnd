import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css',
})
export class ViewBookComponent {
  bookinfo: any = [];

  constructor(private http: HttpClient) {
    try {
      this.http
        .get('http://localhost:8080/book/getAll-book')
        .subscribe((res) => {
          console.log(res);
          this.bookinfo = res;
        });
    } catch (error) {
      console.log(error);
    }
  }
  public deleteBook(id: any) {
    try {
      console.log(id);
      this.http
        .delete(`http://localhost:8080/book/delete-book/${id}`)
        .subscribe((res) => {});
      alert('Book deleted');
    } catch (error) {}
  }
  searchBookInfo: any = [];
  public searchBook(authorId: any) {
    this.http
      .get(`http://localhost:8080/book/search-by-authorId/${authorId}`)
      .subscribe((res) => {
        this.searchBookInfo = res;
      });
  }
}
