import { Plus, AlertTriangle, Calendar, FileText, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const actions = [
  {
    title: "Create New Alert",
    description: "Send emergency notifications",
    icon: AlertTriangle,
    color: "bg-red-500 hover:bg-red-600",
    textColor: "text-white",
  },
  {
    title: "Schedule Drill",
    description: "Plan safety exercises",
    icon: Calendar,
    color: "bg-blue-500 hover:bg-blue-600",
    textColor: "text-white",
  },
  {
    title: "Generate Report",
    description: "Export analytics data",
    icon: FileText,
    color: "bg-green-500 hover:bg-green-600",
    textColor: "text-white",
  },
  {
    title: "Manage Users",
    description: "User administration",
    icon: Users,
    color: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-white",
  },
];

const QuickActions = () => {
  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Quick Actions</h3>
        <p className="text-sm text-muted-foreground">Frequently used functions for efficient management</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Button
            key={action.title}
            className={`${action.color} ${action.textColor} h-auto p-4 flex-col gap-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            onClick={() => console.log(`${action.title} clicked`)}
          >
            <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
              <action.icon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-sm">{action.title}</p>
              <p className="text-xs opacity-90">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;