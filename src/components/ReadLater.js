import React from "react";

const ReadLater = (props) => {
  console.log("props in readLater~~~~~", props);
  const readLater = props.readLater; // an array []

  return (
    <div className="book-list">
      <h1>Reading List:</h1>
      {readLater.map((book) => {
        return (
          <ul key={book.id}>
            <li>title: {book}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ReadLater;

/* <div key={i}>
  <SingleBook
    image={book.volumeInfo.imageLinks.thumbnail}
    title={book.volumeInfo.title}
    author={book.volumeInfo.authors}
    published={book.volumeInfo.publishedDate}
    handleReadLater={handleReadLater}
  />
  ;
</div> */
