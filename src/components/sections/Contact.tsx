// src/components/sections/Contact.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Send } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";
import { Marquee } from "../Marquee";
import { personal } from "../../data/portfolio";

const navLinks = [
  { label: "Home", href: "#home", num: "01" },
  { label: "About Me", href: "#about", num: "02" },
  { label: "Skills", href: "#skills", num: "03" },
  { label: "Projects", href: "#projects", num: "04" },
  { label: "Journey", href: "#journey", num: "05" },
  { label: "Contact", href: "#contact", num: "06" },
];

const contactMarquee = [
  personal.email,
  "+92 XXX XXXXXXX",
  personal.email,
  "Let's Build Together",
];

export function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personal.email}?subject=Portfolio Contact from ${form.firstName} ${form.lastName}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="border-t border-border/60">
      {/* Marquee with contact info */}
      <div className="bg-foreground text-background py-1">
        <Marquee items={contactMarquee} size="sm" dark />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Contact
            </h3>
            <span className="section-line" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold leading-none mb-2">
            Let's <span className="text-orange-500">Contact!</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1fr_auto_380px] gap-16 items-start">
          {/* Form */}
          <AnimatedSection direction="left" delay={0.1}>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I am always open to discussing new projects, creative ideas, or
              opportunities. Feel free to reach out via email or connect on
              LinkedIn — I respond within 24 hours.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl border border-green-500/30 bg-green-500/5 text-center"
              >
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-lg font-bold mb-1">Message sent!</h3>
                <p className="text-sm text-muted-foreground">
                  Your email client should open. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={submit}>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {[
                    { label: "First Name", name: "firstName", type: "text" },
                    { label: "Last Name", name: "lastName", type: "text" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Phone Number", name: "phone", type: "tel" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="contact-label block mb-2">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        className="contact-input"
                        value={(form as any)[f.name]}
                        onChange={handle}
                        required={f.name !== "phone"}
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-8">
                  <label className="contact-label block mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Write your message..."
                    className="contact-input resize-none"
                    value={form.message}
                    onChange={handle}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-round btn-round-fill gap-2 inline-flex"
                >
                  Let's Talk <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-border self-stretch" />

          {/* Nav + socials */}
          <AnimatedSection direction="right" delay={0.15}>
            {/* Social links */}
            <div className="mb-10 space-y-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-border/50 group hover:text-orange-500 transition-colors"
              >
                <span className="font-medium text-sm flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-border/50 group hover:text-orange-500 transition-colors"
              >
                <span className="font-medium text-sm flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <nav className="mb-10">
              <ul className="space-y-0">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <button
                      onClick={() =>
                        document
                          .querySelector(l.href)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="w-full flex items-center justify-between py-4 border-b border-border/50 group hover:text-orange-500 transition-colors"
                    >
                      <span className="font-medium text-sm">{l.label}</span>
                      <div className="flex items-center gap-2 text-muted-foreground group-hover:text-orange-500 transition-colors">
                        <span className="text-xs font-mono">{l.num}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex gap-3">
              {[
                { href: personal.github, icon: Github, label: "GitHub" },
                { href: personal.linkedin, icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm border border-border rounded-full px-4 py-2 hover:border-orange-500 hover:text-orange-500 transition-colors"
                  whileHover={{ scale: 1.04 }}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/60 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-xl font-bold">
            H<span className="text-orange-500">a</span>mmad
          </span>
          <p className="text-sm text-muted-foreground">
            © 2025 Muhammad Hammad · {personal.location} · All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React + Vite + Tailwind + shadcn/ui
          </p>
        </div>
      </div>
    </section>
  );
}
