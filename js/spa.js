// const titleInput = document.querySelector('#titleInput');
// const authorInput = document.querySelector('#authorInput');
// const addBtn = document.querySelector('#addBtn');
const mainContainer = document.querySelector('main');
const navLinks = document.querySelectorAll('.nav-link');
let booksContainer = '';

class BookStore {
  constructor() {
    this.booksArray = [];
  }

  // Get data from localstorage
  getData() {
    this.booksArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  // Add book to booksArray
  addBook(title, author) {
    this.booksArray.push({
      id: Math.floor(Math.random() * 1000),
      title,
      author,
    });
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

  // Check if empty
  empty() {
    return this.booksArray.length === 0;
  }
}

const bookStore = new BookStore();

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', function (e) {
    mainContainer.innerHTML = '';
    switch (e.target.id) {
      case 'list':
        bookStore.getData();
        mainContainer.innerHTML = `
        <div>
            <h1 class="text-center">All Awesome Books</h1>
            <ul class="books w-50 mx-auto list-unstyled my-5 list-group border-3 border-dark"></ul>
        </div>`;
        booksContainer = document.querySelector('.books');
        booksContainer.innerHTML = bookStore.render();
        break;
    }
  });
});

// ADD A NEW BOOK
// addBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const titleValue = titleInput.value;
//   const authorValue = authorInput.value;
//   titleInput.className = '';
//   authorInput.className = '';

//   if (titleValue === '' && authorValue === '') {
//     titleInput.className = 'border border-2 border-danger';
//     authorInput.className = 'border border-2 border-danger';
//     return;
//   }
//   if (authorValue === '') {
//     authorInput.className = 'border border-2 border-danger';
//     return;
//   }
//   if (titleValue === '') {
//     titleInput.className = 'border border-2 border-danger';
//     return;
//   }
//   bookStore.addBook(titleInput.value, authorInput.value);
//   bookStore.saveData();
//   booksContainer.innerHTML = bookStore.render();
//   booksContainer.classList.add('border');
// });

// REMOVE A BOOK
// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains('remove-btn')) {
//     bookStore.remove(e.target.id);
//     bookStore.saveData();
//     booksContainer.innerHTML = bookStore.render();
//     if (bookStore.empty()) {
//       booksContainer.classList.remove('border');
//     }
//   }
// });
/*<!-- Book Collection -->
    <!-- <ul
      class="books w-50 mx-auto list-unstyled my-5 list-group border-3 border-dark"></ul>
    <hr class="w-25 mx-auto" />
    <h2 class="text-center">Add a new book</h2> -->
    <!-- Form -->
    <!-- <form action="" class="d-flex flex-column w-50 mx-auto gap-4">
      <input
        type="text"
        class="form-control"
        id="titleInput"
        placeholder="Title"
        required />
      <input
        type="text"
        class="form-control"
        id="authorInput"
        placeholder="Author"
        required />
      <button
        type="submit"
        id="addBtn"
        class="btn btn-primary w-25 align-self-end">
        Add
      </button>
    </form> -->*/
