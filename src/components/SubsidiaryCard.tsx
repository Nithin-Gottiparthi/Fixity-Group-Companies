
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export interface SubsidiaryProps {
  name: string;
  description: string;
  color: string;
  website: string;
  logo?: string;
}

const SubsidiaryCard = ({
  name,
  description,
  color,
  website,
  logo,
}: SubsidiaryProps) => {
  // Map for hover shadow colors
  const hoverColors = {
    tech: '#f4af1b',
    edx: '#5568fe',
    learnpad: '#FF6701',
    green: '#69AF07',
    hospital: '#3f84f2',
    vidyapeetam: '#FFA500',
  };

  // Default logo based on first letter if no logo provided
  const defaultLogo = name.charAt(0);

  // Get the appropriate color for hover effect
  const hoverColor =
    hoverColors[color as keyof typeof hoverColors] || '#f4af1b';

  // Get website URL - redirect Shri Dhanvantri Vidyapeetam to dedicated page
  const getWebsiteUrl = () => {
    if (name === "Shri Dhanvantri Vidyapeetam") {
      return "/shri-dhanvantri-vidyapeetam";
    }
    return website;
  };

  // Check if URL is internal
  const isInternalUrl = (url: string) => {
    return url.startsWith("/");
  };

  const websiteUrl = getWebsiteUrl();

  return (
    <Card
      className="overflow-hidden transition-all duration-300 h-full flex flex-col group bg-white border border-gray-200 hover:shadow-lg"
      style={{
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
      }}
    >
      <div 
        className="h-2"
        style={{ backgroundColor: hoverColor }}
      />

      <CardHeader className="pb-4 pt-6">
        <div className="flex items-start gap-4">
          {logo ? (
            <div className="w-12 h-12 overflow-hidden rounded-md flex items-center justify-center bg-white border border-gray-100">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div
              className="w-12 h-12 rounded-md flex items-center justify-center text-white text-lg font-bold"
              style={{ backgroundColor: hoverColor }}
            >
              {defaultLogo}
            </div>
          )}
          <div className="flex-1">
            <CardTitle className="text-xl text-gray-900 font-semibold leading-tight">
              {name}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow px-6 pb-4">
        <CardDescription className="text-sm text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-2 pb-6 px-6 flex justify-between items-center gap-3">
        {isInternalUrl(websiteUrl) ? (
          <a
            href={websiteUrl}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors"
          >
            Visit Website <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        ) : (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline transition-colors"
          >
            Visit Website <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        )}

        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
        >
          <a href="/contact">Contact Us</a>
        </Button>
      </CardFooter>

      <style>{`
        .group:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px -8px ${hoverColor}40;
        }
      `}</style>
    </Card>
  );
};

export default SubsidiaryCard;
