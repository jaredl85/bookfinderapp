import React, { useState } from "react";
import axios from "axios";

function Main() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyDyytQPKTbIll7CG4USKUrpD6xMDRUCDRE"
  );

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(book);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&orderBy=relevance&:keyes&key=${apiKey}&maxResults=30`
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for a book!"
          className="form-field"
          autoComplete="off"
          onChange={handleChange}
        />
        <input type="submit" className="btn" />
      </form>

      <div className="book-results">
        {result.map((book) => (
          <article className="book" key={book.id}>
            <img
              src={
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${book.volumeInfo.imageLinks.thumbnail}`
              }
              alt={book.title}
              className="cover"
            />
            <div className="book-info">
              <h4 className="book-title">{book.volumeInfo.title}</h4>

              <div className="book-details">
                <p>
                  <strong>Author: </strong>
                  {book.volumeInfo.authors}
                </p>
                <p>
                  <strong>Publication Date: </strong>{" "}
                  {book.volumeInfo.publishedDate}
                </p>
                <p>
                  <strong>Publisher: </strong> {book.volumeInfo.publisher}
                </p>
                <p>
                  <strong>Pages: </strong> {book.volumeInfo.pageCount}
                </p>
                <a
                  href={book.volumeInfo.infoLink}
                  className="book-details-btn"
                  target="_blank"
                >
                  Get the book
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Main;
