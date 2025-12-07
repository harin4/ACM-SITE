import { useState } from "react";
import { Users, Award, Briefcase, GraduationCap, BookOpen, Linkedin, Mail, Github, Globe } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import ParallaxHero from "../components/ParallaxHero";
import ScrollButtons from "../components/ScrollButtons";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const [activeRole, setActiveRole] = useState("all");

  const roles = [
    { id: "all", label: "SIGAI Team", icon: Users },
    { id: "faculty", label: "Faculty", icon: BookOpen },
    { id: "executive", label: "Office Bearers", icon: Briefcase },
    { id: "core", label: "Core Team", icon: Award },
  ];

  // Team members - Faculty
  const teamMembers = [
    {
      id: 1,
      name: "Dr. M. Uma",
      role: "faculty",
      position: "Faculty Sponsor",
      image: "/uma.png",
      website: "https://www.srmist.edu.in/faculty/dr-m-uma/",
      bio: "Faculty Sponsor for ACM SIGAI",
    },
    {
      id: 2,
      name: "Dr. R. Beaulah Jeyavathana",
      role: "faculty",
      position: "Faculty Coordinator",
      image: "/beaulah.png",
      website: "https://www.srmist.edu.in/faculty/dr-r-beaulah-jeyavathana/",
      bio: "Faculty Coordinator for ACM SIGAI",
    },
    {
      id: 3,
      name: "Dr. B. Pitchai Manickam",
      role: "faculty",
      position: "Faculty Coordinator",
      image: "/pitchai.png",
      website: "https://www.srmist.edu.in/faculty/dr-b-pitchai-manickam/",
      bio: "Faculty Coordinator for ACM SIGAI",
    },
    {
      id: 4,
      name: "Dr. Gopirajan PV",
      role: "faculty",
      position: "Faculty Coordinator",
      image: "/gopirajan.png",
      website: "https://www.srmist.edu.in/faculty/dr-gopirajan-pv/",
      bio: "Faculty Coordinator for ACM SIGAI",
    },
    {
      id: 5,
      name: "Mr. Thiruvenkata Muhilan A",
      role: "faculty",
      position: "Faculty Coordinator",
      image: null, // Will use placeholder/fallback
      website: null,
      bio: "Faculty Coordinator for ACM SIGAI",
    },
    {
      id: 6,
      name: "Krithika Ganesan",
      role: "executive",
      position: "Chairperson",
      image: "/krithika.jpg",
      linkedin: "krithika-ganesan",
      bio: "Leading ACM SIGAI as Chairperson",
    },
    {
      id: 7,
      name: "Karthik Ganesan",
      role: "executive",
      position: "Vice Chairperson",
      image: "/karthik.jpg",
      linkedin: "karthikganesan23",
      bio: "Supporting ACM SIGAI as Vice Chairperson",
    },
    {
      id: 8,
      name: "Sathysh Kumar RG",
      role: "executive",
      position: "Treasurer",
      image: null, // Placeholder image - will use fallback
      linkedin: "sathyshkumar-rg-385123338",
      bio: "Managing finances as Treasurer for ACM SIGAI",
    },
    {
      id: 9,
      name: "Harini",
      role: "core",
      position: "Technical Lead",
      image: "/harini.jpeg",
      linkedin: "harini-v-792019293",
      bio: "Leading technical initiatives and development for ACM SIGAI",
    },
    {
      id: 10,
      name: "Vidhi",
      role: "core",
      position: "Social Media Lead",
      image: "/vidhi.jpg", // Placeholder image - will use fallback
      linkedin: "vidhi-jain005",
      bio: "Managing social media presence and communications for ACM SIGAI",
    },
    {
      id: 11,
      name: "Dayanitha",
      role: "core",
      position: "Corporates Lead",
      image: "/dayanitha.jpeg",
      linkedin: "dayanitha-manikandan-8858ba2b7",
      bio: "Building corporate partnerships and relationships for ACM SIGAI",
    },
    {
      id: 12,
      name: "Naveen",
      role: "core",
      position: "Creatives Lead",
      image: "/naveen.jpg", // Placeholder image - will use fallback
      linkedin: "navn2",
      bio: "Leading creative design and visual content for ACM SIGAI",
    },
    {
      id: 13,
      name: "Priyadharshini",
      role: "core",
      position: "Women in Engineering Lead",
      image: "/priyadarshini.jpeg",
      linkedin: "priyadharshini2",
      bio: "Empowering women in engineering and technology at ACM SIGAI",
    },
    
  ];

  const filteredMembers =
    activeRole === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.role === activeRole);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

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
                  Our Team
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span className="text-gradient letter-spacing-animate inline-block">
                Team
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-cyan/70 font-light tracking-widest uppercase max-w-3xl mx-auto">
              Meet the Minds Behind ACM SIGAI
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

      {/* FILTER SECTION */}
      <section className="py-12 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {roles.map((role) => {
              const Icon = role.icon;
  return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role.id)}
                  className={`group flex items-center gap-2 px-6 py-3 rounded-xl glass-card transition-all duration-300 ${
                    activeRole === role.id
                      ? "border-cyan/40 bg-cyan/10 shadow-lg shadow-cyan/20"
                      : "border-cyan/15 hover:border-cyan/30 hover:translate-y-[-4px]"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      activeRole === role.id
                        ? "text-cyan"
                        : "text-primary-foreground/50 group-hover:text-cyan"
                    }`}
                  />
                  <span
                    className={`font-medium transition-colors ${
                      activeRole === role.id
                        ? "text-cyan"
                        : "text-primary-foreground/70 group-hover:text-primary-foreground"
                    }`}
                  >
                    {role.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, hsl(190 100% 50% / 0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-20">
              <Users className="w-16 h-16 text-primary-foreground/30 mx-auto mb-4" />
              <p className="text-primary-foreground/50 text-xl">No members found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group p-6 rounded-3xl glass-card hover:border-cyan/40 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative mb-4">
                      <Avatar className="w-32 h-32 border-4 border-cyan/20 group-hover:border-cyan/40 transition-all duration-300">
                        {member.image && <AvatarImage src={member.image} alt={member.name} />}
                        <AvatarFallback className="bg-gradient-accent text-primary-foreground text-2xl font-bold">
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 rounded-full bg-cyan/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-cyan/80 text-sm font-medium mb-2">{member.position}</p>
                    <p className="text-primary-foreground/50 text-xs leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-cyan/10">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 rounded-lg glass-card-light flex items-center justify-center hover:bg-cyan/10 hover:border-cyan/30 transition-all duration-300 group/link"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4 text-primary-foreground/50 group-hover/link:text-cyan transition-colors" />
                      </a>
                    )}
                    {member.website ? (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg glass-card-light flex items-center justify-center hover:bg-cyan/10 hover:border-cyan/30 transition-all duration-300 group/link"
                        aria-label={`Website ${member.name}`}
                      >
                        <Globe className="w-4 h-4 text-primary-foreground/50 group-hover/link:text-cyan transition-colors" />
                      </a>
                    ) : (
                      <>
                        {member.linkedin && (
                          <a
                            href={`https://linkedin.com/in/${member.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg glass-card-light flex items-center justify-center hover:bg-cyan/10 hover:border-cyan/30 transition-all duration-300 group/link"
                            aria-label={`LinkedIn ${member.name}`}
                          >
                            <Linkedin className="w-4 h-4 text-primary-foreground/50 group-hover/link:text-cyan transition-colors" />
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={`https://github.com/${member.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg glass-card-light flex items-center justify-center hover:bg-cyan/10 hover:border-cyan/30 transition-all duration-300 group/link"
                            aria-label={`GitHub ${member.name}`}
                          >
                            <Github className="w-4 h-4 text-primary-foreground/50 group-hover/link:text-cyan transition-colors" />
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-electric/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "120", label: "Total Members" },
              { value: "5", label: "Faculty" },
              { value: "3", label: "Office Bearers" },
              { value: "8", label: "Core Team" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-3xl glass-card-light hover:border-cyan/30 transition-all duration-300 group"
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-gradient mb-4 glow-text group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/60 text-sm uppercase tracking-[0.2em] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      
    </PageWrapper>
  );
};

export default Team;
