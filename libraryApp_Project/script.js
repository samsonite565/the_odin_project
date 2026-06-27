const newBookBtn = document.getElementById("newBookBtn")
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const pages = document.getElementById("pages");
const formDisplay = document.querySelector(".bookInfoForm");
const submitBtn = document.getElementById("submitBtn");
const bookAdditionForm = document.getElementsByClassName("bookInfoForm")
const myLibrary = [];

// All the book objects/things should be stored in an array, constructer is needed for the books
// The book object should have a unique ID which should be generated using 'crypto.randomUUID()'
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.ID = crypto.randomUUID();
}

// Add a function that takes takes arguments and creates a book with them
function addBookToLibrary(title, author, pages) {
    // Add a function that takes takes arguments and creates a Book item/thing with them,
    // then stores that book into the array (myLibrary)
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

//Reveal the form on "New Book Button"
newBookBtn.addEventListener("click", () => {
    const formStyleValue = formDisplay.style.getPropertyValue("display")
    if (formStyleValue === "") {
        formDisplay.style.display = "flex";
    } else {
        formDisplay.style.display = "";
    }
})

//Add event listener to the submit button
submitBtn.addEventListener("click", () => {
    addBookToLibrary(bookTitle.value, bookAuthor.value, pages.value); //Adds everthing to the array 
});

//Take the info from the array and add it to the card, Author, Title, pages etc.

