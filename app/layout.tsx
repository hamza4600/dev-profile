'use client'
import localFont from 'next/font/local';
import { Inter , DM_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import JOS from "jos-animation";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
                
const DMSans = localFont({
  src: './../fonts/DMSans-Bold.woff2',
  variable: '--font-DMSans',
});

const ClashDisplay = localFont({
  src: './../fonts/ClashDisplay-Medium.woff2',
  variable: '--font-clash-display',
});

const Raleway = localFont({
  src: './../fonts/Raleway-Bold.woff2',
  variable: '--font-raleway',
});

const SpaceGrotesk = localFont({
  src: './../fonts/SpaceGrotesk-Bold.woff2',
  variable: '--font-space-grotesk',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  const jos_options = {
    passive: false,
    once: true,
    animation: 'fade-up',
    timingFunction: 'ease',
    threshold: 0,
    delay: 0.5,
    duration: 0.7,
    scrollDirection: 'down',
    rootMargin: '0% 0% 15% 0%',
  };

  useEffect(() => {
    JOS.init(jos_options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    JOS.refresh();
  }, [pathname]);
  
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${ClashDisplay.variable} ${Raleway.variable} ${SpaceGrotesk.variable} ${inter.variable} ${DMSans.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
