import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FindBook, deleteBook } from "../data/data";

const Book = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const book = FindBook(parseInt(params.bookId));
  if (book) {
    return (
      <>
        <main>
          <h2 className="mb-6">نام کتاب:{`${book.name}`}</h2>
          <h2>
            قیمت کتاب:<span className="text-cCyan">{`${book.amount}`}</span>{" "}
            تومان
          </h2>
          <h3 className="mt-3">تاریخ انتشار:{`${book.due}`}</h3>
          <button
            onClick={() => {
              deleteBook(book.number);
              navigate(`/books` + location.search);
            }}
            className="rounded-md bg-cCyan text-cGray px-7 py-2 mt-10 hover:opacity-60"
          >
            حذف
          </button>
        </main>
      </>
    );
  } else {
    return (
      <main>
        <h1 className="text-cCyan">کتابی یافت نشد</h1>
      </main>
    );
  }
};
export default Book;
