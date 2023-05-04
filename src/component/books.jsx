import { GetBook } from "../data/data";
import { NavLink, Outlet } from "react-router-dom";
const Books = () => {
  const books = GetBook();
  return (
    <>
      <div className="flex ">
      
        <div className="flex pt-5 w-1/5 flex-col  border-l-2 border-cSky">
          {books.map((book) => (
            <NavLink to={`/books/${book.number}`} key={books.number}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? " p-5 m-3 bg-cSky transition rounded-full text-xl "
                      : " bg-cCyan  p-5 m-3 hover:shadow-none hover:translate-y-1 transition rounded-full shadow-cSky text-xl shadow-lg"
                  }
                >
                  {book.name}
                </div>
              )}
            </NavLink>
          ))}
        </div>
        <div className="text-white text-center p-10 rounded-md shadow-lg shadow-cSky bg-cAshen m-8 grow w-1/2 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Books;
