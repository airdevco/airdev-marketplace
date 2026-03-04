/**
 * Shared layout for marketing pages (Index, Saas, etc.).
 * All pages use the same landing components – design changes to those components
 * apply to every page using this layout. To make a design change apply only to one
 * page, use layoutOverrides (e.g. variant, className, or a custom section).
 */
"use client";

import {
  Navbar,
  Hero,
  CaseStudies,
  ClientLogoTicker,
  Testimonials,
  SaasCTA,
  ScreenshotShowcase,
  Footer,
  ComparisonTable,
  SampleProducts,
  Pricing,
} from "@/components/landing";
import type { MarketingPageContent } from "@/content/marketing-pages";

const COLFAX_FONT_STYLES = `
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238405098x558032232358736100/Colfax-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238390337x266305410589744440/Colfax-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238365698x537474310193827300/Colfax-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Colfax';
    src: url('https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238333088x971494408092793500/Colfax-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`;

export interface MarketingPageLayoutOverrides {
  /** Pass a custom Hero element to use a different design only on this page. */
  hero?: React.ReactNode;
  /** Pass custom section nodes to replace defaults (e.g. different SampleProducts layout). */
  sections?: Partial<{
    sampleProducts: React.ReactNode;
    caseStudies: React.ReactNode;
    pricing: React.ReactNode;
    testimonials: React.ReactNode;
  }>;
}

export interface MarketingPageLayoutProps {
  content: MarketingPageContent;
  /** Optional: use when you want a design change to NOT apply to all pages. */
  overrides?: MarketingPageLayoutOverrides;
  /** Optional: skip Colfax font and use default (e.g. for a one-off variant page). */
  useColfaxFont?: boolean;
}

export const MarketingPageLayout = ({
  content,
  overrides,
  useColfaxFont = true,
}: MarketingPageLayoutProps) => {
  const { hero, sampleProducts } = content;

  return (
    <>
      {useColfaxFont && (
        <style dangerouslySetInnerHTML={{ __html: COLFAX_FONT_STYLES }} />
      )}
      <div
        className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900"
        style={useColfaxFont ? { fontFamily: "'Colfax', sans-serif" } : undefined}
      >
        <Navbar links={content.navLinks} />
        <main>
          {overrides?.hero ?? (
            <Hero
              centerText={hero.centerText}
              title={hero.title}
              description={hero.description}
              showImages={hero.showImages}
              showButton={hero.showButton}
              buttonText={hero.buttonText}
              buttonLink={hero.buttonLink}
            />
          )}
          <ScreenshotShowcase screenshots={content.screenshotShowcaseUrls} />
          <div className="pt-16 pb-16">
            <ClientLogoTicker />
          </div>
          <ComparisonTable />
          {overrides?.sections?.sampleProducts ?? (
            <SampleProducts
              products={sampleProducts.products}
              label={sampleProducts.label}
              title={sampleProducts.title}
              description={sampleProducts.description}
              bgColor={sampleProducts.bgColor}
            />
          )}
          {overrides?.sections?.caseStudies ?? <CaseStudies slides={content.caseStudiesSlides} />}
          {overrides?.sections?.pricing ?? <Pricing />}
          {overrides?.sections?.testimonials ?? <Testimonials />}
          <SaasCTA
            title={content.cta?.title}
            description={content.cta?.description}
            buttonText={content.cta?.buttonText}
            buttonLink={content.cta?.buttonLink}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};
