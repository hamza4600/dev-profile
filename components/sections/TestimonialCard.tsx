import Image from 'next/image';

export interface Testimonial {
    rating: string;
    content: string;
    author: {
      name: string;
      role: string;
      image: string;
    };
    animation: {
      type: 'fade-left' | 'fade-right';
      delay: string;
    };
  }

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div
      className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'
      data-jos_animation={testimonial.animation.type}
      data-jos_delay={testimonial.animation.delay}
    >
      <div className='block'>
        <Image
          src={testimonial.rating}
          alt='rating'
          width='146'
          height='25'
        />
      </div>
      <p>{testimonial.content}</p>
      <AuthorInfo author={testimonial.author} />
    </div>
  );
};

const AuthorInfo = ({ author }: { author: Testimonial['author'] }) => (
  <div className='flex items-center gap-x-4'>
    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
      <Image
        src={author.image}
        alt='testimonial-img'
        width='60'
        height='60'
        className='h-full w-full object-cover object-center'
      />
    </div>
    <div className='flex flex-col gap-y-1'>
      <span className='block text-lg font-semibold leading-[1.6]'>
        {author.name}
      </span>
      <span className='block text-sm font-light leading-[1.4]'>
        {author.role}
      </span>
    </div>
  </div>
);

export const testimonials: Testimonial[] = [
    {
      rating: '/rating.svg',
      content: "This AI SaaS tool has revolutionized the way we process and analyze data. This is a game-changer for our business.",
      author: {
        name: "Max Weber",
        role: "HR Manager",
        image: "/001.png"
      },
      animation: {
        type: "fade-left",
        delay: "0.1"
      }
    },
    {
        rating: '/rating.svg',
        content: "This AI SaaS tool has revolutionized the way we process and analyze data. This is a game-changer for our business.",
        author: {
          name: "Max Weber",
          role: "HR Manager",
          image: "/001.png"
        },
        animation: {
          type: "fade-left",
          delay: "0.1"
        }
      },{
        rating: '/rating.svg',
        content: "This AI SaaS tool has revolutionized the way we process and analyze data. This is a game-changer for our business.",
        author: {
          name: "Max Weber",
          role: "HR Manager",
          image: "/001.png"
        },
        animation: {
          type: "fade-left",
          delay: "0.1"
        }
      },{
        rating: '/rating.svg',
        content: "This AI SaaS tool has revolutionized the way we process and analyze data. This is a game-changer for our business.",
        author: {
          name: "Max Weber",
          role: "HR Manager",
          image: "/001.png"
        },
        animation: {
          type: "fade-left",
          delay: "0.1"
        }
      },{
        rating: '/rating.svg',
        content: "This AI SaaS tool has revolutionized the way we process and analyze data. This is a game-changer for our business.",
        author: {
          name: "Max Weber",
          role: "HR Manager",
          image: "/001.png"
        },
        animation: {
          type: "fade-left",
          delay: "0.1"
        }
      },{
        rating: '/rating.svg',
        content: "This AI SaaS tool has revolutionized the way we process and analyze data. This is a game-changer for our business.",
        author: {
          name: "Max Weber",
          role: "HR Manager",
          image: "/001.png"
        },
        animation: {
          type: "fade-left",
          delay: "0.1"
        }
      }
];

export default TestimonialCard;