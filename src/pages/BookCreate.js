import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'

function BookCreate() {
  const [bookname, setBookName] = useState("");
  const [bookauthor, setBookAuthor] = useState("");
  const [bookdescription, setBookDescription] = useState("");
  const [bookprice, setBookPrice] = useState("");
  const [bookpage, setBookPage] = useState("");
  const [bookcover, setBookCover] = useState(null);

  const history = useHistory();

  const BASE_URL = "https://floran-book-api.herokuapp.com/";

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }


  let publishBook = async () => {
    let formData = new FormData()

    if (
      bookname !== "" &&
      bookauthor !== "" &&
      bookdescription !== "" &&
      bookprice !== "" &&
      bookpage !== "" &&
      bookcover !== null
    ) {
      //   {
      //     "id": 27,
      //     "name": "The Road to React by Robin Wieruch",
      //     "author": "Robin",
      //     "description": "fh ejnfjv\r\nv\r\nvvv\r\n\r\nv\r\nv",
      //     "price": 1500.0,
      //     "pages": 500,
      //     "cover": "https://res.cloudinary.com/floran-music/raw/upload/v1/media/default.jpg"
      //  }
      console.log(bookname)
      console.log(bookauthor)
      console.log(bookdescription)
      console.log(bookprice)
      console.log(bookpage)
      console.log(bookcover)
      
      formData.append("name",bookname);
      formData.append("author",bookauthor);
      formData.append("description",bookdescription);
      formData.append("price",bookprice);
      formData.append("pages",bookpage);
      formData.append("cover",bookcover);

      await axios.post(BASE_URL,formData,config).then(
        (res) => {
          
          setBookName("")
          setBookAuthor("")
          setBookDescription("")
          setBookPrice("")
          setBookPage("")
          setBookCover(null)

          history.push("/")

        }
      ).catch(
        err => console.log(err)
      )
      
    } else {
      alert("Please fill all the details about the book properly !");
    }
  };

  return (
    <div className="jumbotron">
      <h1 className="book-publish">Book Publish Form</h1>
      {/* <form className="was-validated"> */}
      <div className="col-md-6">
        <label for="validationServer01" className="form-label">
          Book Title
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          value={bookname}
          onChange={(e) => setBookName(e.target.value)}
          required
        ></input>
      </div>

      <div className="col-md-6">
        <label for="validationServer01" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          value={bookauthor}
          onChange={(e) => setBookAuthor(e.target.value)}
          required
        ></input>
      </div>

      <div className="mb-3">
        <label for="validationTextarea" className="form-label">
          Description
        </label>
        <textarea
          className="form-control is-invalid"
          id="book-description"
          placeholder="Please enter the book's description in your own words."
          value={bookdescription}
          onChange={(e) => setBookDescription(e.target.value)}
          maxlength = "2000"
          required
        ></textarea>
        <div className="invalid-feedback">
          Please enter the books in the textarea.
        </div>
      </div>

      <div className="col-md-6">
        <label for="validationServer01" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control is-valid"
          id="validationServer01"
          value={bookprice}
          onChange={(e) => setBookPrice(e.target.value)}
          placeholder=""
          required
        ></input>
      </div>
      <div className="col-md-6">
        <label for="validationServer01" className="form-label">
          Number of Pages
        </label>
        <input
          type="number"
          className="form-control is-valid"
          id="validationServer01"
          value={bookpage}
          onChange={(e) => setBookPage(e.target.value)}
          placeholder="e.g. 500"
          required
        ></input>
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="validationFormCheck1"
          value={bookauthor}
          onChange={(e) => setBookAuthor(e.target.value)}
          
        ></input>
        <label className="form-check-label" for="validationFormCheck1">
          Have you read this book ?
        </label>
        <div className="invalid-feedback">Please be truthful ..</div>
      </div>

      <div className="mb-3">
        <select className="form-select"  aria-label="select example">
          <option value="">How much would you rate this book ?</option>
          <option value="1">1/5</option>
          <option value="2">2/5</option>
          <option value="3">3/5</option>
          <option value="4">4/5</option>
          <option value="5">5/5</option>
        </select>
        <div className="invalid-feedback">Enter Feedback</div>
      </div>

      <div className="mb-3">
        <input
          type="file"
          accept="image/*"
          className="form-control"
          aria-label="file example"
          onChange={(e) => setBookCover(e.target.files[0])}
          required
        ></input>
        <div className="invalid-feedback">
          Example invalid form file feedback
        </div>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary" onClick={publishBook}>
          Submit form
        </button>
      </div>
      {/* </form> */}
    </div>
  );
}

export default BookCreate;
