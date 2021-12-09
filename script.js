let theLibrary = []

const container = document.getElementById("container")
const addBook = document.createElement("button").innerText = "New Book"
container.appendChild(addBook)
addBook.addEventListener("click", addBooktotheLibrary(), false)


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    const info = function() {
        return `$title by $author,$pages pages, $read `
    }
}

function createForm() {

    let form = document.createElement("form");
    form.setAttribute("id", "myForm");
    document.body.appendChild(form);
    let p1 = document.createElement("p")
    form.appendChild(p1)
    let book_title = document.createElement("input")
    form.appendChild(book_title)
    p1.textContent = "Title"
    book_title.setAttribute("id", "bookTitle")
    book_title.setAttribute("value", "the book title")

    let p2 = document.createElement("p")
    form.appendChild(p2)
    let book_author = document.createElement("input")
    form.appendChild(book_author)
    p2.textContent = "Author"
    book_author.setAttribute("id", "bookAuthor")
    book_author.setAttribute("value", "the book author")

    let p3 = document.createElement("p")
    form.appendChild(p3)
    let book_pages = document.createElement("input")
    form.appendChild(book_pages)
    p3.textContent = "Pages"
    book_pages.setAttribute("id", "bookPages")
    book_pages.setAttribute("value", "the book pages")

    let submit = document.createElement("input")
    form.appendChild(submit)
    submit.setAttribute("type", "submit")
    submit.setAttribute("id", "submit")
    submit.setAttribute("value", "submit")



}

function addBooktotheLibrary() {
    createForm()
    newbook = new Book(book_title, book_author, book_pages, read_status)
    theLibrary.push(newbook)
}

function readStatusToggler() {
    if (read_status == clicked) {
        read_status.innerText = "Read"
    }
}

function displayBook() {
    for (let index = 0; index < theLibrary.length; index++) {
        const bookcard = document.createElement("div")
        const title = document.createElement('p')
        const author = document.createElement('p')
        const pages = document.createElement('p')
        const read_status = document.createElement("button")

        container.appendChild(bookcard)

        bookcard.appendChild(title)
        bookcard.appendChild(author)
        bookcard.appendChild(pages)
        bookcard.appendChild(read_status)
        title.textContent = theLibrary[index].title
        author.textContent = theLibrary[index].author
        pages.textContent = theLibrary[index].pages
        read_status.textContent = "Not read"
        read_status.addEventListener("click", readStatusToggler(), false)
        const removeBook = document.createElement("button")
        bookcard.appendChild(removeBook)
    }
}