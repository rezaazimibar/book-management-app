import { GetBook } from "../data/data";
import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";
const Books = () => {
  const books = GetBook();
  const location = useLocation();
  const [searchParams, setSearchparams] = useSearchParams();
  return (
    <>
      <div className="flex ">
        <div className="flex pt-5 w-1/5 flex-col  border-l-2 border-cSky">
          <input
            className="rounded-full p-2 mx-3 mb-7 shadow-inner shadow-cSky  outline-none  bg-cCyan text-white text-xl placeholder:text-zinc-100"
            placeholder="نام کتاب خود را وارد کنید"
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchparams({ filter });
              } else {
                setSearchparams({});
              }
            }}
          ></input>
          {books
            .filter((book) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = book.name.toLocaleLowerCase();
              return name.startsWith(filter.toLocaleLowerCase());
            })
            .map((book) => (
              <NavLink
                to={`/books/${book.number}${location.search}`}
                key={books.number}
              >
                {({ isActive }) => (
                  <div
                    className={
                      isActive
                        ? " p-5 m-3 bg-cSky transition rounded-full text-xl translate-y-1 "
                        : " bg-cCyan  p-5 m-3 hover:shadow-none hover:translate-y-1 transition rounded-full shadow-cSky text-xl shadow-lg"
                    }
                  >
                    {book.name}
                  </div>
                )}
              </NavLink>
            ))}
        </div>
        <div className="text-cGray text-center p-10 rounded-md shadow-lg shadow-cSky bg-cAshen m-8 grow w-1/2">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Books;
