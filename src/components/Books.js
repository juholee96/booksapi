import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import request from "superagent";

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //create local state to store list of books
      books: [],
      searchField: "",
      readingList: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({
        q: this.state.searchField,
        key: "AIzaSyBTq38Uipjiua2-MXqpwVVmkZNP9eq0FqQ",
        maxResults: "5",
      })
      .then((data) => {
        this.setState({ books: [...data.body.items] });
      });
  };

  handleForm = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} handleForm={this.handleForm} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;
