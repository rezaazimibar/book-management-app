import { useParams } from "react-router-dom";
import { FindBook } from "../data/data";
const Book = () => {
  const params = useParams();
  const book = FindBook(parseInt(params.bookId));
  return (
    <>
      <main>
        <h2 className="mb-6">نام کتاب:{`${book.name}`}</h2>
        <h2>
          قیمت کتاب:<span className="text-cCyan">{`${book.amount}`}</span>
        {" "}تومان</h2>
      </main>
    </>
  );
};
export default Book;
