import React from 'react';

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
    <section id="features" className="pt-[120px] pb-[90px]">
      <div className="container m-auto">
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

        <div className="flex flex-wrap mx-[-16px]">
          <SingleFeature
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.0375 1.2374C11.8125 -0.9376 2.6625 5.5124 0.4875 14.7374C-0.6375 19.3499 0.4125 24.2249 3.3 27.9749C6.1875 31.7249 10.5375 33.9374 15.1875 34.1249C15.4125 34.1249 15.6375 34.1249 15.8625 34.1249C19.5375 34.1249 23.1 32.8499 26.025 30.4124C26.475 30.0374 26.5125 29.3624 26.1375 28.9124C25.7625 28.4624 25.0875 28.4249 24.6375 28.7999C21.15 31.7999 16.65 32.9999 12.225 31.8749C8.2125 30.8624 4.9125 28.2374 3.1875 24.5249C1.4625 20.8124 1.5 16.6499 2.5125 12.6374C4.3875 4.7624 12.3 -0.8626 20.2125 0.9749C24.1125 1.9499 27.4125 4.5374 29.175 8.2124C30.9375 11.8874 30.9375 16.0124 29.9625 20.0249C29.6625 21.1124 28.3875 22.9499 27.1125 22.7999C26.1375 22.6874 25.5375 21.4499 25.5375 19.9124V10.9499C25.5375 10.3499 25.0875 9.8999 24.4875 9.8999C23.8875 9.8999 23.4375 10.3499 23.4375 10.9499V13.4999C23.4375 13.4999 23.2875 13.4999 23.1375 13.4999C21.5625 13.1624 19.95 13.6499 18.7875 14.8499C17.6625 16.0124 17.1 17.5499 17.1 19.1249C17.1 21.7499 18.975 24.1499 21.4125 24.7124C22.95 25.0499 24.6 24.7499 25.8375 23.8499C26.1 24.5999 26.55 25.2374 27.225 25.6874C28.35 26.4374 29.8125 26.5499 31.2 26.2499C32.7 25.9124 33.9 24.5999 34.425 22.5749C35.5875 17.8124 35.5125 12.7874 33.4125 8.2124C31.35 3.7124 27.4125 0.5624 22.65 0.0374C22.1625 -0.0376 21.6 -0.0001 21.0375 1.2374ZM21.9375 22.6874C20.3625 22.3124 19.2 20.8499 19.2 19.1249C19.2 18.1499 19.5375 17.2499 20.2125 16.5749C20.8125 15.9749 21.6375 15.5999 22.5 15.5999C22.6875 15.5999 22.875 15.5999 23.0625 15.6374C23.25 15.6749 23.3625 15.7124 23.4 15.7124V19.8749C23.4 20.4749 23.625 21.0374 24.0375 21.4124C24.4125 21.7499 24.9 21.9749 25.4625 21.9749C25.5 21.9749 25.5375 21.9749 25.575 21.9749C24.7875 22.4999 23.3625 23.0249 21.9375 22.6874Z"
                  fill="white"
                />
              </svg>
            }
            title="Email Management"
            description="Powerful email management tools to help you organize and prioritize your communications efficiently."
          />

          <SingleFeature
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.2625 9.36249C29.5875 8.68749 28.725 8.36249 27.825 8.36249H27.0375V7.57499C27.0375 5.54999 25.3875 3.89999 23.3625 3.89999H12.6375C10.6125 3.89999 8.9625 5.54999 8.9625 7.57499V8.36249H8.175C7.275 8.36249 6.4125 8.68749 5.7375 9.36249C5.0625 10.0375 4.7375 10.9 4.7375 11.8V26.775C4.7375 28.65 6.3 30.2125 8.175 30.2125H27.825C29.7 30.2125 31.2625 28.65 31.2625 26.775V11.8C31.2625 10.9 30.9375 10.0375 30.2625 9.36249ZM10.8375 7.57499C10.8375 6.57499 11.6375 5.77499 12.6375 5.77499H23.3625C24.3625 5.77499 25.1625 6.57499 25.1625 7.57499V8.36249H10.8375V7.57499ZM29.3625 26.775C29.3625 27.6 28.65 28.3125 27.825 28.3125H8.175C7.35 28.3125 6.6375 27.6 6.6375 26.775V11.8C6.6375 11.3875 6.7875 11.0125 7.05 10.75C7.3125 10.4875 7.6875 10.3375 8.1 10.3375H27.9C28.3125 10.3375 28.6875 10.4875 28.95 10.75C29.2125 11.0125 29.3625 11.3875 29.3625 11.8V26.775Z"
                  fill="white"
                />
                <path
                  d="M24.975 14.0999C24.6 13.7249 23.925 13.7249 23.55 14.0999L16.5375 21.1124L12.4125 16.9874C12.0375 16.6124 11.3625 16.6124 10.9875 16.9874C10.6125 17.3624 10.6125 18.0374 10.9875 18.4124L15.8625 23.2874C16.05 23.4749 16.2375 23.5499 16.5375 23.5499C16.7625 23.5499 17.025 23.4749 17.2125 23.2874L24.975 15.5249C25.35 15.1499 25.35 14.4749 24.975 14.0999Z"
                  fill="white"
                />
              </svg>
            }
            title="Task Management"
            description="Organize and track your tasks with our intuitive task management system. Never miss a deadline again."
          />

          <SingleFeature
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 0C8.0775 0 0 8.0775 0 18C0 27.9225 8.0775 36 18 36C27.9225 36 36 27.9225 36 18C36 8.0775 27.9225 0 18 0ZM18 33.75C9.3225 33.75 2.25 26.6775 2.25 18C2.25 9.3225 9.3225 2.25 18 2.25C26.6775 2.25 33.75 9.3225 33.75 18C33.75 26.6775 26.6775 33.75 18 33.75Z"
                  fill="white"
                />
                <path
                  d="M18 7.875C17.3775 7.875 16.875 8.3775 16.875 9V18C16.875 18.6225 17.3775 19.125 18 19.125H27C27.6225 19.125 28.125 18.6225 28.125 18C28.125 17.3775 27.6225 16.875 27 16.875H19.125V9C19.125 8.3775 18.6225 7.875 18 7.875Z"
                  fill="white"
                />
              </svg>
            }
            title="Time Tracking"
            description="Track time spent on projects and tasks to improve productivity and billing accuracy for your clients."
          />

          <SingleFeature
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34.05 16.5H31.5V12.75C31.5 12.15 31.05 11.7 30.45 11.7H24.75C24.15 11.7 23.7 12.15 23.7 12.75V16.5H19.95V5.25C19.95 4.65 19.5 4.2 18.9 4.2H13.2C12.6 4.2 12.15 4.65 12.15 5.25V16.5H8.25V9C8.25 8.4 7.8 7.95 7.2 7.95H1.5C0.9 7.95 0.45 8.4 0.45 9V16.5H1.95C2.55 16.5 3 16.95 3 17.55C3 18.15 2.55 18.6 1.95 18.6H0.45V24.3C0.45 24.9 0.9 25.35 1.5 25.35H7.2C7.8 25.35 8.25 24.9 8.25 24.3V18.6H12.15V29.85C12.15 30.45 12.6 30.9 13.2 30.9H18.9C19.5 30.9 19.95 30.45 19.95 29.85V18.6H23.7V22.35C23.7 22.95 24.15 23.4 24.75 23.4H30.45C31.05 23.4 31.5 22.95 31.5 22.35V18.6H34.05C34.65 18.6 35.1 18.15 35.1 17.55C35.1 16.95 34.65 16.5 34.05 16.5ZM6.15 23.25H2.55V10.05H6.15V23.25ZM18 28.8H14.25V6.3H18V28.8ZM29.4 21.3H25.8V13.8H29.4V21.3Z"
                  fill="white"
                />
              </svg>
            }
            title="Analytics"
            description="Powerful analytics tools to help you understand your business performance and make data-driven decisions."
          />

          <SingleFeature
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.375 5.625H5.625C4.42875 5.625 3.375 6.60375 3.375 7.875V28.125C3.375 29.3213 4.42875 30.375 5.625 30.375H30.375C31.5713 30.375 32.625 29.3213 32.625 28.125V7.875C32.625 6.60375 31.5713 5.625 30.375 5.625ZM30.375 28.125H5.625V7.875H30.375V28.125ZM18 10.125C14.4 10.125 11.25 12.7237 11.25 16.875C11.25 21.0263 14.4 23.625 18 23.625C21.6 23.625 24.75 21.0263 24.75 16.875C24.75 12.7237 21.6 10.125 18 10.125ZM18 21.375C15.7275 21.375 13.5 19.6763 13.5 16.875C13.5 14.0738 15.7275 12.375 18 12.375C20.2725 12.375 22.5 14.0738 22.5 16.875C22.5 19.6763 20.2725 21.375 18 21.375ZM18 14.625C17.0888 14.625 16.3125 15.4013 16.3125 16.3125C16.3125 17.2237 17.0888 18 18 18C18.9112 18 19.6875 17.2237 19.6875 16.3125C19.6875 15.4013 18.9112 14.625 18 14.625Z"
                  fill="white"
                />
              </svg>
            }
            title="Secure Storage"
            description="Keep your data safe with our secure cloud storage solution. Access your files from anywhere, anytime."
          />

          <SingleFeature
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 0C8.0775 0 0 8.0775 0 18C0 27.9225 8.0775 36 18 36C27.9225 36 36 27.9225 36 18C36 8.0775 27.9225 0 18 0ZM18 33.75C9.3225 33.75 2.25 26.6775 2.25 18C2.25 9.3225 9.3225 2.25 18 2.25C26.6775 2.25 33.75 9.3225 33.75 18C33.75 26.6775 26.6775 33.75 18 33.75Z"
                  fill="white"
                />
                <path
                  d="M18.0002 15.75C18.6227 15.75 19.1252 15.2475 19.1252 14.625V9C19.1252 8.3775 18.6227 7.875 18.0002 7.875C17.3777 7.875 16.8752 8.3775 16.8752 9V14.625C16.8752 15.2475 17.3777 15.75 18.0002 15.75Z"
                  fill="white"
                />
                <path
                  d="M18.0002 19.125C17.3777 19.125 16.8752 19.6275 16.8752 20.25V27C16.8752 27.6225 17.3777 28.125 18.0002 28.125C18.6227 28.125 19.1252 27.6225 19.1252 27V20.25C19.1252 19.6275 18.6227 19.125 18.0002 19.125Z"
                  fill="white"
                />
                <path
                  d="M27 16.875H21.375C20.7525 16.875 20.25 17.3775 20.25 18C20.25 18.6225 20.7525 19.125 21.375 19.125H27C27.6225 19.125 28.125 18.6225 28.125 18C28.125 17.3775 27.6225 16.875 27 16.875Z"
                  fill="white"
                />
                <path
                  d="M14.625 16.875H9C8.3775 16.875 7.875 17.3775 7.875 18C7.875 18.6225 8.3775 19.125 9 19.125H14.625C15.2475 19.125 15.75 18.6225 15.75 18C15.75 17.3775 15.2475 16.875 14.625 16.875Z"
                  fill="white"
                />
              </svg>
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