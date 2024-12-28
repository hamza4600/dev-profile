"use client"
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSection = () => {
    return (
        <section id="hero-section" className="bg-white mb-10">
            <div className='relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]'>
                <div className='global-container pt-10'>
                    {/* content  */}
                    <div className='mb-14 flex flex-col items-center text-center lg:mb-20'>
                        <h1 className='jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]'>
                            Simplify your SaaS solution with AI
                        </h1>
                        <p className='jos slide-from-bottom mb-11 max-w-[700px] text-lg font-semibold sm:text-xl xl:max-w-[980px]'>
                            Our AI SAAS tool is a cloud-based software delivery model. It helps businesses
                            forecast demand for products and services and optimize inventory management
                            and supply chain operations.
                        </p>
                        <div className='jos flex flex-wrap justify-center gap-6' data-jos_animation='fade'>
                            <Link
                                href='#'
                                className='button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                            >
                                Get started for free
                            </Link>
                            <Link
                                href='#'
                                className='button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className='jos hero-img overflow-hidden rounded-2xl bg-black' data-jos_animation='zoom'>
                        <Image
                            src='/hero-dashboard.webp'
                            alt='hero-dashboard'
                            width={1296}
                            height={640}
                            className='h-auto w-full'
                        />
                    </div>
                </div>

                <div className='my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20' />
                <div className='jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16'>
                    <p className='text-lg'>
                        Companies of all sizes trust us to find AI SaaS critical to their growth
                        and innovation
                    </p>
                </div>

                <div className='jos brand-slider w-full overflow-hidden' data-jos_animation='fade'>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        loop={true}
                        freeMode={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SwiperSlide key={num}>
                                <div className="flex items-center justify-center px-4">
                                    <Image
                                        src={`/001.png`}
                                        alt={`brand-${num}`}
                                        width='70'
                                        height='70'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* Background Gradients */}
                <div className='orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]' />
                <div className='orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]' />
            </div>
        </section>
    )
}

export default HeroSection;