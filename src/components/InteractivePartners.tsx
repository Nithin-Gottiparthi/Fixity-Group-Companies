
import React, { useState } from 'react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website?: string;
}

const partners: Partner[] = [
  {
    id: 'fixity-tech',
    name: 'Fixity Technologies',
    logo: '/images/Fixity-Tech.jpg',
    description: 'Innovative technology solutions and IT services',
    website: 'https://fixitytech.com'
  },
  {
    id: 'fixity-edx',
    name: 'Fixity EDX',
    logo: '/images/Fixityedx.jpg',
    description: 'Digital education platform and learning experiences',
    website: 'https://fixityedx.com'
  },
  {
    id: 'learning-pad',
    name: 'Learning Pad',
    logo: '/images/Fixity-Learn.jpg',
    description: 'Interactive learning tools for educational institutions',
    website: 'https://fixitylearn.com'
  },
  {
    id: 'fixity-green',
    name: 'Fixity Green',
    logo: '/images/fixity-green.png',
    description: 'Sustainable solutions for a greener future',
    website: 'https://fixitygreen.com'
  },
  {
    id: 'jayasree-liberty',
    name: 'Jayasree Liberty Hospitals',
    logo: '/images/jayasree.jpg',
    description: 'Quality healthcare facilities and medical services',
    website: 'https://jslibertyhospitals.com'
  },
  {
    id: 'shri-dhanvantri',
    name: 'Shri Dhanvantri Vidyapeetam',
    logo: '/images/shri-danvantri.jpeg',
    description: 'Traditional and modern learning methodologies',
    website: '#'
  }
];

const InteractivePartners = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center gap-4 lg:gap-6 px-4">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="relative group"
              onMouseEnter={() => setHoveredId(partner.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`
                  relative transition-all duration-300 ease-out cursor-pointer
                  ${hoveredId === partner.id 
                    ? 'transform scale-110 z-10' 
                    : hoveredId && hoveredId !== partner.id 
                      ? 'opacity-50' 
                      : 'opacity-100'
                  }
                `}
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Hover Description */}
                {hoveredId === partner.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-20 animate-fade-in">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="grid grid-cols-3 gap-4 px-4">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="relative group"
              onTouchStart={() => setHoveredId(partner.id)}
              onTouchEnd={() => setTimeout(() => setHoveredId(null), 2000)}
            >
              <div className="relative">
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-white shadow-md border border-gray-200">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Mobile Description */}
                {hoveredId === partner.id && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-20 animate-fade-in">
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractivePartners;
