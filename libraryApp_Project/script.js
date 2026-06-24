// All the book objects/things should be stored in an array, constructer is needed for the books
// Add a function that takes takes arguments and creates a book with them
// The book object should have a unique ID which should be generated using 'crypto.randomUUID()'
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const pages = document.getElementById("pages");
const submitBtn = document.getElementById("submitBtn");
const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ID = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
  // Add a function that takes takes arguments and creates a Book item/thing with them,
  // then stores that book into the array (myLibrary)
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

//Add event listener to the submit button
submitBtn.addEventListener("click", () => {
  addBookToLibrary(bookTitle, bookAuthor, pages);
  console.log(myLibrary);
});
