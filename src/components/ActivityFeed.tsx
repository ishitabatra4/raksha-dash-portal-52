import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Calendar,
  School,
  FileText
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "drill_completed",
    title: "Fire Drill Completed",
    description: "Washington Elementary School completed fire drill exercise",
    time: "2 minutes ago",
    icon: CheckCircle,
    iconColor: "text-green-600",
    badge: "Success",
    badgeVariant: "default" as const,
  },
  {
    id: 2,
    type: "alert_created",
    title: "Weather Alert Issued",
    description: "Severe thunderstorm warning for District 12",
    time: "15 minutes ago",
    icon: AlertTriangle,
    iconColor: "text-red-600",
    badge: "Alert",
    badgeVariant: "destructive" as const,
  },
  {
    id: 3,
    type: "user_registered",
    title: "New User Registration",
    description: "5 new teachers registered from Lincoln High School",
    time: "1 hour ago",
    icon: Users,
    iconColor: "text-blue-600",
    badge: "New",
    badgeVariant: "secondary" as const,
  },
  {
    id: 4,
    type: "training_scheduled",
    title: "Training Session Scheduled",
    description: "Emergency response training for next Tuesday",
    time: "2 hours ago",
    icon: Calendar,
    iconColor: "text-purple-600",
    badge: "Scheduled",
    badgeVariant: "outline" as const,
  },
  {
    id: 5,
    type: "school_added",
    title: "School Added to Network",
    description: "Roosevelt Middle School joined the safety network",
    time: "3 hours ago",
    icon: School,
    iconColor: "text-indigo-600",
    badge: "Network",
    badgeVariant: "secondary" as const,
  },
  {
    id: 6,
    type: "report_generated",
    title: "Weekly Report Generated",
    description: "Safety compliance report for week ending March 15",
    time: "5 hours ago",
    icon: FileText,
    iconColor: "text-gray-600",
    badge: "Report",
    badgeVariant: "outline" as const,
  },
];

const ActivityFeed = () => {
  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest updates and notifications</p>
      </div>
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
          >
            <div className={`p-2 rounded-lg bg-muted/50 ${activity.iconColor}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-foreground truncate">
                  {activity.title}
                </p>
                <Badge variant={activity.badgeVariant} className="ml-2 text-xs">
                  {activity.badge}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {activity.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border/50">
        <button className="w-full text-sm text-primary hover:text-primary/80 transition-colors">
          View All Activities →
        </button>
      </div>
    </Card>
  );
};

export default ActivityFeed;