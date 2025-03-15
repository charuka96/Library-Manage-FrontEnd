import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css'
})
export class ViewBookComponent {


bookinfo:any =[];

constructor(private http:HttpClient){
  this.http.get('http://localhost:8080/book/getAll-book').subscribe(res=>{
    console.log(res);
    this.bookinfo = res;
  })
}




}
