import React from "react";
// import photo from '../img/book.jpg'
import { Link } from "react-router-dom";

function BookCard(props) {
  return (
    <div className="col-lg-4 col-md-6">
    <Link to={"/details/" + props.bookid}>
      
        <div className="card">
          <img
            src={props.bookcover}
            className="card-img-top"
            alt="no img found"
          ></img>
          <div
            className="card-body"
            onClick={(event) => {
              console.log(event.target.value);
            }}
          >
            <h5 className="book-title">{props.bookname}</h5>
            <p className="book-description">{props.bookdescription}</p>
          </div>
          <ul className="list-group ">
            <li className="list-group-item">Author: {props.bookauthor}</li>
            <li className="list-group-item">
              Price: &#8377; {props.bookprice}
            </li>
            <li className="list-group-item">Pages: {props.bookpage}</li>
            <li className="list-group-item">Book ID: {props.bookid}</li>
          </ul>
          <div className="card-body"></div>
        </div>
      
    </Link></div>
  );
}

export default BookCard;
