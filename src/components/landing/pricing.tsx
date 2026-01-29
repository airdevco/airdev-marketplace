import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "launchpad",
    name: "Launchpad",
    price: "$5k+",
    description: "Start from a template and make it your own",
    features: [
      "You own it, no license fees",
      "A lean team to get you started",
      "AI-powered scoping to define your marketplace and get a quote",
      "Base features include search, payments, reviews, and more",
      "Standard UX/UI with your colors, logo, and branding applied",
      "Customizations and add-ons based on what your marketplace needs",
    ],
    highlighted: false,
  },
  {
    id: "agency",
    name: "Agency",
    price: "$20k+",
    description: "Build anything that fits your needs",
    features: [
      "You own it, no license fees",
      "A full team of product, design, and development experts",
      "Custom discovery and scoping process",
      "Strategic input on marketplace model and mechanics",
      "Custom UX/UI design",
      "Complex or unique workflows",
    ],
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing-section" className="relative py-24 overflow-hidden scroll-mt-20" style={{ backgroundColor: '#F6F9FC' }}>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h3 id="pricing-heading" className="scroll-mt-20 text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3">
            Pricing
          </h3>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#1a1a1a] mb-6">
            Choose your path
          </h2>
          <p className="text-[20px] text-[#425466] leading-relaxed mb-2 max-w-2xl mx-auto">
            Start lean or go all-in. Scale up anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-white rounded-2xl p-8 transition-all duration-300 flex flex-col border border-gray-200 shadow-lg hover:shadow-xl"
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
                    {plan.price}
                  </span>
                </div>
                <p className="text-[#425466] text-[16px]">
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 mb-6" />

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-[#1265EF]/10">
                      <Check className="w-3 h-3 text-[#1265EF]" />
                    </div>
                    <span className="text-[#425466] text-[15px] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className={plan.id === "agency" ? "mt-auto pt-8" : "mt-8"}>
                <a
                  href="#talk-to-us"
                  className="block w-full text-center py-3.5 px-6 rounded-lg font-medium transition-all duration-200 bg-[#1a1a1a] text-white hover:bg-[#333]"
                >
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
