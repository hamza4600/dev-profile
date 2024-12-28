import dynamic from "next/dynamic";

// import ContentSectionOne from "@/components/sections/ContentSec1";
const ContentSectionOne = dynamic(() => import("@/components/sections/ContentSec1"));

// import ContentSection2 from "@/components/sections/ContentSection2";
const ContentSection2 = dynamic(() => import("@/components/sections/ContentSection2"));

// import HeroSection from "@/components/sections/HeroSection";
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"));

// import VitalSection from "@/components/sections/VitalSection";
const VitalSection = dynamic(() => import("@/components/sections/VitalSection"));

// import VideoSection from "@/components/sections/ViedoSection";
const VideoSection = dynamic(() => import("@/components/sections/ViedoSection"));

// import PriceSection from "@/components/sections/PriceSection";
const PriceSection = dynamic(() => import("@/components/sections/PriceSection"));

// import FaqSection from "@/components/sections/FaqSection";
const FaqSection = dynamic(() => import("@/components/sections/FaqSection"));

// import TestimonialSection from "@/components/sections/TestimonialSection";
const TestimonialSection = dynamic(() => import("@/components/sections/TestimonialSection"));

import { Metadata } from "next";

// ... imports ...

export const metadata: Metadata = {
  title: 'AI SaaS Solutions | Your Company Name',
  description: 'Discover our AI-powered SaaS solutions for quick deployment and seamless integration. Transform your business with ready-to-use AI capabilities and cost-effective implementations.',
  keywords: 'AI SaaS, artificial intelligence, quick deployment, business solutions, AI integration, machine learning',
  openGraph: {
    title: 'AI SaaS Solutions | Your Company Name',
    description: 'Transform your business with our AI-powered SaaS solutions. Quick deployment, seamless integration, and ready-to-use AI capabilities.',
    type: 'website',
    url: 'https://yourwebsite.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI SaaS Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SaaS Solutions | Your Company Name',
    description: 'Transform your business with our AI-powered SaaS solutions. Quick deployment, seamless integration, and ready-to-use AI capabilities.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
}

// ... rest of the code ...
export default function Home() {
  return (
    <div className="page-wrapper relative z-[1] pb-10 xl:pb-20 mb-10">
      <HeroSection />
      <VitalSection />
      <ContentSectionOne />
      <ContentSection2
        image={{
          src: '/content-image-1.webp',
          alt: 'content-image-2',
        }}
        title="Providing quick deploy solutions"
        description="Our AI SaaS solutions can be quickly deployed, enabling users to start benefiting from AI capabilities without lengthy setup and development times in fast-paced industries."
        checkListItems={[
          "Ready-to-use AI capabilities system",
          "Users can quickly integrate AI features",
          "Time savings translate to cost savings"
        ]}
      />
      <VideoSection />
      <PriceSection />
      <FaqSection />
      <TestimonialSection />
    </div>
  );
}
