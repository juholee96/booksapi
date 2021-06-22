import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import ReadLater from "./ReadLater";
import request from "superagent";
import ls from "local-storage";

class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //create local state to store list of books
      books: [],
      searchField: "",
      readLater: [],
    };
  }

  componentWillMount() {
    this.setState({
      readLater: ls.get("readLater") || [],
    });
  }

  handleReadLater = (book) => {
    let currentReadLaterState = this.state.readLater.slice(0);

    let newReadLaterState = [...currentReadLaterState, book];
    if (!this.state.readLater.includes(book)) {
      this.setState({
        readLater: newReadLaterState,
      });
      ls.set("readLater", newReadLaterState);
    }
    console.log("!!!!!added to read later!!!!!!!");
  };

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
        console.log("dataaaa ->>>>>", data);
        this.setState({ books: [...data.body.items] });
      });
  };

  handleForm = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    console.log("readLater in Book Container---->", this.state.readLater);
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} handleForm={this.handleForm} />
        <BookList
          books={this.state.books}
          readLater={this.state.readLater}
          handleReadLater={this.handleReadLater}
        />
        <ReadLater readLater={this.state.readLater} />
      </div>
    );
  }
}

export default Books;
