import {
  Code,
  Share2,
  Briefcase,
  Palette,
  Sparkles,
  BookOpen,
  BookMarked,
  Handshake,
  DollarSign,
  BarChart2,
  GraduationCap,
  Trophy,
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import ScrollButtons from "../components/ScrollButtons";

const JoinUs = () => {
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

      {/* HERO */}
      <section className="py-24 gradient-hero text-center relative overflow-hidden">
        <h1 className="text-5xl sm:text-6xl font-black text-gradient mb-6">
          Join Our Community
        </h1>
        <p className="text-white/70 text-xl sm:text-2xl mb-16 max-w-2xl mx-auto">
          Become part of a vibrant community of tech enthusiasts and innovators.
        </p>
      </section>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
          {benefits.map(({ Icon, text }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:shadow-[0_0_30px_rgba(46,139,87,0.6)] transition-shadow"
            >
              <Icon className="w-12 h-12 text-white" />
              <p className="text-white text-lg font-medium">{text}</p>
            </div>
          ))}
        </div>
      </section>
        {/* RECRUITMENT CONTACT */}
<section className="py-10 text-center">
  <div className="inline-block p-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700/80 backdrop-blur-md border border-blue-700/50 shadow-[0_0_20px_rgba(46,139,87,0.5)]">
    <p className="text-white text-sm">
      For recruitments, reach us at{" "}
      <a
        href="mailto:acmcintel@gmail.com"
        className="underline text-cyan-300 hover:text-cyan-400"
      >
        acmcintel@gmail.com
      </a>
    </p>
  </div>
</section>



    </PageWrapper>
  );
};

export default JoinUs;
