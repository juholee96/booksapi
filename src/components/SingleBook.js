import React, { Component } from "react";

class SingleBook extends Component {
  constructor(props) {
    super(props);
  }
  handleReadLater = (img, title) => {
    this.props.handleReadLater(this.props.image, this.props.title);
  };

  render() {
    console.log("singlebook props--->", this.props);
    //   const image = props.image;
    //   const title = props.title;
    //   const author = props.author;
    //   const published = props.published;
    const { image, title, author, published } = this.props;
    return (
      <div className="card-container">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <h3>by {author}</h3>
        <p>{published}</p>
        <button type="button" onClick={this.handleReadLater}>
          Add to Reading List
        </button>
      </div>
    );
  }
}

export default SingleBook;
