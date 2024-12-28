import Image from 'next/image';
export interface ContentSectionProps {
    id: string;
    title: string;
    description: string[];
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    imagePosition?: 'left' | 'right';
  }

export function ContentBlock({
  id,
  title,
  description,
  image,
  imagePosition = 'left'
}: ContentSectionProps) {
  const isImageLeft = imagePosition === 'left';

  return (
    <section id={id}>
      <div className='pb-20 xl:pb-[150px]'>
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32'>
            {/* Image Block */}
            <div
              className={`jos overflow-hidden rounded-md ${
                isImageLeft ? 'order-2 md:order-1' : 'order-2'
              }`}
              data-jos_animation='fade-left'
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className='h-auto w-full'
              />
            </div>

            {/* Content Block */}
            <div
              className={`jos ${
                isImageLeft ? 'order-1 md:order-2' : 'order-1'
              }`}
              data-jos_animation='fade-right'
            >
              <div className='mb-6'>
                <h2>{title}</h2>
              </div>
              <div className='text-lg leading-[1.4] lg:text-[21px]'>
                {description.map((paragraph, index) => (
                  <p key={index} className='mb-7 last:mb-0'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const contentSections: ContentSectionProps[] = [
    {
      id: 'content-section-1',
      title: 'Accessible to a wider audience',
      description: [
        'Advanced AI capabilities accessible to a broader audience, including small & medium-sized businesses and individuals who may not have the resources or expertise to develop.',
        'Advanced AI capabilities accessible to a broader audience, including small & medium-sized businesses and individuals who may not have the resources or expertise to develop.'
      ],
      image: {
        src: '/content-image-1.webp',
        alt: 'content-image-1',
        width: 526,
        height: 450
      },
      imagePosition: 'left'
    },
    // Add more content sections as needed
  ];

  export default function ContentSectionOne() {
    return (
      <>
        {contentSections.map((section) => (
          <ContentBlock key={section.id} {...section} />
        ))}
      </>
    );
  }