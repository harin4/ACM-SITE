import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Calendar,
  Users,
  Folder,
  FlaskConical,
  Mail,
  X,
  LogIn,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/about", label: "About", icon: Info },
    { to: "/events", label: "Events", icon: Calendar },
    { to: "/team", label: "Team", icon: Users },
    { to: "/gallery", label: "Gallery", icon: Folder },
    { to: "/joinus", label: "Joinus", icon: LogIn },
    { to: "/contact", label: "Contactus", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-md">
      <div className="flex items-center justify-between px-6 h-16 relative">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="/ACM_LOGO.jpg"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
          </Link>
          <span className="font-bold text-lg">ACM SIGAI</span>
        </div>



        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute left-1/2 transform -translate-x-1/2 p-3 rounded-lg hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="grid grid-cols-2 gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#021526] text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 flex flex-col shadow-xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img
                src="/ACM_LOGO.jpg"
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
            </Link>
            <span className="font-bold text-lg">ACM SIGAI</span>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 px-5 mt-5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`
                  flex items-center gap-4 p-3 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#082032] text-cyan-400 shadow-lg"
                      : "text-gray-300"
                  }
                  hover:bg-[#0d2031] hover:text-cyan-400
                `}
              >
                <link.icon
                  size={22}
                  className={`${
                    isActive ? "text-cyan-400" : "text-gray-400"
                  }`}
                />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-auto px-6 py-5 text-gray-400 text-sm text-center">
          Special Interest Group on <br /> Artificial Intelligence
        </div>
      </div>
    </nav>
  );
}
