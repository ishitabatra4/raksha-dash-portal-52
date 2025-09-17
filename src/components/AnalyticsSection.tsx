import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const alertData = [
  { day: "Mon", alerts: 12, resolved: 10 },
  { day: "Tue", alerts: 19, resolved: 16 },
  { day: "Wed", alerts: 8, resolved: 8 },
  { day: "Thu", alerts: 15, resolved: 12 },
  { day: "Fri", alerts: 22, resolved: 18 },
  { day: "Sat", alerts: 6, resolved: 5 },
  { day: "Sun", alerts: 9, resolved: 8 },
];

const drillData = [
  { month: "Jan", completion: 85, attendance: 92 },
  { month: "Feb", completion: 88, attendance: 89 },
  { month: "Mar", completion: 92, attendance: 94 },
  { month: "Apr", completion: 90, attendance: 87 },
  { month: "May", completion: 95, attendance: 96 },
  { month: "Jun", completion: 93, attendance: 91 },
];

const roleDistribution = [
  { name: "Students", value: 65, color: "#3B82F6" },
  { name: "Teachers", value: 25, color: "#10B981" },
  { name: "Parents", value: 8, color: "#F59E0B" },
  { name: "Admin", value: 2, color: "#EF4444" },
];

const AnalyticsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Alert Trends */}
      <Card className="p-6 col-span-1 lg:col-span-2">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground">Alert Trends (Last 7 Days)</h3>
          <p className="text-sm text-muted-foreground">Daily alert creation and resolution</p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={alertData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="day" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
            />
            <Area
              type="monotone"
              dataKey="alerts"
              stackId="1"
              stroke="#EF4444"
              fill="#FEE2E2"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="resolved"
              stackId="2"
              stroke="#10B981"
              fill="#D1FAE5"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* User Role Distribution */}
      <Card className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground">User Roles</h3>
          <p className="text-sm text-muted-foreground">Distribution by role</p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={roleDistribution}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {roleDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2">
          {roleDistribution.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-foreground">{item.name}</span>
              </div>
              <span className="font-medium text-foreground">{item.value}%</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Drill Performance */}
      <Card className="p-6 col-span-1 lg:col-span-2 xl:col-span-3">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground">Drill Performance (Last 6 Months)</h3>
          <p className="text-sm text-muted-foreground">Completion rates and attendance metrics</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={drillData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="completion" fill="#3B82F6" name="Completion Rate %" radius={[4, 4, 0, 0]} />
            <Bar dataKey="attendance" fill="#10B981" name="Attendance Rate %" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default AnalyticsSection;