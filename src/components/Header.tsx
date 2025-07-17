import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header bg-transparent absolute top-0 left-0 z-40 w-full flex items-center ${isSticky ? 'sticky' : ''}`}>
      <div className="container m-auto">
        <div className="flex mx-[-16px] items-center justify-between relative">
          <div className="px-4 w-60 max-w-full">
            <a href="/" className="w-full block py-8 header-logo">
              <img src="/images/logo-2.svg" alt="logo" className="w-full dark:hidden" />
              <img src="/images/logo.svg" alt="logo" className="w-full hidden dark:block" />
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
                      href="#pricing"
                      className="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="relative group">
                    <a
                      href="#contact"
                      className="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"
                    >
                      Support
                    </a>
                  </li>
                  <li className="relative group submenu-item">
                    <a
                      href="javascript:void(0)"
                      className="text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12 relative after:absolute after:w-2 after:h-2 after:border-b-2 after:border-r-2 after:border-current after:rotate-45 lg:after:right-0 after:right-1 after:top-1/2 after:translate-y-[-50%] after:mt-[-2px]"
                    >
                      Pages
                    </a>
                    <div className="submenu hidden relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-md lg:shadow-lg p-4 lg:block lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible lg:group-hover:top-full bg-white dark:bg-dark transition-[top] duration-300">
                      <a
                        href="/about"
                        className="block text-sm rounded py-[10px] px-4 text-dark dark:text-white hover:opacity-70"
                      >
                        About Page
                      </a>
                      <a
                        href="/contact"
                        className="block text-sm rounded py-[10px] px-4 text-dark dark:text-white hover:opacity-70"
                      >
                        Contact Page
                      </a>
                      <a
                        href="/blog"
                        className="block text-sm rounded py-[10px] px-4 text-dark dark:text-white hover:opacity-70"
                      >
                        Blog Page
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end items-center pr-16 lg:pr-0">
              <a
                href="/signin"
                className="hidden md:block text-base font-bold text-dark dark:text-white hover:opacity-70 py-3 px-7"
              >
                Sign In
              </a>
              <a
                href="/signup"
                className="hidden md:block text-base font-bold text-white bg-primary py-3 px-8 md:px-9 lg:px-6 xl:px-9 hover:shadow-signUp hover:bg-opacity-90 rounded-md transition ease-in-up duration-300"
              >
                Sign Up
              </a>
              <div>
                <label
                  htmlFor="darkToggler"
                  className="cursor-pointer w-9 h-9 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gray-2 dark:bg-dark-bg text-black dark:text-white"
                >
                  <input type="checkbox" name="darkToggler" id="darkToggler" className="sr-only" aria-label="darkToggler" />
                  <svg viewBox="0 0 23 23" className="stroke-current dark:hidden w-5 h-5 md:w-6 md:h-6" fill="none">
                    <path
                      d="M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden dark:block w-5 h-5 md:w-6 md:h-6"
                  >
                    <path
                      d="M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12Z"
                      fill="black"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;