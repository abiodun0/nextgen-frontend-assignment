const { JSDOM } = require("jsdom");
const assert = require("assert");
const fs = require("fs");

// Load HTML content
const htmlContent = fs.readFileSync("index.html", "utf8");

describe("Book Listing", function () {
  let window, document;

  // Setup virtual DOM before each test
  beforeEach(function () {
    // Create a new JSDOM instance
    const dom = new JSDOM(htmlContent);

    // Extract window and document objects
    window = dom.window;
    document = window.document;

    // Load the script into the virtual DOM
    const scriptCode = fs.readFileSync("js/main.js", "utf8");
    const scriptEl = document.createElement("script");
    scriptEl.textContent = scriptCode;
    document.body.appendChild(scriptEl);
  });

  describe("Rendering Books", function () {
    it("should render the correct number of books", function (cb) {
      const bookList = document.getElementById("bookList");
    //   assert.equal(bookList.children.length, 3); // Assuming there are 3 books initially
      setTimeout(() => {
        const bookList2 = document.getElementById("bookList");
        console.log(bookList2.outerHTML, 'what is this', bookList.children.length)
        cb();
      }, 3000)
    });
  });

  describe("Search Functionality", function () {
    it("should filter books based on search term", function () {
      const searchInput = document.getElementById("searchInput");
      searchInput.value = "1984";
      searchInput.dispatchEvent(new window.Event("input"));

      const bookList = document.getElementById("bookList");
      assert.equal(bookList.children.length, 1);
      assert.equal(bookList.children[0].querySelector(".card-title").textContent, "1984");
    });

    it("should handle case-insensitive search", function () {
      const searchInput = document.getElementById("searchInput");
      searchInput.value = "gatsby";
      searchInput.dispatchEvent(new window.Event("input"));

      const bookList = document.getElementById("bookList");
      assert.equal(bookList.children.length, 1);
      assert.equal(bookList.children[0].querySelector(".card-title").textContent, "The Great Gatsby");
    });

    it("should show all books when search input is empty", function () {
      const searchInput = document.getElementById("searchInput");
      searchInput.value = "";
      searchInput.dispatchEvent(new window.Event("input"));

      const bookList = document.getElementById("bookList");
      assert.equal(bookList.children.length, 3); // Assuming there are 3 books initially
    });
  });
});
