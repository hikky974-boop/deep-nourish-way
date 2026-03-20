import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCta = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Fond doux avec profondeur */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-white via-background to-section-alt" />

      {/* Branche botanique subtile — côté droit */}
      <div className="absolute right-0 top-[15%] h-[65%] w-[320px] md:w-[400px] lg:w-[480px] z-[1] pointer-events-none opacity-[0.13]">
        <svg viewBox="0 0 480 620" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Tige principale */}
          <path d="M420 620 C400 520, 380 420, 350 320 C330 250, 340 180, 360 100 C370 60, 390 20, 420 -10" stroke="#B8BEB3" strokeWidth="2.2" strokeLinecap="round" />
          {/* Tige secondaire */}
          <path d="M350 320 C320 280, 290 260, 260 250" stroke="#C9CEC4" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M360 240 C330 210, 300 200, 270 195" stroke="#C9CEC4" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M370 160 C350 140, 320 130, 290 128" stroke="#C9CEC4" strokeWidth="1.4" strokeLinecap="round" />
          {/* Feuilles droites */}
          <path d="M420 520 C440 490, 460 470, 480 460 C460 460, 440 475, 420 500" fill="#C9CEC4" />
          <path d="M400 440 C425 410, 450 395, 475 388 C448 392, 425 410, 405 435" fill="#B8BEB3" />
          <path d="M380 360 C410 335, 440 320, 470 315 C438 325, 410 340, 385 358" fill="#C9CEC4" />
          <path d="M360 280 C390 258, 420 248, 450 245 C420 255, 392 268, 365 280" fill="#D8D1C7" />
          <path d="M368 200 C395 182, 420 175, 448 172 C420 180, 395 190, 372 200" fill="#C9CEC4" />
          <path d="M380 130 C405 115, 430 108, 455 106 C430 114, 405 122, 384 132" fill="#B8BEB3" />
          {/* Feuilles gauches */}
          <path d="M410 480 C385 455, 360 445, 335 440 C362 450, 385 462, 408 478" fill="#C9CEC4" />
          <path d="M390 400 C362 378, 335 368, 310 365 C338 374, 362 386, 388 398" fill="#D8D1C7" />
          <path d="M365 320 C338 300, 310 292, 282 290 C312 298, 338 308, 362 318" fill="#B8BEB3" />
          <path d="M358 240 C332 222, 305 215, 278 213 C308 220, 332 230, 355 240" fill="#C9CEC4" />
          <path d="M368 165 C342 150, 316 143, 290 142 C318 148, 342 157, 365 166" fill="#D8D1C7" />
          {/* Petites feuilles hautes */}
          <path d="M390 90 C408 75, 425 68, 442 66 C424 73, 408 80, 393 90" fill="#C9CEC4" />
          <path d="M375 105 C355 92, 338 87, 320 86 C340 92, 356 98, 372 106" fill="#B8BEB3" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Programme d'hypnose et PNL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-7"
        >
          Libérez-vous de l'intérieur.
          <br />
          <span className="italic font-light text-primary">Le poids suit naturellement.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-body text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Un programme guidé associant hypnose et PNL pour apaiser votre relation
          à la nourriture, réduire les automatismes émotionnels et retrouver un
          équilibre durable — sans régime, sans lutte permanente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
