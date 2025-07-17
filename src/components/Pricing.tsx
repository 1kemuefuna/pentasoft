import React from 'react';

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  recommended?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  description,
  features,
  buttonText,
  recommended = false,
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div
        className={`bg-white dark:bg-dark-bg rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 ${
          recommended ? 'z-20 shadow-xl' : ''
        }`}
      >
        {recommended && (
          <span className="text-primary font-semibold text-xs py-1 px-4 bg-primary bg-opacity-10 inline-block rounded-full absolute top-4 right-4">
            Recommended
          </span>
        )}
        <div>
          <span className="font-semibold text-lg text-primary block mb-4">
            {name}
          </span>
          <h2 className="font-bold text-dark dark:text-white mb-5 text-[42px]">
            {price}
            <span className="text-base text-body-color dark:text-white dark:opacity-70 font-medium">
              / month
            </span>
          </h2>
          <p className="text-base text-body-color dark:text-white dark:opacity-70 pb-8 mb-8 border-b border-[#F2F2F2] dark:border-dark-bg">
            {description}
          </p>
          <div className="mb-7">
            {features.map((feature, index) => (
              <p
                key={index}
                className="text-base text-body-color dark:text-white dark:opacity-70 leading-loose mb-1 flex items-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="fill-current text-primary mr-3"
                >
                  <path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z" />
                  <path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z" />
                </svg>
                {feature}
              </p>
            ))}
          </div>
          <a
            href="#"
            className={`w-full block text-base font-semibold text-center py-4 px-[30px] rounded-md transition ${recommended
              ? 'text-white bg-primary hover:bg-opacity-90'
              : 'text-primary bg-transparent hover:bg-primary hover:text-white border border-primary'
              }`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Pricing Plans
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark dark:text-white mb-4">
                Flexible Pricing for All Needs
              </h2>
              <p className="text-lg text-body-color dark:text-white dark:opacity-70">
                Choose the plan that works best for your business. All plans include core features with different usage limits.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          <PricingPlan
            name="Starter"
            price="$29"
            description="Perfect for small teams or individuals just getting started."
            features={[
              "Up to 5 users",
              "Basic analytics",
              "1GB storage",
              "Email support",
              "Basic integrations",
            ]}
            buttonText="Get Started"
          />

          <PricingPlan
            name="Business"
            price="$79"
            description="Ideal for growing businesses with more advanced needs."
            features={[
              "Up to 20 users",
              "Advanced analytics",
              "10GB storage",
              "Priority email support",
              "Advanced integrations",
              "Custom reporting",
            ]}
            buttonText="Get Started"
            recommended={true}
          />

          <PricingPlan
            name="Enterprise"
            price="$149"
            description="For large organizations requiring maximum performance."
            features={[
              "Unlimited users",
              "Premium analytics",
              "Unlimited storage",
              "24/7 phone & email support",
              "All integrations",
              "Custom development",
              "Dedicated account manager",
            ]}
            buttonText="Contact Us"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;