const { JSDOM } = require("jsdom");
const assert = require("assert");
const fs = require("fs");

// Load HTML content
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Test</title>
</head>
<body>
  <div id="bookList"></div>
  <input type="text" id="searchInput">
</body>
</html>
`;

const books = {
  books: [
    {
      title: "The Fountainhead",
      author: "Ayn Rand",
      year_published: 1943,
    },
    {
      title: "Walden",
      author: "Henry David Thoreau",
      year_published: 1854,
    },
    {
      title: "Tess of the d'Urbervilles",
      author: "Thomas Hardy",
      year_published: 1891,
    },
  ],
};

describe("Book Listing",  () => {
  let window, document;

  // Setup virtual DOM before each test
  beforeEach(function () {
    // Create a new JSDOM instance
    const dom = new JSDOM(htmlContent, { runScripts: "dangerously" });

    // Extract window and document objects
    window = dom.window;
    document = window.document;

    // Mock require and fetch
    window.require = () => {};
    window.fetch = () =>
      Promise.resolve({ json: () => Promise.resolve(books) });

    // Load the script into the virtual DOM
    const scriptCode = fs.readFileSync("vanilla/js/main.js", "utf8");
    const scriptEl = document.createElement("script");
    scriptEl.textContent = scriptCode;
    document.body.appendChild(scriptEl);
  });

  describe("Rendering Books", () => {
    it("should render the correct number of books", () => {
      const bookList = document.getElementById("bookList");
      assert.equal(bookList.children.length, 3); // Assuming there are 3 books initially
    });
  });

  describe("Search Functionality", () => {
    it("should filter books based on author", () => {
      const searchInput = document.getElementById("searchInput");
      searchInput.value = "Henry";
      searchInput.dispatchEvent(new window.Event("input"));

      const bookList = document.getElementById("bookList");
      assert.equal(bookList.children.length, 1);
      assert.equal(
        bookList.children[0].querySelector(".card-title").textContent,
        "Walden"
      );
    });

    it("should handle title case-insensitive search", () => {
      const searchInput = document.getElementById("searchInput");
      searchInput.value = "fountainhead";
      searchInput.dispatchEvent(new window.Event("input"));

      const bookList = document.getElementById("bookList");
      assert.equal(bookList.children.length, 1);
      assert.equal(
        bookList.children[0].querySelector(".card-title").textContent,
        "The Fountainhead"
      );
    });

    it("should show all books when search input is empty", () => {
      const searchInput = document.getElementById("searchInput");
      searchInput.value = "";
      searchInput.dispatchEvent(new window.Event("input"));

      const bookList = document.getElementById("bookList");
      assert.equal(bookList.children.length, 3); // Assuming there are 3 books initially
    });
  });
});
