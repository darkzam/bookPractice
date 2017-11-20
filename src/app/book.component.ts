
import { Component, Injectable } from '@angular/core';
//model
import { Book } from './book.model';
//services: BookService and BooksService
import { BookService } from './book.service';

@Component({
  selector: 'book-component',
  templateUrl: './book.component.html'
})
export class BookComponent{

  public books: Book[];

  constructor(public bookService: BookService){
    this.books = this.bookService.getGoodBooks();
      console.log(this.books);
  }



}
