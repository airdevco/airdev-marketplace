import { Calendar, MapPin, Globe, ExternalLink, Heart, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PRIMARY_COLOR = "#6366F1";

const Marketplace2 = () => {
  const projects = [
    {
      title: "Brand Identity System",
      image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769645813496x468485436757218600/hire2.webp",
      likes: 142,
      downloads: 38,
    },
    {
      title: "Mobile App UI Kit",
      image: "https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769645304714x406176510810474200/listing1.webp",
      likes: 89,
      downloads: 24,
    },
    {
      title: "Dashboard Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      likes: 203,
      downloads: 67,
    },
    {
      title: "E-commerce Redesign",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      likes: 167,
      downloads: 45,
    },
    {
      title: "Social Media Templates",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
      likes: 94,
      downloads: 31,
    },
    {
      title: "Icon Pack Collection",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      likes: 276,
      downloads: 112,
    },
    {
      title: "Website Landing Page",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      likes: 118,
      downloads: 29,
    },
    {
      title: "Logo Design Collection",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      likes: 185,
      downloads: 53,
    },
    {
      title: "Presentation Templates",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      likes: 73,
      downloads: 19,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill={PRIMARY_COLOR} />
                <path d="M12 12h6v6h-6zM22 12h6v6h-6zM12 22h6v6h-6zM22 22h6l-6 6v-6z" fill="white" />
              </svg>
              <span className="text-lg font-semibold text-gray-900">Pixelcraft</span>
            </a>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors text-[14px] font-medium">Dashboard</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors text-[14px] font-medium flex items-center gap-1">
                Marketplace <ChevronDown className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors text-[14px] font-medium">Learn</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors text-[14px] font-medium flex items-center gap-1">
                Resources <ChevronDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              JD
            </div>
            <span className="text-sm text-gray-600">Account <ChevronDown className="w-3.5 h-3.5 inline" /></span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex gap-10">
          {/* Left Sidebar - Profile */}
          <div className="w-[200px] flex-shrink-0">
            {/* Profile Photo */}
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face"
              alt="Sarah Chen"
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            
            <div className="text-sm text-gray-500 mb-1">@sarahcreates</div>
            <h1 className="text-xl font-semibold text-gray-900 mb-0.5">Sarah Chen</h1>
            <p className="text-sm text-gray-600 mb-4">Visual Designer</p>
            
            <Button 
              className="w-full text-white rounded-md mb-4"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              Follow
            </Button>
            
            <div className="text-sm text-gray-900 mb-6">
              <span className="font-semibold">8,432</span> followers · <span className="font-semibold">284</span> following
            </div>
            
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>Joined Mar 15, 2021</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span>English</span>
              </div>
              <a 
                href="#" 
                className="flex items-center gap-2 hover:underline"
                style={{ color: PRIMARY_COLOR }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit website</span>
              </a>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full px-3 py-1 text-xs font-medium">
                  branding
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full px-3 py-1 text-xs font-medium">
                  ui/ux
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full px-3 py-1 text-xs font-medium">
                  illustration
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full px-3 py-1 text-xs font-medium">
                  figma
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* About Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Award-winning visual designer specializing in brand identity, UI/UX, and digital illustration. 
                Over 8 years of experience helping startups and Fortune 500 companies bring their vision to life.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Available for freelance projects, brand consultations, and design system work.{" "}
                <a href="#" style={{ color: PRIMARY_COLOR }} className="hover:underline">Learn more →</a>
              </p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <div className="flex gap-8">
                <button 
                  className="pb-3 text-sm font-medium border-b-2 -mb-px"
                  style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}
                >
                  Portfolio
                </button>
                <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Services
                </button>
                <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Reviews
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group rounded-lg overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-gray-900 truncate mb-2">{project.title}</h4>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5" />
                        {project.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-3.5 h-3.5" />
                        {project.downloads}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace2;
