const booksContainer = document.querySelector('.books');
let booksArray = [
  {
    id: 1,
    title: 'Title1',
    author: 'Author1',
  },
  { id: 2, title: 'Title2', author: 'Author2' },
  { id: 3, title: 'Title3', author: 'Author3' },
];

// Display Books
function displayBooks() {
  let itemContent = '';
  booksArray.forEach((book) => {
    itemContent += `
    <li class="w-50 mx-auto">
      <div>
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <button type="button" id="${book.id}" class="remove-btn">Remove</button>
      </div>
      <hr>
    </li>`;
  });
  booksContainer.innerHTML = itemContent;
}

displayBooks();

const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const addBtn = document.querySelector('#addBtn');

//Add Book
function addBooks(title, author) {
  const bookItem = {
    id: Math.floor(Math.random() * 1000),
    title: title.value,
    author: author.value,
  };

  booksArray.push(bookItem);
  displayBooks();
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBooks(titleInput, authorInput);
});

// Remove Book
const deleteButtons = document.querySelectorAll('.remove-btn');

function removeBook(id) {
  booksArray = booksArray.filter((book) => book.id.toString() !== id);
}

deleteButtons.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', (e) => {
    removeBook(e.target.id);

    const div = deleteBtn.parentElement;
    const li = div.parentElement;
    li.remove();
  });
});
