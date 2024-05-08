import React, { useState, useEffect } from 'react';
import booksData from './books.json';

type Book = {
  title: string;
  author: string;
  year_published: number;
};

export const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(booksData.books);
    setFilteredBooks(booksData.books);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    filterBooks(value);
  };

  const filterBooks = (term: string) => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
        book.author.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
      <div className="container" id="bookListing">
        <h1>Book Listing</h1>
        <input
          type="text"
          id="searchInput"
          className="form-control mb-3"
          placeholder="Search by title or author"
          onChange={handleSearchChange}
        />
        <div className="row">
          {filteredBooks.map((book, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">Author: {book.author}</p>
                  <p className="card-text">
                    Year Published: {book.year_published}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};
