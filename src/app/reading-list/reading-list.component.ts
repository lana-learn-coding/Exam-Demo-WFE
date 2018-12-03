import {Component, OnInit} from '@angular/core';
import {BookService} from '../book/book.service';
import {Book} from '../book/book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {
  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit() {
  }

  markAsReaded(id: number, name: string) {
    const book = {
      id: id,
      name: name,
      read: true,
    } as Book;
    this.bookService.patchBook(book);
  }

  add(bookName: string) {
    this.bookService.addBook({
      id: null,
      name: bookName,
      read: false,
    });
  }

  toReadedList() {
    this.router.navigate(['readed']);
  }
}
