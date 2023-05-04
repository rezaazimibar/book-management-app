import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./component/about";
import Books from "./component/books";
import Book from "./component/book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/books" element={<Books />}>
            <Route
              index
              element={
                <main>
                  <p>کتاب مورد نظر خود را وارد نمایید</p>
                </main>
              }
            />

            <Route path="/books/:bookId" element={<Book />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
