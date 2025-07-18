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
    edx: '#5568fe', // brightened for visibility
    learnpad: '#FF6701',
    green: '#69AF07',
    hospital: '#3f84f2', // brightened for visibility
    vidyapeetam: '#FFA500',
  };

  // Default logo based on first letter if no logo provided
  const defaultLogo = name.charAt(0);

  // Get the appropriate color for hover effect
  const hoverColor =
    hoverColors[color as keyof typeof hoverColors] || '#f4af1b';

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 h-full flex flex-col group card-${color}`}
      style={{
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
      }}
    >
      <div className={`h-2 bg-fixity-${color}`} />

      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          {logo ? (
            <div className="w-12 h-12 overflow-hidden rounded-md flex items-center justify-center bg-white">
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div
              className={`w-12 h-12 rounded-md bg-fixity-${color} flex items-center justify-center text-white text-lg font-bold`}
            >
              {defaultLogo}
            </div>
          )}
          <div>
            <CardTitle className="text-xl text-fixity-primary">
              {name}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-2 flex justify-between items-center">
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center text-sm font-medium text-fixity-${color} hover:underline group-hover:text`}
        >
          Visit Website <ExternalLink className="ml-1 h-4 w-4" />
        </a>

        <Button
          asChild
          size="sm"
          variant="outline"
          className={`border-fixity-${color} text-fixity-${color} hover:bg-fixity-${color}/5 btn-hover-${color}`}
          style={{
            transition: 'all 0.3s ease',
          }}
        >
          <a href="/contact">Contact Us</a>
        </Button>
      </CardFooter>

      <style>{`
        .card-${color}:hover {
          box-shadow: 0 12px 28px -6px ${hoverColor}55;
          transform: scale(1.04); /* 👈 Hover scale updated here */
        }

        .btn-hover-${color}:hover {
          box-shadow: 0 0 10px 2px ${hoverColor}55;
        }
      `}</style>
    </Card>
  );
};

export default SubsidiaryCard;
