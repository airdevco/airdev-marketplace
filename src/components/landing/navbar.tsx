import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, MouseEvent } from "react";
import { ROUTES } from "@/config/routes";

const NAV_LINKS = [
  { label: "Why Airdev", href: "#why-airdev-comparison" },
  { label: "Marketplace Types", href: "#marketplace-types" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Talk to Us", href: "#talk-to-us" },
] as const;

const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const linkClass = () =>
  `text-[16px] font-medium transition-colors text-gray-600 hover:text-black`;

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between relative">
          <a href={ROUTES.HOME} className="flex items-center flex-shrink-0">
            <img
              src="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/6577847e968a59db1df535cf_logo_v4.svg"
              alt="Airdev"
              className="h-7 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.slice(0, -1).map(({ label, href }) => (
              <a 
                key={href} 
                href={href} 
                onClick={(e) => handleSmoothScroll(e, href)}
                className={linkClass()}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <a href="#talk-to-us">
              <Button className="bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pt-2.5 pb-1.5 text-[16px] leading-[1.125] font-medium transition-all">
                Talk to Us
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 lg:hidden flex flex-col gap-1 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          {NAV_LINKS.slice(0, -1).map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                handleSmoothScroll(e, href);
                closeMobileMenu();
              }}
              className="text-lg font-medium text-gray-600 hover:text-black transition-colors py-3"
            >
              {label}
            </a>
          ))}
          <a href="#talk-to-us" onClick={closeMobileMenu} className="mt-2">
            <Button className="w-full bg-[#1265EF] text-white hover:bg-[#0d4fc7] active:bg-[#0a3fa3] rounded-[6px] px-5 pt-2.5 pb-1.5 text-[16px] leading-[1.125] font-medium transition-all">
              Talk to Us
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};
