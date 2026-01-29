import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Default Data (for SaasProducts) ---
const DEFAULT_SLIDES = [
  {
    id: "ticketrev",
    company: "TicketRev",
    logo: "https://cdn.prod.website-files.com/64e8a789efa42eaf8fe4d068/64e8b49e181622332d021cee_Logo.svg",
    logoText: "",
    heading: "How a buyer-first ticket marketplace startup quickly secured $1.1M in funding with Bubble.io",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64cc2c786d693702395f21b1_TicketRev-built-with-no-code-Airdev.jpg",
    imageTitle: "How a buyer-first ticket marketplace startup quickly secured $1.1M in funding with Bubble.io",
    url: "https://www.airdev.co/case-studies/ticketrev-marketplace-startup-bubble",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Marketplace app", color: "#00d4ff" },
      { label: "Timeline", value: "2 months", color: "#a960ee" },
      { label: "Key results", value: "$1.1M in pre-seed funding raised in 2 years", color: "#ff6b6b" },
    ]
  },
  {
    id: "consenna",
    company: "Consenna",
    logo: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/669a98f0f9d898fd7a42ee37_hp.webp",
    logoText: "",
    heading: "How Airdev helped the consultancy Consenna build a custom no-code marketplace for HP for Education to serve 30k schools across the UK",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635076a5905dd76065955f2c_hp-s%20(1).png",
    imageTitle: "How Airdev helped the consultancy Consenna build a custom no-code marketplace for HP for Education to serve 30k schools across the UK",
    url: "https://www.airdev.co/case-studies/consenna-hp-for-education-marketplace-no-code",
    customFields: [
      { label: "Business type", value: "Enterprise", color: "#635bff" },
      { label: "Product type", value: "Custom marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "3 months", color: "#a960ee" },
      { label: "Key results", value: "30k schools served", color: "#ff6b6b" },
    ]
  },
  {
    id: "kidsbook",
    company: "Kidsbook",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1768940559825x362227103494313200/kidsbook.png",
    logoText: "",
    heading: "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/635075037ab429484ab21afb_kidsbook%20(2).png",
    imageTitle: "How Airdev helped Kidsbook build a custom no-code marketplace in just 6 weeks to connect parents with kids activity providers",
    url: "https://www.airdev.co/case-studies/kidsbook-marketplace-app",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "2-sided marketplace", color: "#00d4ff" },
      { label: "Timeline", value: "6 weeks", color: "#a960ee" },
      { label: "Key results", value: "1000+ providers signed up", color: "#ff6b6b" },
    ]
  },
];


const DURATION = 6000; // 6 seconds per slide

interface Slide {
  id: string;
  company: string;
  logo: string;
  logoText: string;
  heading: string;
  description: string;
  image: string;
  imageTitle: string;
  url?: string;
  customFields: Array<{ label: string; value: string; color: string }>;
}

interface CaseStudiesProps {
  label?: string;
  description?: string;
  slides?: Slide[];
}

