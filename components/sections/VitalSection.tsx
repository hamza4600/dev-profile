import Image from 'next/image';
import Link from 'next/link';

const services: ServiceItem[] = [
    {
        id: 1,
        title: 'Resource Flexibility',
        description: 'This is an excellent option for people & small businesses who are starting out.',
        iconBlack: '/img_placeholder/th-1/service-icon-black-1.svg',
        iconOrange: '/img_placeholder/th-1/service-icon-orange-1.svg',
    },
    {
        id: 2,
        title: 'Managed Services',
        description: 'This is an excellent option for people & small businesses who are starting out.',
        iconBlack: '/img_placeholder/th-1/service-icon-black-2.svg',
        iconOrange: '/img_placeholder/th-1/service-icon-orange-2.svg',
    },
    {
        id: 3,
        title: 'Web-Based Access',
        description: 'This is an excellent option for people & small businesses who are starting out.',
        iconBlack: '/img_placeholder/th-1/service-icon-black-3.svg',
        iconOrange: '/img_placeholder/th-1/service-icon-orange-3.svg',
    },
    {
        id: 4,
        title: 'Resource Flexibility',
        description: 'This is an excellent option for people & small businesses who are starting out.',
        iconBlack: '/img_placeholder/th-1/service-icon-black-4.svg',
        iconOrange: '/img_placeholder/th-1/service-icon-orange-4.svg',
    },
];

interface ServiceItem {
    id: number;
    title: string;
    description: string;
    iconBlack: string;
    iconOrange: string;
}

const ServiceCard = ({ title, description, iconBlack, iconOrange }: ServiceItem) => {

    return (
        <li className='group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black'>
            {/* Service Icon */}
            <div className='relative mb-9 h-[70px] w-[70px]'>
                <Image
                    src={iconBlack}
                    alt={`${title} icon`}
                    width={70}
                    height={70}
                />
                <Image
                    src={iconOrange}
                    alt={`${title} icon hover`}
                    width={70}
                    height={70}
                    className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100'
                />
            </div>

            {/* Service Title */}
            <h3 className='mb-4 block text-2xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[38px]'>

                {title}
            </h3>

            {/* Service Description */}
            <p className='mb-12 duration-300 group-hover:text-white'>
                {description}
            </p>

            {/* Arrow Link */}
            <Link
                href='/service-details'
                className='relative inline-block h-[30px] w-[30px] duration-300'
            >
                <Image
                    src='/img_placeholder/th-1/arrow-right-black.svg'
                    alt='arrow-right'
                    width={30}
                    height={30}
                />
                <Image
                    src='/img_placeholder/th-1/arrow-right-orange.svg'
                    alt='arrow-right-hover'
                    width={30}
                    height={30}
                    className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100'
                />
            </Link>
        </li>
    );
}

const VitalSection = () => {
    return (
        <section id='section-service'>
            <div className='pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]'>
                <div className='global-container'>
                    {/* Section Header */}
                    <div className='jos mb-10 lg:mb-16 xl:mb-20'>
                        <div className='md:max-w-sm lg:max-w-xl xl:max-w-[746px]'>
                            <h2>Core features that make it valuable</h2>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <ul className='jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4'>
                        {services.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default VitalSection;