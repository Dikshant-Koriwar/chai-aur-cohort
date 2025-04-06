const API_URL = "https://api.freeapi.app/api/v1/public/books";
let books = [];
let page = 1;
const limit = 10;

const booksContainer = document.getElementById("books-container");
const searchInput = document.getElementById("search");
const sortTitleBtn = document.getElementById("sort-title");
const sortDateBtn = document.getElementById("sort-date");
const toggleViewBtn = document.getElementById("toggle-view");
const loadMoreBtn = document.getElementById("load-more");

async function fetchBooks() {
    try {
        const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
        const data = await response.json();
        books = [...books, ...data.data.data];
        renderBooks(books);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

function renderBooks(bookList) {
    booksContainer.innerHTML = "";
    bookList.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <img src="${book.volumeInfo.imageLinks?.thumbnail}" alt="Book Cover">
            <h3>${book.volumeInfo.title}</h3>
            <p>Author: ${book.volumeInfo.authors?.join(", ") || "Unknown"}</p>
            <p>Publisher: ${book.volumeInfo.publisher || "N/A"}</p>
            <p>Published: ${book.volumeInfo.publishedDate || "N/A"}</p>
            <a href="${book.volumeInfo.infoLink}" target="_blank">More Info</a>
        `;
        booksContainer.appendChild(bookElement);
    });
}

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.volumeInfo.title.toLowerCase().includes(searchTerm) ||
        book.volumeInfo.authors?.some(author => author.toLowerCase().includes(searchTerm))
    );
    renderBooks(filteredBooks);
});

sortTitleBtn.addEventListener("click", () => {
    books.sort((a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title));
    renderBooks(books);
});

sortDateBtn.addEventListener("click", () => {
    books.sort((a, b) => new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate));
    renderBooks(books);
});

toggleViewBtn.addEventListener("click", () => {
    booksContainer.classList.toggle("list-view");
});

loadMoreBtn.addEventListener("click", () => {
    page++;
    fetchBooks();
});

// Initial Fetch
fetchBooks();
