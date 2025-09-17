import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  CloudSnow, 
  Wind,
  Thermometer,
  Droplets,
  Eye
} from "lucide-react";

const WeatherWidget = () => {
  // Mock weather data - in real app, this would come from weather API
  const currentWeather = {
    location: "Central District",
    temperature: 72,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 8,
    visibility: 10,
    icon: Cloud,
  };

  const forecast = [
    { day: "Today", high: 75, low: 62, condition: "Partly Cloudy", icon: Cloud },
    { day: "Tomorrow", high: 68, low: 55, condition: "Rainy", icon: CloudRain },
    { day: "Wed", high: 70, low: 58, condition: "Sunny", icon: Sun },
    { day: "Thu", high: 73, low: 61, condition: "Cloudy", icon: Cloud },
  ];

  const alerts = [
    { type: "warning", message: "Thunderstorm Watch until 8 PM" },
  ];

  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Weather Forecast</h3>
        <p className="text-sm text-muted-foreground">Current conditions and alerts</p>
      </div>

      {/* Weather Alerts */}
      {alerts.length > 0 && (
        <div className="mb-6">
          {alerts.map((alert, index) => (
            <Badge key={index} variant="destructive" className="mb-2">
              ⚠️ {alert.message}
            </Badge>
          ))}
        </div>
      )}

      {/* Current Weather */}
      <div className="mb-6 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">{currentWeather.location}</p>
            <p className="text-2xl font-bold text-foreground">{currentWeather.temperature}°F</p>
            <p className="text-sm text-muted-foreground">{currentWeather.condition}</p>
          </div>
          <currentWeather.icon className="h-12 w-12 text-primary" />
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <span className="text-muted-foreground">
              {currentWeather.humidity}%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-gray-500" />
            <span className="text-muted-foreground">
              {currentWeather.windSpeed} mph
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-green-500" />
            <span className="text-muted-foreground">
              {currentWeather.visibility} mi
            </span>
          </div>
        </div>
      </div>

      {/* 4-Day Forecast */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-3">4-Day Forecast</h4>
        <div className="space-y-3">
          {forecast.map((day) => (
            <div key={day.day} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <day.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground min-w-0">
                  {day.day}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-foreground">{day.high}°</span>
                <span className="text-muted-foreground">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <button className="w-full text-sm text-primary hover:text-primary/80 transition-colors">
          View Detailed Forecast →
        </button>
      </div>
    </Card>
  );
};

export default WeatherWidget;