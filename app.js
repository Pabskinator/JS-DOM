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

// traverse DOM with sibling elements
console.log('book-lit next sibling is:', bookList.nextSibling);
console.log('book-lit next element sibling is:', bookList.nextElementSibling);

console.log('book-lit previous sibling is:', bookList.previousSibling);
console.log('book-lit previous element sibling is:', bookList.previousElementSibling);

const subtitle = bookList.previousElementSibling.querySelector('p');
subtitle.style.color = 'red';
subtitle.innerHTML += '</br> Read and grow.';

// **************************************************************************************************************** //

// EVENTS

// delete book
// let buttons = document.querySelectorAll('#book-list .delete');
//
// buttons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         const li = e.target.parentElement.remove();
//     })
// })

/* The drawback of the process above is when you add a new book,
    the event will not work because you already added it on the first 4 books,
    we can solve this by utilizing EVENT BUBBLING
 */

const list = document.querySelector('#book-list ul');

list.addEventListener('click', (e) => {
    if(e.target.className === 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})

// add book
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = addForm.querySelector('input[type="text"]').value;

    // create element
    const li = document.createElement('li');
    const bookNameSpan = document.createElement('span');
    const bookDeleteSpan = document.createElement('span');

    // add content
    bookNameSpan.textContent = value;
    bookDeleteSpan.textContent = 'delete';

    // add classes
    bookNameSpan.classList.add('name');
    bookDeleteSpan.classList.add('delete');

    // append to DOM
    li.appendChild(bookNameSpan);
    li.appendChild(bookDeleteSpan);
    list.appendChild(li);
})

// **************************************************************************************************************** //

// CHECKBOX EVENTS (Change events)

// hide books

const checkbox = document.querySelector('#hide');
checkbox.addEventListener('change', (e) =>{
    list.style.display = checkbox.checked ? 'none' : 'initial';
})

// **************************************************************************************************************** //

// CUSTOM SEARCH FILTER

// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.querySelectorAll('li');

    books.forEach((book) => {
        const title = book.firstElementChild.textContent;

        if(title.toLowerCase().indexOf(term) !== -1){
            book.style.display = 'block';
        }else{
            book.style.display = 'none';
        }
    })
})

