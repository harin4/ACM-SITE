import { NavLink } from "../components/NavLink";
import { X, Home, Users, Calendar, FolderOpen, FlaskConical, Mail, Info } from "lucide-react";
import { cn } from "../lib/utils";


const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/events", label: "Events", icon: Calendar },
  { to: "/team", label: "Team", icon: Users },
  { to: "/gallery", label: "Gallery", icon: FolderOpen },
  { to: "/joinus", label: "Join Us", icon: FlaskConical },
  { to: "/contactus", label: "Contact Us", icon: Mail },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-navy/80 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-72 gradient-dark border-r border-sidebar-border z-50 transform transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center glow-cyan">
              <span className="text-primary-foreground font-bold text-xl">AI</span>
            </div>
            <div>
              <span className="text-sidebar-foreground font-semibold block">ACM SIGAI</span>
              <span className="text-muted-foreground text-xs">SRMIST Chapter</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5 text-sidebar-foreground" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-sidebar-accent text-cyan glow-cyan"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-cyan"
                )
              }
            >
              <link.icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-sidebar-border">
          <p className="text-muted-foreground text-xs text-center">
            Special Interest Group on<br />Artificial Intelligence
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
