
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export interface SubsidiaryProps {
  name: string;
  description: string;
  color: string;
  website: string;
  logo?: string;
}

const SubsidiaryCard = ({ name, description, color, website, logo }: SubsidiaryProps) => {
  // Convert name to identifier for consistent styling
  const identifier = name.toLowerCase().replace(/\s+/g, '-').replace(/fixity\s*/i, '');
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className={`h-2 bg-fixity-${identifier}`} />
      <CardHeader>
        <div className="flex items-center gap-4">
          {logo ? (
            <img src={logo} alt={`${name} logo`} className="w-10 h-10 object-contain" />
          ) : (
            <div className={`w-10 h-10 rounded-full bg-fixity-${identifier} flex items-center justify-center text-white text-lg font-bold`}>
              {name.charAt(0)}
            </div>
          )}
          <CardTitle>{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className={`text-fixity-${identifier} hover:text-fixity-${identifier}/90 hover:bg-fixity-${identifier}/10 p-0`}>
          <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center">
            Visit Website
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubsidiaryCard;
