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

  React.useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        
        setBook_list(response.data.reverse());
        setTrendingBook(response.data.shift());
      })
      .catch((err) => console.log(err));
  }, []);
  
  if (book_list) {
    return (
      
      <div className="container mx-auto mt-5">
        <h2 className="trending-title">Latest Book ...</h2>
        <TrendingBook
          bookid={trendingBook.id}
          bookname={trendingBook.name}
          bookauthor={trendingBook.author}
          bookdescription={trendingBook.description}
          bookprice={trendingBook.price}
          bookpage={trendingBook.pages}
          bookcover={trendingBook.cover}
        />
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
