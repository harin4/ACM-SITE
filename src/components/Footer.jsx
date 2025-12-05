import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { id: 1,icon: Linkedin, href: "https://www.linkedin.com/company/srmist-ktr-acm-sigai/", label: "LinkedIn" },
    { id: 2,icon: Github, href: "https://github.com/acmsigai3", label: "GitHub" },
    { id: 3,icon: Instagram, href: "https://www.instagram.com/srmsigai/", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Join Us", path: "/joinus" },
    { name: "Contact Us", path: "/contact" },
  ];


return (
    <footer className="gradient-dark border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logos Section */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
          {/* SRMIST Logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl bg-sidebar-accent flex items-center justify-center">
              <img 
              src="/ACM_LOGO.jpg"
              alt="Logo"
              className="h-full w-full object-contain"
            />
            </div>
            
          </div>

          {/* ACM Logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl bg-sidebar-accent flex items-center justify-center glow-cyan">
              <img 
              src="/SRM_LOGO.jpg"
              alt="Logo"
              className="h-full w-full object-contain"
            />
            </div>
          </div>

          {/* SIGAI Logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center glow-cyan">
              <img 
                src="/INDIAN_ACM.jpg"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-muted-foreground hover:text-cyan transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}

        </div>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Mail className="w-4 h-4 text-cyan" />
          <a
            href="mailto:acm.sigai@srmist.edu.in"
            className="text-muted-foreground hover:text-cyan transition-colors text-sm"
          >
            acm.sigai@srmist.edu.in
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-sidebar-border pt-8">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ACM SIGAI Student Chapter, SRMIST. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Special Interest Group on Artificial Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;