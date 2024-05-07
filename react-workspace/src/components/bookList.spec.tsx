import { render, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import { BookList } from './bookList';

describe('App', () => {
  beforeEach(() => {
    vi.mock('./books.json', () => {
      const books = {
        books: [
          {
            title: 'The Fountainhead',
            author: 'Ayn Rand',
            year_published: 1943,
          },
          {
            title: 'Walden',
            author: 'Henry David Thoreau',
            year_published: 1854,
          },
          {
            title: "Tess of the dUrbervilles",
            author: 'Thomas Hardy',
            year_published: 1891,
          },
        ],
      };
      return { default: books };
    });
  });
  it('should render successfully', () => {
    const { baseElement, getByText, getAllByText } = render(<BookList />);
    // my-test-file.spec.ts
    expect(baseElement).toBeTruthy();
    const booksData = {
      books: [
        {
          title: 'The Fountainhead',
          author: 'Ayn Rand',
          year_published: 1943,
        },
        {
          title: 'Walden',
          author: 'Henry David Thoreau',
          year_published: 1854,
        },
        {
          title: "Tess of the dUrbervilles",
          author: 'Thomas Hardy',
          year_published: 1891,
        },
      ],
    };
    expect(getAllByText('Book Listing')).toBeTruthy();
    booksData.books.forEach((book) => {
      expect(getByText(book.title)).toBeTruthy();
      expect(getByText(`Author: ${book.author}`)).toBeTruthy();
      expect(getByText(`Year Published: ${book.year_published}`)).toBeTruthy();
    });
  });
  it('filters books based on search input on title, case insensitive', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<BookList />);
    const searchInput = getByPlaceholderText('Search by title or author');
    fireEvent.change(searchInput, { target: { value: 'Ayn' } });
    await waitFor(() => {
      expect(getByText('The Fountainhead')).toBeTruthy();
      expect(queryByText('Thomas Hardy')).toBeFalsy();
    });
  });

});
