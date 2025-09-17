import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
  delay?: number;
}

const RoleCard = ({ title, description, icon: Icon, onClick, delay = 0 }: RoleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card border-border/20 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] cursor-pointer glow-effect animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Content */}
      <div className="relative p-10 text-center space-y-8">
        {/* Icon container */}
        <div className="relative inline-flex items-center justify-center">
          <div className={`w-24 h-24 bg-gradient-hero rounded-3xl shadow-glow flex items-center justify-center transition-all duration-500 ${isHovered ? 'animate-pulse-glow scale-110 rotate-3' : 'scale-100 rotate-0'}`}>
            <Icon className="h-12 w-12 text-primary-foreground" />
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-float opacity-80"></div>
          <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-float delay-1000 opacity-60"></div>
        </div>
        
        {/* Text content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {description}
          </p>
        </div>
        
        {/* Interactive button */}
        <div className="pt-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-hero text-foreground rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-glow">
            Get Started →
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RoleCard;