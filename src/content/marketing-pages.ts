/**
 * Content for marketing pages (Index, Saas, etc.).
 * Use this file to customize copy and data per page. Component design changes
 * in @/components/landing apply to all pages that use MarketingPageLayout.
 * To make a design change apply only to one page, pass layoutOverrides in that view.
 */

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
  TruckIcon,
  KeyIcon,
  SparklesIcon,
  CloudIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  CreditCardIcon,
  LinkIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";

/** Common SaaS features we can build – used on the /saas page. */
export const SAAS_FEATURES: Product[] = [
  {
    id: "user-role-management",
    name: "User & Role Management",
    tabLabel: "User & Role Management",
    description: "Allow users to create accounts, manage profiles, and assign roles with various permission levels.",
    icon: UserGroupIcon,
    color: "#1265EF",
    features: [
      { name: "User registration and profile management", icon: UserGroupIcon },
      { name: "Role-based access control (RBAC)", icon: KeyIcon },
      { name: "Custom permission levels per role", icon: ShieldCheckIcon },
      { name: "Invite and onboard team members", icon: UserGroupIcon },
      { name: "Audit logs for user actions", icon: ChartPieIcon },
    ],
  },
  {
    id: "subscriptions-billing",
    name: "Subscriptions & Billing",
    tabLabel: "Subscriptions & Billing",
    description: "Enable recurring or one-time payments for subscription plans, with automated billing and invoicing.",
    icon: CreditCardIcon,
    color: "#10b981",
    features: [
      { name: "Recurring and one-time payment flows", icon: CreditCardIcon },
      { name: "Subscription plan management", icon: ChartPieIcon },
      { name: "Automated invoicing and receipts", icon: FolderIcon },
      { name: "Upgrade, downgrade, and cancel flows", icon: ClockIcon },
      { name: "Trial periods and proration", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    tabLabel: "AI & Automation",
    description: "Automate tasks and provide intelligent features, such as predictive analytics or AI-driven suggestions.",
    icon: SparklesIcon,
    color: "#a855f7",
    features: [
      { name: "Predictive analytics and insights", icon: ChartPieIcon },
      { name: "AI-driven suggestions and recommendations", icon: SparklesIcon },
      { name: "Workflow and task automation", icon: ClockIcon },
      { name: "Smart defaults and personalization", icon: UserGroupIcon },
      { name: "Integration with LLMs and AI APIs", icon: CloudIcon },
    ],
  },
  {
    id: "notifications-alerts",
    name: "Notifications & Alerts",
    tabLabel: "Notifications & Alerts",
    description: "Send in-app, email, or SMS notifications and alerts for key events, updates, or deadlines.",
    icon: BellIcon,
    color: "#f59e0b",
    features: [
      { name: "In-app notification center", icon: BellIcon },
      { name: "Email and SMS delivery", icon: GlobeAltIcon },
      { name: "User preferences and digest settings", icon: KeyIcon },
      { name: "Event-triggered and scheduled alerts", icon: ClockIcon },
      { name: "Read/unread and action tracking", icon: ChartPieIcon },
    ],
  },
  {
    id: "sso",
    name: "Single Sign-On (SSO)",
    tabLabel: "Single Sign-On (SSO)",
    description: "Streamline authentication by allowing users to log in with existing credentials from Google, Okta, or other identity providers.",
    icon: KeyIcon,
    color: "#06b6d4",
    features: [
      { name: "Google, Microsoft, and social login", icon: KeyIcon },
      { name: "Okta, Auth0, and enterprise IdPs", icon: ShieldCheckIcon },
      { name: "Centralized identity and session management", icon: UserGroupIcon },
      { name: "Just-in-time (JIT) user provisioning", icon: CloudIcon },
      { name: "Secure token handling and refresh", icon: ShieldCheckIcon },
    ],
  },
  {
    id: "collaboration-sharing",
    name: "Collaboration & Sharing",
    tabLabel: "Collaboration & Sharing",
    description: "Facilitate real-time collaboration, file sharing, and team-based workflows within the app.",
    icon: ChatBubbleLeftRightIcon,
    color: "#ec4899",
    features: [
      { name: "Real-time co-editing and presence", icon: ChatBubbleLeftRightIcon },
      { name: "File and document sharing", icon: FolderIcon },
      { name: "Team workspaces and permissions", icon: UserGroupIcon },
      { name: "Comments, mentions, and activity feed", icon: BellIcon },
      { name: "Shared links and access control", icon: KeyIcon },
    ],
  },
  {
    id: "dashboards-analytics",
    name: "Dashboards & Analytics",
    tabLabel: "Dashboards & Analytics",
    description: "Present real-time metrics and insights in customizable dashboards for data-driven decisions.",
    icon: PresentationChartLineIcon,
    color: "#0d9488",
    features: [
      { name: "Customizable dashboards and widgets", icon: PresentationChartLineIcon },
      { name: "Real-time metrics and KPIs", icon: ChartPieIcon },
      { name: "Charts, tables, and visualizations", icon: SquaresPlusIcon },
      { name: "Filters, date ranges, and drill-downs", icon: ClockIcon },
      { name: "Export and scheduled reports", icon: FolderIcon },
    ],
  },
  {
    id: "integrations-apis",
    name: "Integrations & APIs",
    tabLabel: "Integrations & APIs",
    description: "Connect with third-party services (e.g., CRM, payment processors) via seamless API integrations.",
    icon: LinkIcon,
    color: "#6366f1",
    features: [
      { name: "REST and webhook integrations", icon: LinkIcon },
      { name: "CRM, payments, and email providers", icon: CloudIcon },
      { name: "Custom API keys and OAuth flows", icon: KeyIcon },
      { name: "Sync and mapping configuration", icon: SquaresPlusIcon },
      { name: "Error handling and retry logic", icon: ShieldCheckIcon },
    ],
  },
];

/** Shared marketplace types – reused by Index and Saas (customize per page if needed). */
export const MARKETPLACE_TYPES: Product[] = [
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

export interface HeroContent {
  centerText?: boolean;
  title: string;
  description: string;
  showImages?: boolean;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

export interface SampleProductsContent {
  products: Product[];
  label: string;
  title: string;
  description: string;
  bgColor?: string;
}

/** Case study slide shape for CaseStudies component (Saas page only). */
export interface CaseStudySlide {
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

export interface MarketingPageContent {
  hero: HeroContent;
  sampleProducts: SampleProductsContent;
  /** Optional nav link overrides (e.g. "Common Features" instead of "Marketplace Types" on Saas). */
  navLinks?: Array<{ label: string; href: string }>;
  /** Optional CTA section (e.g. "Have a SaaS product in mind?" on Saas). */
  cta?: {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
  };
  /** Optional case study slides (e.g. Playground IEP, Tributi, Cerebro for Saas). When set, only this page uses these slides; index and others unchanged. */
  caseStudiesSlides?: CaseStudySlide[];
  /** Optional screenshot showcase URLs (e.g. Saas page uses checkout as first image instead of docseek). */
  screenshotShowcaseUrls?: string[];
}

/** Case study slides for the /saas page only (Playground IEP, Tributi, Cerebro Sports). */
const SAAS_CASE_STUDY_SLIDES: CaseStudySlide[] = [
  {
    id: "playground",
    company: "Playground IEP",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447131162x922542988700125000/playground.png",
    logoText: "",
    heading: "How Airdev helped Playground IEP create a special education caseload management tool for schools",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63b8851d340bdc19030b55b3_adam-winger-7fF0iei80AQ-unsplash%205-p-3200.jpg",
    imageTitle: "How Airdev helped Playground IEP create a special education caseload management tool for schools",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Internal management portal", color: "#00d4ff" },
      { label: "Timeline", value: "3 months", color: "#a960ee" },
      { label: "Key results", value: "5 pilot schools signed up in <1 year", color: "#ff6b6b" },
    ],
  },
  {
    id: "tributi",
    company: "Tributi",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766777935802x342363134894177340/tributi.png",
    logoText: "",
    heading: "How Airdev helped Tributi build a tax management software for Latin America in just 5 weeks using the no-code tool Bubble",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/63507625712da8bcd35f011e_tributi.jpeg",
    imageTitle: "How Airdev helped Tributi build a tax management software for Latin America in just 5 weeks using the no-code tool Bubble",
    customFields: [
      { label: "Business type", value: "SMB", color: "#635bff" },
      { label: "Product type", value: "Tax management software", color: "#00d4ff" },
      { label: "Timeline", value: "5 weeks", color: "#a960ee" },
      { label: "Key results", value: "Supported 20k daily users and launched a successful YCombinator bid", color: "#ff6b6b" },
    ],
  },
  {
    id: "cerebro",
    company: "Cerebro Sports",
    logo: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1766447113960x777797950241704700/cerebro.png",
    logoText: "",
    heading: "How a Mark Cuban-funded startup upgraded spreadsheets to a scaling product with no-code",
    description: "",
    image: "https://cdn.prod.website-files.com/62aa5d914f45160a7f155660/64eced7d1af330bc878905e9_Cerebro_Airdev_no_code-app-build.jpg",
    imageTitle: "How a Mark Cuban-funded startup upgraded spreadsheets to a scaling product with no-code",
    customFields: [
      { label: "Business type", value: "Startup", color: "#635bff" },
      { label: "Product type", value: "Analytics Platform", color: "#00d4ff" },
      { label: "Timeline", value: "2 months", color: "#a960ee" },
      { label: "Key results", value: "A pre-seed fundraising round led by Mark Cuban to help scale internal data operations", color: "#ff6b6b" },
    ],
  },
];

/** Content for the home (index) marketing page. */
export const indexContent: MarketingPageContent = {
  hero: {
    centerText: true,
    title: "The smarter way to launch your marketplace",
    description: "We use a new approach to help startups and enterprises launch two-sided marketplaces that are 100% flexible, for a small fraction of the cost of building from scratch.",
    showImages: false,
    showButton: true,
    buttonText: "Talk to us",
    buttonLink: "#talk-to-us",
  },
  sampleProducts: {
    products: MARKETPLACE_TYPES,
    label: "MARKETPLACE TYPES",
    title: "Marketplaces we specialize in",
    description: "We've built hundreds of marketplaces across dozens of industries and know the patterns that work, the edge cases to plan for, and the features your users will expect.",
    bgColor: "bg-white",
  },
};

/** Content for the /saas marketing page. Duplicate of index by default – customize here. */
export const saasContent: MarketingPageContent = {
  hero: {
    ...indexContent.hero,
    title: "A better way to launch your SaaS startup",
    description: "We use a new approach to help entrepreneurs launch SaaS products, for a fraction of cost and time of traditional development.",
  },
  sampleProducts: {
    products: SAAS_FEATURES,
    label: "COMMON FEATURES",
    title: "SaaS features we specialize in",
    description: "From user management to billing, AI, and integrations—we build the core capabilities that make modern SaaS products work. Choose what you need and we’ll implement it.",
    bgColor: "bg-white",
  },
  navLinks: [
    { label: "Why Airdev", href: "#why-airdev-heading" },
    { label: "Common Features", href: "#marketplace-types-heading" },
    { label: "Case Studies", href: "#case-studies-heading" },
    { label: "Pricing", href: "#pricing-heading" },
    { label: "Talk to Us", href: "#talk-to-us-heading" },
  ],
  cta: {
    title: "Have a SaaS product in mind?",
    description: "We're happy to talk through it, even if you're just exploring.",
    buttonText: "Talk to us",
    buttonLink: "#talk-to-us",
  },
  caseStudiesSlides: SAAS_CASE_STUDY_SLIDES,
  screenshotShowcaseUrls: [
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772585113659x667314515892083800/checkout.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772586305349x201337330678877920/iep.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772586741300x556158904197277900/postly.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772587304672x296188048024184100/onboarding.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772587812851x876454729909677400/flowline.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772588669920x914551009077430300/taxes.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772588533645x277504609261276960/clearpay.webp",
    "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1772588816102x953832905394021100/forma.webp",
  ],
};
