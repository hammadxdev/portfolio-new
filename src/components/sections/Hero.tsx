// src/components/sections/Hero.tsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, ArrowUpRight, Download } from "lucide-react";
import { personal } from "../../data/portfolio";
import { Marquee } from "../Marquee";

const skillsMarquee = [
  "React.js",
  "Next.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Selenium",
  "n8n",
  "REST APIs",
  "Redux Toolkit",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-[72px] overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Orange glow behind image */}
      <motion.div
        className="absolute top-24 right-[4%] w-[420px] h-[420px] rounded-full bg-orange-500/15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-0 relative">
        <div className="grid lg:grid-cols-2 gap-12 min-h-[calc(100vh-72px)] items-center">
          {/* ── LEFT — Text ── */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div
              variants={item}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-base md:text-lg text-muted-foreground font-medium">
                Hi there!
              </span>
              <span className="text-2xl">👋</span>
              <span className="text-base md:text-lg text-muted-foreground font-medium">
                I'm
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight mb-5"
            >
              Muhammad
              <br />
              <span className="text-orange-500">Hammad</span>
            </motion.h1>

            <motion.div variants={item} className="mb-6">
              <span className="text-lg md:text-xl font-mono text-muted-foreground uppercase tracking-widest">
                <TypeAnimation
                  sequence={personal.taglines.flatMap((t) => [t, 2200])}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-6"
            >
              I believe clean code and smart automation are the essence of great
              software. From full-stack MERN apps to Python scraping systems and
              n8n workflows — I turn complex problems into elegant solutions.
            </motion.p>

            {/* Available badge */}
            <motion.div
              variants={item}
              className="flex items-center gap-2 mb-8"
            >
              <motion.span
                className="w-2.5 h-2.5 rounded-full bg-green-500"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-muted-foreground">
                Available for projects ·{" "}
                <span className="text-foreground font-medium">
                  {personal.location}
                </span>
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <a
                href={personal.cv}
                download="Muhammad_Hammad_CV.pdf"
                className="btn-round btn-round-fill gap-2"
              >
                Download CV <Download className="w-4 h-4" />
              </a>
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-round gap-2"
              >
                View Projects <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
            >
              {[
                { num: "5+", label: "Years\nCoding" },
                { num: "20+", label: "Projects\nBuilt" },
                { num: "4+", label: "Tech\nStacks" },
              ].map(({ num, label }) => (
                <div key={num}>
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">
                    {num}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 whitespace-pre-line leading-relaxed uppercase tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end items-end self-end"
          >
            {/* Orange accent border frame */}
            <div className="absolute bottom-0 right-4 w-[88%] h-[92%] rounded-2xl border-2 border-orange-500/30 z-0" />

            {/* Floating badge — top left */}
            <motion.div
              className="absolute top-8 -left-4 z-20 bg-background border border-border/60 rounded-2xl px-4 py-3 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-widest">
                Status
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold">Open to Work</span>
              </div>
            </motion.div>

            {/* Floating badge — right */}
            <motion.div
              className="absolute top-1/3 -right-2 lg:-right-6 z-20 bg-orange-500 text-white rounded-2xl px-4 py-3 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="text-xs opacity-80 mb-0.5 uppercase tracking-widest">
                Experience
              </div>
              <div className="text-2xl font-bold leading-none">5+</div>
              <div className="text-xs opacity-80">Years</div>
            </motion.div>

            {/* Floating social icons */}
            <motion.div
              className="absolute bottom-24 -left-4 z-20 flex flex-col gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              {[
                { href: personal.github, icon: Github },
                { href: personal.linkedin, icon: Linkedin },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background border border-border/60 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>

            {/* THE PHOTO */}
            <motion.div
              className="relative z-10 w-[80%] max-w-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Orange gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-orange-500/20 to-transparent rounded-b-2xl z-10 pointer-events-none" />
              <img
                src="/images/profile.png"
                alt="Muhammad Hammad"
                className="w-full rounded-2xl object-cover object-top shadow-2xl"
                style={{ maxHeight: "70vh", objectPosition: "top center" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee skills ticker */}
      <div className="border-y border-border/60 bg-muted/30 mt-8">
        <Marquee items={skillsMarquee} size="sm" />
      </div>
    </section>
  );
}
