'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
              Building products that solve real problems.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl text-balance">
              I own execution from concept to deployment. Shipping features,
              making tradeoffs, and iterating based on what works. Every decision
              is anchored in delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
              >
                Read Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen py-24 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Real products shipped under real constraints. Each one represents
              decisions made, tradeoffs accepted, and outcomes delivered.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* PEFA Entertainment Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="group relative bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-muted transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">PEFA Entertainment</h3>

                  <p className="text-lg text-muted-foreground mb-6">
                    A digital entertainment platform built to deliver content
                    reliably at scale. Solved distribution, performance, and
                    user experience challenges across web and mobile.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
                      Frontend Development
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
                      DevOps
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
                      QA & Testing
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
                      System Design
                    </span>
                  </div>

                  <Link
                    href="/case-studies/pefa-entertainment"
                    className="inline-flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="md:w-48 h-48 bg-accent/30 rounded-xl flex items-center justify-center border border-border">
                  <span className="text-6xl opacity-20">🎬</span>
                </div>
              </div>
            </motion.div>

            {/* Cosmos.space Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-muted transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">Cosmos.space</h3>

                  <p className="text-lg text-muted-foreground mb-6">
                    Designed and built user interfaces for a web platform.
                    Owned the complete flow from wireframes to production code,
                    ensuring design decisions translated into functional experiences.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
                      UI/UX Design
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
                      Frontend Development
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
                      User Research
                    </span>
                  </div>

                  <a
                    href="https://cosmos.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all"
                  >
                    View Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="md:w-48 h-48 bg-accent/30 rounded-xl flex items-center justify-center border border-border">
                  <span className="text-6xl opacity-20">🌌</span>
                </div>
              </div>
            </motion.div>

            {/* Krakentec.com Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-muted transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">Krakentec.com</h3>

                  <p className="text-lg text-muted-foreground mb-6">
                    Created design systems and implemented responsive interfaces
                    for a technology company. Bridged design vision with technical
                    execution to deliver cohesive user experiences.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
                      UI/UX Design
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
                      Frontend Development
                    </span>
                    <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
                      Design Systems
                    </span>
                  </div>

                  <a
                    href="https://krakentec.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all"
                  >
                    View Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="md:w-48 h-48 bg-accent/30 rounded-xl flex items-center justify-center border border-border">
                  <span className="text-6xl opacity-20">🦑</span>
                </div>
              </div>
            </motion.div>

            {/* Placeholder for future projects */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card/50 border border-dashed border-border rounded-2xl p-8 md:p-12"
            >
              <div className="text-center">
                <p className="text-muted-foreground">
                  More projects coming soon
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        className="min-h-screen py-24 px-6 md:px-12 bg-card/30"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Deep dives into decisions, constraints, and learnings from
              shipping real products.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* PEFA Case Study Card */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-card border border-border rounded-xl p-8 hover:border-muted transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3">
                PEFA Entertainment: Building for Scale
              </h3>

              <p className="text-muted-foreground mb-6">
                How we shipped a content platform under tight timelines,
                balanced performance with features, and iterated based on
                real user behavior.
              </p>

              <div className="space-y-4 mb-6 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-1">The Problem</h4>
                  <p className="text-muted-foreground">
                    Deliver a reliable entertainment platform that works across
                    devices and handles concurrent users without degradation.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-1">Key Decisions</h4>
                  <p className="text-muted-foreground">
                    Chose Next.js for SSR performance. Implemented CDN caching
                    strategy. Built automated testing to catch regressions early.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-1">Outcome</h4>
                  <p className="text-muted-foreground">
                    Shipped on schedule. Platform handles traffic spikes.
                    Mobile performance improved by 40% after optimization cycle.
                  </p>
                </div>
              </div>

              <Link
                href="/case-studies/pefa-entertainment"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors"
              >
                Read Full Case Study
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.article>

            {/* Placeholder for future case studies */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card/50 border border-dashed border-border rounded-xl p-8 flex items-center justify-center"
            >
              <p className="text-muted-foreground text-center">
                More case studies in progress
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 md:px-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something.
          </h2>

          <p className="text-xl text-muted-foreground mb-12">
            Open to product roles, early-stage opportunities, and
            conversations about execution and delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:bg-accent hover:border-muted transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:bg-accent hover:border-muted transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:bg-accent hover:border-muted transition-colors group"
              aria-label="Twitter/X"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:bg-accent hover:border-muted transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}