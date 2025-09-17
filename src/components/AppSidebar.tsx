import { 
  Home, 
  School, 
  AlertTriangle, 
  BarChart3, 
  Settings, 
  Users, 
  Calendar,
  FileText
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/", icon: Home },
      { title: "Schools", url: "/schools", icon: School },
      { title: "Users", url: "/users", icon: Users },
    ]
  },
  {
    title: "Safety Management",
    items: [
      { title: "Alerts", url: "/alerts", icon: AlertTriangle },
      { title: "Drills", url: "/drills", icon: Calendar },
      { title: "Reports", url: "/reports", icon: FileText },
    ]
  },
  {
    title: "Analytics",
    items: [
      { title: "Statistics", url: "/statistics", icon: BarChart3 },
      { title: "Settings", url: "/settings", icon: Settings },
    ]
  }
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="border-r bg-card/50">
      <SidebarContent className="px-2 py-4">
        {navigation.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`rounded-lg transition-all duration-200 ${
                        isActive(item.url)
                          ? "bg-gradient-primary text-primary-foreground shadow-md"
                          : "hover:bg-muted/70 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <NavLink 
                        to={item.url} 
                        className="flex items-center gap-3 px-3 py-2.5 w-full"
                      >
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <span className="font-medium">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}