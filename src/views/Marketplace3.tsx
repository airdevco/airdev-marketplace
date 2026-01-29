import { Search, Heart, Share2, Users, ChevronRight, ChevronLeft, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const PRIMARY_COLOR = "#F05537";

const Marketplace3 = () => {
  const categories = [
    { label: "All", active: true },
    { label: "Music", icon: "🎵" },
    { label: "Arts", icon: "🎨" },
    { label: "Food & Drink", icon: "🍽️" },
    { label: "Business", icon: "💼" },
    { label: "Sports", icon: "⚽" },
    { label: "Community", icon: "🤝" },
    { label: "Family", icon: "👨‍👩‍👧" },
    { label: "Nightlife", icon: "🌙" },
  ];

  const topActivities = [
    {
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
      title: "Sunset Jazz Festival",
      date: "Sat, Mar 15, 7:00 PM",
      location: "Central Park · New York, NY",
      price: "From $45.00",
      organizer: "NYC Jazz Collective",
      followers: 2841,
    },
    {
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
      title: "Spring Wine & Food Tasting",
      date: "Sun, Mar 16, 2:00 PM",
      location: "Chelsea Market · New York, NY",
      price: "From $75.00",
      organizer: "Taste of the City",
      followers: 1567,
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
      title: "Rooftop Yoga & Meditation",
      date: "Sat, Mar 15, 9:00 AM",
      location: "Hudson Yards · New York, NY",
      price: "Free",
      organizer: "Mindful Movement NYC",
      followers: 923,
    },
    {
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      title: "Electronic Music Night",
      date: "Fri, Mar 14, 10:00 PM",
      location: "Brooklyn Warehouse · Brooklyn, NY",
      price: "From $35.00",
      organizer: "Brooklyn Beats",
      followers: 4215,
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      title: "Art Gallery Opening Night",
      date: "Thu, Mar 13, 6:00 PM",
      location: "SoHo Gallery · New York, NY",
      price: "Free",
      organizer: "Contemporary Arts NYC",
      followers: 1892,
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
      title: "Chef's Table Experience",
      date: "Sat, Mar 15, 7:30 PM",
      location: "Private Kitchen · Manhattan, NY",
      price: "From $150.00",
      organizer: "Culinary Experiences",
      followers: 756,
    },
    {
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
      title: "Tech Startup Networking",
      date: "Wed, Mar 19, 6:00 PM",
      location: "WeWork · Midtown, NY",
      price: "Free",
      organizer: "NYC Founders Club",
      followers: 3421,
    },
    {
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop",
      title: "Morning Run Club",
      date: "Every Saturday, 7:00 AM",
      location: "Brooklyn Bridge · New York, NY",
      price: "Free",
      organizer: "Run NYC",
      followers: 2156,
    },
  ];

  const thisWeekend = [
    {
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
      title: "Comedy Night Live",
      date: "Sat, Mar 15, 8:00 PM",
      location: "Comedy Club · Manhattan, NY",
      organizer: "Laugh Factory NYC",
      followers: 1245,
    },
    {
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop",
      title: "Indie Music Showcase",
      date: "Sun, Mar 16, 7:00 PM",
      location: "Music Hall · Brooklyn, NY",
      organizer: "Brooklyn Indie Scene",
      followers: 892,
    },
    {
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      title: "Street Food Festival",
      date: "Sat, Mar 15, 12:00 PM",
      location: "Smorgasburg · Brooklyn, NY",
      organizer: "NYC Food Collective",
      followers: 3567,
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
      title: "Photography Workshop",
      date: "Sun, Mar 16, 10:00 AM",
      location: "Studio · Chelsea, NY",
      organizer: "NYC Photo Academy",
      followers: 678,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5 flex-shrink-0">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill={PRIMARY_COLOR} />
              <path d="M8 10h16v3H8zM8 15h12v3H8zM8 20h8v3H8z" fill="white" />
            </svg>
            <span className="text-xl font-bold text-gray-900">eventify</span>
          </a>

          {/* Search */}
          <div className="flex-1 max-w-2xl flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search events" 
                className="pl-10 border-gray-300 rounded-full"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="New York" 
                className="pl-10 w-[160px] border-gray-300 rounded-full"
              />
            </div>
            <Button 
              className="rounded-full px-6 text-white"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors hidden lg:block">Find Events</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors hidden lg:block">Create Events</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors hidden lg:block">Help Center</a>
            <div className="h-5 w-px bg-gray-200 hidden lg:block"></div>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Log In</a>
            <Button 
              variant="outline" 
              className="rounded-full border-gray-900 text-gray-900 hover:bg-gray-100 px-4 text-sm"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 py-3 text-sm text-gray-500">
        <a href="#" className="hover:text-gray-900">Home</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-gray-900">United States</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Things to do in New York</span>
      </div>


      {/* Category Filters */}
      <div className="max-w-[1400px] mx-auto px-4 mb-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          <Button variant="outline" className="rounded-full flex items-center gap-2 flex-shrink-0">
            Date <ChevronDown className="w-4 h-4" />
          </Button>
          {categories.map((cat, index) => (
            <Badge
              key={index}
              variant={cat.active ? "default" : "outline"}
              className={`rounded-full px-4 py-2 text-sm cursor-pointer flex-shrink-0 ${
                cat.active 
                  ? 'text-white border-transparent' 
                  : 'text-gray-700 border-gray-300 hover:border-gray-400 bg-white'
              }`}
              style={cat.active ? { backgroundColor: PRIMARY_COLOR } : {}}
            >
              {cat.icon && <span className="mr-1">{cat.icon}</span>}
              {cat.label}
            </Badge>
          ))}
          <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </div>
      </div>

      {/* Top Activities Section */}
      <div className="max-w-[1400px] mx-auto px-4 mb-12">
        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">New York's top activities</h2>
          <p className="text-sm text-gray-500 mb-6">Your plans, made easy. Check out New York's most popular things to do.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topActivities.map((event, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative rounded-lg overflow-hidden mb-3">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-[140px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100">
                      <Share2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-sm font-medium mb-1" style={{ color: PRIMARY_COLOR }}>{event.date}</p>
                <p className="text-sm text-gray-500 mb-1">{event.location}</p>
                <p className="text-sm text-gray-700 mb-2">{event.price}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="font-medium text-gray-700">{event.organizer}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <Users className="w-3 h-3" />
                  <span>{event.followers.toLocaleString()} followers</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-full px-8">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* This Weekend Section */}
      <div className="max-w-[1400px] mx-auto px-4 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">This Weekend</h2>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {thisWeekend.map((event, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden mb-3">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-[140px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors line-clamp-2">
                {event.title}
              </h3>
              <p className="text-sm font-medium mb-1" style={{ color: PRIMARY_COLOR }}>{event.date}</p>
              <p className="text-sm text-gray-500 mb-2">{event.location}</p>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span className="font-medium text-gray-700">{event.organizer}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                <Users className="w-3 h-3" />
                <span>{event.followers.toLocaleString()} followers</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace3;
          