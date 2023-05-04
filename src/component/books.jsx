import { GetBook } from "../data/data";
import { NavLink } from "react-router-dom";
const Books = () => {
  const books = GetBook();
  return (
    <>
      <div className="flex pt-5 flex-col w-1/5 border-l-2 border-cSky">
        {books.map((book) => (
          <NavLink to={`/books`}>
            {({ isActive }) => (
              <div
                className={
                  isActive
                    ? " p-5 m-3 bg-cSky transition rounded-full text-xl shadow-md shadow-cCyan hover:shadow-none hover:translate-y-1"
                    : " bg-cCyan  p-5 m-3"
                }
              >
                {book.name}
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </>
  );
};
export default Books;
