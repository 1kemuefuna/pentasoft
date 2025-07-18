import React from 'react';
import { CodeBracketIcon, CurrencyDollarIcon, UserGroupIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="pt-[150px] pb-[120px]">
      <div className="container px-10 m-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="px-4 w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface dark:bg-dark p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary bg-opacity-10 mb-5">
                  <CodeBracketIcon className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Code Challenges</h3>
                <p className="text-body-color dark:text-white dark:opacity-90">
                  Tackle diverse coding challenges that match your skill level and help you grow as a developer.                
                </p>
              </div>
              
              <div className="bg-surface dark:bg-dark p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary bg-opacity-10 mb-5">
                  <CurrencyDollarIcon className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Fair Compensation</h3>
                <p className="text-body-color dark:text-white dark:opacity-90">
                  Get paid fairly for your work with transparent pricing and quick payment processing.
                </p>
              </div>
              
              <div className="bg-surface dark:bg-dark p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary bg-opacity-10 mb-5">
                  <UserGroupIcon className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Developer Community</h3>
                <p className="text-body-color dark:text-white dark:opacity-90">
                  Join a thriving community of developers who share knowledge and support each other.
                </p>
              </div>
              
              <div className="bg-surface dark:bg-dark p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary bg-opacity-10 mb-5">
                  <RocketLaunchIcon className="w-8 h-8 text-dark" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Career Growth</h3>
                <p className="text-body-color dark:text-white dark:opacity-90">
                  Build your portfolio and advance your career with real-world projects and skills verification.
                </p>
              </div>
            </div>
          </div>
          
          <div className="px-4 w-full lg:w-1/2">
            <div className="max-w-[470px] ml-auto">
              <div className="mb-9">
                <span className="inline-block px-5 py-2 bg-primary bg-opacity-10 dark:bg-opacity-10 rounded-md text-white text-base font-semibold mb-5">
                  SloopCode
                </span>
                <h2 className="font-bold text-black dark:text-white text-3xl sm:text-4xl md:text-[42px] leading-tight sm:leading-tight md:leading-tight mb-5">
                  Revolutionary Microjob Platform for Developers
                </h2>
                <p className="text-base text-body-color dark:text-white dark:opacity-90 leading-relaxed">
                  SloopCode enables developers to pick and complete short, skills-focused projects without interviews or client negotiations, 
                  providing a steady income stream during job hunts or alongside full-time roles.
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
                        Curated Microjobs
                      </p>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Transparent Pricing
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Community Support
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
                        Skill Development
                      </p>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Secure Platform
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-[30px] h-[30px] flex items-center justify-center rounded-md bg-primary mr-3">
                        <CheckIcon className="w-4 h-4 text-white" />
                      </span>
                      <p className="text-base font-medium text-body-color dark:text-white dark:opacity-90">
                        Career Advancement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <a
                  href="#contact"
                  className="text-base font-bold text-button-onPrimary bg-button-primary py-3 px-8 hover:shadow-signUp hover:bg-opacity-90 rounded-md transition ease-in-up duration-300  items-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;