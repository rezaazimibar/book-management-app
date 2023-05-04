import { NavLink,Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header className=" shadow-md shadow-cSky text-center">
        <h1 className=" text-cSky mt-7   shadow-cCyan">مدیریت کتاب ها</h1>
        <nav className="flex justify-center mb-0 m-10">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-cAshen bg-cSky text-2xl p-2 transition mb-8 rounded-full shadow-lg hover:shadow-none hover:translate-y-2 shadow-cCyan "
                : "mb-8 text-cSky text-2xl p-2 rounded-full "
            }
            to="/books"
          >
            کتاب ها
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-cAshen bg-cSky text-2xl p-2 transition mb-8 rounded-full shadow-lg hover:shadow-none hover:translate-y-2 shadow-cCyan "
                : "mb-5 text-cSky text-2xl p-2 rounded-full "
            }
            to="/about"
          >
            درباره ما
          </NavLink>
        </nav>
        
      </header>
      <main className="flex justify-end text-end"><Outlet/></main>
    </>
  );
}

export default App;
