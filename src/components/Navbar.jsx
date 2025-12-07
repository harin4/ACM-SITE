import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
      <div className="flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/ACM_LOGO.jpg" alt="Logo" className="h-10 w-10 object-contain" />
          </Link>
          <span className="font-bold text-lg">ACM SIGAI</span>
        </div>

        {/* Menu Button */}
        <button
            onClick={onMenuClick}
            className="absolute left-1/2 transform -translate-x-1/2 p-3 rounded-lg hover:bg-sidebar-accent transition-colors duration-200 group"
            aria-label="Open menu"
          >
            <div className="grid grid-cols-2 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-sidebar-foreground group-hover:bg-cyan transition-colors" />
              <div className="w-2 h-2 rounded-full bg-sidebar-foreground group-hover:bg-cyan transition-colors" />
              <div className="w-2 h-2 rounded-full bg-sidebar-foreground group-hover:bg-cyan transition-colors" />
              <div className="w-2 h-2 rounded-full bg-sidebar-foreground group-hover:bg-cyan transition-colors" />
            </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-cyan transition-colors">Home</Link>
          <Link to="/about" className="hover:text-cyan transition-colors">About</Link>
          <Link to="/events" className="hover:text-cyan transition-colors">Events</Link>
          <Link to="/team" className="hover:text-cyan transition-colors">Team</Link>
          <Link to="/gallery" className="hover:text-cyan transition-colors">Gallery</Link>
          <Link to="/joinus" className="hover:text-cyan transition-colors">Join Us</Link>
          <Link to="/contact" className="hover:text-cyan transition-colors">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
