"use client"
import Link from "next/link";
import useTabs from "@/hooks/useTabs";
import AccordionItem from "@/components/sections/AccordionItem";

const faqItems = [
    {
      question: "How do I start AI SaaS?",
      answer: "Go to the our official website and require users to create an account. You'll need to provide some basic information and agree to our terms and conditions."
    },
    {
      question: "Can I customize AI SaaS solutions?",
      answer: "Go to the our official website and require users to create an account. You'll need to provide some basic information and agree to our terms and conditions."
    },
    {
      question: "How can AI benefit my business?",
      answer: "Go to the our official website and require users to create an account. You'll need to provide some basic information and agree to our terms and conditions."
    }
];

const FaqSection = () => {
    const [activeIndex, handleAccordion] = useTabs();

    return (
        <section className='faq-section'>
            <div className='pb-20 xl:pb-[150px]'>
                <div className='global-container'>
                    <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2'>
                        {/* FAQ Left Block */}
                        <FaqIntroBlock />

                        {/* FAQ Right Block */}
                        <div
                            className='jos md:ml-10 lg:ml-20 xl:ml-32'
                            data-jos_animation='fade-left'
                        >
                            <ul className='accordion'>
                                {faqItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        item={item}
                                        isActive={activeIndex === index}
                                        onClick={() => handleAccordion(index)}
                                        index={index}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Separate component for the intro block
const FaqIntroBlock = () => (
    <div
        className='jos flex flex-col'
        data-jos_animation='fade-right'
    >
        <div className='mb-6'>
            <div className='mx-auto md:mx-0 md:max-w-none'>
                <h2>Freely ask us for more information</h2>
            </div>
        </div>
        <div className='text-lg leading-[1.4] lg:text-[21px]'>
            <p className='mb-7 last:mb-0'>
                Our AI SaaS solutions can be quickly deployed, enabling
                users to start benefiting from AI capabilities without
                lengthy setup and development times in fast-paced
                industries.
            </p>
            <Link
                href='/faq-1'
                className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
            >
                Ask your questions
            </Link>
        </div>
    </div>
);

export default FaqSection;