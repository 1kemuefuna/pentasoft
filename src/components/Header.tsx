import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle sticky header on scroll and initialize dark mode
  useEffect(() => {
    // Handle scroll for sticky header
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Dark mode is set to true by default in Layout.astro
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header bg-transparent absolute top-0 left-0 z-50 w-full flex items-center ${isSticky ? 'sticky backdrop-blur' : ''}`}>
      <div className="container m-auto">
        <div className="flex mx-[-16px] items-center justify-between relative">
          <div className="px-4 w-60 max-w-full">
            <a href="/" className="w-full block py-8 header-logo">
              <img src="logo.svg" alt="logo" className="w-full dark:hidden" />
              <img src="logo.svg" alt="logo" className="w-full hidden dark:block" />
            </a>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                id="navbarToggler"
                aria-label="Mobile Menu"
                onClick={toggleMenu}
                className="block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
              >
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white dark:bg-dark lg:dark:bg-transparent lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none ${isMenuOpen ? '' : 'hidden'}`}
              >
                <ul className="block lg:flex">
                  <li className="relative group">
                    <a
                      href="#home"
                      className="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0"
                    >
                      Home
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#about"
                      className="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                    >
                      About
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#portfolio"
                      className="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#contact"
                      className="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end items-center pr-16 lg:pr-0">
              <a
                href="#contact"
                className="text-base font-bold text-button-onPrimary bg-button-primary py-3 px-8 md:px-9 lg:px-6 xl:px-9 hover:shadow-signUp hover:bg-opacity-90 rounded-md transition ease-in-up duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;