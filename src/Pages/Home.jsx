import { useEffect, useState } from "react";
import { Brain, Users, Lightbulb, Rocket } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import ParallaxHero from "../components/ParallaxHero";
import ScrollButtons from "../components/ScrollButtons";
import PlaceholderLogo from "../components/PlaceholderLogo";

const Home = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [titleVisible, setTitleVisible] = useState(false);

  const tagline =
    "Driving AI excellence with collective learning, research, and real-world problem solving.";

  useEffect(() => {
    setTitleVisible(true);

    const timer = setTimeout(() => {
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < tagline.length) {
          setDisplayedText(tagline.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 35);

      return () => clearInterval(typeTimer);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Research",
      description:
        "Explore cutting-edge artificial intelligence research and contribute to groundbreaking projects.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Join a vibrant community of AI enthusiasts, researchers, and industry professionals.",
    },
    {
      icon: Lightbulb,
      title: "Learning",
      description:
        "Access workshops, seminars, and resources to enhance your AI and machine learning skills.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "Transform ideas into reality through hackathons, competitions, and collaborative projects.",
    },
  ];

  return (
    <PageWrapper>
      <ScrollButtons />

      {/* HERO SECTION */}
      <ParallaxHero>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
          <div className="text-center">
            {/* LOGO */}
            <div
              className={`mb-10 transition-all duration-1000 ${
                titleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl glass-card animate-glow-pulse">
                <span className="text-cyan/80 text-sm font-medium tracking-wider uppercase">
                  SRMIST Student Chapter
                </span>
              </div>
            </div>

            {/* MAIN TITLE */}
            <div className="overflow-hidden perspective-1000">
              <h1
                className={`transition-all duration-1000 delay-200 ${
                  titleVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transform: titleVisible
                    ? "translateY(0) rotateX(0)"
                    : "translateY(50px) rotateX(-10deg)",
                }}
              >
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-4">
                  <span className="text-gradient letter-spacing-animate inline-block">
                    ACM
                  </span>
                  <span className="text-primary-foreground mx-4">·</span>
                  <span
                    className="text-gradient letter-spacing-animate inline-block"
                    style={{ animationDelay: "0.2s" }}
                  >
                    SIGAI
                  </span>
                </span>

                <span
                  className={`block text-lg sm:text-xl md:text-2xl text-cyan/70 font-light tracking-widest uppercase
                    transition-all duration-1000 delay-700 ${
                      titleVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                >
                  Special Interest Group on Artificial Intelligence
                </span>
              </h1>
            </div>

            {/* TYPEWRITER */}
            <div
              className={`mt-12 mb-8 transition-all duration-1000 delay-1000 ${
                titleVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/60 max-w-4xl mx-auto leading-relaxed font-light">
                {displayedText}
                <span
                  className={`inline-block w-0.5 h-7 bg-cyan ml-2 transition-opacity duration-100 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    boxShadow: "0 0 10px hsl(190 100% 50%)",
                  }}
                />
              </p>
            </div>

            {/* DECORATIVE LINE */}
            <div
              className={`flex items-center justify-center gap-4 mt-16 transition-all duration-1000 delay-1200 ${
                titleVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
            >
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

      {/* FEATURES */}
      <section className="py-24 lg:py-32 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-electric/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              What We <span className="text-gradient">Do</span>
            </h2>
            <p className="text-primary-foreground/50 text-lg sm:text-xl max-w-2xl mx-auto">
              Empowering the next generation of AI innovators through education, research, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-3xl glass-card hover:border-cyan/40 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan/30 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-4 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 gradient-hero relative overflow-hidden">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "500+", label: "Members" },
              { value: "50+", label: "Events" },
              { value: "20+", label: "Projects" },
              { value: "10+", label: "Research Papers" },
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

      {/* CTA */}
      <section className="py-24 lg:py-32 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] animate-pulse-glow" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
            Ready to Shape the <span className="text-gradient">Future of AI</span>?
          </h2>
          <p className="text-primary-foreground/50 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join ACM SIGAI SRMIST and be part of a community that's pushing the boundaries of artificial intelligence.
          </p>

          <div className="flex items-center justify-center gap-8 flex-wrap">
            <PlaceholderLogo name="SRMIST" size="lg" />
            <PlaceholderLogo name="ACM" size="lg" />
            <PlaceholderLogo name="SIGAI" size="lg" />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
