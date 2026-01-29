"use client";

import {
  Navbar,
  Hero,
  CaseStudies,
  ClientLogoTicker,
  Stats,
  Testimonials,
  SaasCTA,
  ScreenshotShowcase,
  Footer,
  BusinessTypes,
  ComparisonTable,
  SampleProducts,
} from "@/components/landing";
import type { Product } from "@/components/landing/sample-products";
import {
  HomeIcon,
  BriefcaseIcon,
  ShoppingBagIcon,
  CalendarIcon,
  BuildingStorefrontIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChartPieIcon,
  BellIcon,
  ClockIcon,
  GlobeAltIcon,
  KeyIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

const MARKETPLACE_TYPES: Product[] = [
  {
    id: "rental-marketplaces",
    name: "Rental Marketplaces",
    tabLabel: "Rental",
    description: "Connect owners of assets (properties, vehicles, equipment, spaces) with people who want to rent them. Think Airbnb, Turo, Fat Llama, Peerspace.",
    icon: HomeIcon,
    color: "#ff6b35",
    features: [
      { name: "Listing creation with photos, pricing, and availability calendars", icon: BuildingStorefrontIcon },
      { name: "Search and filtering by location, dates, price, amenities", icon: GlobeAltIcon },
      { name: "Booking flows with deposits, payments, and cancellation policies", icon: CalendarIcon },
      { name: "Host and guest profiles with verification", icon: UserGroupIcon },
      { name: "Reviews and ratings (two-sided)", icon: ChartPieIcon },
      { name: "Host payouts and platform fee management", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "gig-service-marketplaces",
    name: "Gig & Service Marketplaces",
    tabLabel: "Gig & Service",
    description: "Match service providers with customers who need help. Think Fiverr, Thumbtack, Upwork, TaskRabbit.",
    icon: BriefcaseIcon,
    color: "#06b6d4",
    features: [
      { name: "Provider profiles with skills, portfolios, and availability", icon: UserGroupIcon },
      { name: "Service listings or job posting and bidding flows", icon: SquaresPlusIcon },
      { name: "Search and matching by skill, location, price, rating", icon: GlobeAltIcon },
      { name: "Booking, scheduling, and messaging", icon: BellIcon },
      { name: "Escrow payments and milestone tracking", icon: ShieldCheckIcon },
      { name: "Reviews, ratings, and provider verification", icon: ChartPieIcon },
    ],
  },
  {
    id: "product-marketplaces",
    name: "Product Marketplaces",
    tabLabel: "Product",
    description: "Enable sellers to list and sell physical or digital goods to buyers. Think Etsy, StockX, Reverb, Depop.",
    icon: ShoppingBagIcon,
    color: "#a855f7",
    features: [
      { name: "Multi-vendor storefronts with product listings", icon: BuildingStorefrontIcon },
      { name: "Inventory management and variants (size, color, condition)", icon: SquaresPlusIcon },
      { name: "Shopping cart, checkout, and order tracking", icon: ShoppingBagIcon },
      { name: "Shipping integrations and fulfillment", icon: TruckIcon },
      { name: "Seller payouts and commission management", icon: ShieldCheckIcon },
      { name: "Reviews and seller ratings", icon: ChartPieIcon },
    ],
  },
  {
    id: "booking-appointment-marketplaces",
    name: "Booking & Appointment Marketplaces",
    tabLabel: "Booking & Appointment",
    description: "Let users discover and book time with providers—classes, appointments, sessions, experiences. Think ClassPass, Zocdoc, Mindbody, Airbnb Experiences.",
    icon: CalendarIcon,
    color: "#10b981",
    features: [
      { name: "Provider profiles with services and availability", icon: UserGroupIcon },
      { name: "Real-time calendar and scheduling", icon: CalendarIcon },
      { name: "Class or session capacity and waitlists", icon: SquaresPlusIcon },
      { name: "Recurring bookings, memberships, and packages", icon: ClockIcon },
      { name: "Payments, credits, and cancellation policies", icon: ShieldCheckIcon },
      { name: "Reviews and ratings", icon: ChartPieIcon },
    ],
  },
  {
    id: "b2b-marketplaces",
    name: "B2B Marketplaces",
    tabLabel: "Business-to-Business",
    description: "Connect businesses with suppliers, vendors, or service providers. Think Faire, Alibaba, Thomasnet.",
    icon: BuildingStorefrontIcon,
    color: "#f59e0b",
    features: [
      { name: "Company profiles and verification", icon: UserGroupIcon },
      { name: "Product/service catalogs with bulk and tiered pricing", icon: BuildingStorefrontIcon },
      { name: "RFQ (Request for Quote) and negotiation workflows", icon: SquaresPlusIcon },
      { name: "Invoicing and payment terms (net 30, etc.)", icon: ShieldCheckIcon },
      { name: "Order management and reordering", icon: ClockIcon },
      { name: "Integration with procurement/ERP systems", icon: GlobeAltIcon },
    ],
  },
  {
    id: "other-hybrid-marketplaces",
    name: "Other / Hybrid Marketplaces",
    tabLabel: "Other / Hybrid",
    description: "Not every marketplace fits a standard mold. We've built platforms that combine multiple models, serve niche industries, or invent entirely new ways of connecting buyers and sellers.",
    icon: SquaresPlusIcon,
    color: "#ec4899",
    features: [
      { name: "Reverse marketplaces (buyers post, sellers respond)", icon: SquaresPlusIcon },
      { name: "Multi-sided platforms with 3+ user types", icon: UserGroupIcon },
      { name: "Regulated industries with compliance workflows", icon: ShieldCheckIcon },
      { name: "Niche verticals with unique matching logic", icon: ChartPieIcon },
    ],
  },
];

const Index = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
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
        `
      }} />
      <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900" style={{ fontFamily: "'Colfax', sans-serif" }}>
        <Navbar />
        <main>
          <Hero
            centerText={true}
            title="The smarter way to launch your marketplace"
            description="We use a new approach to help startups and enterprises launch two-sided marketplaces that are 100% flexible, for a small fraction of the cost of building from scratch."
            showImages={false}
            showButton={true}
            buttonText="Talk to us"
            buttonLink="#talk-to-us"
          />
          <ScreenshotShowcase />
          <div className="pt-16 pb-16">
            <ClientLogoTicker />
          </div>
          <ComparisonTable />
          <SampleProducts 
            products={MARKETPLACE_TYPES}
            label="MARKETPLACE TYPES"
            title="Marketplaces we specialize in"
            description="We've built hundreds of marketplaces across dozens of industries and know the patterns that work, the edge cases to plan for, and the features your users will expect."
            bgColor="bg-white"
          />
          <CaseStudies />
          <BusinessTypes />
          <section id="pricing" className="scroll-mt-20">
            <Stats />
          </section>
          <Testimonials />
          <SaasCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
