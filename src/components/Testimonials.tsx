import React from 'react';

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

const SingleTestimonial: React.FC<TestimonialProps> = ({
  content,
  name,
  role,
  image,
  rating,
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="bg-white dark:bg-dark-bg rounded-xl p-8 shadow-testimonial mb-10">
        <div className="flex items-center mb-5">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-500 mr-1">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                className={`fill-current ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
              >
                <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
              </svg>
            </span>
          ))}
        </div>
        <p className="text-body-color dark:text-white dark:opacity-90 text-base mb-8">
          {content}
        </p>
        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
            <img src={image} alt={name} className="w-full" />
          </div>
          <div>
            <h3 className="font-semibold text-dark dark:text-white text-lg">
              {name}
            </h3>
            <p className="text-body-color dark:text-white dark:opacity-70 text-sm">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-20 lg:pb-[120px]">
      <div className="container m-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Testimonials
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark dark:text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-body-color dark:text-white dark:opacity-70">
                Discover why businesses trust our software solutions to drive their success.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <SingleTestimonial
            content="PentaSoft transformed our business operations. Their software is intuitive, powerful, and backed by exceptional support. We've seen a 30% increase in productivity since implementation."
            name="Sarah Johnson"
            role="CTO, TechVision Inc."
            image="/images/author-01.svg"
            rating={5}
          />

          <SingleTestimonial
            content="The analytics capabilities are outstanding. We can now make data-driven decisions with confidence. The customization options allowed us to tailor the solution perfectly to our needs."
            name="Michael Chen"
            role="Operations Director, GlobalTech"
            image="/images/author-02.svg"
            rating={5}
          />

          <SingleTestimonial
            content="Implementation was smooth and the training provided was comprehensive. Our team was up and running in no time. The ROI has been impressive - we recouped our investment within 6 months."
            name="Emily Rodriguez"
            role="CEO, Innovate Solutions"
            image="/images/author-03.svg"
            rating={4}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;