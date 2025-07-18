import React from 'react';
import { HeartIcon, GlobeAltIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface VisionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const VisionItem: React.FC<VisionProps> = ({ icon, title, description }) => {
  return (
    <div className="w-full md:w-1/2 px-4 mb-10">
      <div className="p-8 bg-surface dark:bg-dark rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="mb-7 relative z-10 w-[70px] h-[70px] flex items-center justify-center rounded-md bg-primary">
          {icon}
          <span className="absolute top-0 right-0 -z-1">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#4A6CF7" fillOpacity="0.1" />
            </svg>
          </span>
        </div>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{title}</h3>
        <p className="text-body-color dark:text-white dark:opacity-90 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="pt-[100px] pb-[90px] bg-dark dark:bg-dark">
      <div className="container m-auto px-4 md:px-12">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="mb-[60px] max-w-[720px] mx-auto text-center">
              <span className="font-semibold text-lg text-primary mb-2 block">
                About Us
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark dark:text-white mb-4">
                Building Technology That Serves Humanity
              </h2>
              <p className="text-lg leading-relaxed text-body-color dark:text-white dark:opacity-90">
                At Pentasoft, we create bespoke solutions that touch people's hearts and transform lives. Our mission is to develop innovative products that address real human needs and make a meaningful difference in the world we share.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-stretch mb-12">
          <VisionItem
            icon={
              <HeartIcon className="w-8 h-8 text-white" />
            }
            title="Our Mission"
            description="We create technology with soul. Every application we develop is designed with deep empathy for human needs, focusing on solutions that enhance well-being, connection, and quality of life. We believe technology should serve humanity, not the other way around."
          />

          <VisionItem
            icon={
              <GlobeAltIcon className="w-8 h-8 text-white" />
            }
            title="Our Vision"
            description="We envision a world where technology brings people together rather than isolating them. Our products aim to foster genuine human connection, support sustainable living, and create positive social impact. We're building a future where technology serves the highest good of all."
          />
        </div>

        <div className="flex flex-wrap justify-center items-stretch">
          <VisionItem
            icon={
              <SparklesIcon className="w-8 h-8 text-white" />
            }
            title="Our Approach"
            description="We take a holistic approach to product development, considering not just functionality but emotional resonance. Our team combines technical expertise with deep understanding of human psychology and social dynamics to create solutions that feel intuitive and meaningful to users."
          />

          <VisionItem
            icon={
              <UserGroupIcon className="w-8 h-8 text-white" />
            }
            title="Future Plans"
            description="We're expanding our portfolio of human-centered applications, with upcoming projects focused on mental health support, community building, and sustainable living. Our roadmap includes innovative solutions that leverage technology to address the most pressing human needs of our time."
          />
        </div>
      </div>
    </section>
  );
};

export default About;