import { Shield, Sparkles } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="relative w-full bg-card/80 backdrop-blur-xl shadow-header border-b border-border/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-radial from-accent/15 to-transparent rounded-full blur-2xl animate-float"></div>
      
      <div className="relative container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-4 animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-hero rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse-glow"></div>
            <div className="relative p-4 bg-gradient-hero rounded-2xl shadow-glow">
              <Shield className="h-10 w-10 text-primary-foreground animate-float" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-pulse" />
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Welcome to Raksha360
            </h1>
            <p className="text-muted-foreground text-base max-w-md">
              Your comprehensive disaster preparedness platform designed for safety and peace of mind
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="h-1 w-8 bg-gradient-hero rounded-full"></div>
              <div className="h-1 w-1 bg-gradient-hero rounded-full animate-pulse"></div>
              <div className="h-1 w-8 bg-gradient-hero rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;