import {Component, OnInit} from '@angular/core';
import {BookService} from '../book/book.service';
import {Book} from '../book/book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-readed-list',
  templateUrl: './readed-list.component.html',
  styleUrls: ['./readed-list.component.css']
})
export class ReadedListComponent implements OnInit {

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit() {
  }

  markAsReading(id: number, name: string) {
    const book = {
      id: id,
      name: name,
      read: true,
    } as Book;
    this.bookService.patchBook(book);
  }

  toReadingList() {
    this.router.navigate(['reading']);
  }

}
