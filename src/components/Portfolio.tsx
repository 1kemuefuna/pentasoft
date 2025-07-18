import React from 'react';
import { CodeBracketIcon, CurrencyDollarIcon, UserGroupIcon, RocketLaunchIcon, LockClosedIcon, DocumentTextIcon, ServerIcon, ClipboardDocumentCheckIcon, BanknotesIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/solid';

// Status component for feature readiness
const FeatureStatus = ({ status }: { status: 'completed' | 'in-development' | 'pending' }) => {
  if (status === 'completed') {
    return (
      <span className="flex items-center text-green-500">
        <CheckIcon className="w-5 h-5 mr-1" />
        <span>Completed</span>
      </span>
    );
  } else if (status === 'in-development') {
    return (
      <span className="flex items-center text-yellow-500">
        <ClockIcon className="w-5 h-5 mr-1" />
        <span>In Development</span>
      </span>
    );
  } else {
    return (
      <span className="flex items-center text-gray-400">
        <XMarkIcon className="w-5 h-5 mr-1" />
        <span>Pending</span>
      </span>
    );
  }
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="pt-[120px] pb-[100px] bg-surface dark:bg-surface">
      <div className="container px-4 md:px-10 m-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-primary bg-opacity-10 dark:bg-opacity-10 rounded-md text-dark text-base font-semibold mb-5">
            SloopCode Project
          </span>
          <h2 className="font-bold text-black dark:text-white text-3xl sm:text-4xl md:text-[42px] leading-tight sm:leading-tight md:leading-tight mb-5">
            Revolutionizing Developer Microjobs
          </h2>
          <p className="text-lg text-body-color dark:text-white dark:opacity-90 leading-relaxed max-w-[800px] mx-auto">
            Current Status: <span className="font-semibold text-yellow-500">In Development</span> • Expected Launch: <span className="font-semibold">Q3 2025</span>
          </p>
        </div>
        
        {/* Problem & Solution */}
        <div className="flex flex-wrap -mx-4 mb-16">
          {/* Problem Statement */}
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <div className="border border-border p-8 rounded-lg shadow-lg h-full">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900 mb-6">
                <RocketLaunchIcon className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">The Problem</h3>
              <p className="text-body-color dark:text-white dark:opacity-90 mb-6 leading-relaxed">
                Developers face significant challenges in today's job market:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900 mr-3 mt-1">
                    <span className="text-red-600 dark:text-red-400 text-xs font-bold">1</span>
                  </span>
                  <p className="text-body-color dark:text-white dark:opacity-90">Time-consuming interview processes that don't accurately assess real-world skills</p>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900 mr-3 mt-1">
                    <span className="text-red-600 dark:text-red-400 text-xs font-bold">2</span>
                  </span>
                  <p className="text-body-color dark:text-white dark:opacity-90">Difficulty finding consistent income during job transitions or alongside full-time roles</p>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900 mr-3 mt-1">
                    <span className="text-red-600 dark:text-red-400 text-xs font-bold">3</span>
                  </span>
                  <p className="text-body-color dark:text-white dark:opacity-90">Lack of standardized environments for completing and evaluating coding tasks</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Our Solution */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-surface dark:bg-dark-secondary p-8 rounded-lg shadow-lg h-ful border border-border">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary bg-opacity-10 mb-6">
                <CodeBracketIcon className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Our Solution</h3>
              <p className="text-body-color dark:text-white dark:opacity-90 mb-6 leading-relaxed">
                SloopCode is a revolutionary microjob platform that enables developers to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mr-3 mt-1">
                    <span className="text-primary text-xs font-bold">1</span>
                  </span>
                  <p className="text-body-color dark:text-white dark:opacity-90">Pick and complete short, skills-focused projects without interviews or client negotiations</p>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mr-3 mt-1">
                    <span className="text-primary text-xs font-bold">2</span>
                  </span>
                  <p className="text-body-color dark:text-white dark:opacity-90">Work in standardized, pre-configured development environments with integrated VS Code</p>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary bg-opacity-20 mr-3 mt-1">
                    <span className="text-primary text-xs font-bold">3</span>
                  </span>
                  <p className="text-body-color dark:text-white dark:opacity-90">Receive fair, transparent compensation with quick payment processing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Progress & Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-8 text-center">Development Progress</h3>
          <div className="bg-dark-bg dark:bg-dark-secondary p-8 rounded-lg shadow-lg border border-border">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Feature</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Description</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <LockClosedIcon className="w-5 h-5 text-primary mr-3" />
                        <span className="font-medium text-gray-900 dark:text-white">Authentication</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">Secure user authentication and profile management</td>
                    <td className="px-4 py-4"><FeatureStatus status="completed" /></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <DocumentTextIcon className="w-5 h-5 text-primary mr-3" />
                        <span className="font-medium text-gray-900 dark:text-white">Job Explore</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">Browse and filter available microjobs by skill, difficulty, and compensation</td>
                    <td className="px-4 py-4"><FeatureStatus status="in-development" /></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <ServerIcon className="w-5 h-5 text-primary mr-3" />
                        <span className="font-medium text-gray-900 dark:text-white">Sloop Workspace</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">Docker-based development environments with VS Code Web IDE integration</td>
                    <td className="px-4 py-4"><FeatureStatus status="in-development" /></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <ClipboardDocumentCheckIcon className="w-5 h-5 text-primary mr-3" />
                        <span className="font-medium text-gray-900 dark:text-white">Project Submission</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">Automated and manual assessment of completed projects</td>
                    <td className="px-4 py-4"><FeatureStatus status="pending" /></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <BanknotesIcon className="w-5 h-5 text-primary mr-3" />
                        <span className="font-medium text-gray-900 dark:text-white">Payments</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">Secure deposit and payout system with multiple payment options</td>
                    <td className="px-4 py-4"><FeatureStatus status="pending" /></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <BookOpenIcon className="w-5 h-5 text-primary mr-3" />
                        <span className="font-medium text-gray-900 dark:text-white">Knowledge Base</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-300">Documentation, tutorials, and community resources</td>
                    <td className="px-4 py-4"><FeatureStatus status="in-development" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block text-base font-bold text-button-onPrimary bg-button-primary py-4 px-10 hover:shadow-lg hover:bg-opacity-90 rounded-md transition ease-in-up duration-300"
          >
            Join the Waitlist
          </a>
          <p className="mt-4 text-sm text-body-color dark:text-white dark:opacity-70">
            Be among the first to experience SloopCode when we launch
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;