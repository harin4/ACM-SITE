import { useEffect, useRef, useState } from "react";

const ParallaxHero = ({ children }) => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const opacityFade = Math.max(0, 1 - scrollY / 600);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen gradient-hero overflow-hidden perspective-1000"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-40"
          style={{
            background: "radial-gradient(circle, hsl(190 100% 50% / 0.4) 0%, transparent 70%)",
            top: `calc(20% + ${mousePos.y * 30}px)`,
            left: `calc(30% + ${mousePos.x * 30}px)`,
            transform: `translateY(${parallaxOffset * 0.3}px)`,
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(200 100% 60% / 0.5) 0%, transparent 70%)",
            bottom: `calc(10% - ${mousePos.y * 20}px)`,
            right: `calc(20% - ${mousePos.x * 20}px)`,
            transform: `translateY(${-parallaxOffset * 0.2}px)`,
          }}
        />
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan/30 animate-float-slow"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateY(${parallaxOffset * (0.1 + i * 0.05)}px)`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(190 100% 50% / 0.03) 2px,
            hsl(190 100% 50% / 0.03) 4px
          )`,
        }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(190 100% 50% / 0.08) 1px, transparent 1px),
            linear-gradient(90deg, hsl(190 100% 50% / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${parallaxOffset * 0.1}px) perspective(500px) rotateX(${mousePos.y * 2}deg)`,
        }}
      />

      <div
        className="relative z-10 transform-3d"
        style={{
          opacity: opacityFade,
          transform: `translateY(${parallaxOffset * 0.4}px) translateZ(${-scrollY * 0.1}px)`,
        }}
      >
        {children}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
};

export default ParallaxHero;
