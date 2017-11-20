
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookComponent }  from './book.component';
import { BooksService } from './books.service';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService, BooksService],
  bootstrap: [BookComponent]
})

export class BookModule{}
