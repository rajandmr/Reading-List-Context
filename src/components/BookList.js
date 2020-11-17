import React, { useContext, useEffect } from 'react';
import { BookContext } from '../contexts/BookContext';
import { BookDetails } from './BookDetails';

export const BookList = () => {
  const { books, dispatch } = useContext(BookContext);

  const fetchBooks = async () => {
    const res = await fetch(
      'https://fakerapi.it/api/v1/custom?_quantity=5&author=name&id=counter&title=city'
    );
    const { data } = await res.json();
    dispatch({
      type: 'FETCH_BOOKS',
      books: data,
    });
  };
  useEffect(() => {
    fetchBooks();
    //eslint-disable-next-line
  }, []);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> No books to read.</div>
  );
};
