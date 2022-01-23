import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class BookDetail extends Component {
  state = {
    bookDetail: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const BASE_URL = `https://floran-book-api.herokuapp.com/${id}`;
    const fetchBookDetail = () => {
      axios
        .get(BASE_URL)
        .then((response) => {
          this.setState({
            bookDetail: response.data,
          });
        })
        .catch((err) => console.log(err));
    };
    fetchBookDetail();
  }

  render() {
    let bookDetail = this.state.bookDetail;
    if (!bookDetail) {
      console.log("######################sucess##########################");

      return <h1>Loading ....</h1>;
    } else {
      return (
        <div className="col-lg-8 col-md-8">
          <div className="card">
            <img
              src={bookDetail.cover}
              className="book-details-img"
              alt="no img found"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{bookDetail.name}</h5>
              <div className="description">
                <h5>Book Description :</h5>
                <p className="card-text">description loren ipsum doleer</p>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Author: {bookDetail.author}</li>
              <li className="list-group-item">
                Price: &#8377; {bookDetail.price}
              </li>
              <li className="list-group-item">Pages: {bookDetail.pages}</li>
              <li className="list-group-item">Book ID: {bookDetail.id}</li>
            </ul>
            <div className="card-body">
              <Link to={"/"} className="card-link">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BookDetail;
