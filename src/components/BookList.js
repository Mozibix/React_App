import React, { Component } from "react";
import Book from "./Book";

export class BookList extends Component {
  state = {
    books: [
      { bookname: "Think like a pc", writter: "Peter" },
      { bookname: "a pc", writter: "josh" },
      { bookname: "Think", writter: "obi" },
    ],
  };

  changeBookState = () => {
    this.setState({
      books: [
        { bookname: "New Data", writter: "New Guy" },
        { bookname: "Dark_9T", writter: "MR Dark" },
        { bookname: "Mozibix", writter: "new writter" },
      ],
    });
  };

  changeInput = (event) => {
    this.setState({
      books: [
        { bookname: event.target.value, writter: "New Guy" },
        { bookname: "Dark_9T", writter: "MR Dark" },
        { bookname: "Mozibix", writter: "new writter" },
      ],
    });
  };
  // constructor(){
  //     super();
  //     this.state = {}
  // }

  render() {
    return (
      <div>
        {" "}
        <div className="App">
          <h1>BookList</h1>
          <button onClick={this.changeBookState}>Click Me</button>

          <input type="text" onChange={this.changeInput} />

          <Book
            bookname={this.state.books[0].bookname}
            writter={this.state.books[0].writter}
          />
          <Book
            bookname={this.state.books[1].bookname}
            writter={this.state.books[1].writter}
          />
          <Book
            bookname={this.state.books[2].bookname}
            writter={this.state.books[2].writter}
            change={this.changeBookState}
          />
        </div>
      </div>
    );
  }
}

export default BookList;
