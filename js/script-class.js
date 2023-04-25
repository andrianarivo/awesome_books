const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const addBtn = document.querySelector('#addBtn');
const booksContainer = document.querySelector('.books');

class Book {
  constructor(title, author) {
    this.id = Math.floor(Math.random() * 1000);
    this.title = title;
    this.author = author;
  }
}

class BookStore {
  constructor() {
    this.booksArray = [];
  }

  getData() {
    this.booksArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(book) {
    this.booksArray.push(book);
  }

  remove(book) {
    booksArray = booksArray.filter(
      (bookItem) => bookItem.id.toString() !== book.id
    );
  }

  saveData() {
    localStorage.setItem('books', JSON.stringify(this.booksArray));
  }
}

const bookStore = new BookStore();
bookStore.getData();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Book(titleInput.value, authorInput.value);
  bookStore.addBook(book);
  bookStore.saveData();
});
