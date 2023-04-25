const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const addBtn = document.querySelector('#addBtn');
const booksContainer = document.querySelector('.books');
let booksArray = JSON.parse(localStorage.getItem('books')) || [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookStore {
  constructor() {}
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book1 = new Book(titleInput.value, authorInput.value);
  console.log(book1);
});

