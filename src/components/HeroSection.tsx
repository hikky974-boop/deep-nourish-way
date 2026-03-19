import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-botanical.jpg";

const HeroSection = () => {
  const scrollToCta = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Base warm gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-background to-section-alt" />

      {/* Subtle paper grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Botanical photo — right side, editorial crop */}
      <div className="absolute top-0 right-0 w-[55%] md:w-[50%] h-full z-[1]">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover object-left-top opacity-70"
        />
        {/* Left edge fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Inline SVG botanical — guaranteed visible, layered on top of photo */}
      <div className="absolute top-0 right-0 w-[50%] md:w-[45%] h-full z-[2] opacity-[0.35]">
        <svg
          viewBox="0 0 600 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMaxYMid slice"
        >
          {/* Main eucalyptus branch */}
          <path
            d="M520 900 Q500 750 480 650 Q460 550 490 450 Q510 380 500 300 Q490 220 520 120 Q540 60 530 0"
            stroke="#B8BEB3"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Sub-branch left */}
          <path
            d="M490 450 Q430 400 380 420 Q340 440 310 410"
            stroke="#C9CEC4"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Sub-branch right */}
          <path
            d="M500 300 Q540 260 580 280 Q610 300 640 270"
            stroke="#C9CEC4"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Sub-branch left lower */}
          <path
            d="M480 650 Q420 620 370 650 Q330 670 290 640"
            stroke="#B8BEB3"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Upper branch right */}
          <path
            d="M520 120 Q560 90 590 110 Q620 140 650 100"
            stroke="#C9CEC4"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />

          {/* Eucalyptus leaves — round shapes */}
          <ellipse cx="360" cy="410" rx="28" ry="35" fill="#C9CEC4" opacity="0.4" transform="rotate(-15 360 410)" />
          <ellipse cx="310" cy="405" rx="22" ry="28" fill="#B8BEB3" opacity="0.3" transform="rotate(-25 310 405)" />
          <ellipse cx="430" cy="395" rx="24" ry="30" fill="#C9CEC4" opacity="0.35" transform="rotate(10 430 395)" />

          <ellipse cx="580" cy="275" rx="26" ry="32" fill="#B8BEB3" opacity="0.35" transform="rotate(20 580 275)" />
          <ellipse cx="540" cy="255" rx="22" ry="28" fill="#C9CEC4" opacity="0.3" transform="rotate(-10 540 255)" />
          <ellipse cx="620" cy="265" rx="20" ry="25" fill="#C9CEC4" opacity="0.25" transform="rotate(30 620 265)" />

          <ellipse cx="370" cy="645" rx="30" ry="38" fill="#C9CEC4" opacity="0.35" transform="rotate(-20 370 645)" />
          <ellipse cx="320" cy="650" rx="24" ry="30" fill="#B8BEB3" opacity="0.3" transform="rotate(5 320 650)" />
          <ellipse cx="420" cy="625" rx="26" ry="32" fill="#C9CEC4" opacity="0.3" transform="rotate(-5 420 625)" />

          {/* Upper leaves */}
          <ellipse cx="560" cy="105" rx="22" ry="28" fill="#C9CEC4" opacity="0.35" transform="rotate(15 560 105)" />
          <ellipse cx="600" cy="95" rx="18" ry="24" fill="#B8BEB3" opacity="0.3" transform="rotate(-20 600 95)" />

          {/* Olive-style elongated leaves along the main stem */}
          <ellipse cx="505" cy="500" rx="10" ry="28" fill="#B8BEB3" opacity="0.3" transform="rotate(25 505 500)" />
          <ellipse cx="475" cy="520" rx="10" ry="28" fill="#C9CEC4" opacity="0.25" transform="rotate(-30 475 520)" />
          <ellipse cx="510" cy="350" rx="9" ry="24" fill="#C9CEC4" opacity="0.3" transform="rotate(20 510 350)" />
          <ellipse cx="485" cy="370" rx="9" ry="24" fill="#B8BEB3" opacity="0.25" transform="rotate(-25 485 370)" />
          <ellipse cx="500" cy="200" rx="8" ry="22" fill="#C9CEC4" opacity="0.3" transform="rotate(15 500 200)" />
          <ellipse cx="515" cy="220" rx="8" ry="22" fill="#B8BEB3" opacity="0.25" transform="rotate(-15 515 220)" />
          <ellipse cx="485" cy="750" rx="10" ry="26" fill="#C9CEC4" opacity="0.3" transform="rotate(-20 485 750)" />
          <ellipse cx="510" cy="770" rx="10" ry="26" fill="#B8BEB3" opacity="0.25" transform="rotate(25 510 770)" />

          {/* Second decorative branch from top right */}
          <path
            d="M650 0 Q620 80 600 160 Q580 230 610 320 Q630 380 600 450"
            stroke="#C9CEC4"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          <ellipse cx="610" cy="160" rx="20" ry="26" fill="#C9CEC4" opacity="0.25" transform="rotate(-10 610 160)" />
          <ellipse cx="595" cy="230" rx="18" ry="24" fill="#B8BEB3" opacity="0.2" transform="rotate(15 595 230)" />
          <ellipse cx="615" cy="320" rx="22" ry="28" fill="#C9CEC4" opacity="0.25" transform="rotate(-5 615 320)" />
          <ellipse cx="600" cy="420" rx="20" ry="26" fill="#B8BEB3" opacity="0.2" transform="rotate(20 600 420)" />
        </svg>
      </div>

      {/* Warm halo behind text area */}
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-warm-white/50 rounded-full blur-[100px] z-[3]" />

      {/* Content — left-aligned for asymmetric editorial layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
          >
            Programme d'hypnose et PNL
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-7"
          >
            Libérez-vous de l'intérieur.
            <br />
            <span className="italic font-light text-primary">Le poids suit naturellement.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-body text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-10"
          >
            Un programme guidé associant hypnose et PNL pour apaiser votre relation
            à la nourriture, réduire les automatismes émotionnels et retrouver un
            équilibre durable — sans régime, sans lutte permanente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="space-y-3"
          >
            <Button variant="hero" size="xl" onClick={scrollToCta}>
              Commencer le programme
            </Button>
            <p className="text-body text-xs text-muted-foreground/70 tracking-wide">
              Accès immédiat — à votre rythme
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-px h-10 bg-primary/25"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
