"use client"
import useTabs from "@/hooks/useTabs";
import PriceCard from "./PriceCard";
import { PricingPlan } from "./PriceCard";

const pricingPlans: PricingPlan[] = [
    {
        title: 'Beginner',
        memberLimit: 'Up to 10 members',
        monthlyPrice: 25,
        yearlyPrice: 240,
        description: 'This is an excellent option for people & small businesses who are starting out.',
    },
    {
        title: 'Starter',
        memberLimit: 'Up to 50 members',
        monthlyPrice: 89,
        yearlyPrice: 960,
        description: 'This plan is suitable for e-commerce stores as well as professional blogs.',
    },
    {
        title: 'Pro',
        memberLimit: 'Up to 100 members',
        monthlyPrice: 199,
        yearlyPrice: 1800,
        description: 'Ideal for handling complicated projects enterprise-level projects, and websites.',
    },
];

const PriceSection = () => {
    const [activeTab, handleTab] = useTabs();
    const isAnnual = activeTab === 1;

    return (
        <section className='pricing-section'>
            <div className='pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]'>
                <div className='global-container'>
                    <div className='jos mb-10 text-center lg:mb-12'>
                        <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]'>
                            <h2>Cost-effectively build any software</h2>
                        </div>
                    </div>

                    <div className='container mx-auto'>
                        <div className='jos flex justify-center' data-jos_animation='fade'>
                            <div className='inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold'>
                                <button
                                    className={`tab-button price-button ${activeTab === 0 ? 'active' : ''}`}
                                    onClick={() => handleTab(0)}
                                >
                                    Monthly
                                </button>
                                <button
                                    className={`tab-button price-button ${activeTab === 1 ? 'active' : ''}`}
                                    onClick={() => handleTab(1)}
                                >
                                    Annually
                                </button>
                            </div>
                        </div>

                        <div className='mt-12 lg:mt-16 xl:mt-20'>
                            <ul className='tab-content grid grid-cols-1 gap-6 md:grid-cols-3 xxl:grid-cols-3'>
                                {pricingPlans.map((plan, index) => (
                                    <PriceCard key={index} plan={plan} isAnnual={isAnnual} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceSection;