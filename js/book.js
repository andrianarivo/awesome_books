class Book {
  constructor(title, author) {
    this.id = Math.floor(Math.random() * 1000);
    this.title = title;
    this.author = author;
  }
}
