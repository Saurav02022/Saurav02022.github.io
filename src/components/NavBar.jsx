import React, { useState, useCallback, memo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const LINKS = [
  { id: 1, link: "Home", classes: "nav-link home" },
  { id: 2, link: "About", classes: "nav-link about" },
  { id: 3, link: "Skills", classes: "nav-link skills" },
  { id: 4, link: "Project", classes: "nav-link projects" },
  { id: 5, link: "Contact", classes: "nav-link contact" },
];

const Logo = memo(() => (
  <Link
    to="Home" // The target section ID
    smooth={true}
    duration={500}
    offset={-100}
    className="text-2xl md:text-3xl font-bold cursor-pointer"
  >
    <span className="text-[#75bcd6]">Saurav</span>
    <span className="text-gray-800"> Kumar</span>
  </Link>
));

const NavLink = memo(({ link, classes, onClick }) => (
  <li className="px-3 py-2 md:py-0">
    <Link
      className={`${classes} text-base md:text-lg text-gray-700 hover:text-[#75bcd6] transition-colors duration-300 relative group`}
      to={link}
      activeClass="text-[#75bcd6] font-semibold"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      onClick={onClick}
    >
      {link}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#75bcd6] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
));

const ResumeButton = memo(({ className }) => {
  const downloadResume = useCallback(() => {
    window.open(
      "https://drive.google.com/file/d/1XDP7rusRRjdXCl0pDYVi8jRVI-5J3G7s/view?usp=sharing"
    );
  }, []);

  return (
    <button
      className={`${className} bg-[#75bcd6] text-white px-6 py-2 rounded-full hover:bg-[#5a9eb8] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#75bcd6] focus:ring-opacity-50`}
      onClick={downloadResume}
    >
      Resume
    </button>
  );
});

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = useCallback(() => setIsNavOpen((prev) => !prev), []);

  return (
    <nav className="flex justify-between items-center w-full h-20 text-gray-800 bg-white shadow-md fixed z-10 px-4 md:px-8 transition-all duration-300">
      <Logo />
      <ul className="hidden md:flex items-center space-x-4">
        {LINKS.map((link) => (
          <NavLink key={link.id} {...link} />
        ))}
        <ResumeButton className="ml-4" />
      </ul>
      <button
        onClick={toggleNav}
        className="md:hidden focus:outline-none p-2 transition-colors duration-300"
        aria-label={
          isNavOpen ? "Close navigation menu" : "Open navigation menu"
        }
      >
        {isNavOpen ? (
          <FaTimes size={24} className="text-[#75bcd6]" />
        ) : (
          <FaBars size={24} className="text-gray-700" />
        )}
      </button>
      {isNavOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300">
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <button
              onClick={toggleNav}
              className="absolute top-4 right-4 focus:outline-none p-2"
              aria-label="Close navigation menu"
            >
              <FaTimes size={24} className="text-[#75bcd6]" />
            </button>
            <ul className="flex flex-col items-start justify-center h-full space-y-6 pl-8">
              {LINKS.map((link) => (
                <NavLink key={link.id} {...link} onClick={toggleNav} />
              ))}
              <ResumeButton className="mt-6" />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
