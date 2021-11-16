import { Pipe, PipeTransform } from '@angular/core';
import { Book } from "../models/taskBook";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(book: Book[], searchText: string): Book[] {
    if(!searchText) {
      return book;
    }
    return book.filter((data) => this.matchValue(data,searchText)); 
  }

  matchValue(data, book) {
    return Object.keys(data).map((key) => {
       return new RegExp(book, 'gi').test(data[key]);
    }).some(result => result);
  }
}
