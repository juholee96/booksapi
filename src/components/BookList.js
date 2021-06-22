import React from "react";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  console.log("bookList prop---->", props);
  const books = props.books; // an array []

  return (
    <div className="book-list">
      {books.map((book, i) => {
        return (
          <div key={i}>
            <SingleBook
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              published={book.volumeInfo.publishedDate}
            />
            ;
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
