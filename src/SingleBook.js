import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function SingleBook() {
  const { id } = useParams();
  //const bookId = id;
  const [book, setBook] = useState({ id });
  const [result, setResult] = useState([]);

  //   console.log(bookId);
  //   console.log(id);
  const apiKey = "AIzaSyDyytQPKTbIll7CG4USKUrpD6xMDRUCDRE";

  const url = `https://www.googleapis.com/books/v1/volumes?q=`;

  // https://www.googleapis.com/books/v1/volumes?q=3BozEAAAQBAJ:keyes&key=AIzaSyDyytQPKTbIll7CG4USKUrpD6xMDRUCDRE

  function fetchBook(id) {
    axios.get(`${url}${id}&maxResults=1`).then((data) => {
      setResult(data.data.items);
      setBook(data.data.items);
      //const title = data.items.volumeInfo.title;
      // const title = result.title;
      console.log(result);
    });
  }

  useEffect(() => {
    fetchBook();
    // console.log(book);
    // console.log(book.title);
  }, [id]);

  return <div className="singleBook">book</div>;
}

export default SingleBook;
