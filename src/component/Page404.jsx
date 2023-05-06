import page404 from "../assests/picture/page404.png";

const Page404 = () => {
  return (
    <>
      <div className="bg-cAshen h-screen text-cSky text-center p-10">
        <h1>صفحه مورد نظر یافت نشد</h1>
        <img src={page404} alt="یافت نشد" className="w-1/2  m-auto" />
      </div>
    </>
  );
};
export default Page404;
