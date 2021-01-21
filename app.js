// converting to array

let titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach((item) => console.log(item));

// **************************************************************************************************************** //

// Query Selector

const wrap = document.querySelector('#wrapper');
console.log(wrap);

// Pseudo class
const booklistSecondChild = document.querySelector('#book-list li:nth-child(2) .name');
console.log(booklistSecondChild);

// Select multiple elements
let books = document.querySelectorAll('#book-list li .name');
console.log(books);

// **************************************************************************************************************** //

books.forEach((book) => book.textContent += ' (book title)'); // += here is append

const bookList = document.querySelector('#book-list');

// adding / appending html content

bookList.innerHTML += '<p>Books and more books....</p>'