import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./component/about";
import Books from "./component/books";
import Book from "./component/book";
import Page404 from "./component/Page404";
import SearchYourBook from "./component/searchYourBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/books" element={<Books />}>
            <Route index element={<SearchYourBook />} />
            <Route path="/books/:bookId" element={<Book />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
