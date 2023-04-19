import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {  
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      
        const response = await axios.get(
          'http://localhost:8090/api/book/books'
        );
        const booksData = response.data;
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
              <strong>Year:</strong> {book.publishedYear} <br />
              <strong>ISBN:</strong> {book.isbn} <br />
              <strong>Pages:</strong> {book.pages} <br />
              <strong>Author:</strong> {book.author}
            </li>
          ))}
        </ul>

      )}
    </>
  );
};

export default BookList;
