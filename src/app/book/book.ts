export interface Book {
  id: number;
  name: string;
  read: boolean;
}

export class BookList {
  readingList: Book[] = [];
  readedList: Book[] = [];

  constructor(books?: Book[]) {
    if (books) {
      for (const book of books) {
        if (!book.read) {
          this.readingList.push(book);
        } else {
          this.readedList.push(book);
        }
      }
    } else {
      this.readingList = [];
      this.readedList = [];
    }
  }


}
