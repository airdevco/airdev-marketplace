import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Timeline to launch",
    airdev: "Weeks to months",
    saas: "Days to weeks",
    traditional: "6-18+ months",
  },
  {
    feature: "Upfront cost",
    airdev: "$$",
    saas: "$",
    traditional: "$$$$",
  },
  {
    feature: "You own the Platform",
    airdev: { value: "Yes", positive: true },
    saas: { value: "No", positive: false },
    traditional: { value: "Yes", positive: true },
  },
  {
    feature: "Customization",
    airdev: "Unlimited",
    saas: "Limited to their features",
    traditional: "Unlimited",
  },
  {
    feature: "Ongoing fees",
    airdev: "Maintenance only",
    saas: "License fees that go up with usage",
    traditional: "Maintenance only",
  },
  {
    feature: "Vendor lock-in",
    airdev: "None",
    saas: "High",
    traditional: "None",
  },
  {
    feature: "Scales with you",
    airdev: "Yes",
    saas: "Until you hit their limits",
    traditional: "Yes",
  },
];

const renderCell = (value: string | { value: string; positive: boolean }) => {
  if (typeof value === "object") {
    return (
      <span className="flex items-center justify-center gap-1.5">
        {value.positive ? (
          <Check className="w-4 h-4 text-gray-900" />
        ) : (
          <X className="w-4 h-4 text-gray-900" />
        )}
        {value.value}
      </span>
    );
  }
  return value;
};

export const ComparisonTable = () => {
  return (
    <section id="why-airdev-comparison" className="relative py-24 overflow-hidden scroll-mt-20" style={{ backgroundColor: '#F6F9FC' }}>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h3 id="why-airdev-heading" className="scroll-mt-20 text-[#1e3a8a] font-semibold tracking-wide uppercase text-sm mb-3">
            Why Airdev
          </h3>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-[#1a1a1a] mb-6">
            Fast and flexible
          </h2>
          <p className="text-[20px] text-[#425466] leading-relaxed mb-2 max-w-2xl mx-auto">
            SaaS platforms are fast but inflexible. Traditional dev gives you control but takes forever. We give you both.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-6 pr-4 text-gray-500 font-normal"></th>
                <th className="py-6 px-4 text-center bg-[#1265EF]/5 rounded-t-[6px]">
                  <span className="text-xl font-semibold text-[#1265EF]">Airdev</span>
                </th>
                <th className="py-6 px-4 text-center">
                  <span className="text-xl font-semibold text-gray-900">SaaS Platforms</span>
                </th>
                <th className="py-6 px-4 text-center">
                  <span className="text-xl font-semibold text-gray-900">Traditional Dev</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => {
                const isLastRow = index === comparisonData.length - 1;
                return (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-6 pr-4 text-gray-900 font-medium text-left align-top">
                      {row.feature}
                    </td>
                    <td className={`py-6 px-4 text-center text-gray-900 font-medium align-top bg-[#1265EF]/5 ${isLastRow ? 'rounded-b-[6px]' : ''}`}>
                      {renderCell(row.airdev)}
                    </td>
                    <td className="py-6 px-4 text-center text-gray-700 align-top">
                      {renderCell(row.saas)}
                    </td>
                    <td className="py-6 px-4 text-center text-gray-700 align-top">
                      {renderCell(row.traditional)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
