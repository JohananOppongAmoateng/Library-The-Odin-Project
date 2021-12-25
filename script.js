

let theLibrary = []


const addBook = document.getElementById("addbtn")
const newbtn = document.getElementById("newbtn")
const popupForm = document.getElementById("popup")
const popclose = document.getElementsByTagName("span")[0]

newbtn.addEventListener("click",() => popupForm.style.display = "block")
addBook.addEventListener("click", addBooktotheLibrary)
popclose.addEventListener("click",() => popupForm.style.display = "none")


class Book {
    constructor(title, author, pages, read){
        this.title = form.title.value
        this.author = form.author.value
        this.pages = form.pages.value + "pg" 
        this.read = form.read.checked

}}
    

function addBooktotheLibrary() {
    event.preventDefault()
    popupForm.style.display = "none"
    let newbook = new Book(title,author, pages,read)
    theLibrary.push(newbook)
    setData()
    displayBook()

    form.reset()
}

 function render() {
    const display = document.getElementById("library") 
    const books = document.querySelectorAll(".book")  

    books.forEach(book => display.removeChild(book))
    
    for (let index = 0; index < theLibrary.length; index++) {
        createBooks(theLibrary[index])  
    }    
 } 
 
 function createBooks(item) {
    const library = document.querySelector('#library');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', theLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn')    
    bookDiv.appendChild(readBtn);
    if(item.read===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63'
    }

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);
    
    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        theLibrary.splice(theLibrary.indexOf(item),1);
        setData()
        render();
    });

    //add toggle ability to each book 'read' button on click
    readBtn.addEventListener('click', () => { 
        item.read = !item.read; 
        setData(); 
        render();
    }); 
};

// setting Library to be stored in local storage
function setData() {
    localStorage.setItem(`theLibrary`, JSON.stringify(theLibrary));
}

//pulls books from local storage when page is refreshed
function restore() {
    if(!localStorage.theLibrary) {
        render();
    }else {
        let objects = localStorage.getItem('theLibrary') // gets information from local storage to use in below loop to create DOM/display
        objects = JSON.parse(objects);
        theLibrary = objects;
        render();
    }
}

restore();