const booksArray = [
  {
    id: 1,
    title: 'Title1',
    author: 'Author1',
  },
  { id: 2, title: 'Title2', author: 'Author2' },
  { id: 3, title: 'Title3', author: 'Author3' },
];

/*let createBook = (book) => `<li class="w-50 mx-auto">
          <div>
            <h3>${book.title}</h3>
            <h4>${book.author}</h4>
            <button type="button" id="${book.id}">Remove</button>
          </div>
          <hr>
        </li>`;*/

const booksContainer = document.querySelector('.books');

const createBooks = () => {
  /*for (let i = 0; i < booksArray.length; i += 1) {
    const book = createBook(booksArray[i]);
    booksContainer.appendChild(book);
  }*/
};

createBook();
