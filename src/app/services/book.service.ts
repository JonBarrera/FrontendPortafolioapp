import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from "../models/taskBook";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  URL_API = 'https://app-portafolio-api.herokuapp.com/api/books'

  selectedBook: Book = {
    title: '',
    author: '',
    isbn: 0,
    price: 0,
  };
  books : Book[];

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get<Book[]>(this.URL_API);
  }

  createBook(book: Book){
    return this.http.post(this.URL_API, book);
  }

  updateBook(book: Book){
    return this.http.put(`${this.URL_API}/${book._id}`, book);
  }

  deleteBook(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

}
