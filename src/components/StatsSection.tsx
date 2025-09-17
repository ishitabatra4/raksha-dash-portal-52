import { School, AlertTriangle, CheckCircle, Calendar, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const statsData = [
  {
    title: "Total Schools",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: School,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Active Alerts",
    value: "23",
    change: "-5%",
    trend: "down",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    title: "Completed Drills",
    value: "8,932",
    change: "+18%",
    trend: "up",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Upcoming Trainings",
    value: "156",
    change: "+23%",
    trend: "up",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Active Users",
    value: "45,678",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    title: "Safety Score",
    value: "94%",
    change: "+2%",
    trend: "up",
    icon: TrendingUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
];

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {statsData.map((stat, index) => (
        <Card
          key={stat.title}
          className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <TrendingUp className={`h-4 w-4 ${
                stat.trend === 'down' ? 'rotate-180' : ''
              }`} />
              {stat.change}
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatsSection;