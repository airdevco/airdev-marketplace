import { Home, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PRIMARY_COLOR = "#E07A5F";

const Marketplace1 = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center gap-1.5" style={{ color: PRIMARY_COLOR }}>
              <Home className="w-6 h-6" />
              <span className="text-xl font-semibold text-gray-900">StayFinder</span>
            </div>
          </a>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">Browse all</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">Locations</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">FAQs</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">About</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">List your place</a>
            <Button 
              variant="outline" 
              className="rounded-full border-gray-900 text-gray-900 hover:bg-gray-100 px-5"
            >
              Browse Listings
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <a href="#" className="hover:text-gray-900">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a href="#" className="hover:text-gray-900">Listings</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-700">California</span>
        </div>

        {/* Featured Badge */}
        <div 
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-white text-sm font-medium mb-3"
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          <Star className="w-3.5 h-3.5 fill-current" />
          Featured
        </div>

        {/* Title */}
        <h1 className="text-[32px] font-semibold text-gray-900 mb-6">Santa Monica, California</h1>

        {/* Image Gallery */}
        <div className="grid grid-cols-3 grid-rows-2 gap-2 mb-8 h-[400px]">
          {/* Main Image - spans 2 columns and 2 rows */}
          <div className="col-span-2 row-span-2">
            <img 
              src="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1769645304714x406176510810474200/listing1.webp"
              alt="Property listing"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          {/* Top Right Image */}
          <div className="col-start-3 row-start-1">
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
              alt="Bright bedroom"
              className="w-full h-full object-cover rounded-tr-lg"
            />
          </div>
          {/* Bottom Right Images */}
          <div className="col-start-3 row-start-2 grid grid-cols-2 gap-2">
            <img 
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=200&h=150&fit=crop"
              alt="Dining area"
              className="w-full h-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=150&fit=crop"
              alt="Outdoor terrace"
              className="w-full h-full object-cover rounded-br-lg"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="col-span-2">
            {/* Property Stats */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 border border-gray-200 rounded-lg p-5">
                <span className="text-lg font-medium text-gray-900">4 guests</span>
              </div>
              <div className="flex-1 border border-gray-200 rounded-lg p-5">
                <span className="text-lg font-medium text-gray-900">2 bedrooms</span>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About this listing</h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Escape to this stunning beachfront apartment in the heart of Santa Monica. This beautifully renovated two-bedroom retreat offers breathtaking ocean views and modern amenities for the perfect coastal getaway.
                </p>
                <p>
                  As you step inside, you'll be greeted by an open-concept living space flooded with natural California sunlight. The living room features floor-to-ceiling windows, a plush sectional sofa, and a smart TV for cozy movie nights. The private balcony offers panoramic views of the Pacific Ocean, perfect for morning coffee or sunset cocktails.
                </p>
                <p>
                  The chef's kitchen is equipped with stainless steel appliances, quartz countertops, and everything you need to prepare delicious meals. Enjoy breakfast at the sun-drenched dining nook or take your meal outside to the terrace.
                </p>
                <p>
                  The primary bedroom features a king-sized bed with premium linens, a walk-in closet, and an ensuite bathroom with a rainfall shower. The second bedroom offers twin beds, ideal for children or additional guests.
                </p>
                <p>
                  Located just steps from the famous Santa Monica Pier and Third Street Promenade, you'll have easy access to world-class dining, shopping, and entertainment. Bikes and beach gear are provided for your convenience.
                </p>
                <p>
                  Whether you're seeking a romantic retreat or a fun-filled family vacation, this Santa Monica gem has everything you need for an unforgettable stay on the California coast!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="col-span-1">
            <div className="border border-gray-200 rounded-lg p-6 sticky top-8">
              <div className="mb-4">
                <span className="text-2xl font-semibold text-gray-900">$650</span>
                <span className="text-gray-600"> /week</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-6">
                Apr 15, 2024 - Oct 30, 2024
              </div>

              <form className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="text-sm text-gray-700">Full name*</Label>
                  <Input 
                    id="fullName"
                    type="text"
                    className="mt-1.5 border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm text-gray-700">Email*</Label>
                  <Input 
                    id="email"
                    type="email"
                    className="mt-1.5 border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm text-gray-700">Phone number*</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    className="mt-1.5 border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full text-white rounded-lg py-6 text-base font-medium"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Marketplace1;
