import { Component, OnInit} from '@angular/core';
import { BookService } from "../../services/book.service";
import { NgForm } from "@angular/forms";
import { Book } from 'src/app/models/taskBook';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  searchText: any;
  pageActual: number = 1;

  constructor(public bookService: BookService) { }
  
  ngOnInit(): void {
    this.getBooks(); 
  }

  getBooks(){
    this.bookService.getBooks().subscribe(
      (res) => {
        this.bookService.books = res;
      },
      (err) => console.error(err)
    );
  }

  addBook(form: NgForm){
    if (form.value._id) {
      this.bookService.updateBook(form.value).subscribe(
        res => {
          this.getBooks();
          form.reset();
        },
        err => console.log(err)
      );
    } else {
      this.bookService.createBook(form.value).subscribe(
        res => {
          this.getBooks();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteBook(id: string){
    if (confirm("Are you sure you want to delete it?")){
      this.bookService.deleteBook(id).subscribe(
        res => {
          this.getBooks();
        },
        err => console.error(err)
      );
    }
  }

  editBook(book: Book){
    this.bookService.selectedBook = book;
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
