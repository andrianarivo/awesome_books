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
    booksArray = booksArray.filter(
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
    <li class="w-50 mx-auto">
      <div>
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <button type="button" id="${book.id}" class="remove-btn">Remove</button>
      </div>
      <hr>
    </li>`;
    });
    return content;
  }
}

const bookStore = new BookStore();
bookStore.getData();

addBtn.addEventListener('click', (e) => {
  // e.preventDefault();
  const book = new Book(titleInput.value, authorInput.value);
  bookStore.addBook(book);
  bookStore.saveData();
  booksContainer.innerHTML = bookStore.render();
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    bookStore.remove(e.target.id);
  }
});
