'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, FileText, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.035),rgba(255,255,255,0.035)_1px,transparent_1px,transparent_84px),repeating-linear-gradient(90deg,rgba(255,255,255,0.035),rgba(255,255,255,0.035)_1px,transparent_1px,transparent_84px)]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[640px] w-[860px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_62%)] blur-3xl" />
      </div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-start md:items-center justify-start md:justify-center px-6 md:px-12 pt-28 md:pt-0 pb-16 md:pb-0 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
              Builder / Operator
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl text-balance">
              Zayar Min Thu
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium hover:bg-white transition-colors"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-100 rounded-lg font-medium hover:bg-zinc-900/70 transition-colors"
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
        className="relative z-10 min-h-screen py-24 px-6 md:px-12"
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
            <p className="text-xl text-zinc-400 max-w-2xl">
              Real products shipped under real constraints. Each one represents
              decisions made, tradeoffs accepted, and outcomes delivered.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* ISSA Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 md:p-12 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">Self-Learning Prompt Validation System</h3>

                  <p className="text-lg text-zinc-400 mb-6">
                    A self-learning prompt validation system that scores and evolves prompts for
                    reliability, tracks versions with diffs, and ships an API + frontend workflow
                    for prompt lifecycle management.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      FastAPI
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      PostgreSQL
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      Next.js
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      Tailwind
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      Prompt Evolution
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <a
                      href="https://hackathon-issa-frontend.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-100 font-medium hover:text-zinc-200 transition-colors"
                    >
                      View Live App
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <a
                        href="https://github.com/Fezi-x/zayar-hackathon-issa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-zinc-200 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                      <a
                        href="https://zayar-hackathon-issa-production.up.railway.app/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-zinc-200 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        API Docs
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:w-48 h-48 bg-zinc-900/80 rounded-xl flex items-center justify-center border border-zinc-800">
                  <span className="text-5xl font-semibold tracking-tight text-zinc-500">AI</span>
                </div>
              </div>
            </motion.div>

            {/* PEFA Entertainment Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 md:p-12 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">PEFA Entertainment</h3>

                  <p className="text-lg text-zinc-400 mb-6">
                    A digital entertainment platform built to deliver content
                    reliably at scale. Solved distribution, performance, and
                    user experience challenges across web and mobile.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      Frontend Development
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      DevOps
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      QA & Testing
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      System Design
                    </span>
                  </div>

                  <Link
                    href="/case-studies/pefa-entertainment"
                    className="inline-flex items-center gap-2 text-zinc-100 font-medium hover:text-zinc-200 transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="md:w-48 h-48 bg-zinc-900/80 rounded-xl flex items-center justify-center border border-zinc-800">
                  <span className="text-6xl opacity-20">🎬</span>
                </div>
              </div>
            </motion.div>

            {/* Cosmos.space Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 md:p-12 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">Cosmos.space</h3>

                  <p className="text-lg text-zinc-400 mb-6">
                    Designed and built user interfaces for a web platform.
                    Owned the complete flow from wireframes to production code,
                    ensuring design decisions translated into functional experiences.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      UI/UX Design
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      Frontend Development
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      User Research
                    </span>
                  </div>

                  <a
                    href="https://cosmos.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-100 font-medium hover:text-zinc-200 transition-colors"
                  >
                    View Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="md:w-48 h-48 bg-zinc-900/80 rounded-xl flex items-center justify-center border border-zinc-800">
                  <span className="text-6xl opacity-20">🌌</span>
                </div>
              </div>
            </motion.div>

            {/* Krakentec.com Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 md:p-12 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">Krakentec.com</h3>

                  <p className="text-lg text-zinc-400 mb-6">
                    Created design systems and implemented responsive interfaces
                    for a technology company. Bridged design vision with technical
                    execution to deliver cohesive user experiences.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      UI/UX Design
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      Frontend Development
                    </span>
                    <span className="px-3 py-1 text-sm bg-zinc-900/80 border border-zinc-700 rounded-full text-zinc-200">
                      Design Systems
                    </span>
                  </div>

                  <a
                    href="https://krakentec.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-100 font-medium hover:text-zinc-200 transition-colors"
                  >
                    View Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="md:w-48 h-48 bg-zinc-900/80 rounded-xl flex items-center justify-center border border-zinc-800">
                  <span className="text-6xl opacity-20">🦑</span>
                </div>
              </div>
            </motion.div>

            {/* Placeholder for future projects */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-900/40 border border-dashed border-zinc-800 rounded-2xl p-8 md:p-12"
            >
              <div className="text-center">
                <p className="text-zinc-500">
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
        className="relative z-10 min-h-screen py-24 px-6 md:px-12"
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
            <p className="text-xl text-zinc-400 max-w-2xl">
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
              className="group bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3">
                PEFA Entertainment: Building for Scale
              </h3>

              <p className="text-zinc-400 mb-6">
                How we shipped a content platform under tight timelines,
                balanced performance with features, and iterated based on
                real user behavior.
              </p>

              <div className="space-y-4 mb-6 text-sm">
                <div>
                  <h4 className="font-medium text-zinc-100 mb-1">The Problem</h4>
                  <p className="text-zinc-400">
                    Deliver a reliable entertainment platform that works across
                    devices and handles concurrent users without degradation.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-zinc-100 mb-1">Key Decisions</h4>
                  <p className="text-zinc-400">
                    Chose Next.js for SSR performance. Implemented CDN caching
                    strategy. Built automated testing to catch regressions early.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-zinc-100 mb-1">Outcome</h4>
                  <p className="text-zinc-400">
                    Shipped on schedule. Platform handles traffic spikes.
                    Mobile performance improved by 40% after optimization cycle.
                  </p>
                </div>
              </div>

              <Link
                href="/case-studies/pefa-entertainment"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors"
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
              className="bg-zinc-900/40 border border-dashed border-zinc-800 rounded-xl p-8 flex items-center justify-center"
            >
              <p className="text-zinc-500 text-center">
                More case studies in progress
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12"
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

          <p className="text-xl text-zinc-400 mb-12">
            Open to product roles, early-stage opportunities, and
            conversations about execution and delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:zayyarminthu4@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium hover:bg-white transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/Fezi-x"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-zinc-800 rounded-lg hover:bg-zinc-900/70 hover:border-zinc-700 transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/zayar-minthu-610307247/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-zinc-800 rounded-lg hover:bg-zinc-900/70 hover:border-zinc-700 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </a>

            <a
              href="https://x.com/ZayarMinthuW"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-zinc-800 rounded-lg hover:bg-zinc-900/70 hover:border-zinc-700 transition-colors group"
              aria-label="Twitter/X"
            >
              <Twitter className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </a>

            <a
              href="https://www.instagram.com/d.f3lix/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-zinc-800 rounded-lg hover:bg-zinc-900/70 hover:border-zinc-700 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}


