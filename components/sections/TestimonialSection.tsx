import { testimonials } from '@/components/sections/TestimonialCard';
import TestimonialCard from '@/components/sections/TestimonialCard';

const TestimonialSection = () => {
  return (
    <section className='testimonial-section'>
      <div className='bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
        <div className='global-container'>
          <SectionHeader />
          <TestimonialGrid />
        </div>
      </div>  
    </section>
  );
};

const SectionHeader = () => (
  <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
    <div className='mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]'>
      <h2 className='text-white'>
        Positive feedback from our users
      </h2>
    </div>
  </div>
);

const TestimonialGrid = () => (
  <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
    {testimonials.map((testimonial, index) => (
      <TestimonialCard 
        key={index} 
        testimonial={testimonial} 
      />
    ))}
  </div>
);

export default TestimonialSection;