
import { Injectable } from '@angular/core';

import { Book } from './book.model';
import { BooksService } from './books.service';

@Injectable()
export class BookService {

  public goodBooks: Book[];

  constructor(public booksService: BooksService){
    this.goodBooks = this.booksService.getAllBooks();
  }

  public getGoodBooks(){
  
    return this.goodBooks;
  }



}