export const CaseStudies = ({ label, description, slides }: CaseStudiesProps = {}) => {
  const SLIDES = slides || DEFAULT_SLIDES;
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  // Using a key to force re-render of the progress bar animation
  const [progressKey, setProgressKey] = useState(0);
  const gridCols = SLIDES.length === 2 ? 'grid-cols-2' : SLIDES.length === 4 ? 'grid-cols-4' : 'grid-cols-3';

  useEffect(() => {
    // Initial start logic or any other side effects
    return () => {};
  }, []);

  const handleManualSwitch = (index: number) => {
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);
  };

  const activeSlide = SLIDES[activeIndex];
  // Determine slide direction (1 for forward/right, -1 for backward/left)
  const direction = activeIndex > prevIndex ? 1 : activeIndex < prevIndex ? -1 : 1;

  return (
    <section id="case-studies" className="relative py-24 bg-white overflow-hidden scroll-mt-20">

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Top Content */}
        <div className="max-w-3xl mb-8">
          <h3 id="case-studies-heading" className="scroll-mt-20 text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3">
            {label || "CASE STUDIES"}
          </h3>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#1a1a1a] mb-6">
            Built to scale
          </h2>
          <p className="text-[20px] text-[#425466] leading-relaxed mb-2 max-w-2xl">
            {description || "From MVPs that raised millions to enterprise platforms serving thousands of users."}
          </p>
        </div>

        {/* Bottom Logo Grid with Progress Bar - Full Width */}
        <div className={`border-t border-solid border-slate-200 border-l border-solid border-b border-solid border-r border-solid border-slate-200 grid ${gridCols} mb-12 lg:mb-16`}>
          {SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => handleManualSwitch(index)}
                className={`relative h-24 flex items-center justify-center ${index < SLIDES.length - 1 ? 'border-r border-solid border-slate-200' : ''} transition-all duration-300 bg-white hover:bg-slate-50`}
              >
                {/* Progress Line */}
                {isActive && (
                  <motion.div 
                    className="absolute -top-px left-0 right-0 h-[1px] bg-[#1265EF] z-30"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: DURATION / 1000, ease: "linear" }}
                    onAnimationComplete={() => {
                      // Only advance slide when progress bar finishes
                      if (isActive) {
                        setActiveIndex((prev) => {
                          setPrevIndex(prev);
                          return (prev + 1) % SLIDES.length;
                        });
                        setProgressKey((prev) => prev + 1);
                      }
                    }}
                    key={progressKey} // Force reset on slide change
                  />
                )}
                
                {/* Logo */}
                <div className="flex flex-col items-center justify-center w-full px-4">
                  <div className={`w-full flex items-center justify-center ${slide.id === 'consenna' ? 'h-12' : (slide.id === 'kidsbook' || slide.id === 'camphire') ? 'h-10' : 'h-9'}`}>
                    <img 
                      src={slide.logo} 
                      alt={slide.company} 
                      className={`h-full w-auto object-contain transition-all duration-300 
                        ${slide.id === 'dividend' ? 'max-h-5' : ''} 
                        ${slide.id === 'bubble' ? (slide.company === 'Tributi' ? 'max-h-5 mt-1' : 'max-h-6') : ''} 
                        ${slide.id === 'playground' ? (slide.company === 'My NFT Alerts' ? '' : 'mix-blend-multiply') : ''}
                        ${slide.id === 'ticketrev' ? 'max-h-6' : ''}
                        ${slide.id === 'kidsbook' ? 'max-h-9' : ''}
                        ${slide.id === 'consenna' ? 'max-h-[48px]' : ''}
                        ${slide.id === 'camphire' ? 'max-h-9' : ''}
                        ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}
                      `}
                    />
                  </div>
                  {slide.logoText && (
                    <p className={`text-[10px] text-gray-400 text-center font-medium whitespace-nowrap ${slide.id === 'bubble' && slide.company === 'Tributi' ? 'mt-0.5' : 'mt-1.5'}`}>
                      {slide.logoText}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Grid Content - Animated Switch */}
        <div className="min-h-[400px] mb-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Stats */}
            <div className="lg:col-span-4 relative h-[320px] lg:h-[400px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0 space-y-6 flex flex-col justify-center"
                >
                  {activeSlide.customFields && activeSlide.customFields.map((field, idx) => (
                    <div key={idx} className="relative">
                      <div className="text-[16px] text-gray-500 mb-1 pl-4">{field.label}</div>
                      <p className="text-[18px] font-semibold text-[#1a1a1a] leading-relaxed pl-4" style={{ borderLeft: `1px solid #00d4ff` }}>
                        {field.value}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Image Card */}
            <div className="lg:col-span-8 h-[320px] lg:h-[400px] relative overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div 
                  key={activeSlide.id}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  {activeSlide.url ? (
                    <a 
                      href={activeSlide.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <div className="w-full h-full relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                        <img 
                          src={activeSlide.image}
                          alt={activeSlide.company}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Strong Blue Tint Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/90 to-[#176AAF]/50 mix-blend-color opacity-100" />
                        {/* Darker gradient at bottom for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF]/90 via-[#176AAF]/40 to-transparent" />
                        {/* Title Overlay */}
                        {activeSlide.imageTitle && (
                          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                            <h3 className="text-white text-[20px] lg:text-[24px] font-semibold leading-tight">
                              {activeSlide.imageTitle}
                            </h3>
                          </div>
                        )}
                      </div>
                    </a>
                  ) : (
                    <div className="w-full h-full relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                      <img 
                        src={activeSlide.image}
                        alt={activeSlide.company}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Strong Blue Tint Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF] via-[#176AAF]/90 to-[#176AAF]/50 mix-blend-color opacity-100" />
                      {/* Darker gradient at bottom for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#176AAF]/90 via-[#176AAF]/40 to-transparent" />
                      {/* Title Overlay */}
                      {activeSlide.imageTitle && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                          <h3 className="text-white text-[20px] lg:text-[24px] font-semibold leading-tight">
                            {activeSlide.imageTitle}
                          </h3>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
