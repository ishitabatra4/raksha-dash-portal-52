import { GraduationCap, UserCheck, Heart, Star, Zap, Users } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import RoleCard from "@/components/RoleCard";
import StatsSection from "@/components/StatsSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import QuickActions from "@/components/QuickActions";
import ActivityFeed from "@/components/ActivityFeed";
import WeatherWidget from "@/components/WeatherWidget";
import AppFooter from "@/components/AppFooter";

const Index = () => {
  const roles = [
    {
      title: "Student",
      description: "Master emergency protocols with interactive drills and knowledge assessments",
      icon: GraduationCap,
      onClick: () => console.log("Student role selected"),
    },
    {
      title: "Teacher", 
      description: "Orchestrate comprehensive safety training programs and emergency response coordination",
      icon: UserCheck,
      onClick: () => console.log("Teacher role selected"),
    },
    {
      title: "Parent",
      description: "Stay connected with real-time safety alerts and track your child's preparedness progress",
      icon: Heart,
      onClick: () => console.log("Parent role selected"),
    },
  ];

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="animate-fade-in">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, User!</h1>
            <p className="text-muted-foreground text-lg">Choose your role below or explore your dashboard.</p>
          </div>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary/10 border border-primary/20 rounded-full text-primary font-medium">
            <Star className="h-5 w-5" />
            All systems operational
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Role Selection */}
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">Access Control</h2>
            <p className="text-sm text-muted-foreground">Select a role to access specialized tools and features</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <RoleCard
                key={role.title}
                title={role.title}
                description={role.description}
                icon={role.icon}
                onClick={role.onClick}
                delay={index * 200}
              />
            ))}
          </div>
        </div>

        {/* System Overview */}
        <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">System Overview</h2>
            <p className="text-muted-foreground">Real-time metrics and key performance indicators</p>
          </div>
          <StatsSection />
        </div>

        {/* Analytics Dashboard */}
        <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Analytics Dashboard</h2>
            <p className="text-muted-foreground">Performance metrics and trend analysis</p>
          </div>
          <AnalyticsSection />
        </div>

        {/* Side Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '800ms' }}>
          <ActivityFeed />
          <WeatherWidget />
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Ready to enhance safety?</h3>
            <p className="text-muted-foreground">
              Connect with our safety experts to customize your disaster preparedness strategy.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Zap className="h-5 w-5" />
                Schedule Consultation
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium text-foreground hover:bg-muted/50 transition-all duration-300">
                <Users className="h-5 w-5" />
                Join Community
              </button>
            </div>
          </div>
        </div>

        <AppFooter />
      </div>
    </AppLayout>
  );
};

export default Index;
