
import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable()
export class BooksService {

  public books: Book[]=[
    new Book('Melville','Moby Dick', 64),
    new Book('Austen','Persuasion', 64),
    new Book('Melville',' Wuthering Heights', 64)
  ];

  public getAllBooks(){
    return this.books;
  }

}
