// CONVERT TO ARRAY

let titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach((item) => console.log(item));

// **************************************************************************************************************** //

// QUERY SELECTORS

const wrap = document.querySelector('#wrapper');
console.log(wrap);

// Pseudo class
const booklistSecondChild = document.querySelector('#book-list li:nth-child(2) .name');
console.log(booklistSecondChild);

// Select multiple elements
let books = document.querySelectorAll('#book-list li .name');
console.log(books);

// **************************************************************************************************************** //

// ADDING/CHANGING DOM ELEMENTS

books.forEach((book) => book.textContent += ' (book title)'); // += here is append

const bookList = document.querySelector('#book-list');

// adding / appending html content
bookList.innerHTML += '<p>Books and more books....</p>'

// **************************************************************************************************************** //

// NODES

const banner = document.querySelector('#page-banner');
console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

// cloning a node
const clonedBanner = banner.cloneNode(true);

// **************************************************************************************************************** //

// TRAVERSING THE DOM

// const bookList = document.querySelector('#book-list');

// grab a reference to the parent node / traversing upwards
console.log('The parent node is:', bookList.parentNode);
console.log('The parent node is:', bookList.parentElement.parentElement);

// traverse downwards - children
console.log(bookList.childNodes);
console.log(bookList.children);
