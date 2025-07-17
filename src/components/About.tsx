import React from 'react';

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
                        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-white">
                          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                        </svg>
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Premium Quality
                      </p>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-white">
                          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                        </svg>
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Tailored Solutions
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-white">
                          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                        </svg>
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
                        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-white">
                          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                        </svg>
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Regular Updates
                      </p>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-white">
                          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                        </svg>
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Scalable Infrastructure
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-white">
                          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                        </svg>
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