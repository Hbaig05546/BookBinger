import React from "react";
import { Link } from "react-router-dom";

function TrendingBook(props) {
  return (
    <div className="col-lg-6">
    <Link to={"/details/" + props.bookid}>
      
        <div className="trending-book">
          <div className="row">
            <div className="col-lg-4">
              <img className="trendignCardImg" src={props.bookcover} alt="bg" />
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <h1>{props.bookname}</h1>
                </div>
                <div className="col-12">
                  <p className="book-description">{props.bookdescription}</p>
                </div>
                <div className="col-12">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Author: {props.bookauthor}
                    </li>
                    <li className="list-group-item">
                      Price: &#8377; {props.bookprice}
                    </li>
                    <li className="list-group-item">Pages: {props.bookpage}</li>
                    <li className="list-group-item">Book ID: {props.bookid}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </Link></div>
  );
}

export default TrendingBook;
