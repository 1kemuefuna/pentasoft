import React from 'react';

interface BlogPostProps {
  image: string;
  category: string;
  title: string;
  description: string;
  date: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
}

const SingleBlogPost: React.FC<BlogPostProps> = ({
  image,
  category,
  title,
  description,
  date,
  authorName,
  authorRole,
  authorImage,
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
        <div className="rounded overflow-hidden mb-8">
          <a href="#" className="block">
            <img
              src={image}
              alt="blog image"
              className="w-full transition group-hover:scale-110 group-hover:rotate-6 h-[200px] object-cover"
            />
          </a>
        </div>
        <div>
          <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
            {category}
          </span>
          <h3>
            <a
              href="#"
              className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark dark:text-white hover:text-primary"
            >
              {title}
            </a>
          </h3>
          <p className="text-base text-body-color dark:text-white dark:opacity-90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <section id="blog" className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Blog
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark dark:text-white mb-4">
                Latest Articles & Resources
              </h2>
              <p className="text-lg text-body-color dark:text-white dark:opacity-70">
                Stay updated with the latest trends, tips, and insights in software development and technology.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <SingleBlogPost
            image="/images/blog-01.svg"
            category="Technology"
            title="The Future of AI in Business Software"
            description="Explore how artificial intelligence is transforming business software and creating new opportunities for innovation and efficiency."
            date="Jan 05, 2023"
            authorName="David Miller"
            authorRole="Content Writer"
            authorImage="/images/author-01.svg"
          />

          <SingleBlogPost
            image="/images/blog-02.svg"
            category="Development"
            title="Best Practices for Secure Software Development"
            description="Learn the essential security practices that every development team should implement to protect their applications from vulnerabilities."
            date="Feb 12, 2023"
            authorName="Sarah Johnson"
            authorRole="Security Expert"
            authorImage="/images/author-02.svg"
          />

          <SingleBlogPost
            image="/images/blog-03.svg"
            category="Business"
            title="How to Choose the Right Software Solution for Your Business"
            description="A comprehensive guide to evaluating, selecting, and implementing the perfect software solution for your specific business needs."
            date="Mar 23, 2023"
            authorName="Michael Chen"
            authorRole="Business Analyst"
            authorImage="/images/author-03.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;