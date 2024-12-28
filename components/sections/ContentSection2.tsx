import Image from "next/image";

interface CheckListItemProps {
    text: string;
}

const CheckListItem = ({ text }: CheckListItemProps) => (
    <li className='flex items-start gap-x-3'>
        <div className='mt-[2.5px] h-[30px] w-[30px]'>
            <Image
                src='/img_placeholder/th-1/check-circle.svg'
                alt='check-circle'
                width='30'
                height='30'
                className='h-full w-full'
            />
        </div>
        {text}
    </li>
);
interface ContentSectionProps {
    image: {
        src: string;
        alt: string;
    };
    title: string;
    description: string;
    checkListItems: string[];
}

const ContentSection2 = ({
    image,
    title,
    description,
    checkListItems,
}: ContentSectionProps) => {
    return (
        <section id='content-section-2' className="mb-10">
            <div className='pb-20 xl:pb-[150px]'>
                <div className='global-container'>
                    <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32'>
                        {/* Image Block */}
                        <div
                            className='jos order-2 overflow-hidden rounded-md'
                            data-jos_animation='fade-left'
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width='526'
                                height='450'
                                className='h-auto w-full'
                            />
                        </div>

                        {/* Content Block */}
                        <div className='jos order-1' data-jos_animation='fade-right'>
                            <div className='mb-6'>
                                <h2>{title}</h2>
                            </div>
                            <div className='text-lg leading-[1.4] lg:text-[21px]'>
                                <p className='mb-7 last:mb-0'>{description}</p>
                                <ul className='flex flex-col gap-y-5 font-dmSans text-xl leading-tight tracking-tighter text-black lg:mt-12 lg:text-[28px]'>
                                    {checkListItems.map((item, index) => (
                                        <CheckListItem key={index} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentSection2;