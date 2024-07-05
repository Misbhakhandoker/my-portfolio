import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="fixed z-20 flex items-center justify-around w-full h-8 px-2 py-1 text-white bg-slate-900">
        <h1 className="text-2xl text-center md:text-left md:w-5/12">MK</h1>
        <nav className="hidden w-48 gap-5 md:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
        <IoMenu className="hidden text-2xl" />
      </header>
    </>
  );
};

export default Header;
