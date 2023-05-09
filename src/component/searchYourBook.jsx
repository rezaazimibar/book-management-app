import searchBook from "../assests/picture/searchYourBook.png";
const SearchYourBook = () => {
  return (
    <>
      <div className="m-auto ">
        <h1 className="text-cCyan">کتاب مورد نظر خود را وارد نمایید</h1>
        <img className="w-1/3 m-auto" src={searchBook} alt=" " />
      </div>
    </>
  );
};
export default SearchYourBook;
