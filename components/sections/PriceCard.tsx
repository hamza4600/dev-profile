export interface PricingPlan {
    title: string;
    memberLimit: string;
    monthlyPrice: number;
    yearlyPrice: number;
    description: string;
}

export interface PriceCardProps {
    plan: PricingPlan;
    isAnnual: boolean;
}

import Link from 'next/link';

const PriceCard = ({ plan, isAnnual }: PriceCardProps) => {
    const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice;
    const period = isAnnual ? 'year' : 'month';

    return (
        <li
            className='jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black'
            data-jos_animation='flip'
            data-jos_delay='0'
        >
            <h3 className='font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white'>
                {plan.title}
            </h3>
            <span className='text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                {plan.memberLimit}
            </span>

            <div className='my-5 h-[1px] w-full bg-[#DBD6CF]'></div>
            <h4 className='mb-4 font-dmSans text-5xl font-bold leading-none text-black transition-all duration-300 ease-linear group-hover:text-white md:text-6xl lg:text-7xl xl:text-[80px]'>
                ${price}
                <span className='text-lg font-semibold'>/Per {period}</span>
            </h4>
            <p className='mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white'>
                {plan.description}
            </p>
            <Link
                href='/pricing'
                className='button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-black group-hover:border-colorOrangyRed group-hover:text-white'
            >
                Choose the plan
            </Link>
        </li>
    );
};

export default PriceCard;