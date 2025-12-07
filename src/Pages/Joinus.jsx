import {
  Code,
  Share2,
  Briefcase,
  Palette,
  Sparkles,
  BookMarked,
  Handshake,
  DollarSign,
  BarChart2,
  Trophy  
} 
from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import ScrollButtons from "../components/ScrollButtons";
import ParallaxHero from "../components/ParallaxHero";
import { Users, Award, GraduationCap, BookOpen, Linkedin, Mail, Github, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


const sizeClasses = {
  sm: "w-25 h-8 text-[8px]",
  md: "w-25 h-12 text-[10px]",
  lg: "w-26 h-16 text-xs",
};

const JoinUs = () => {
  const size = "lg";
  
  const domains = [
    {
      Icon: Code,
      title: "Technical",
      points: [
        "Work on innovative coding projects",
        "Attend hackathons and workshops",
        "Learn and implement new technologies",
      ],
    },
    {
      Icon: Share2,
      title: "Social Media",
      points: [
        "Manage club social accounts",
        "Promote events and achievements",
        "Engage with the tech community online",
      ],
    },
    {
      Icon: Briefcase,
      title: "Corporate",
      points: [
        "Interact with industry professionals",
        "Attend career guidance sessions",
        "Work on real-world projects and internships",
      ],
    },
    {
      Icon: Palette,
      title: "Creatives",
      points: [
        "Design visuals for events and campaigns",
        "Create UI/UX for projects",
        "Participate in creative competitions",
      ],
    },
    {
      Icon: Sparkles,
      title: "Women in Engineering",
      points: [
        "Support and empower women in tech",
        "Organize mentorship programs",
        "Host workshops and networking sessions",
      ],
    },
  ];

  const benefits = [
    { Icon: BookOpen, text: "Access to Publications" },
    { Icon: BookMarked, text: "ACM Digital Library" },
    { Icon: Briefcase, text: "Career & Job Resources" },
    { Icon: Handshake, text: "Networking Opportunities" },
    { Icon: DollarSign, text: "Discounts & Special Offers" },
    { Icon: BarChart2, text: "Professional Development" },
    { Icon: Trophy, text: "Student Research Competitions" },
    { Icon: GraduationCap, text: "Scholarships & Awards" },
  ];

  return (
    <PageWrapper>
      <ScrollButtons />
      <ParallaxHero>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
          <div className="text-center">
            <div className="mb-10">
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl glass-card animate-glow-pulse">
                <Users className="w-5 h-5 text-cyan" />
                <span className="text-cyan/80 text-sm font-medium tracking-wider uppercase">
                  Connect
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span className="text-gradient letter-spacing-animate inline-block">
                Join us
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-cyan/70 font-light tracking-widest uppercase max-w-3xl mx-auto">
              Become a Part of ACM SIGAI
            </p>

            <div className="flex items-center justify-center gap-4 mt-16">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
              <div
                className="w-2 h-2 rounded-full bg-cyan animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
            </div>
          </div>
        </div>
      </ParallaxHero>

      {/* DOMAINS SECTION */}
      <section className="py-20 gradient-dark text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-12">
          Domains We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {domains.map(({ Icon, title, points }, index) => {
            // Center last two cards
            const centerLastTwo =
              index >= domains.length - 2
                ? "justify-self-center"
                : "";

            return (
              <div
                key={title}
                className={`glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-start gap-6 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(46,139,87,0.6)] hover:border-cyan ${centerLastTwo}`}
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-10 h-10 text-white" />
                  <p className="text-2xl font-semibold text-white">{title}</p>
                </div>
                <ul className="list-disc ml-6 text-white text-lg space-y-1">
                  {points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 text-center gradient-dark">
        <h2 className="text-4xl font-bold text-white mb-12">
          Benefits of Joining
        </h2>
        <div className="overflow-hidden">
          <div className="horizontal-scroll">
            {benefits.map(({ Icon, text }, idx) => (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center gap-4 min-w-[220px] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(46,139,87,0.6)] hover:border-cyan"
              >
                <Icon className="w-12 h-12 text-white" />
                <p className="text-white text-lg font-medium">{text}</p>
              </div>
            ))}
            {/* Duplicate cards to make scrolling seamless */}
            {benefits.map(({ Icon, text }, idx) => (
              <div
                key={`dup-${idx}`}
                className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center gap-4 min-w-[220px] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(46,139,87,0.6)] hover:border-cyan"
              >
                <Icon className="w-12 h-12 text-white" />
                <p className="text-white text-lg font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 gradient-dark text-center border-t border-white/10">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
            Excited to be part of <span className="text-gradient">ACM SIGAI</span>?
          </h2>
          <p className="text-primary-foreground/50 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Send Us a Request to Join
          </p>
          <div
            className={`${sizeClasses[size]} rounded-lg glass-card flex items-center justify-center 
              text-cyan font-bold tracking-wider border border-cyan/20 
              hover:border-cyan/40 hover:scale-105 transition-all duration-300`}
          >
            <a href="mailto:acm@gmail.com" className="hover:underline">
              acmcintel@gmail.com
            </a>
          </div>


        </div>
      </section>



    </PageWrapper>
  );
};

export default JoinUs;
