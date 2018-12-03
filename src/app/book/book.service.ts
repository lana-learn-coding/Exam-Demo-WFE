import {Inject, Injectable} from '@angular/core';
import {Book, BookList} from './book';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookList: BookList = new BookList();

  constructor(private httpClient: HttpClient,
              @Inject('apiLink') private api: string) {
    this.getBooks();
  }


  getBooks() {
    this.httpClient
      .get<Book[]>(this.api)
      .pipe(map((data) => data.map((book) => {
        return {
          id: book.id,
          name: book.name,
          read: book.read
        } as Book;
      })))
      .subscribe((books: Book[]) => {
        this.bookList = new BookList(books);
      });
  }

  addBook(book: Book) {
    this.httpClient
      .post(this.api, book, {observe: 'response'})
      .subscribe((response) => {
        if (response.status === 200) {
          this.getBooks();
        }
      });
  }

  patchBook(book: Book) {
    this.httpClient
      .patch(this.api + '/' + book.id, book, {observe: 'response'})
      .subscribe((response) => {
        this.getBooks();
      });
  }
}
