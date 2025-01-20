import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="fixed z-20 flex items-center justify-around w-full h-8 px-2 py-1 text-white bg-slate-900">
        <h1 className="text-2xl text-center md:text-left md:w-5/12">MK</h1>
        <nav className="hidden w-48 gap-5 md:flex">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        {
          !showMenu? (<IoMenu
            onClick={() => {
              setShowMenu(true);
            }}
            className="z-50 text-2xl transition-all md:hidden"
          />) : (
            <RxCross2 onClick={() => setShowMenu(false)} className="z-50 text-2xl transition-all md:hidden" />
          )
        }
        
        
        {showMenu && (
          <ul className="transition-all absolute right-0 z-20 flex flex-col justify-center w-full h-screen gap-20 py-2 text-4xl rounded-md shadow-md bg-[rgba(0,0,0,.8)] top-0 md:hidden ">
            <li className="text-center">
              <a href="#home" onClick={() => setShowMenu(false)}>Home</a>
            </li>
            <li className="text-center">
              <a href="#about" onClick={() => setShowMenu(false)}>About</a>
            </li>
            <li className="text-center">
              <a href="#skills" onClick={() => setShowMenu(false)}>Skills</a>
            </li>
            <li className="text-center">
              <a href="#contact" onClick={() => setShowMenu(false)}>Contact</a>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
