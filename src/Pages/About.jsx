import React from 'react';
import PageWrapper from '../components/PageWrapper';
import ScrollButtons from '../components/ScrollButtons';
import ParallaxHero from "../components/ParallaxHero";
import { Users, Award, Briefcase, GraduationCap, BookOpen, Linkedin, Mail, Github, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    // FORCE DARK BACKGROUND - Hard wrapper to ensure dark theme
    <PageWrapper>
      <ScrollButtons />
      <div className="min-h-screen bg-background" style={{ backgroundColor: 'hsl(215, 80%, 9%)' }}>
      {/* Hero Section */}
        <div className="gradient-hero py-20">
          <div className="container mx-auto px-4">
            <ParallaxHero>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
                <div className="text-center">
                  <div className="mb-10">
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl glass-card animate-glow-pulse">
                      <Users className="w-5 h-5 text-cyan" />
                      <span className="text-cyan/80 text-sm font-medium tracking-wider uppercase">
                        SIGAI  
                      </span>
                    </div>
                  </div>

                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
                    <span className="text-gradient letter-spacing-animate inline-block">
                      About ACM SIGAI
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl md:text-2xl text-cyan/70 font-light tracking-widest uppercase max-w-3xl mx-auto">
                    Get to Know ACM SIGAI
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
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* About the Club Section - FIXED HEADING VISIBILITY */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                About the Club
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                ACM SIGAI (Special Interest Group on Artificial Intelligence) is a community focused on learning, 
                researching, and building solutions with AI and computational intelligence. We bring students together 
                through workshops, hackathons, and expert-led sessions to develop real-world skills in machine learning 
                and intelligent systems. Choose SIGAI because it empowers you to not just learn AI — but apply it, 
                innovate with it, and lead the future of technology.
              </p>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Vision Card */}
            <div className="glass-card rounded-2xl p-8 md:p-10 hover:glow-cyan transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan to-electric rounded-full mb-6">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Vision
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To inspire a community of innovators and leaders who use knowledge, technology, 
                  and creativity to shape a smarter and better future.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="glass-card rounded-2xl p-8 md:p-10 hover:glow-cyan transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan to-electric rounded-full mb-6">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 10V3L4 14h7v7l9-11h-7z" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower students with skills, mentorship, and opportunities to excel globally 
                  and to promote creativity, ethics, and impact in everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Why Join SIGAI Section - FIXED SUB-HEADING VISIBILITY */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Join SIGAI?
              </h2>
              <p className="text-lg text-muted-foreground">
                Discover what makes our community special
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Learn by Building - FIXED HEADING VISIBILITY */}
              <div className="glass-card rounded-xl p-6 hover:glow-cyan transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                    <svg 
                      className="w-6 h-6 text-accent" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Learn by Building
                  </h3>
                  <p className="text-muted-foreground">
                    Work on hands-on projects, competitions, and demos that help you truly understand AI concepts instead of just learning them from slides.
                  </p>
                </div>
              </div>

              {/* Grow with Community - FIXED HEADING VISIBILITY */}
              <div className="glass-card rounded-xl p-6 hover:glow-cyan transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                    <svg 
                      className="w-6 h-6 text-accent" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Grow with a Supportive Community
                  </h3>
                  <p className="text-muted-foreground">
                    Collaborate with peers who are curious about AI, share knowledge through study groups, and get guidance from seniors and mentors.
                  </p>
                </div>
              </div>

              {/* Industry Exposure - FIXED HEADING VISIBILITY */}
              <div className="glass-card rounded-xl p-6 hover:glow-cyan transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                    <svg 
                      className="w-6 h-6 text-accent" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0h2a2 2 0 012 2v6.5M8 6H6a2 2 0 00-2 2v6.5m0 0V18a2 2 0 002 2h2M6 14.5V18a2 2 0 002 2h8a2 2 0 002-2v-3.5" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Get Industry Exposure
                  </h3>
                  <p className="text-muted-foreground">
                    Gain exposure to real-world AI applications through talks, workshops, and interactions with professionals from academia and industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Focus Areas Section - FIXED ALL HEADING VISIBILITY */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Focus Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore the diverse domains of AI we work with
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Machine Learning & Data Science - FIXED VISIBILITY */}
              <div className="glass-card rounded-xl p-6 hover:glow-cyan transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Machine Learning & Data Science
                </h3>
                <p className="text-muted-foreground text-sm">
                  From fundamentals like regression and classification to real projects using real-world datasets.
                </p>
              </div>

              {/* Deep Learning & Computer Vision - FIXED VISIBILITY */}
              <div className="glass-card rounded-xl p-6 hover:glow-cyan transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Deep Learning & Computer Vision
                </h3>
                <p className="text-muted-foreground text-sm">
                  Neural networks, CNNs, and image-based applications such as recognition, detection, and generation.
                </p>
              </div>

              {/* Natural Language Processing - FIXED VISIBILITY */}
              <div className="glass-card rounded-xl p-6 hover:glow-cyan transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Natural Language Processing (NLP)
                </h3>
                <p className="text-muted-foreground text-sm">
                  Working with text, building chatbots, and experimenting with large language models.
                </p>
              </div>

              {/* Responsible & Ethical AI - FIXED VISIBILITY */}
              <div className="glass-card rounded-xl p-6 hover:glow-cyan transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Responsible & Ethical AI
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discussions and projects that explore fairness, transparency, and the societal impact of AI.
                </p>
              </div>

              {/* AI for Social Good - FIXED VISIBILITY */}
              <div className="glass-card rounded-xl p-6 hover:glow-cyan transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  AI for Social Good
                </h3>
                <p className="text-muted-foreground text-sm">
                  Using AI to solve meaningful problems in education, healthcare, accessibility, and sustainability.
                </p>
              </div>
            </div>
          </div>

          {/* How We Work Section - FIXED STEP HEADING VISIBILITY */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We Work
              </h2>
              <p className="text-lg text-muted-foreground">
                Our structured approach to learning and building
              </p>
            </div>

            <div className="space-y-4">
              {/* Explore - FIXED HEADING VISIBILITY */}
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:glow-cyan transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan to-electric rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      Explore
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      We start by learning the foundations through sessions, bootcamps, and curated resources.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experiment - FIXED HEADING VISIBILITY */}
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:glow-cyan transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan to-electric rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      Experiment
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Members build small projects, participate in hackathons, and try out new ideas quickly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Execute - FIXED HEADING VISIBILITY */}
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:glow-cyan transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan to-electric rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      Execute
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Promising ideas are taken further as long-term projects, research initiatives, or events for the wider community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>

    
  );
};

export default About;