import React from 'react';
import { EnvelopeIcon, ClipboardDocumentCheckIcon, ClockIcon, ChartBarIcon, LockClosedIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SingleFeature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="mb-14">
        <div className="mb-7 relative z-10 w-[70px] h-[70px] flex items-center justify-center rounded-md bg-primary">
          {icon}
          <span className="absolute top-0 right-0 -z-1">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#4A6CF7" fillOpacity="0.1" />
            </svg>
          </span>
        </div>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{title}</h3>
        <p className="text-body-color dark:text-white dark:opacity-90">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="pt-[100px] pb-[90px]">
      <div className="container m-auto px-4 md:px-12">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="mb-[60px] max-w-[620px] mx-auto text-center">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Features
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark dark:text-white mb-4">
                Main Features of Our Solution
              </h2>
              <p className="text-lg leading-relaxed text-body-color dark:text-white dark:opacity-90">
                Our software provides powerful features to help your business grow and succeed in today's competitive market.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          <SingleFeature
            icon={
              <EnvelopeIcon className="w-8 h-8 text-dark" />
            }
            title="Email Management"
            description="Powerful email management tools to help you organize and prioritize your communications efficiently."
          />

          <SingleFeature
            icon={
              <ClipboardDocumentCheckIcon className="w-8 h-8 text-dark" />
            }
            title="Task Management"
            description="Organize and track your tasks with our intuitive task management system. Never miss a deadline again."
          />

          <SingleFeature
            icon={
              <ClockIcon className="w-8 h-8 text-dark" />
            }
            title="Time Tracking"
            description="Track time spent on projects and tasks to improve productivity and billing accuracy for your clients."
          />

          <SingleFeature
            icon={
              <ChartBarIcon className="w-8 h-8 text-dark" />
            }
            title="Analytics"
            description="Powerful analytics tools to help you understand your business performance and make data-driven decisions."
          />

          <SingleFeature
            icon={
              <LockClosedIcon className="w-8 h-8 text-dark" />
            }
            title="Secure Storage"
            description="Keep your data safe with our secure cloud storage solution. Access your files from anywhere, anytime."
          />

          <SingleFeature
            icon={
              <ArrowsPointingOutIcon className="w-8 h-8 text-dark" />
            }
            title="Integration"
            description="Seamlessly integrate with your favorite tools and services to create a unified workflow for your business."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;