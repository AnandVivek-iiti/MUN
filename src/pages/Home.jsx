import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { HeroSection } from "../components/hero-section";
import { WhatIsMun } from "../components/what-is-mun";
import { CountUpSection } from "../components/count-up-section";
import { VisionSection } from "../components/vision-section";
import { TimelineSection } from "../components/timeline-section";
import { TimelineSectionWithoutDate } from "../components/timelinewithoutdates";
import { SecretaryLetterSection } from "../components/secretary-letter-section";
import { BrochureSection } from "../components/brochure-section";
import Footer from "../components/footer";
import { FloatingParticles } from "../components/floating-particles";
import { MunEdition } from "../components/mun-edition";
import { ProgressBar } from "../components/progress-bar";
import TimeToGo from "../components/time-to-go";

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      // console.log('Scroll Progress:', progress)
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FloatingParticles />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00ffff] rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00ffff] rounded-full mix-blend-screen filter blur-xl opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00ffff] rounded-full mix-blend-screen filter blur-xl opacity-10 animate-pulse delay-500"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#00ffff] rounded-full w-1 h-1 animate-ping"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* <Navbar /> */}
        <div
          className="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
        <HeroSection />
        <WhatIsMun />
        <CountUpSection />
        <MunEdition />
        <VisionSection />
        <TimeToGo />
        <TimelineSectionWithoutDate />
        <SecretaryLetterSection />
        <BrochureSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
