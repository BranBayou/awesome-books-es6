import { BookShelf } from "./bookClass.js";
const bookList = document.querySelector('.book-list');
let bookArray = [];

window.ShowBooks = class ShowBooks {
  static addBooks(title, author) {
    const bookTitle = title;
    const bookAuthor = author;
    if (bookTitle !== '' && bookAuthor !== '') {
      const arrayObj = new BookShelf(bookTitle, bookAuthor);
      bookArray.push(arrayObj);
      localStorage.setItem('Books', JSON.stringify(bookArray));
    }
  }

  static showBook() {
    const books = ShowBooks.checkLocalStorage();
    let showBook = '';
    books.forEach((book, i) => {
      showBook += `
        <div class="book-space">
          <div class="book-des">
            <p>"${book.title}"</p>
            <p>by</p>
            <p>${book.author}</p>
          </div>
          <button class="remove" onclick="ShowBooks.remove(${i})">Remove</button>
        </div> 
      `;
    });
    bookList.innerHTML = showBook;
  }

  static checkLocalStorage() {
    if (localStorage.getItem('Books') == null) {
      bookArray = [];
    } else {
      bookArray = JSON.parse(localStorage.getItem('Books'));
    }
    return bookArray;
  }

  static remove(selector) {
    const bookIndex = selector;
    bookArray.splice(bookIndex, 1);
    localStorage.setItem('Books', JSON.stringify(bookArray));
    ShowBooks.showBook();
  }
}
export default ShowBooks;