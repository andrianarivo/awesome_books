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
  // Get data from localstorage
  getData() {
    this.booksArray = JSON.parse(localStorage.getItem('books')) || [];
  }
  // Add book to booksArray
  addBook(book) {
    this.booksArray.push(book);
  }
  // Remove book from booksArray
  remove(id) {
    this.booksArray = this.booksArray.filter(
      (bookItem) => Number(bookItem.id) !== Number(id)
    );
  }
  // Set data to localstorage
  saveData() {
    localStorage.setItem('books', JSON.stringify(this.booksArray));
  }
  // Show books in DOM
  render() {
    let content = '';
    this.booksArray.forEach((book) => {
      content += `
    <li class="w-100 mx-auto list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
        <h5>"${book.title}" by ${book.author}</h5>
        <button type="button" id="${book.id}" class="remove-btn border border-dark border-3 bg-danger text-light rounded">Remove</button>
    </li>`;
    });
    return content;
  }
}

const bookStore = new BookStore();
bookStore.getData();
booksContainer.innerHTML = bookStore.render();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Book(titleInput.value, authorInput.value);
  bookStore.addBook(book);
  bookStore.saveData();
  booksContainer.innerHTML = bookStore.render();
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    bookStore.remove(e.target.id);
    bookStore.saveData();
    booksContainer.innerHTML = bookStore.render();
  }
});
