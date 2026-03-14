// src/components/sections/Skills.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, StaggerWrap, fadeUp } from "../AnimatedSection";
import { skills } from "../../data/portfolio";

const colorBar: Record<string, string> = {
  blue: "bg-blue-500",
  green: "bg-emerald-500",
  amber: "bg-amber-500",
  purple: "bg-violet-500",
};
const colorText: Record<string, string> = {
  blue: "text-blue-500",
  green: "text-emerald-500",
  amber: "text-amber-500",
  purple: "text-violet-500",
};

function Bar({
  name,
  level,
  color,
  i,
}: {
  name: string;
  level: number;
  color: string;
  i: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className={`text-xs font-mono font-semibold ${colorText[color]}`}>
          {level}%
        </span>
      </div>
      <div className="h-1 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colorBar[color]}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay: i * 0.07 }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 border-t border-border/60 bg-muted/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Tech Stack
            </h3>
            <span className="section-line" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">My Skills</h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              A full-spectrum skill set — from UI to database, automation to
              mobile.
            </p>
          </div>
        </AnimatedSection>

        <StaggerWrap className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="bg-background p-8"
            >
              <div
                className={`text-xs font-bold uppercase tracking-widest mb-6 ${colorText[group.color]}`}
              >
                {group.category}
              </div>
              {group.items.map((skill, i) => (
                <Bar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  i={i}
                />
              ))}
            </motion.div>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}
