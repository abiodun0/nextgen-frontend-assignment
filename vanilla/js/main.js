require("bootstrap/js/dist/collapse.js");

document.addEventListener("DOMContentLoaded",  () => {
  fetch("../data/books.json")
    .then((response) => response.json())
    .then((data) => {
      displayBooks(data.books);
      document.getElementById("searchInput").addEventListener(
        "input",
        debounce((event) => {
          const searchTerm = event.target.value.toLowerCase();
          const filteredBooks = data.books.filter(
            (book) =>
              book.title.toLowerCase().includes(searchTerm) ||
              book.author.toLowerCase().includes(searchTerm)
          );
          displayBooks(filteredBooks);
        }, 250)
      );
    })
    .catch((error) => console.error("Error fetching books:", error));
});

const EPOCH_START_DATE = new Date(0);
const debounce = (fn, delay) => {
  let lastCallDate = EPOCH_START_DATE;
  return (...args) => {
    let curDate = new Date();
    const shouldSkip = new Date() - lastCallDate < delay;
    if (shouldSkip) {
      return;
    }
    lastCallDate = curDate;
    return fn.apply(null, args);
  };
};

const displayBooks = (books) => {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  books.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "mb-4");
    card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Author: ${book.author}</p>
            <p class="card-text">Year Published: ${book.year_published}</p>
          </div>
        </div>
      `;
    bookList.appendChild(card);
  });
}
