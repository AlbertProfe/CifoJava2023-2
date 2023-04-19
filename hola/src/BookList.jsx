import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      
        const response = await axios.get(
          'https://openlibrary.org/search.json?q=*&limit=100'
        );
        const booksData = response.data.docs;
        setBooks(booksData);
        setIsLoading(false);
    
    };
    fetchBooks();
  }, []);

  return (
    <>
    <h1>Books</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.key}>
              <strong>Title:</strong> {book.title} <br />
              <strong>Year:</strong> {book.publish_year} <br />
              <strong>ISBN:</strong> {book.isbn } <br />
              <strong>Pages:</strong> {book.number_of_pages} <br />
              <strong>Author:</strong> {book.author_name }
              </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BookList;
