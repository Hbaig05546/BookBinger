import axios from "axios";
import React from "react";
import BookCard from "../components/BookCard";
import TrendingBook from "./TrendingBook";
import { useState } from "react";

function BookList() {
  const [book_list, setBook_list] = useState("");
  const [trendingBook, setTrendingBook] = useState("");

  // const book_list = [
  //   {
  //     id: 23,
  //     name: "Google",
  //     author: "Sundar pichwai",
  //     description: "Google Secret here!!",
  //     price: 5000.0,
  //     pages: 200,
  //     cover:
  //       "https://res.cloudinary.com/floran-music/raw/upload/v1/media/book/g_dek5ky.jpg",
  //   },
  // ];

  const BASE_URL = "https://floran-book-api.herokuapp.com/";
  const LATEST_URL = "https://floran-book-api.herokuapp.com/latest/";

  React.useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setBook_list(response.data.reverse());
      })
      .catch((err) => console.log(err));
    axios
      .get(LATEST_URL)
      .then((response) => {
        setTrendingBook(response.data.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  if (book_list) {
    return (
      <div className="container mx-auto mt-5">
        <h2 className="trending-title">Latest Book ...</h2>

        {trendingBook.map((tbook, index) => {
          return (
            <TrendingBook
              bookid={tbook.id}
              bookname={tbook.name}
              bookauthor={tbook.author}
              bookdescription={tbook.description}
              bookprice={tbook.price}
              bookpage={tbook.pages}
              bookcover={tbook.cover}
            />
          );
        })}

        <h2 className="trending-title">Explore Other Collections ...</h2>
        <div className="row">
          {book_list.map((book, index) => {
            return (
              <BookCard
                bookid={book.id}
                bookname={book.name}
                bookauthor={book.author}
                bookdescription={book.description}
                bookprice={book.price}
                bookpage={book.pages}
                bookcover={book.cover}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return "Loading.......";
  }
}

export default BookList;
