import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-[150px] pb-[120px]">
      <div className="container px-10 m-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="px-4">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <span className="inline-block px-5 py-2 bg-primary bg-opacity-10 dark:bg-opacity-10 rounded-md text-white text-base font-semibold mb-5">
                  About Us
                </span>
                <h2 className="font-bold text-black dark:text-white text-3xl sm:text-4xl md:text-[42px] leading-tight sm:leading-tight md:leading-tight mb-5">
                  Innovative Software Solutions for Your Business
                </h2>
                <p className="text-base text-body-color dark:text-white dark:opacity-90 leading-relaxed">
                  At Pentasoft, we are dedicated to providing cutting-edge software solutions that help businesses of all sizes thrive in today's competitive market. Our team of experts is committed to delivering high-quality products and services that meet your unique needs.
                </p>
              </div>

              <div className="flex flex-wrap mx-[-12px]">
                <div className="w-full sm:w-1/2 px-3">
                  <div className="mb-10">
                    <div className="flex items-center mb-3">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Premium Quality
                      </p>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Tailored Solutions
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        24/7 Support
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 px-3">
                  <div className="mb-10">
                    <div className="flex items-center mb-3">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Regular Updates
                      </p>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Scalable Infrastructure
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Expert Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="mb-12 lg:mb-0 relative z-10">
              <img
                src="/images/about-image2.svg"
                alt="about-image"
                className="max-w-full mx-auto lg:mr-0"
              />
              <div className="absolute top-0 left-0 -z-1">
                <svg
                  width="600"
                  height="400"
                  viewBox="0 0 600 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="300" cy="200" r="300" fill="url(#paint0_radial_25:217)" />
                  <defs>
                    <radialGradient
                      id="paint0_radial_25:217"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(300 200) rotate(90) scale(300)"
                    >
                      <stop stopColor="#4A6CF7" stopOpacity="0.02" />
                      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;