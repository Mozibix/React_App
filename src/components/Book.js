import React from "react";
import "../Stylesheet/Book.css";

const Book = (props) => {
  return (
    <div className="Book">
      <h1 onClick={props.change}>Bookname: {props.bookname}</h1>
      <h2>writter: {props.writter}</h2>
    </div>
  );
};

export default Book;
