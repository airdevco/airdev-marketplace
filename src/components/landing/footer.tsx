import { Facebook, Twitter, Linkedin } from "lucide-react";
import { ROUTES } from "@/config/routes";

export const Footer = () => {
  return (
    <footer className="pt-8 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2026 Airdev, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-gray-500">
            <a href="https://www.facebook.com/airdevco" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900"><Facebook className="w-5 h-5" /></a>
            <a href="https://x.com/airdevco" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900"><Twitter className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/company/airdev/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};



