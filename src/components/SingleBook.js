import React from "react";

const SingleBook = (props) => {
  console.log("singlebook props--->", props);
  const image = props.image;
  const title = props.title;
  const author = props.author;
  const published = props.published;
  return (
    <div className="card-container">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h3>by {author}</h3>
      <p>{published}</p>
      <button type="button">Add to Reading List</button>
    </div>
  );
};

export default SingleBook;
