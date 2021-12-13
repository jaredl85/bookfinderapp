import React, { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

function Main() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyDyytQPKTbIll7CG4USKUrpD6xMDRUCDRE"
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(book);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}:keyes&key=${apiKey}&maxResults=20`
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

  const modalStyle = {
    overlay: {
      backgroundColor: '#aaa',
    },
    content: {
    borderRadius: '15px',
    border: '2px solid #aaa',
    width: '50%',
    minHeight: '60vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    padding: '40px',
    position: 'relative'
    },
  };

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
          <article className="book">
            <img
              src={
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${book.volumeInfo.imageLinks.thumbnail}`
              }
              alt={book.title}
              key={book.id}
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
                <div
                  className="btn modal-btn"
                  onClick={() => setModalIsOpen(true)}
                >
                  Read the description
                </div>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  style={modalStyle}
                >
                  <IoClose 
                  onClick={() => setModalIsOpen(false)} 
                  className="modal-icon"
                  />
                  <h2 className="modal-title">{book.volumeInfo.title}</h2>
                  <div className="modal-decoration"></div>
                  <p className="modal-text">{book.volumeInfo.description}</p>
                  <div
                    className="btn modal-btn modal-close"
                    onClick={() => setModalIsOpen(false)}
                  >
                    Back to results
                  </div>
                </Modal>
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
