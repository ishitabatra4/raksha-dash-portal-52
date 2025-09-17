import { Heart, Twitter, Linkedin, Github } from "lucide-react";

const AppFooter = () => {
  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="container px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-primary">Raksha360</p>
                <p className="text-xs text-muted-foreground">Safety First</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering communities with comprehensive disaster preparedness solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Schools</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Alerts</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Reports</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-muted/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-muted/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-muted/50 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Follow us for updates and safety tips.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Raksha360. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with care for safer communities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;