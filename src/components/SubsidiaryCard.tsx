
import { Button } from "@/components/ui/card";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ArrowRight, ExternalLink } from "lucide-react";

export interface SubsidiaryProps {
  name: string;
  description: string;
  color: string;
  website: string;
  logo?: string;
}

const SubsidiaryCard = ({ name, description, color, website, logo }: SubsidiaryProps) => {
  // Map for hover shadow colors
  const hoverColors = {
    'tech': '#f4af1b',
    'edx': '#181d4c',
    'learnpad': '#FF6701',
    'green': '#69AF07',
    'hospital': '#406cb3',
    'vidyapeetam': '#FFA500'
  };
  
  // Default logo based on first letter if no logo provided
  const defaultLogo = name.charAt(0);
  
  // Get the appropriate color for hover effect
  const hoverColor = hoverColors[color as keyof typeof hoverColors] || '#f4af1b';
  
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 h-full flex flex-col group"
      style={{ 
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <div className={`h-2 bg-fixity-${color}`} />
      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          {logo ? (
            <img src={logo} alt={`${name} logo`} className="w-12 h-12 object-contain rounded-md" />
          ) : (
            <div className={`w-12 h-12 rounded-md bg-fixity-${color} flex items-center justify-center text-white text-lg font-bold`}>
              {defaultLogo}
            </div>
          )}
          <div>
            <CardTitle className="text-xl text-fixity-primary">{name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`flex items-center text-sm font-medium text-fixity-${color} hover:underline group-hover:text-opacity-90`}
        >
          Visit Website <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </CardFooter>

      {/* Add custom hover styles using inline style for the box-shadow */}
      <style jsx>{`
        .card-${color}:hover {
          box-shadow: 0 10px 25px -5px ${hoverColor}40;
        }
      `}</style>
    </Card>
  );
};

export default SubsidiaryCard;
